
module.exports = {
    components: {
        schemas: {
            // review id model 
            reviewId: {
                type: "string",
                description: "id of review",
                example: "1122erfg"
            },

            // review id model 
            userId: {
                type: "string",
                description: "id of user",
                example: "1122erfg"
            },

            // user  model
            User: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        description: "User identification number",
                        example: "byssCg"
                    },
                    firstName: {
                        type: "string",
                        description: "User's first name",
                        example: "blessing"
                    },
                    lastName: {
                        type: "string",
                        description: "User's last name",
                        example: "favour"
                    },
                    username: {
                        type: "string",
                        description: "User's username",
                        example: "adele01"
                    },
                    password: {
                        type: "string",
                        description: "User's password",
                        example: "Easygler87"
                    },
                    email: {
                        type: "string",
                        description: "User's email",
                        example: "adele01@gmail.com"
                    }

                }
            },

            // userInput model 
            UserInput: {
                type: "object",
                properties: {
                    firstName: {
                        type: "string",
                        description: "User's first name",
                        example: "Ebenezer",
                    },
                    lastName: {
                        type: "string",
                        description: "User's last name",
                        example: "idowu",
                    },
                    username: {
                        type: "string",
                        description: "User's username",
                        example: "Easydref07"
                    },

                    password: {
                        type: "string",
                        description: "User's username",
                        example: "Easydref07"
                    },
                    email: {
                        type: "string",
                        description: "User's email",
                        example: "Ebenezer@tahoo.com",
                    }
                }
            },

            // review model

            Review: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        description: "identification number of review",
                        example: "byssCg"
                    },
                    title: {
                        type: "string",
                        description: "Review title",
                        example: "Landlord"
                    },
                    review: {
                        type: "object",
                        description: "content of user review",
                        example: {
                            "text": "the review is here",
                            "video": null,
                            "image": null
                        }
                    },
                }
            },

            // Review Input model 
            ReviewInput: {
                type: "object",
                properties: {
                    title: {
                        type: "string",
                        description: "review's title",
                        example: "Easydref07"
                    },

                    review: {
                        type: "object",
                        description: "User's review",
                        example: {
                            'video': null,
                            'image': null,
                            'text': 'the landlady is nice'
                    }                    
                    }
                }
            },

            // Error model
            Error: {
                type: "object", 
                    properties: {
                        message: {
                            type: "string", 
                            description: "Error message", 
                            example: "Not found", 
                        },
                        internal_code: {
                            type: "string", 
                            description: "Error internal code",
                            example: "Invalid parameters",
                        },
                    }
        }
        }
    }
}