import { Meteor } from "meteor/meteor";
import { useState } from "react";

export const useErrorHandler = () => {
    const [error, setError] = useState<Meteor.Error | null>(null);

    const handleError = (e: unknown) => {
        console.error(e);
        if (e instanceof Meteor.Error) {
            setError(e);
        } else {
            setError(new Meteor.Error('Error', 'Unknown error'));
        }
    };

    const clearError = () => setError(null);

    return { error, setError, handleError, clearError };
};