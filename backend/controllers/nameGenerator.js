const nameGeneratorLogic = require('../utils/nameGeneratorLogic');

/**
 * Generate business names based on user input
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.generateBusinessNames = async (req, res) => {
  try {
    const { industry, keywords, style, nameLength, count } = req.body;
    
    // Validate required fields
    if (!industry) {
      return res.status(400).json({
        success: false,
        message: 'Industry is required'
      });
    }
    
    // Parse count to number and ensure it's within limits
    const parsedCount = parseInt(count) || 5;
    const limitedCount = Math.min(Math.max(parsedCount, 1), 15);
    
    // Generate business names
    const generatedNames = nameGeneratorLogic.generateNames({
      industry,
      keywords: keywords || '',
      style: style || 'modern',
      nameLength: nameLength || 'medium',
      count: limitedCount
    });
    
    return res.status(200).json(generatedNames);
  } catch (error) {
    console.error('Error generating business names:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to generate business names'
    });
  }
}