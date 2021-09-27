
module.exports = {
    post: {
        tags: ["User CRUD operations"], 
        description: "Create user", 
        operationId: "createUser", 
        parameters: [], 
        requestBody: {
            content: {
            
            "application/json": {
                schema: {
                $ref: "#/components/schemas/UserInput",
                },
            },
            },
        },
    
        responses: {
        
        201: {
            description: "user created successfully",
        },
        
        500: {
            description: "Server error",
            },
        },
    },
}