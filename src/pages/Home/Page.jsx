function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500">
      <a href="/signin" className="text-white">
        Sign In
      </a>
      <a href="/events" className="text-white">
        Events
      </a>
      <a href="/events/create" className="text-white">
        Create Event
      </a>
      <a href="/menus" className="text-white">
        Menus
      </a>
      <a href="/menus/create" className="text-white">
        Create Menu
      </a>
      <a href="/invites" className="text-white">
        Invites
      </a>
      <a href="/profile" className="text-white">
        Profile
      </a>
    </div>
  );
}

export default HomePage;
