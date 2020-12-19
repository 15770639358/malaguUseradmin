export const methodThree = [
    {
        modelName: 'authVetify',
        router: [
            {
                routerTs: 'user',
                routerName: 'UserController',
                method: [
                    {
                        methodName: 'getUserInfo'
                    },
                    {
                        methodName: 'getAllUser'
                    },
                    {
                        methodName: 'getAllUserAndRoles'
                    },
                    {
                        methodName: 'addUserRoles'
                    },
                    {
                        methodName: 'removeUserRole'
                    },
                    {
                        methodName: 'removeUser'
                    },
                    {
                        methodName: 'addUser'
                    },
                    {
                        methodName: 'getCountByUserName'
                    },
                    {
                        methodName: 'updatePassword'
                    }
                ]
            },
            {
                routerTs: 'role',
                routerName: 'roleController',
                method: [
                    {
                        methodName: 'getAllRole'
                    },
                    {
                        methodName: 'getAllRolesAndAuth'
                    },
                    {
                        methodName: 'addRole'
                    },
                    {
                        methodName: 'removeRoles'
                    },
                    {
                        methodName: 'addRoleAuth'
                    },
                    {
                        methodName: 'removeRoleAuth'
                    }
                ]
            },
            {
                routerTs: 'auth',
                routerName: 'authController',
                method: [
                    {
                        methodName: 'getAuthByRoleId'
                    },
                    {
                        methodName: 'getAllAuth'
                    }
                ]
            }
        ]
    }
]
