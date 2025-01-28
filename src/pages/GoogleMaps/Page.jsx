function GoogleMapsPage() {
  return (
    <div class="flex flex-col space-y-10 w-full">
      <input
        id="pac-input"
        class="w-3/4 mt-14 pl-10 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-[40px] text-black text-xl p-5"
        type="text"
        placeholder="Search "
        style={{ left: 0 }}
      />
      <div id="address"></div>
      <div id="map" class="w-full md:h-3/4 h-[50lvh]"></div>

      <div class="flex justify-around">
        <button
          id="sendbtn"
          class="bg-[#FA8836] rounded-[35px] w-[273px] h-[42px] mt-4 hover:bg-[#CF5600] border-[3px] border-[#FA8836] drop-shadow-md shadow-[#FA8836] hover:bg-transparent hover:border-[3px] hover:border-[#FA8836] hover:text-[#FA8836]"
        >
          Set Location
        </button>

        <button
          id="GetCurrent"
          class="bg-[#6555FF] rounded-[35px] w-[273px] h-[42px] mt-4 drop-shadow-md shadow-[#7163FF59] hover:bg-transparent hover:border-4 hover:border-[#4136A3] hover:text-[#4136A3]"
        >
          Get Current Location
        </button>
      </div>
    </div>
  );
}

export default GoogleMapsPage;
