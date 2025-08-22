# Gemini API Setup for Reyval Properties Chatbot

## Overview
The Reyval Properties chatbot has been enhanced to use Google's Gemini AI API for more intelligent and contextual responses. Currently, it's using a fallback system, but you can easily integrate the actual Gemini API.

## Current Implementation
- **Fallback System**: The chatbot currently uses an enhanced response system that simulates AI responses
- **Ready for API Integration**: The code structure is ready for Gemini API integration
- **Enhanced Responses**: More detailed and contextual responses for real estate queries

## Setting Up Gemini API

### 1. Get Gemini API Key
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

### 2. Update the Code
In `script.js`, replace the placeholder with your actual API key:

```javascript
let geminiApiKey = 'YOUR_ACTUAL_GEMINI_API_KEY_HERE';
```

### 3. Enable Gemini API Integration
Replace the `getGeminiResponse` function with this actual API integration:

```javascript
async function getGeminiResponse(userMessage) {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${geminiApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `You are a helpful real estate assistant for Reyval Properties, a luxury real estate company in Los Angeles. 
                        
                        Company Information:
                        - Name: Reyval Properties
                        - Phone: (323) 555-4821
                        - Email: reyvalproperties@gmail.com
                        - Address: 4821 Pacific Crest Ave, Los Angeles, CA 90017
                        - Services: Buying, selling, renting properties, cash offers, property management
                        - Specialties: Luxury properties, off-market deals, quick cash offers
                        
                        User Message: ${userMessage}
                        
                        Please provide a helpful, professional response related to real estate. Keep responses concise but informative. If the user asks about something not related to real estate, politely redirect them to real estate topics.`
                    }]
                }]
            })
        });

        const data = await response.json();
        
        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            return data.candidates[0].content.parts[0].text;
        } else {
            throw new Error('Invalid response format');
        }
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        // Fallback to enhanced response system
        return getFallbackResponse(userMessage);
    }
}

// Fallback response system (current implementation)
function getFallbackResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return "Hello! I'm your Reyval Properties AI assistant. I can help you with buying, selling, renting properties, property valuations, market insights, and more. How can I assist you today?";
    }
    // ... rest of your current response logic
}
```

## Features of the Enhanced Chatbot

### Current Capabilities
- **Real Estate Expertise**: Specialized knowledge in buying, selling, and renting
- **Company Information**: Provides accurate contact details and office hours
- **Market Insights**: Basic market information and trends
- **Service Guidance**: Helps users understand available services
- **Contact Collection**: Collects user information for follow-up

### Response Categories
1. **Greetings**: Welcoming and introduction
2. **Selling**: Cash offers, property evaluation, selling process
3. **Buying**: Property search, financing, market analysis
4. **Renting**: Available rentals, application process
5. **Valuation**: Property pricing and market analysis
6. **Market Trends**: Local real estate insights
7. **Contact Information**: Office details and hours
8. **Financing**: Loan options and pre-qualification
9. **Investment**: ROI analysis and investment properties

## Security Considerations

### API Key Protection
- **Never commit API keys to version control**
- **Use environment variables in production**
- **Implement rate limiting**
- **Monitor API usage**

### Production Deployment
```javascript
// Use environment variable
let geminiApiKey = process.env.GEMINI_API_KEY || '';

// Or load from secure configuration
let geminiApiKey = window.config?.GEMINI_API_KEY || '';
```

## Testing the Chatbot

### Test Scenarios
1. **Basic Greetings**: "Hello", "Hi there"
2. **Service Inquiries**: "I want to sell my house", "Looking to buy"
3. **Contact Requests**: "What's your phone number?", "Where are you located?"
4. **Market Questions**: "How's the market?", "What are property prices like?"
5. **Complex Queries**: "I need help with investment properties"

### Expected Behaviors
- **Quick Response**: 1-2 second response time
- **Contextual Answers**: Relevant to real estate and Reyval Properties
- **Professional Tone**: Business-appropriate language
- **Contact Collection**: Requests user information when needed

## Troubleshooting

### Common Issues
1. **API Key Invalid**: Check API key format and permissions
2. **Rate Limiting**: Implement delays between requests
3. **Network Errors**: Add retry logic and error handling
4. **Response Format**: Validate API response structure

### Debug Mode
Enable console logging for troubleshooting:

```javascript
const DEBUG_MODE = true;

if (DEBUG_MODE) {
    console.log('User message:', userMessage);
    console.log('API response:', data);
}
```

## Future Enhancements

### Planned Features
- **Multi-language Support**: Spanish and other languages
- **Voice Integration**: Speech-to-text and text-to-speech
- **Property Database**: Access to actual property listings
- **Appointment Scheduling**: Direct calendar integration
- **Lead Qualification**: Automated lead scoring

### Integration Opportunities
- **CRM Systems**: Salesforce, HubSpot integration
- **Property Platforms**: MLS, Zillow API integration
- **Payment Processing**: Stripe for application fees
- **Document Management**: Digital contract signing

## Support

For technical support or questions about the Gemini API integration:
- **Developer**: Check Google AI documentation
- **Real Estate**: Contact Reyval Properties team
- **API Issues**: Google AI Studio support

---

**Note**: This chatbot is designed for demonstration purposes. In production, ensure compliance with data privacy regulations and implement proper security measures.
