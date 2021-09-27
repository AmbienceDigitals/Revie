module.exports = {
    get: {
        tags: ["Review CRUD operations"],
        description: "Get Reviews",
        operationId: "getReviews",
        parameters: [],
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
            }
        }
    }
}