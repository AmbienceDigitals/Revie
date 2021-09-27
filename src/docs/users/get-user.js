module.exports = {
    get: {
        tags: ["User CRUD operations"],
        description: "Get user",
        operationId: "getUser",
        parameters: [
            {
                name: "username",
                in: "path",
                Schema: {
                    $ref: "#/components/schemas/userId"
                },
                required: true,
                description: "id of the user"
            },
        ],
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