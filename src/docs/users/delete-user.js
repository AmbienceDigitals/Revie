module.exports = {
    delete: {
        tags: ["User CRUD operations"], 
        description: "Deleting a User", 
        operationId: "deleteUser", 
        parameters: [
            
            {
                name: "username", 
                in: "path", 
                schema: {
                    $ref: "#/components/schemas/userId", 
                },
                required: true, 
                description: "Deleting a  User", 
            },
        ],
        responses: {
            
            200: {
            description: "User deleted successfully",
            },
            
            404: {
            description: "User not found", 
            },
            
            500: {
            description: "Server error", 
            },
        },
    },
};