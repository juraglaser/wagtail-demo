"use strict";

angular.module("docdoc")
    .constant("AppCfg", {

    urlRoot: ""

});

angular.module("docdoc")
    .value("AppGlobals", {

    // catalog of globally available variables

});

angular.module("docdoc")
    .factory("Search", [
        "$http", "$q", "AppGlobals", "AppCfg", function SearchFactory(
         $http,   $q,   AppGlobals,   AppCfg) {

    return {
        getResults: function(config) {
            var dfd = $q.defer(),
                providers = docDocDemoData.providers;

            if (!angular.isObject( config.filters )) {
                dfd.reject();
            }
            else {
                if (angular.isArray( config.filters["provider"] ) && config.filters["provider"].length > 0) {
                    var filteredResult = [];
                    for (var i=0; i<providers.length; i++) {
                        if ( config.filters["provider"].indexOf( providers[i]["typeEn"] ) >= 0 ) {
                            filteredResult.push( providers[i] );
                        }
                    }
                    providers = filteredResult;
                }
                if (angular.isArray( config.filters["location"] ) && config.filters["location"].length > 0) {
                    var filteredResult = [];
                    for (var i=0; i<providers.length; i++) {
                        if ( config.filters["location"].indexOf( providers[i]["country"] ) >= 0 ) {
                            filteredResult.push( providers[i] );
                        }
                    }
                    providers = filteredResult;
                }

                dfd.resolve({
                    data: {
                        providers: providers.slice(0, 10),
                        facets: docDocDemoData.facets
                    },
                    headers: function(headerName) {
                        return "";
                    },
                    config: config,
                    status: 200,
                    statusText: "Success"
                });
            }

            return dfd.promise;
        }
    };

}]);

angular.module("docdoc")
    .factory("Provider", [
        "$http", "AppGlobals", "AppCfg", function ProviderFactory(
         $http,   AppGlobals,   AppCfg) {

    return {
        getProvider: function(config) {
            return $http({
                url: AppCfg["urlRoot"] + "/provider",
                method: "GET"
            });
        }
    };

}]);

angular.module("docdoc")
    .factory("Utils", function UtilsFactory() {

    return {
        getIndexByGuid: function(guid, array, guidKey) {
            if ( !angular.isNumber(guidKey) && !angular.isString(guidKey) )
                guidKey = "guid";
            for (var i=0; i<array.length; i++) {
                if (typeof array[i] !== "undefined" && typeof array[i][guidKey] !== "undefined"
                    && array[i][guidKey] == guid)
                return i;
            }
            return -1;
        },
        getElementByGuid: function(guid, array, guidKey) {
            if ( !angular.isNumber(guidKey) && !angular.isString(guidKey) )
                guidKey = "guid";
            for (var i=0; i<array.length; i++) {
                if (typeof array[i] !== "undefined" && typeof array[i][guidKey] !== "undefined"
                    && array[i][guidKey] == guid)
                return array[i];
            }
            return null;
        },
        parseJSON: function(json) {
            if (typeof JSON != "undefined" && typeof JSON.parse == "function") {
                return JSON.parse( json );
            }
            else if (typeof jQuery != "undefined") {
                return jQuery.parseJSON( json );
            }
            else {
                return "could not parse JSON";
            }
        },
        stringifyJSON: function(json) {
            if (typeof JSON != "undefined" && typeof JSON.stringify == "function") {
                return JSON.stringify( json );
            }
            else {
                return "could not stringify JSON";
            }
        }
    };
});

/* BEGIN mock data */
var docDocDemoData = {
    providers: [
        {
            name: "Dr. Nadisha Rajan",
            typeEn: "Doctor",
            cityCountryNameEn: "Singapore",
            country: "Singapore",
            profilePath: "#",
            thumbImgUrl: "doctor-avatar.png",
            languages: "English, Malay"

        },
        {
            name: "Dr. Eric Silvio Chong",
            typeEn: "Doctor",
            cityCountryNameEn: "Singapore",
            country: "Singapore",
            profilePath: "#",
            thumbImgUrl: "doctor-avatar.png",
            languages: "English, Mandarin"

        },
        {
            name: "Dr. Yongyutt Watcharadun",
            typeEn: "Doctor",
            cityCountryNameEn: "Bangkok, Thailand",
            country: "Thailand",
            profilePath: "#",
            thumbImgUrl: "doctor-avatar.png",
            languages: "English, Thai"

        },
        {
            name: "Dr. Orawan Kitchawengkul",
            typeEn: "Doctor",
            cityCountryNameEn: "Bangkok, Thailand",
            country: "Thailand",
            profilePath: "#",
            thumbImgUrl: "doctor-avatar.png",
            languages: "English, Thai"

        },
        {
            name: "Dr. Nayna Patel",
            typeEn: "Doctor",
            cityCountryNameEn: "Punjab, India",
            country: "India",
            profilePath: "#",
            thumbImgUrl: "doctor-avatar.png",
            languages: "English, Gujarti, Hindi"

        },
        {
            name: "Dr. Anand Kumar",
            typeEn: "Doctor",
            cityCountryNameEn: "Navi Mumbai, India",
            country: "India",
            profilePath: "#",
            thumbImgUrl: "doctor-avatar.png",
            languages: "English, Gujarti, Hindi, Marathi, Tamil"

        },
        {
            name: "Dr. Catherine V. Lim",
            typeEn: "Doctor",
            cityCountryNameEn: "Quezon City, Philippines",
            country: "Philippines",
            profilePath: "#",
            thumbImgUrl: "doctor-avatar.png",
            languages: "English, Tagalog"

        },
        {
            name: "Dr. Sidney Cu",
            typeEn: "Doctor",
            cityCountryNameEn: "Manila, Philippines",
            country: "Philippines",
            profilePath: "#",
            thumbImgUrl: "doctor-avatar.png",
            languages: "English, Fookien, Tagalog"

        },
        {
            name: "Dr. Susan Jane Jamieson",
            typeEn: "Doctor",
            cityCountryNameEn: "Hong Kong",
            country: "Hong Kong",
            profilePath: "#",
            thumbImgUrl: "doctor-avatar.png",
            languages: "Cantonese, English, French, Spanish"

        },
        {
            name: "Dr. Seung Jong Lee",
            typeEn: "Doctor",
            cityCountryNameEn: "Seoul, South Korea",
            country: "Seoul, South Korea",
            profilePath: "#",
            thumbImgUrl: "doctor-avatar.png",
            languages: ""

        },
        {
            name: "Dr. Wong Nan-Yaw",
            typeEn: "Doctor",
            cityCountryNameEn: "SINGAPORE",
            country: "Singapore",
            profilePath: "#",
            thumbImgUrl: "doctor-avatar.png",
            languages: "English, Hokkien, Mandarin"

        },
        {
            name: "Dr. Mukund H. Doshi",
            typeEn: "Doctor",
            cityCountryNameEn: "Chennai, India",
            country: "India",
            profilePath: "#",
            thumbImgUrl: "doctor-avatar.png",
            languages: "Cantonese, English, Hindi, Hokkien, Malay, Mandarin, Urdu"

        },
        {
            name: "Centre for Foot and Ankle Surgery (Mount Elizabeth Hospital)",
            typeEn: "Clinic",
            cityCountryNameEn: "Singapore",
            country: "Singapore",
            profilePath: "#",
            thumbImgUrl: "clinic-avatar.png",
            languages: "Bahasa Indonesia, English, Mandarin, Tamil"

        },
        {
            name: "ESC Cardiovascular & Medicine Clinic",
            typeEn: "Clinic",
            cityCountryNameEn: "Singapore",
            country: "Singapore",
            profilePath: "#",
            thumbImgUrl: "clinic-avatar.png",
            languages: "Bahasa Indonesia, Bahasa Melayu, English, Interpreters can be arranged for other languages, Mandarin"

        },
        {
            name: "Klinik Pergigian Tan",
            typeEn: "Clinic",
            cityCountryNameEn: "Selangor, Malaysia",
            country: "Malaysia",
            profilePath: "#",
            thumbImgUrl: "clinic-avatar.png",
            languages: "Cantonese, English, Malay"

        },
        {
            name: "Promjai Dental Clinic Phuket",
            typeEn: "Clinic",
            cityCountryNameEn: "Phuket, Thailand",
            country: "Thailand",
            profilePath: "#",
            thumbImgUrl: "clinic-avatar.png",
            languages: "English, German, Japanese"

        },
        {
            name: "Mira Healthcare",
            typeEn: "Clinic",
            cityCountryNameEn: "Chennai, India",
            country: "India",
            profilePath: "#",
            thumbImgUrl: "clinic-avatar.png",
            languages: "English, Tamil"

        },
        {
            name: "Thomson Medical Centre",
            typeEn: "Hospital",
            cityCountryNameEn: "Bangkok, Thailand",
            country: "Thailand",
            profilePath: "#",
            thumbImgUrl: "clinic-avatar.png",
            languages: "Arabic, English, Thai"
        },
        {
            name: "iHeal Medical Centre Kuala Lumpur",
            typeEn: "Hospital",
            cityCountryNameEn: "Hospital in Kuala Lumpur, Malaysia",
            country: "Malaysia",
            profilePath: "#",
            thumbImgUrl: "clinic-avatar.png",
            languages: "Bahasa Indonesia, Bahasa Melayu, Cantonese, English, Mandarin"
        },
        {
            name: "Fortis Memorial Research Institute (Gurgaon)",
            typeEn: "Hospital",
            cityCountryNameEn: "Gurgaon, India",
            country: "India",
            profilePath: "#",
            thumbImgUrl: "clinic-avatar.png",
            languages: "English, Hindi, Interpreters can be arranged for other languages"
        },
        {
            name: "Healthcare Global Enterprises (Bangalore)",
            typeEn: "Hospital",
            cityCountryNameEn: "Bengaluru, India",
            country: "India",
            profilePath: "#",
            thumbImgUrl: "clinic-avatar.png",
            languages: "English, Hindi"
        },
        {
            name: "Mount Alvernia Hospital",
            typeEn: "Hospital",
            cityCountryNameEn: "Singapore",
            country: "Singapore",
            profilePath: "#",
            thumbImgUrl: "clinic-avatar.png",
            languages: "English, Interpreters can be arranged for other languages"
        },
        {
            name: "Makati Medical Center",
            typeEn: "Hospital",
            cityCountryNameEn: "Makati, Philippines",
            country: "Philippines",
            profilePath: "#",
            thumbImgUrl: "clinic-avatar.png",
            languages: "English, Tagalog"
        },
        {
            name: "Samitivej Srinakarin Hospital",
            typeEn: "Hospital",
            cityCountryNameEn: "Bangkok, Thailand",
            country: "Thailand",
            profilePath: "#",
            thumbImgUrl: "clinic-avatar.png",
            languages: "Arabic, Chinese, English, French, Japanese, Korean, Thai, Vietnamese"
        }
    ],
    facets: {
        "provider": {
            "Doctor": 8174,
            "Clinic": 660,
            "Hospital": 87
        },
        "location": {
            "Thailand": 3696,
            "India": 2008,
            "Malaysia": 1014,
            "Singapore": 876,
            "Philippines": 732,
            "South Korea": 563,
            "Hong Kong": 32
        },
        "speciality": {
            "Internal Medicine": 670,
            "Obstetrics & Gynaecology": 667,
            "Orthopaedics": 644,
            "Paediatrics": 562,
            "General Surgery": 531,
            "General Practice": 505,
            "Radiology": 460,
            "Plastic Surgery": 437,
            "General Dentistry": 412,
            "Oncology": 392,
            "Ophthalmology": 374,
            "Cardiology": 372,
            "Anaesthesiology": 341,
            "Dermatology": 323,
            "Otorhinolaryngology": 302,
            "Aesthetic Medicine": 256,
            "Gastroenterology": 244,
            "Prosthodontics": 234,
            "Neurology": 231,
            "Neurosurgery": 220,
            "Urology": 216,
            "Orthodontics": 196,
            "Psychiatry": 171,
            "Periodontics": 146,
            "Oral & Maxillofacial Surgery": 142,
            "Cardiothoracic Surgery": 140,
            "Endocrinology": 136,
            "Physiotherapy": 131,
            "Nephrology": 110,
            "Rehabilitation Medicine": 106
        },
        "procedure": {
            "First Consultation": 285,
            "Follow Up Consultation": 207,
            "Consultation": 194,
            "General Consultation": 158,
            "Dental Implants": 114,
            "Scaling and Polishing": 114,
            "Breast Reduction": 92,
            "Medical Report": 72,
            "Long Consultation": 66,
            "Colonoscopy": 65,
            "Botox": 58,
            "Filling": 56,
            "Post and Core": 53,
            "Breast Augmentation": 52,
            "Initial Consultation (New Case)": 52,
            "Invisalign": 52,
            "Liposuction": 52,
            "Chin Augmentation": 51,
            "In Vitro Fertilization (IVF)": 51,
            "Rhinoplasty": 50,
            "Dermal Filler": 49,
            "Composite Veneers": 48,
            "Gastroscopy": 48,
            "Short Consultation": 48,
            "Total Hip Replacement": 46,
            "Extended Consultation": 45,
            "Teeth Whitening": 45,
            "Wisdom Tooth Surgery": 43,
            "Brow Lift": 42,
            "Veneers": 42
        },
        "body part": {
            "Skin": 892,
            "Tooth": 852,
            "Stomach": 732,
            "Bone": 702,
            "Joint": 692,
            "Ovarium": 666,
            "Uterus": 666,
            "Vagina": 666,
            "Brain": 616,
            "Abdomen": 531,
            "Throat": 517,
            "Heart": 482,
            "Breast": 437,
            "Face": 437,
            "Eye": 376,
            "Ear": 302,
            "Nose": 302,
            "Intestines": 244,
            "Bladder": 216,
            "Penis": 216,
            "Lungs": 197,
            "Pancreas": 156,
            "Head": 142,
            "Neck": 142,
            "Adrenal gland": 136,
            "Thyroid": 136,
            "Kidney": 110,
            "Artery": 73,
            "Blood": 73,
            "Vein": 73
        }
    }
};
/* END mock data */