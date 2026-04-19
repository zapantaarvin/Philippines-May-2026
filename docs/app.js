const tripData = {
  title: "Jayson's Last Single Weekend",
  dateRange: "May 16 to May 18, 2026",
  groupSize: "8 people",
  homeBase: "Airbnb near Makati / Poblacion",
  style: "Fun, flexible, budget-aware",
  budget: {
    friday: "PHP 12,100-27,500",
    saturday: "PHP 31,800-63,900+",
    sunday: "PHP 3,000-6,500",
    total: "PHP 46,900-97,900+",
    perPerson: "PHP 5,860-12,240+",
  },
  dressGuide: [
    {
      label: "Casual",
      meaning:
        "Clean and presentable. Plain tee, polo, casual button-down, jeans, chinos, neat shorts, clean sneakers.",
      avoid: "No flip-flops, no tank tops, no sando, no gym shorts.",
    },
    {
      label: "Smart casual",
      meaning:
        "A bit more polished. Polo or button-down, jeans or chinos, clean sneakers or loafers.",
      avoid:
        "No flip-flops, no tank tops, no sando, no athletic shorts, no sloppy outfits.",
    },
  ],
  packing: [
    "Valid ID",
    "Cash and GCash/card",
    "Power bank",
    "Phone charger",
    "Comfortable shoes",
    "Light jacket for Tagaytay",
    "Extra shirt",
    "Basic meds",
    "Water or hydration sachets",
  ],
  overview: [
    {
      title: "Friday vibe",
      text: "Keep it simple: dinner, one live band slot to confirm, KTV at Music 21, then Airbnb drinks.",
    },
    {
      title: "Saturday vibe",
      text: "Early Tagaytay start, scenic midday walk, coffee stop, then the main nightlife block back in Makati.",
    },
    {
      title: "Sunday vibe",
      text: "Low-cost recovery: brunch, coffee, a short chill walk or mall stop, then head home.",
    },
  ],
  days: [
    {
      day: "Friday, May 16",
      subtitle: "Arrival + easy night",
      stops: [
        {
          time: "Afternoon / evening",
          title: "Check in + pregame at Airbnb",
          description: "Settle in, unpack, and keep the start of the trip light.",
          cost: "PHP 0-2,000",
          wear: "Casual",
          bring: "ID, wallet, cash/GCash, charger, extra shirt",
          links: [],
        },
        {
          time: "Dinner",
          title: "Dinner spot",
          description: "Still open for selection. Keep it casual and budget-friendly.",
          cost: "PHP 3,000-5,000",
          wear: "Casual",
          bring: "Cash/card",
          links: [],
        },
        {
          time: "Activity 1",
          title: "Live band stop: TBD",
          description:
            "Check events first, then pick the best lineup and location fit for the night.",
          cost: "PHP 2,500-6,000",
          wear: "Casual to smart casual",
          bring: "ID, phone, cash/card",
          links: [
            {
              label: "12 Monkeys",
              url: "https://www.tripadvisor.com/Restaurant_Review-g298453-d12542557-Reviews-12_Monkeys_Music_Hall_Pub-Pasig_Metro_Manila_Luzon.html",
            },
            {
              label: "Saguijo",
              url: "https://www.facebook.com/saGuijo.Cafe.Bar.Events/",
            },
            {
              label: "19 East Facebook",
              url: "https://www.facebook.com/19east/",
            },
            {
              label: "19 East info",
              url: "https://www.cybo.com/PH-biz/east_5y",
            },
            {
              label: "Bourbon Makati",
              url: "https://www.tripadvisor.com/Restaurant_Review-g298450-d26998780-Reviews-Bourbon_New_Orleans_Ph-Makati_Metro_Manila_Luzon.html",
            },
            {
              label: "Cowboy Grill",
              url: "https://www.tripadvisor.com/Restaurant_Review-g298573-d1751885-Reviews-COWBOY_GRILL-Manila_Metro_Manila_Luzon.html",
            },
          ],
        },
        {
          time: "Activity 2",
          title: "KTV at Music 21",
          description: "Main group activity for Friday night.",
          cost: "PHP 5,600-12,000",
          wear: "Casual",
          bring: "ID, power bank, cash/card",
          links: [
            {
              label: "Music 21",
              url: "https://www.music21plaza.ph/",
            },
          ],
        },
        {
          time: "After",
          title: "Back to Airbnb",
          description: "Drinks, chat, and keep the night under control before Saturday.",
          cost: "PHP 1,000-2,500",
          wear: "Comfortable",
          bring: "Water, chargers, snacks",
          links: [],
        },
      ],
    },
    {
      day: "Saturday, May 17",
      subtitle: "Tagaytay day + nightlife",
      stops: [
        {
          time: "8:00 AM",
          title: "Wake up + quick breakfast",
          description: "Hydrate, coffee, and get moving early.",
          cost: "PHP 800-2,000",
          wear: "Casual",
          bring: "Water, sunglasses, light jacket",
          links: [],
        },
        {
          time: "9:00 AM",
          title: "Depart for Tagaytay",
          description: "Use the car and budget for gas, tolls, and parking.",
          cost: "PHP 3,500-5,500",
          wear: "Casual",
          bring: "Water, shades, charger",
          links: [],
        },
        {
          time: "11:00 AM",
          title: "Lunch at Balay Dako",
          description: "Main Tagaytay meal stop.",
          cost: "PHP 8,000-12,800",
          wear: "Casual to smart casual",
          bring: "Cash/card, light jacket optional",
          links: [
            {
              label: "Balay Dako",
              url: "https://www.tripadvisor.com/Restaurant_Review-g317121-d8587297-Reviews-Balay_Dako-Tagaytay_Cavite_Province_Calabarzon_Region_Luzon.html",
            },
          ],
        },
        {
          time: "12:30 PM",
          title: "Crosswinds short walk",
          description: "Light walk, photos, cool air, then move on before the group gets drained.",
          cost: "PHP 0-500",
          wear: "Casual",
          bring: "Phone, sunglasses, light jacket",
          links: [
            {
              label: "Crosswinds official",
              url: "https://www.crosswindstagaytay.com/",
            },
            {
              label: "Google Maps",
              url: "https://www.google.com/maps/search/?api=1&query=Crosswinds+Tagaytay",
            },
          ],
        },
        {
          time: "2:00 PM",
          title: "Coffee at Bag of Beans - Charito",
          description: "Coffee, dessert, and a softer stop before heading back.",
          cost: "PHP 2,000-4,000",
          wear: "Casual",
          bring: "Cash/card",
          links: [],
        },
        {
          time: "3:30 PM",
          title: "Head back to Makati",
          description: "Travel block back to the Airbnb.",
          cost: "Included above",
          wear: "Casual",
          bring: "Water, charger",
          links: [],
        },
        {
          time: "6:00 PM",
          title: "Reset at Airbnb",
          description: "Shower, light dinner if needed, and change into night clothes.",
          cost: "PHP 1,500-3,500",
          wear: "Night outfit",
          bring: "Fresh shirt, deodorant, power bank",
          links: [],
        },
        {
          time: "9:30 PM",
          title: "Neon Nights",
          description: "Warm-up nightlife stop with bar-club energy.",
          cost: "PHP 6,000-12,000",
          wear: "Smart casual",
          bring: "ID, phone, cash/card",
          links: [
            {
              label: "Reviews / photos",
              url: "https://www.tripadvisor.com/Attraction_Review-g298450-d26242465-Reviews-Neon_Nights_Bar_Club-Makati_Metro_Manila_Luzon.html",
            },
            {
              label: "Google Maps",
              url: "https://www.google.com/maps/search/?api=1&query=5021+P+Burgos+St+Makati",
            },
          ],
        },
        {
          time: "11:30 PM or 12:00 AM",
          title: "Octopus",
          description: "Main club stop for the night.",
          cost: "PHP 8,000-20,000+",
          wear: "Smart casual",
          bring: "ID, phone, cash/card",
          links: [
            {
              label: "Octopus official",
              url: "https://www.octopusmakati.com/",
            },
            {
              label: "Google Maps",
              url: "https://www.google.com/maps/search/?api=1&query=5043+P+Burgos+St+Makati",
            },
          ],
        },
        {
          time: "Late night",
          title: "Kite Kebab",
          description: "Late food before heading back.",
          cost: "PHP 2,000-3,600",
          wear: "Casual",
          bring: "Cash",
          links: [
            {
              label: "Tripadvisor",
              url: "https://www.tripadvisor.com/Restaurant_Review-g298450-d9790224-Reviews-Kite_Kebab_Bar-Makati_Metro_Manila_Luzon.html",
            },
            {
              label: "Google Maps",
              url: "https://www.google.com/maps/search/?api=1&query=5772+Ebro+St.+Barangay+Poblacion+Makati",
            },
          ],
        },
      ],
    },
    {
      day: "Sunday, May 18",
      subtitle: "Cheap and easy recovery day",
      stops: [
        {
          time: "Morning",
          title: "Wake up + pack",
          description: "Slow start, shower, and get bags ready.",
          cost: "PHP 0",
          wear: "Casual",
          bring: "Packed bags, chargers, wallet",
          links: [],
        },
        {
          time: "Late morning",
          title: "Easy brunch",
          description: "Keep this flexible and low-pressure.",
          cost: "PHP 2,000-4,000",
          wear: "Casual",
          bring: "Cash/card",
          links: [],
        },
        {
          time: "Early afternoon",
          title: "Coffee + chill stop",
          description: "Short walk or mall hang at Power Plant, Greenbelt, or Ayala Triangle.",
          cost: "PHP 1,000-2,500",
          wear: "Casual",
          bring: "Charger, wallet, sunglasses",
          links: [],
        },
        {
          time: "Late afternoon",
          title: "Head home",
          description: "Easy wrap-up to the trip.",
          cost: "-",
          wear: "Travel casual",
          bring: "Everything packed",
          links: [],
        },
      ],
    },
  ],
};

function renderMeta() {
  const container = document.getElementById("hero-meta");
  const items = [
    { label: "Dates", value: tripData.dateRange },
    { label: "Crew", value: tripData.groupSize },
    { label: "Base", value: tripData.homeBase },
    { label: "Style", value: tripData.style },
  ];

  container.innerHTML = items
    .map(
      (item) => `
        <div class="meta-pill">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </div>
      `,
    )
    .join("");
}

function renderOverview() {
  const container = document.getElementById("overview-grid");
  container.innerHTML = tripData.overview
    .map(
      (item) => `
        <article class="overview-card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
}

function renderTimeline() {
  const container = document.getElementById("timeline");

  container.innerHTML = tripData.days
    .map(
      (day) => `
        <section class="day-block">
          <div class="day-header">
            <div>
              <p class="eyebrow">${day.day}</p>
              <h3>${day.subtitle}</h3>
            </div>
          </div>

          ${day.stops
            .map(
              (stop) => `
                <article class="timeline-stop">
                  <div class="stop-topline">
                    <span class="stop-time">${stop.time}</span>
                    <span class="stop-cost">${stop.cost}</span>
                  </div>
                  <h4>${stop.title}</h4>
                  <p>${stop.description}</p>
                  <div class="stop-meta">
                    <div>
                      <span>Wear</span>
                      <strong>${stop.wear}</strong>
                    </div>
                    <div>
                      <span>Bring</span>
                      <strong>${stop.bring}</strong>
                    </div>
                  </div>
                  ${
                    stop.links.length
                      ? `
                        <div class="stop-links">
                          ${stop.links
                            .map(
                              (link) =>
                                `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`,
                            )
                            .join("")}
                        </div>
                      `
                      : ""
                  }
                </article>
              `,
            )
            .join("")}
        </section>
      `,
    )
    .join("");
}

function renderBudget() {
  const container = document.getElementById("budget-card");
  const items = [
    ["Friday", tripData.budget.friday],
    ["Saturday", tripData.budget.saturday],
    ["Sunday", tripData.budget.sunday],
    ["Trip total", tripData.budget.total],
    ["Per person", tripData.budget.perPerson],
  ];

  container.innerHTML = `
    <div class="budget-grid">
      ${items
        .map(
          ([label, value]) => `
            <div class="budget-item">
              <span>${label}</span>
              <strong>${value}</strong>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderDressGuide() {
  const container = document.getElementById("dress-guide");
  container.innerHTML = `
    <div class="dress-grid">
      ${tripData.dressGuide
        .map(
          (item) => `
            <div class="dress-item">
              <span>${item.label}</span>
              <strong>${item.meaning}</strong>
              <p>${item.avoid}</p>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderPacking() {
  const container = document.getElementById("packing-list");
  container.innerHTML = tripData.packing.map((item) => `<li>${item}</li>`).join("");
}

renderMeta();
renderOverview();
renderTimeline();
renderBudget();
renderDressGuide();
renderPacking();
