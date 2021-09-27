module.exports = {
    get: {
        tags: ["Review CRUD operations"],
        description: "Get review",
        operationId: "getReview",
        parameters: [
            {
                name: "id",
                in: "path",
                Schema: {
                    $ref: "#/components/schemas/reviewId"
                },
                required: true,
                description: "id of the review"
            },
        ],
        responses : {
            200: {
                description: "successful",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Review"
                        }
                    }
                }
            }, 

            404: {
                description: "user not found",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Error"
                        }
                    }
                }
            }
        }
    }
}