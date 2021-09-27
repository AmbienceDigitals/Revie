module.exports = {
    get: {
        tags: ["User CRUD operations"],
        description: "Get users",
        operationId: "getUsers",
        parameters: [],
        responses : {
            200: {
                description: "successful",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/User"
                        }
                    }
                }
            }
        }
    }
}