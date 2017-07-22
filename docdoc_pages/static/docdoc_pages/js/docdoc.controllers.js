"use strict";

angular.module("docdoc")
	.controller("SearchCtrl",[
		"$scope", "$window", "$location", function SearchController(
		 $scope,   $window,   $location) {

    this.funnelItems = {
        "provider": {
            idx: 0,
            items: ["Doctor", "Clinic", "Hospital"]
        },
        "location": {
            idx: 1,
            items: ["Thailand", "India", "Malaysia", "Singapore", "Philippines", "South Korea", "Hong Kong"]
        },
        "specialty": {
            idx: 2,
            items: ["Internal Medicine", "Obstetrics & Gynaecology", "Orthopaedics", "Paediatrics", "General Surgery", "General Practice", "Radiology", "Plastic Surgery", "General Dentistry", "Oncology"]
        },
        "procedure": {
            idx: 3,
            items: ["First Consultation", "Follow Up Consultation", "Consultation", "General Consultation", "Dental Implants", "Scaling and Polishing", "Breast Reduction", "Medical Report", "Long Consultation", "Colonoscopy"]
        },
        "body part": {
            idx: 4,
            items: ["Skin", "Tooth", "Stomach", "Bone", "Joint", "Ovarium", "Uterus", "Vagina", "Brain", "Abdomen"]
        }
    };

    this.results = [
        {
            name: "Dr. Wong Nan-Yaw",
            typeEn: "DOCTOR",
            cityCountryNameEn: "SINGAPORE",
            profilePath: "#",
            thumbImgUrl: "doctor-avatar.png",
            languages: "English, Hokkien, Mandarin"

        },
        {
            name: "Dr. Mukund H. Doshi",
            typeEn: "DOCTOR",
            cityCountryNameEn: "Chennai, India",
            profilePath: "#",
            thumbImgUrl: "doctor-avatar.png",
            languages: "Cantonese, English, Hindi, Hokkien, Malay, Mandarin, Urdu"

        },
        {
            name: "Centre for Foot and Ankle Surgery (Mount Elizabeth Hospital)",
            typeEn: "clinic",
            cityCountryNameEn: "Singapore",
            profilePath: "#",
            thumbImgUrl: "clinic-avatar.png",
            languages: "Bahasa Indonesia, English, Mandarin, Tamil"

        },
        {
            name: "Thomson Medical Centre",
            typeEn: "hospital",
            cityCountryNameEn: "Bangkok, Thailand",
            profilePath: "#",
            thumbImgUrl: "clinic-avatar.png",
            languages: "Arabic, English, Thai"
        },
        {
            name: "iHeal Medical Centre Kuala Lumpur",
            typeEn: "hospital",
            cityCountryNameEn: "Hospital in Kuala Lumpur, Malaysia",
            profilePath: "#",
            thumbImgUrl: "clinic-avatar.png",
            languages: "Bahasa Indonesia, Bahasa Melayu, Cantonese, English, Mandarin"
        }
    ];

	this.init = function() {
	    console.debug("SearchCtrl: init");
	};


	// initial actions
	this.init();

}]);