export const Stats = ({tasks}) => {

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.status === "completed").length;
    const inProgressTasks = tasks.filter(task => task.status === "in progress").length;
    const unstartedTasks = tasks.filter(task => task.status === "unstarted").length;


    return <div>
        <p>stats</p>
        <div className="stats">
            <p>completed {completedTasks}/{totalTasks}</p>
            <p>in progress {inProgressTasks}/{totalTasks}</p>
            <p>unstarted {unstartedTasks}/{totalTasks}</p>
        </div>

    </div>
}