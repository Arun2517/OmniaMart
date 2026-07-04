import "./DashboardCards.css";

function DashboardCards() {

  const cards = [

    {
      title: "Products",
      value: 25,
      icon: "📦",
    },

    {
      title: "Users",
      value: 108,
      icon: "👥",
    },

    {
      title: "Orders",
      value: 42,
      icon: "🛒",
    },

    {
      title: "Revenue",
      value: "₹2.45L",
      icon: "💰",
    },

  ];

  return (

    <div className="dashboard-cards">

      {cards.map((card) => (

        <div
          className="dashboard-card"
          key={card.title}
        >

          <span className="card-icon">
            {card.icon}
          </span>

          <h2>{card.value}</h2>

          <p>{card.title}</p>

        </div>

      ))}

    </div>

  );

}

export default DashboardCards;