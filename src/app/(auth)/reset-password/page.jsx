import React, { Suspense } from 'react';
import ResetPasswordFrom from './reset-password-from';

const ResetPassword = () => {
    return (
        <div>
           <p> Rest Password</p>
           <Suspense fallback='loading..'>
            <ResetPasswordFrom></ResetPasswordFrom>
           </Suspense>
        </div>
    );
};

export default ResetPassword;