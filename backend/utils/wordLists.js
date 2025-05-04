/**
 * Word lists for business name generation
 */

// Prefix words by style
exports.prefixesByStyle = {
    modern: [
      'Nova', 'Flux', 'Pixel', 'Echo', 'Quantum', 'Vibe', 'Spark', 'Fusion', 'Zenith', 'Pulse',
      'Vertex', 'Aero', 'Nexus', 'Epoch', 'Matrix', 'Axis', 'Prism', 'Synergy', 'Omni', 'Core'
    ],
    classic: [
      'Royal', 'Heritage', 'Noble', 'Grand', 'Premier', 'Empire', 'Legacy', 'Standard', 'United', 'Crown',
      'Capital', 'Elite', 'Prime', 'Trust', 'Merit', 'Excel', 'Supreme', 'Pinnacle', 'Guardian', 'Imperial'
    ],
    playful: [
      'Fizz', 'Buzz', 'Quirk', 'Whimsy', 'Pop', 'Zest', 'Giggle', 'Sprout', 'Spark', 'Jolly',
      'Cheer', 'Bliss', 'Wink', 'Snappy', 'Happy', 'Jumpy', 'Wonder', 'Merry', 'Sunny', 'Zippy'
    ],
    technical: [
      'Logic', 'Tech', 'Algo', 'Data', 'Cyber', 'Bit', 'Byte', 'Code', 'System', 'Net',
      'Cloud', 'Neural', 'Crypto', 'Digital', 'Virtual', 'Insight', 'Analyze', 'Signal', 'Compute', 'Develop'
    ],
    abstract: [
      'Eon', 'Aura', 'Zeta', 'Orbis', 'Astro', 'Nebula', 'Infinity', 'Beyond', 'Cosmos', 'Delta',
      'Enigma', 'Lumina', 'Magna', 'Octo', 'Plexus', 'Quasar', 'Solstice', 'Tempest', 'Utopia', 'Void'
    ]
  };
  
  // Suffix words by style
  exports.suffixesByStyle = {
    modern: [
      'Labs', 'Studios', 'Hive', 'Hub', 'Connect', 'Space', 'Innovations', 'Systems', 'Works', 'Platform',
      'Dynamics', 'Solutions', 'Ventures', 'Flow', 'Forge', 'Accelerate', 'Vision', 'Logic', 'Dash', 'Sync'
    ],
    classic: [
      'Group', 'Company', 'Partners', 'Associates', 'Firm', 'Enterprises', 'Inc', 'International', 'Corporation', 'Industries',
      'Limited', 'Services', 'Agency', 'Alliance', 'Co', 'Consultants', 'Institute', 'Guild', 'Society', 'Foundation'
    ],
    playful: [
      'Joy', 'Play', 'Fun', 'Magic', 'Blast', 'Delight', 'Bubble', 'Charm', 'Dash', 'Zone',
      'Bounce', 'Smile', 'Swirl', 'Twist', 'Adventure', 'Fantasy', 'Jungle', 'Safari', 'Quest', 'Party'
    ],
    technical: [
      'Systems', 'Tech', 'Solutions', 'Network', 'Software', 'Hardware', 'Innovations', 'Digital', 'Cyber', 'Data',
      'Engine', 'Analytics', 'AI', 'Web', 'Compute', 'Protocol', 'Interface', 'Logic', 'Development', 'Code'
    ],
    abstract: [
      'Vision', 'Essence', 'Spectrum', 'Element', 'Horizon', 'Paradigm', 'Zenith', 'Enigma', 'Transcend', 'Infinite',
      'Apex', 'Cascade', 'Ethereal', 'Synthesis', 'Orbit', 'Nova', 'Prism', 'Nexus', 'Quantum', 'Sublime'
    ]
  };
  
  // Connector words by style (for multi-word names)
  exports.connectorsByStyle = {
    modern: ['&', 'Plus', 'X', 'Pro', 'Go', 'Shift', 'Next', 'One', 'Up', 'Now'],
    classic: ['and', '&', 'of', 'for', 'with', 'by', 'to', 'on', 'at', 'in'],
    playful: ['n', '&', 'with', 'for', 'of', 'to', 'go', 'up', 'all', 'plus'],
    technical: ['Pro', 'Plus', 'Core', 'Ultra', 'Max', 'One', 'Prime', 'Link', 'Sync', 'Connect'],
    abstract: ['Zero', 'One', 'Alpha', 'Omega', 'Prime', 'Neo', 'Ultra', 'Hyper', 'Meta', 'Poly']
  };
  
  // Industry-specific words
  exports.industryWords = {
    technology: [
      'Tech', 'Digital', 'Data', 'Cyber', 'Cloud', 'Software', 'App', 'Web', 'Compute', 'Network',
      'Mobile', 'Smart', 'Crypto', 'AI', 'IoT', 'Dev', 'Interface', 'Link', 'Pixel', 'Bit'
    ],
    food: [
      'Spice', 'Flavor', 'Fresh', 'Taste', 'Gourmet', 'Kitchen', 'Organic', 'Bite', 'Savor', 'Feast',
      'Cuisine', 'Cook', 'Nourish', 'Palate', 'Table', 'Harvest', 'Garden', 'Broth', 'Plate', 'Aroma'
    ],
    fashion: [
      'Style', 'Mode', 'Trend', 'Thread', 'Couture', 'Chic', 'Luxe', 'Tailor', 'Vogue', 'Fabric', 
      'Design', 'Elegant', 'Attire', 'Dapper', 'Stitch', 'Sartorial', 'Allure', 'Glam', 'Boutique', 'Runway' 
    ],
    health: [
      'Vital', 'Wellness', 'Life', 'Care', 'Health', 'Nurture', 'Revive', 'Thrive', 'Balance', 'Renew',
      'Restore', 'Natural', 'Remedy', 'Relief', 'Healing', 'Boost', 'Glow', 'Vitality', 'Pure', 'Zen'
    ],
    finance: [
      'Capital', 'Wealth', 'Trust', 'Asset', 'Fund', 'Finance', 'Equity', 'Invest', 'Secure', 'Prosper',
      'Value', 'Growth', 'Profit', 'Venture', 'Cash', 'Money', 'Fiscal', 'Dividend', 'Portfolio', 'Reserve'
    ],
    education: [
      'Learn', 'Wisdom', 'Scholar', 'Academic', 'Study', 'Teach', 'Mentor', 'Mind', 'Knowledge', 'Educare',
      'Intellect', 'Skill', 'Develop', 'School', 'Academy', 'Institute', 'Class', 'Tutor', 'Discover', 'Grow'
    ],
    entertainment: [
      'Play', 'Show', 'Scene', 'Stage', 'Media', 'Studio', 'Cinema', 'Action', 'Fun', 'Amuse',
      'Perform', 'Cast', 'Drama', 'Melody', 'Vibe', 'Visual', 'Event', 'Enjoy', 'Live', 'Star'
    ],
    real_estate: [
      'Home', 'Property', 'Estate', 'Realty', 'Land', 'Space', 'Urban', 'Habitat', 'Abode', 'Domain',
      'Place', 'Living', 'House', 'Develop', 'Build', 'Construct', 'Residence', 'Villa', 'Suite', 'Manor'
    ],
    consulting: [
      'Consult', 'Advise', 'Guide', 'Expert', 'Strategy', 'Solve', 'Plan', 'Direct', 'Optimize', 'Coach',
      'Vision', 'Insight', 'Counsel', 'Mentor', 'Partner', 'Align', 'Survey', 'Analysis', 'Review', 'Method'
    ],
    default: [
      'Biz', 'Corp', 'Best', 'Top', 'Prime', 'Elite', 'First', 'Lead', 'Smart', 'Global',
      'Dynamic', 'Bright', 'Great', 'Active', 'Direct', 'Main', 'Choice', 'Select', 'Summit', 'Peak'
    ]
  };
  
  // Descriptive adjectives by style
  exports.adjectivesByStyle = {
    modern: [
      'Sleek', 'Innovative', 'Dynamic', 'Agile', 'Fresh', 'Smart', 'Bold', 'Nimble', 'Vibrant', 'Cutting-edge',
      'Progressive', 'Streamlined', 'Digital', 'Forward', 'Swift', 'Adaptive', 'Connected', 'Fluid', 'Intuitive', 'Savvy'
    ],
    classic: [
      'Reliable', 'Trusted', 'Traditional', 'Established', 'Distinguished', 'Reputable', 'Refined', 'Enduring', 'Timeless', 'Steadfast',
      'Dignified', 'Esteemed', 'Prestigious', 'Honorable', 'Authentic', 'Proven', 'Respected', 'Venerable', 'Solid', 'Quality'
    ],
    playful: [
      'Fun', 'Quirky', 'Lively', 'Vibrant', 'Cheerful', 'Bright', 'Jubilant', 'Peppy', 'Jolly', 'Spirited',
      'Whimsical', 'Playful', 'Joyful', 'Zippy', 'Bubbly', 'Bouncy', 'Merry', 'Perky', 'Zesty', 'Energetic'
    ],
    technical: [
      'Advanced', 'Precise', 'Strategic', 'Analytical', 'Efficient', 'Methodical', 'Optimal', 'Systematic', 'Specialized', 'Technical',
      'Integrated', 'Functional', 'Intelligent', 'Engineered', 'Logical', 'Calculated', 'Structured', 'Innovative', 'Automated', 'Smart'
    ],
    abstract: [
      'Ethereal', 'Profound', 'Infinite', 'Transcendent', 'Universal', 'Celestial', 'Sublime', 'Eternal', 'Enigmatic', 'Resonant',
      'Paradigm', 'Quintessential', 'Phenomenal', 'Essence', 'Visionary', 'Luminous', 'Sovereign', 'Boundless', 'Mythic', 'Arcane'
    ]
  };