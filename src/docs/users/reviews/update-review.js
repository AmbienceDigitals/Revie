module.exports = {
    put: {
        tags: ["Review CRUD operations"], 
        description: "Update review", 
        operationId: "updateReview", 
        parameters: [
            {
                name: "id", 
                in: "path", 
                schema: {
                $ref: "#/components/schemas/reviewId",
                },

                description: "Id of review to be updated", 
            },
        ],
        
        responses: {
            200: {
                description: "review updated successfully", 
            },
            404: {
                description: "review not found", 
            },
            500: {
                description: "Server error", 
            },
        },
    },
}