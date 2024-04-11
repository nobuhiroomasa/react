import {SubmitHandler, useForm} from "react-hook-form";
import { Link } from "react-router-dom";
type Inputs = {
    email:string;
    password: string;
    confirmPassword: string;
}
export default function Signup() {
    const{
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
    
    return (
        <form onClick = {handleSubmit(onSubmit)}>
            <div>
            <h1>Sign Up Page</h1>
            {/* "/" へのリンク */}
            <Link to="/">Homeに戻る</Link>
            </div>

            <div>
                <label htmlFor="email">Eメール:</label>
                <input type="email" placeholder = "example@test.com"
                {...register("email", {required: true})} />
                {errors.email && <p>Eメールは必須です</p>}
            </div>
            <div>
                <label htmlFor="password">パスワード:</label>
                <input type="password" 
                {...register("password", {required: true})} />
                {errors.email && <p>パスワードは必須です</p>}
            </div>
            <div>
                <label htmlFor="confirmPassword">パスワード再入力:</label>
                <input type="password"
                 {...register("confirmPassword", {required: true})}/>
                 {errors.email && <p>パスワードは必須です</p>}
            </div>
            <button type="submit">登録</button>
        </form>
    );
}
