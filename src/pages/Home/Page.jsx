function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500">
      <a href="/SignIn" className="text-white">
        Sign In
      </a>
      <a href="/Events" className="text-white">
        Events
      </a>
      <a href="/Events/create" className="text-white">
        Create Event
      </a>
    </div>
  );
}

export default HomePage;
