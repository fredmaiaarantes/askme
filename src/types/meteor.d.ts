declare module 'meteor/meteor' {
    export const Meteor: any;
}

declare module 'meteor/roles' {
    interface Role {
        _id: string;
        name: string;
    }
    
    export const Roles: {
        createRoleAsync(role: string): Promise<string>;
        getAllRoles(): {
            fetch(): Role[];
        };
    };
} 