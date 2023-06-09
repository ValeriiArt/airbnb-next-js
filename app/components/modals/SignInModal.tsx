'use client'

import { signIn } from 'next-auth/react';
import { useCallback, useState } from 'react';
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import useSignUpModal from '@/app/hooks/useSignUpModal';
import useSignInModal from '@/app/hooks/useSignInModal';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc'
import Modal from "./Modal";
import Heading from '../Heading';
import Input from '../inputs/Input';
import Button from '../Button';

const SignInModal = () => {
    const router = useRouter();
    const registerModal = useSignUpModal();
    const loginModal = useSignInModal();
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors, } } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = useCallback(async (data) => {
        setIsLoading(true);

        signIn('credentials', {
            ...data,
            redirect: false
        })
            .then(callback => {
                setIsLoading(false);

                if (callback?.ok) {
                    toast.success('Logged in');
                    router.refresh();
                    loginModal.onClose();
                }

                if (callback?.error) {
                    toast.error('')
                }
            })

    }, []);

    const toggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [registerModal, loginModal]);

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading
                title='Welcome back'
                subtitle='Login to your account!'
            />
            <Input
                id='email'
                label='Email'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id='password'
                type='password'
                label='Password'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    );

    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <hr />
            <Button
                outline
                label='Continue with Google'
                icon={FcGoogle}
                onClick={() => signIn('google')}
            />
            <Button
                outline
                label='Continue with Github'
                icon={AiFillGithub}
                onClick={() => signIn('github')}
            />
            <div className='text-neutral-500 text-center mt-4 font-light'>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <p>First time using Airbnb?</p>
                    <p
                        onClick={toggle}
                        className='text-neutral-800 cursor-pointer hover:underline'
                    >
                        Sign Up
                    </p>
                </div>
            </div>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title='Sing In'
            actionLabel='Continue'
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default SignInModal;