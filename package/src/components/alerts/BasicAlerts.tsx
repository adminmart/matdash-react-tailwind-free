import { Alert } from "flowbite-react"


const BasicAlerts = () => {
  return (
    <>
          <div className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full break-words">
          <h5 className="card-title mb-4">Alert</h5>
          <div className="grid grid-cols-12 gap-6">
            <div className="lg:col-span-6 col-span-12">
              <div className="flex flex-col gap-2">
              <Alert color="primary" className="rounded-md">
          <span className="font-medium">Primary</span> - A simple primary alert
        </Alert>

        <Alert color="secondary" className="rounded-md">
          <span className="font-medium">Secondary</span> A simple Secondary
          alert
        </Alert>

        <Alert color="success" className="rounded-md">
          <span className="font-medium">Success</span> A simple Success alert
        </Alert>

        <Alert color="info" className="rounded-md">
          <span className="font-medium">Info</span> A simple Info alert
        </Alert>

        <Alert color="warning" className="rounded-md">
          <span className="font-medium">Warning</span> A simple Warning alert
        </Alert>

        <Alert color="error" className="rounded-md">
          <span className="font-medium">Error</span> A simple Error alert
        </Alert>

        <Alert color="dark" className="rounded-md">
          <span className="font-medium">Dark</span> A simple Dark alert
        </Alert>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12">
                <div className="flex flex-col gap-2">
                <Alert color="lightprimary" className="rounded-md">
          <span className="font-medium">Primary</span> - A simple primary alert
        </Alert>

        <Alert color="lightsecondary" className="rounded-md">
          <span className="font-medium">Secondary</span> A simple Secondary
          alert
        </Alert>

        <Alert color="lightsuccess" className="rounded-md">
          <span className="font-medium">Success</span> A simple Success alert
        </Alert>

        <Alert color="lightinfo" className="rounded-md">
          <span className="font-medium">Info</span> A simple Info alert
        </Alert>

        <Alert color="lightwarning" className="rounded-md">
          <span className="font-medium">Warning</span> A simple Warning alert
        </Alert>

        <Alert color="lighterror" className="rounded-md">
          <span className="font-medium">Error</span> A simple Error alert
        </Alert>

        <Alert color="lightgray" className="rounded-md">
          <span className="font-medium">Light</span> A simple Light alert
        </Alert>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default BasicAlerts