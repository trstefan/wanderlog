export default function Page() {
  return (
    <main className="m-auto my-10 max-w-5xl space-y-5 px-3 text-center">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Place submitted
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Your place has been submitted and is pending approval
        </p>
        <img
          src="/job-submitted.svg"
          alt="Example Image"
          className="w-1/2 mx-auto"
        />
      </div>
    </main>
  );
}
