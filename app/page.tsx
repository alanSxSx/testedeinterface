"use client";

import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { use } from 'react';

interface FormData {
  nome: string;
  email: string;
  confirmacaoEmail: string;
  senha: string;
  confirmacaoSenha: string;
  termos: boolean;
}

const schema = yup.object({
  nome: yup.string().required("O nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("O e-mail é obrigatório"),
  confirmacaoEmail: yup
    .string()
    .oneOf([yup.ref("email")], "Os e-mails não coincidem")
    .required("A confirmação de e-mail é obrigatória"),
  senha: yup
    .string()
		.required("A senha é obrigatória")
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .matches(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
    .matches(/[0-9]/, "A senha deve conter pelo menos um número"),
  confirmacaoSenha: yup
    .string()
    .oneOf([yup.ref("senha")], "As senhas não coincidem")
    .required("A confirmação da senha é obrigatória"),
  termos: yup
    .boolean()
    .oneOf([true], "Você deve aceitar os termos")
    .required("Você deve aceitar os termos"),
});

export default function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Dados enviados:", data);
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">Cadastro de Usuário</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome:</label>
            <input
              type="text"
              {...register("nome")}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
            />
            <p className="mt-1 text-sm text-red-500">{errors.nome?.message}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">E-mail:</label>
            <input
              type="email"
              {...register("email")}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
            />
            <p className="mt-1 text-sm text-red-500">{errors.email?.message}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirme o E-mail:</label>
            <input
              type="email"
              {...register("confirmacaoEmail")}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
            />
            <p className="mt-1 text-sm text-red-500">{errors.confirmacaoEmail?.message}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Senha:</label>
            <input
              type="password"
              {...register("senha")}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
            />
            <p className="mt-1 text-sm text-red-500">{errors.senha?.message}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirme a Senha:</label>
            <input
              type="password"
              {...register("confirmacaoSenha")}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
            />
            <p className="mt-1 text-sm text-red-500">{errors.confirmacaoSenha?.message}</p>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              {...register("termos")}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label className="ml-2 text-sm text-gray-700">Aceito os termos</label>
          </div>
          <p className="mt-1 text-sm text-red-500">{errors.termos?.message}</p>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
