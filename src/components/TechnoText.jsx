const TechnoText = (props) => {
    return (
        <div className="flex items-center justify-center py-0.3 px-1 bg-secondary border border-border rounded-md hover:bg-popover transition-all">
            <p className="text-secondary-foreground font-bold">{props.children}</p>
        </div>
    )
}

export default TechnoText;