import React from 'react';
import { Usuario } from '@/core/model/Usuario';
import InputTexto from '../shared/InputTexto';

export interface FormularioUsuarioProps {
  usuario: Partial<Usuario>;
  onChange: (usuario: Partial<Usuario>) => void;
  salvar: () => void;
  cancelar: () => void;
}

const FormularioUsuario: React.FC<FormularioUsuarioProps> = ({ usuario, onChange,salvar,cancelar }) => {
  return (
    <div className='flex flex-col gap-5'>
      <InputTexto
        label='Nome'
        type='text'
        value={usuario.nome}
        onChange={(e) => onChange?.({ ...usuario, nome: e.target.value })}
      />
      <InputTexto
        label='E-mail'
        type='email'
        value={usuario.email}
        onChange={(e) => onChange?.({ ...usuario, email: e.target.value })}
      />
      <InputTexto
        label='Senha'
        type='password'
        value={usuario.senha}
        onChange={(e) => onChange?.({ ...usuario, senha: e.target.value })}
      />
      <div className='flex gap-5'>
        <button className='bg-blue-500 px-4 py-2 rounded-md' onClick={salvar}>Salvar</button>
        <button className='bg-zinc-500 px-4 py-2 rounded-md' onClick={cancelar}>Cancelar</button>
      </div>
    </div>
  );
};

export default FormularioUsuario;
