
module.exports = {
    post: {
        tags: ["Review CRUD operations"], 
        description: "Create Review", 
        operationId: "createReview", 
        parameters: [], 
        requestBody: {
            content: {
            
            "application/json": {
                schema: {
                $ref: "#/components/schemas/ReviewInput",
                },
                
            },
            },
        },
    
        responses: {
        
        201: {
            description: "Review created successfully",
        },
        
        500: {
            description: "Server error",
            },
        },
    },
}