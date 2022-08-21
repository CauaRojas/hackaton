export default function Student() {
    return(
        <form action='' method='post' onSubmit={(_) => _.preventDefault()} className={'flex flex-col gap-4'}>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='studentName'>Nome:</label>
                <input
                    type='text'
                    name='studentName'
                    id='studentName'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>

            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='studentEmail'>Email:</label>
                <input
                    type='email'
                    name='studentEmail'
                    id='studentEmail'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='studentCpf'>CPF:</label>
                <input
                    type='text'
                    name='studentCpf'
                    id='studentCpf'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='studentTelephone'>Telefone:</label>
                <input
                    type='text'
                    name='studentTelefone'
                    id='studentTelephone'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='studentCep'>CEP:</label>
                <input
                    type='text'
                    name='studentCep'
                    id='studentCep'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <div className='flex justify-between pr-8 -mb-8'>
                    <label htmlFor='studentStreet'>Logradouro:</label>
                    <label htmlFor='studentHouseNumber' className=''>N°:</label>
                </div>
                <br />
                <input
                    type='text'
                    name='studentStreet'
                    id='studentStreet'
                    className='inline-block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-96 mr-5'
                />
                <input
                    type='text'
                    name='studentHouseNumber'
                    id='studentHouseNumber'
                    className='inline-block bg-transparent border border-white border-x-0 border-t-0 w-16'
                />
            </div>
            <div className='text-left mt-8 text-2xl flex justify-between'>
                <label htmlFor='studentEssay'>Disciplina:</label>
                <select name="essays" id="essays" placeholder='Disciplinas' className='bg-gblack w-2/4'>
                    <option value="0" disabled>Disciplinas</option>
                    <option value="1">Programação</option>
                </select>
            </div>
            <div className='text-left mt-8 text-2xl flex justify-between'>
                <label htmlFor='studentSchool'>Escola:</label>
                <select name="schools" id="schools" placeholder='Escolas' className='bg-gblack w-2/4'>
                    <option value="0">Nenhuma</option>
                </select>
            </div>
            <div className='text-left mt-8 text-2xl flex justify-between'>
                <label htmlFor='studentTeacher'>Professor orientador:</label>
                <select name="teachers" id="teachers" placeholder='Professores' className='bg-gblack w-2/4'>
                    <option value="0">Nenhum</option>
                </select>
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='studentPassword'>Senha:</label>
                <input
                    type='password'
                    name='studentPassword'
                    id='studentPassword'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='studentConfirmPassword'>Confirmar senha:</label>
                <input
                    type='password'
                    name='studentConfirmPassword'
                    id='studentConfirmPassword'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'/>
            </div>
            <button type='submit' className='bg-gpink rounded-full text-5xl w-full mt-24 h-24 underline'>
                Cadastrar
            </button>
        </form>
    )
}