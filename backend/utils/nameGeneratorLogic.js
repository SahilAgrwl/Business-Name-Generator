const wordLists = require('./wordLists');

/**
 * Main function to generate business names
 * @param {Object} options - Options for name generation
 * @param {string} options.industry - Industry of the business
 * @param {string} options.keywords - User provided keywords (comma separated)
 * @param {string} options.style - Style of names (modern, classic, playful, technical, abstract)
 * @param {string} options.nameLength - Length preference (short, medium, long)
 * @param {number} options.count - Number of names to generate
 * @returns {Array} Array of generated business name objects
 */
exports.generateNames = ({ industry, keywords, style, nameLength, count }) => {
  // Parse keywords into an array
  const keywordsList = keywords
    .split(',')
    .map(k => k.trim())
    .filter(k => k.length > 0);

  // Get industry-specific words
  const industryKey = getIndustryKey(industry);
  const industrySpecificWords = wordLists.industryWords[industryKey] || wordLists.industryWords.default;
  
  // Get style-specific word lists
  const prefixes = wordLists.prefixesByStyle[style] || wordLists.prefixesByStyle.modern;
  const suffixes = wordLists.suffixesByStyle[style] || wordLists.suffixesByStyle.modern;
  const connectors = wordLists.connectorsByStyle[style] || wordLists.connectorsByStyle.modern;
  const adjectives = wordLists.adjectivesByStyle[style] || wordLists.adjectivesByStyle.modern;

  // Prepare word pools for name generation
  const wordPools = {
    industryWords: [...industrySpecificWords],
    prefixes: [...prefixes],
    suffixes: [...suffixes],
    connectors: [...connectors],
    adjectives: [...adjectives],
    keywords: [...keywordsList]
  };

  // Generate names based on nameLength preference
  const names = [];
  const usedNames = new Set(); // To avoid duplicates
  
  // Try to generate unique names (up to a reasonable attempt limit)
  const maxAttempts = count * 3;
  let attempts = 0;
  
  while (names.length < count && attempts < maxAttempts) {
    attempts++;
    
    let name;
    // Use different strategies based on length preference
    switch (nameLength) {
      case 'short':
        name = generateShortName(wordPools);
        break;
      case 'long':
        name = generateLongName(wordPools);
        break;
      case 'medium':
      default:
        name = generateMediumName(wordPools);
        break;
    }
    
    // Clean up and format the name
    const formattedName = formatBusinessName(name);
    
    // Add name if it's unique
    if (!usedNames.has(formattedName)) {
      usedNames.add(formattedName);
      
      names.push({
        businessName: formattedName,
        description: generateDescription(formattedName, industry, style),
        rating: generateRating()
      });
    }
  }
  
  return names;
};

/**
 * Generate a short business name (1-2 words)
 * @param {Object} wordPools - Word pools to select from
 * @returns {string} Generated name
 */
function generateShortName(wordPools) {
  const strategies = [
    // Strategy 1: Prefix + Industry word
    () => {
      const prefix = getRandomElement(wordPools.prefixes);
      const industryWord = getRandomElement(wordPools.industryWords);
      return `${prefix}${industryWord}`;
    },
    
    // Strategy 2: Keyword (if available) or Industry word
    () => {
      const word = wordPools.keywords.length > 0 
        ? getRandomElement(wordPools.keywords) 
        : getRandomElement(wordPools.industryWords);
      return word;
    },
    
    // Strategy 3: Adjective + Industry word
    () => {
      const adj = getRandomElement(wordPools.adjectives);
      const industryWord = getRandomElement(wordPools.industryWords);
      return `${adj} ${industryWord}`;
    },
    
    // Strategy 4: Industry word + Suffix
    () => {
      const industryWord = getRandomElement(wordPools.industryWords);
      const suffix = getRandomElement(wordPools.suffixes);
      return `${industryWord} ${suffix}`;
    }
  ];
  
  return executeRandomStrategy(strategies);
}

/**
 * Generate a medium-length business name (2-3 words)
 * @param {Object} wordPools - Word pools to select from
 * @returns {string} Generated name
 */
function generateMediumName(wordPools) {
  const strategies = [
    // Strategy 1: Prefix + Industry word + Suffix
    () => {
      const prefix = getRandomElement(wordPools.prefixes);
      const industryWord = getRandomElement(wordPools.industryWords);
      const suffix = getRandomElement(wordPools.suffixes);
      return `${prefix} ${industryWord} ${suffix}`;
    },
    
    // Strategy 2: Adjective + Keyword/Industry word + Suffix
    () => {
      const adj = getRandomElement(wordPools.adjectives);
      const mainWord = wordPools.keywords.length > 0 
        ? getRandomElement(wordPools.keywords) 
        : getRandomElement(wordPools.industryWords);
      const suffix = getRandomElement(wordPools.suffixes);
      return `${adj} ${mainWord} ${suffix}`;
    },
    
    // Strategy 3: Adjective + Industry word + Connector + Keyword
    () => {
      const adj = getRandomElement(wordPools.adjectives);
      const industryWord = getRandomElement(wordPools.industryWords);
      const connector = getRandomElement(wordPools.connectors);
      const keyword = wordPools.keywords.length > 0 
        ? getRandomElement(wordPools.keywords) 
        : getRandomElement(wordPools.industryWords);
      return `${adj} ${industryWord} ${connector} ${keyword}`;
    }
  ];
  
  return executeRandomStrategy(strategies);
}

/**
 * Generate a long business name (3+ words)
 * @param {Object} wordPools - Word pools to select from
 * @returns {string} Generated name
 */
function generateLongName(wordPools) {
  const strategies = [
    // Strategy 1: Prefix + Adjective + Industry word + Suffix
    () => {
      const prefix = getRandomElement(wordPools.prefixes);
      const adj = getRandomElement(wordPools.adjectives);
      const industryWord = getRandomElement(wordPools.industryWords);
      const suffix = getRandomElement(wordPools.suffixes);
      return `${prefix} ${adj} ${industryWord} ${suffix}`;
    },
    
    // Strategy 2: Adjective + Industry word + Connector + Keyword + Suffix
    () => {
      const adj = getRandomElement(wordPools.adjectives);
      const industryWord = getRandomElement(wordPools.industryWords);
      const connector = getRandomElement(wordPools.connectors);
      const keyword = wordPools.keywords.length > 0 
        ? getRandomElement(wordPools.keywords) 
        : getRandomElement(wordPools.prefixes);
      const suffix = getRandomElement(wordPools.suffixes);
      return `${adj} ${industryWord} ${connector} ${keyword} ${suffix}`;
    },
    
    // Strategy 3: Prefix + Industry word + Connector + Adjective + Keyword
    () => {
      const prefix = getRandomElement(wordPools.prefixes);
      const industryWord = getRandomElement(wordPools.industryWords);
      const connector = getRandomElement(wordPools.connectors);
      const adj = getRandomElement(wordPools.adjectives);
      const keyword = wordPools.keywords.length > 0 
        ? getRandomElement(wordPools.keywords) 
        : getRandomElement(wordPools.industryWords);
      return `${prefix} ${industryWord} ${connector} ${adj} ${keyword}`;
    }
  ];
  
  return executeRandomStrategy(strategies);
}

/**
 * Map user industry input to available industry keys
 * @param {string} industry - User inputted industry
 * @returns {string} Matching industry key or 'default'
 */
function getIndustryKey(industry) {
  // Convert industry to lowercase for case-insensitive matching
  const lowercaseIndustry = industry.toLowerCase();
  
  // Map common industry terms to our keys
  const industryMap = {
    'tech': 'technology',
    'software': 'technology',
    'it': 'technology',
    'computers': 'technology',
    'digital': 'technology',
    
    'food': 'food',
    'restaurant': 'food',
    'cuisine': 'food',
    'catering': 'food',
    'bakery': 'food',
    'cafe': 'food',
    
    'fashion': 'fashion',
    'clothing': 'fashion',
    'apparel': 'fashion',
    'style': 'fashion',
    'design': 'fashion',
    
    'health': 'health',
    'wellness': 'health',
    'fitness': 'health',
    'medical': 'health',
    'healthcare': 'health',
    
    'finance': 'finance',
    'financial': 'finance',
    'banking': 'finance',
    'investment': 'finance',
    'accounting': 'finance',
    
    'education': 'education',
    'learning': 'education',
    'teaching': 'education',
    'training': 'education',
    'school': 'education',
    
    'entertainment': 'entertainment',
    'media': 'entertainment',
    'film': 'entertainment',
    'music': 'entertainment',
    'gaming': 'entertainment',
    
    'real estate': 'real_estate',
    'property': 'real_estate',
    'housing': 'real_estate',
    'realty': 'real_estate',
    
    'consulting': 'consulting',
    'consultant': 'consulting',
    'advice': 'consulting',
    'business services': 'consulting',
  };
  
  // Check if industry matches any of our mapped terms
  for (const [term, key] of Object.entries(industryMap)) {
    if (lowercaseIndustry.includes(term)) {
      return key;
    }
  }
  
  // Check if industry directly matches one of our available industry keys
  const availableIndustries = Object.keys(wordLists.industryWords);
  if (availableIndustries.includes(lowercaseIndustry)) {
    return lowercaseIndustry;
  }
  
  // Default to 'default' industry if no match is found
  return 'default';
}

/**
 * Execute a randomly selected strategy from the given list
 * @param {Array<Function>} strategies - List of strategy functions
 * @returns {string} Result of the executed strategy
 */
function executeRandomStrategy(strategies) {
  const randomIndex = Math.floor(Math.random() * strategies.length);
  const strategy = strategies[randomIndex];
  return strategy();
}

/**
 * Get a random element from an array
 * @param {Array} array - Array to select from
 * @returns {*} Random element from the array
 */
function getRandomElement(array) {
  if (!array || array.length === 0) return '';
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

/**
 * Format business name for consistency
 * @param {string} name - Raw business name
 * @returns {string} Formatted business name
 */
function formatBusinessName(name) {
  // Split by spaces
  const words = name.split(' ').filter(word => word.trim().length > 0);
  
  // Capitalize each word
  const capitalizedWords = words.map(word => {
    // Skip capitalizing connectors like "and", "of", "for", etc. if they're not at the beginning
    const lowerCaseConnectors = ['and', 'of', 'for', 'with', 'by', 'the', 'in', 'on', 'at'];
    if (lowerCaseConnectors.includes(word.toLowerCase()) && words.indexOf(word) !== 0) {
      return word.toLowerCase();
    }
    
    // Handle special cases like "iPhone" or "eBay" that start with lowercase
    const specialCases = ['i', 'e', 'a'];
    if (word.length > 1 && specialCases.includes(word[0].toLowerCase()) && 
        word[1] === word[1].toUpperCase()) {
      return word;
    }
    
    // Regular capitalization
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  
  // Join words back together
  return capitalizedWords.join(' ');
}

/**
 * Generate a description for the business name
 * @param {string} name - The business name
 * @param {string} industry - The business industry
 * @param {string} style - The name style
 * @returns {string} A description for the business name
 */
function generateDescription(name, industry, style) {
  const styleDescriptions = {
    modern: 'modern, innovative',
    classic: 'established, traditional',
    playful: 'creative, fun',
    technical: 'professional, precise',
    abstract: 'unique, conceptual'
  };
  
  const styleDesc = styleDescriptions[style] || styleDescriptions.modern;
  
  const templates = [
    `A ${styleDesc} name that represents excellence in the ${industry} industry.`,
    `This ${styleDesc} name conveys trust and quality for your ${industry} business.`,
    `Perfect for a ${industry} company aiming to establish a ${styleDesc} brand identity.`,
    `A memorable ${styleDesc} name that will help your ${industry} business stand out.`,
    `This name reflects a ${styleDesc} approach to ${industry} services.`,
    `A powerful ${styleDesc} name that captures the essence of your ${industry} business.`,
    `This name suggests reliability and innovation in the ${industry} sector.`,
    `A distinctive ${styleDesc} name that customers in the ${industry} market will remember.`
  ];
  
  return getRandomElement(templates);
}

/**
 * Generate a random rating between 3.5 and 5.0
 * @returns {number} - A rating value
 */
function generateRating() {
  // Generate a rating between 3.5 and 5.0
  const min = 3.5;
  const max = 5.0;
  const rating = min + Math.random() * (max - min);
  
  // Round to one decimal place
  return Math.round(rating * 10) / 10;
}