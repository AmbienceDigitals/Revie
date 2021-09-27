module.exports = {
    delete: {
        tags: ["Review CRUD operations"], 
        description: "Deleting a Review", 
        operationId: "deleteReview", 
        parameters: [
            
            {
                name: "id", 
                in: "path", 
                schema: {
                    $ref: "#/components/schemas/reviewId", 
                },
                required: true, 
                description: "Deleting a  Review", 
            },
        ],
        responses: {
            
            200: {
            description: "Review deleted successfully",
            },
            
            404: {
            description: "Review not found", 
            },
            
            500: {
            description: "Server error", 
            },
        },
    },
};