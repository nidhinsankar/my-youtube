

let lists = ['all','gaming','music','war thunder','mixes','tom cruise','gadgets',"films",'laptops','cars','pop music','recently uploaded']

const Button = ({name}) => {

    return (
        <div className="bg-slate-300 py-2 px-5 text-center m-3 rounded-lg">{name}</div>
    )
}

const ButtonList = () => {

    return (
        <div className="flex">
            {lists.map(name => (
                <Button key={name} name={name} />
            ))}
        </div>
    )
}
export default ButtonList