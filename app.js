import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant container
 *     - Restaurant Card
 *          - Image
 *          - Name of Res, Start, Rating, cuisines, delivey time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */ const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};


const resList = [
  {
    info: {
      id: "439189",
      name: "Kanak Durga ",
      cloudinaryImageId: "dnrzjcqjnhlshb4gzbzd",
      locality: "Ghoradhara",
      areaName: "Jhargram Locality",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "Chinese", "Snacks"],
      avgRating: 3.9,
      parentId: "114462",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-138daf96-58a3-4106-aa68-74545f1ad4f2",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kanak-durga-ghoradhara-jhargram-locality-jhargram-439189",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "438349",
      name: "Anna Purna",
      cloudinaryImageId: "jof8pevuzgsu8w256ncj",
      locality: "Jhargram College Rd",
      areaName: "Jhargram Locality",
      costForTwo: "₹250 for two",
      cuisines: ["Indian", "Salads"],
      avgRating: 4.3,
      parentId: "33817",
      avgRatingString: "4.3",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-138daf96-58a3-4106-aa68-74545f1ad4f2",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/anna-purna-college-rd-jhargram-locality-jhargram-438349",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "438358",
      name: "Kolkata Haji Biriyani",
      cloudinaryImageId: "ot73majz4hrh8mgrk3ct",
      locality: "Natundihi",
      areaName: "Jhargram Locality",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "Mughlai"],
      avgRating: 3.9,
      parentId: "264467",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-138daf96-58a3-4106-aa68-74545f1ad4f2",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kolkata-haji-biriyani-natundihi-jhargram-locality-jhargram-438358",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "438724",
      name: "Raj Food Plaza",
      cloudinaryImageId: "e1jjnsmfeiv9b3r9zw1b",
      locality: "Ghoradhara",
      areaName: "Jhargram Locality",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Ice Cream", "Beverages"],
      avgRating: 4,
      parentId: "264657",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-138daf96-58a3-4106-aa68-74545f1ad4f2",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/raj-food-plaza-ghoradhara-jhargram-locality-jhargram-438724",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "439052",
      name: "Spill The Beans",
      cloudinaryImageId: "xj4chrzkn2pssc3223nv",
      locality: "Kadam Kanan",
      areaName: "Jhargram Locality",
      costForTwo: "₹200 for two",
      cuisines: ["Beverages", "Chinese", "Pizzas", "Bakery"],
      avgRating: 3.7,
      parentId: "264861",
      avgRatingString: "3.7",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-138daf96-58a3-4106-aa68-74545f1ad4f2",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/spill-the-beans-kadam-kanan-jhargram-locality-jhargram-439052",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "596613",
      name: "The Green House Cafe",
      cloudinaryImageId: "vpvqlwwhtxpvdg9ylmf8",
      locality: "Ghoradhara",
      areaName: "Jhargram Locality",
      costForTwo: "₹150 for two",
      cuisines: ["Fast Food", "Burgers"],
      avgRating: 3.5,
      parentId: "209185",
      avgRatingString: "3.5",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-138daf96-58a3-4106-aa68-74545f1ad4f2",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/the-green-house-cafe-ghoradhara-jhargram-locality-jhargram-596613",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "438589",
      name: "Cafe Chai Sutta Bar",
      cloudinaryImageId: "mg9l84pwbiflbh5hp8v2",
      areaName: "Jhargram Locality",
      costForTwo: "₹200 for two",
      cuisines: ["Indian", "Chinese"],
      avgRating: 3.6,
      parentId: "264607",
      avgRatingString: "3.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 58,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "58 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-138daf96-58a3-4106-aa68-74545f1ad4f2",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/cafe-chai-sutta-bar-jhargram-locality-jhargram-438589",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "521506",
      name: "Kolkata Ashirwad Biryani",
      cloudinaryImageId: "bn4ynfwb9jlwijhvytho",
      locality: "Raghunatpur College More",
      areaName: "Jhargram Locality",
      costForTwo: "₹150 for two",
      cuisines: ["Biryani", "North Indian"],
      avgRating: 4.1,
      parentId: "119868",
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-138daf96-58a3-4106-aa68-74545f1ad4f2",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kolkata-ashirwad-biryani-raghunatpur-college-more-jhargram-locality-jhargram-521506",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "563443",
      name: "Marwari Food Delight",
      cloudinaryImageId: "q1aekmfsttxl3yxb7zlj",
      locality: "Bachurdoba",
      areaName: "Jhargram Locality",
      costForTwo: "₹150 for two",
      cuisines: ["North Indian", "Indian", "Snacks", "Thalis"],
      avgRating: 4.1,
      parentId: "339195",
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 21:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {
      context: "seo-data-138daf96-58a3-4106-aa68-74545f1ad4f2",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/marwari-food-delight-bachurdoba-jhargram-locality-jhargram-563443",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const RestaurantCard = (props) => {
  console.log(props);
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    props.resData.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">Search</div>
      <div className="res-container">
        {/* <RestaurantCard 
            resName="Meghna Foods"
            cuisine="Biriyani, North Indian"
            rating="4.4 starts"
            deliveryTime="30 mins"
            />

            <RestaurantCard 
            resName="KFC"
            cuisine="Pizza, Burger, International"
            rating="4.6 starts"
            deliveryTime="20 mins"
            /> */}

        {/* <RestaurantCard resData={resData} /> */}
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} />
        <RestaurantCard resData={resList[6]} /> */}
          
        {
          resList.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
        }

      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
