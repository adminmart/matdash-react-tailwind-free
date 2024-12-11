import { Link } from "react-router";

const DailyActivity = () => {

  const ActivitySteps = [
    {
      Time: "09:46",
      action: "Payment received from John Doe of $385.90",
      color: "bg-primary",
      line: "h-full w-px bg-border",
    },
    {
      Time: "09:46",
      action: "New sale recorded",
      id: "#ML-3467",
      color: "bg-warning",
      line: "h-full w-px bg-border",
    },
    {
      Time: "09:46",
      action: "Payment was made of $64.95 to Michael",
      color: "bg-warning",
      line: "h-full w-px bg-border",
    },
    {
      Time: "09:46",
      action: "New sale recorded",
      id: "#ML-3467",
      color: "bg-secondary",
      line: "h-full w-px bg-border",
    },
    {
      Time: "09:46",
      action: "Project meeting",
      color: "bg-error",
      line: "h-full w-px bg-border",
    },
    {
      Time: "09:46",
      action: "Payment received from John Doe of $385.90",
      color: "bg-primary"
    },

    
  ];
  return (
    <>
      <div className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full break-words">
        <h5 className="card-title mb-6">Daily activities</h5>

        <div className="flex flex-col mt-2">
          <ul>
            {ActivitySteps.map((item, index) => {
              return (
                <li key={index}>
                  <div className="flex gap-4 min-h-16">
                    <div className="">
                      <p>{item.Time}</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className={`rounded-full ${item.color} p-1.5 w-fit`}></div>
                      <div className={`${item.line}`}></div>
                    </div>
                    <div className="">
                      <p className="text-dark text-start">{item.action}</p>
                      <Link to="#" className="text-blue-700">
                        {item.id}
                      </Link>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DailyActivity;
