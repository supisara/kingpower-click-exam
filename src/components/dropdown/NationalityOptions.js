const nationalityOptions = [
  {
    key: 'AF',
    text: 'Afghan',
    value: 'Afghan'
  },
  {
    key: 'AX',
    text: 'Åland Island',
    value: 'Åland Island'
  },
  {
    key: 'AL',
    text: 'Albanian',
    value: 'Albanian'
  },
  {
    key: 'DZ',
    text: 'Algerian',
    value: 'Algerian'
  },
  {
    key: 'AS',
    text: 'American Samoan',
    value: 'American Samoan'
  },
  {
    key: 'AD',
    text: 'Andorran',
    value: 'Andorran'
  },
  {
    key: 'AO',
    text: 'Angolan',
    value: 'Angolan'
  },
  {
    key: 'AI',
    text: 'Anguillan',
    value: 'Anguillan'
  },
  {
    key: 'AQ',
    text: 'Antarctic',
    value: 'Antarctic'
  },
  {
    key: 'AG',
    text: 'Antiguan or Barbudan',
    value: 'Antiguan or Barbudan'
  },
  {
    key: 'AR',
    text: 'Argentine',
    value: 'Argentine'
  },
  {
    key: 'AM',
    text: 'Armenian',
    value: 'Armenian'
  },
  {
    key: 'AW',
    text: 'Aruban',
    value: 'Aruban'
  },
  {
    key: 'AU',
    text: 'Australian',
    value: 'Australian'
  },
  {
    key: 'AT',
    text: 'Austrian',
    value: 'Austrian'
  },
  {
    key: 'AZ',
    text: 'Azerbaijani, Azeri',
    value: 'Azerbaijani, Azeri'
  },
  {
    key: 'BS',
    text: 'Bahamian',
    value: 'Bahamian'
  },
  {
    key: 'BH',
    text: 'Bahraini',
    value: 'Bahraini'
  },
  {
    key: 'BD',
    text: 'Bangladeshi',
    value: 'Bangladeshi'
  },
  {
    key: 'BB',
    text: 'Barbadian',
    value: 'Barbadian'
  },
  {
    key: 'BY',
    text: 'Belarusian',
    value: 'Belarusian'
  },
  {
    key: 'BE',
    text: 'Belgian',
    value: 'Belgian'
  },
  {
    key: 'BZ',
    text: 'Belizean',
    value: 'Belizean'
  },
  {
    key: 'BJ',
    text: 'Beninese, Beninois',
    value: 'Beninese, Beninois'
  },
  {
    key: 'BM',
    text: 'Bermudian, Bermudan',
    value: 'Bermudian, Bermudan'
  },
  {
    key: 'BT',
    text: 'Bhutanese',
    value: 'Bhutanese'
  },
  {
    key: 'BO',
    text: 'Bolivian',
    value: 'Bolivian'
  },
  {
    key: 'BQ',
    text: 'Bonaire',
    value: 'Bonaire'
  },
  {
    key: 'BA',
    text: 'Bosnian or Herzegovinian',
    value: 'Bosnian or Herzegovinian'
  },
  {
    key: 'BW',
    text: 'Motswana, Botswanan',
    value: 'Motswana, Botswanan'
  },
  {
    key: 'BV',
    text: 'Bouvet Island',
    value: 'Bouvet Island'
  },
  {
    key: 'BR',
    text: 'Brazilian',
    value: 'Brazilian'
  },
  {
    key: 'IO',
    text: 'BIOT',
    value: 'BIOT'
  },
  {
    key: 'BN',
    text: 'Bruneian',
    value: 'Bruneian'
  },
  {
    key: 'BG',
    text: 'Bulgarian',
    value: 'Bulgarian'
  },
  {
    key: 'BF',
    text: 'Burkinabé',
    value: 'Burkinabé'
  },
  {
    key: 'BI',
    text: 'Burundian',
    value: 'Burundian'
  },
  {
    key: 'CV',
    text: 'Cabo Verdean',
    value: 'Cabo Verdean'
  },
  {
    key: 'KH',
    text: 'Cambodian',
    value: 'Cambodian'
  },
  {
    key: 'CM',
    text: 'Cameroonian',
    value: 'Cameroonian'
  },
  {
    key: 'CA',
    text: 'Canadian',
    value: 'Canadian'
  },
  {
    key: 'KY',
    text: 'Caymanian',
    value: 'Caymanian'
  },
  {
    key: 'CF',
    text: 'Central African',
    value: 'Central African'
  },
  {
    key: 'TD',
    text: 'Chadian',
    value: 'Chadian'
  },
  {
    key: 'CL',
    text: 'Chilean',
    value: 'Chilean'
  },
  {
    key: 'CN',
    text: 'Chinese',
    value: 'Chinese'
  },
  {
    key: 'CX',
    text: 'Christmas Island',
    value: 'Christmas Island'
  },
  {
    key: 'CC',
    text: 'Cocos Island',
    value: 'Cocos Island'
  },
  {
    key: 'CO',
    text: 'Colombian',
    value: 'Colombian'
  },
  {
    key: 'KM',
    text: 'Comoran, Comorian',
    value: 'Comoran, Comorian'
  },
  {
    key: 'CG',
    text: 'Congolese',
    value: 'Congolese'
  },
  {
    key: 'CD',
    text: 'Congolese',
    value: 'Congolese'
  },
  {
    key: 'CK',
    text: 'Cook Island',
    value: 'Cook Island'
  },
  {
    key: 'CR',
    text: 'Costa Rican',
    value: 'Costa Rican'
  },
  {
    key: 'CI',
    text: 'Ivorian',
    value: 'Ivorian'
  },
  {
    key: 'HR',
    text: 'Croatian',
    value: 'Croatian'
  },
  {
    key: 'CU',
    text: 'Cuban',
    value: 'Cuban'
  },
  {
    key: 'CW',
    text: 'Curaçaoan',
    value: 'Curaçaoan'
  },
  {
    key: 'CY',
    text: 'Cypriot',
    value: 'Cypriot'
  },
  {
    key: 'CZ',
    text: 'Czech',
    value: 'Czech'
  },
  {
    key: 'DK',
    text: 'Danish',
    value: 'Danish'
  },
  {
    key: 'DJ',
    text: 'Djiboutian',
    value: 'Djiboutian'
  },
  {
    key: 'DM',
    text: 'Dominican',
    value: 'Dominican'
  },
  {
    key: 'DO',
    text: 'Dominican',
    value: 'Dominican'
  },
  {
    key: 'EC',
    text: 'Ecuadorian',
    value: 'Ecuadorian'
  },
  {
    key: 'EG',
    text: 'Egyptian',
    value: 'Egyptian'
  },
  {
    key: 'SV',
    text: 'Salvadoran',
    value: 'Salvadoran'
  },
  {
    key: 'GQ',
    text: 'Equatorial Guinean, Equatoguinean',
    value: 'Equatorial Guinean, Equatoguinean'
  },
  {
    key: 'ER',
    text: 'Eritrean',
    value: 'Eritrean'
  },
  {
    key: 'EE',
    text: 'Estonian',
    value: 'Estonian'
  },
  {
    key: 'ET',
    text: 'Ethiopian',
    value: 'Ethiopian'
  },
  {
    key: 'FK',
    text: 'Falkland Island',
    value: 'Falkland Island'
  },
  {
    key: 'FO',
    text: 'Faroese',
    value: 'Faroese'
  },
  {
    key: 'FJ',
    text: 'Fijian',
    value: 'Fijian'
  },
  {
    key: 'FI',
    text: 'Finnish',
    value: 'Finnish'
  },
  {
    key: 'FR',
    text: 'French',
    value: 'French'
  },
  {
    key: 'GF',
    text: 'French Guianese',
    value: 'French Guianese'
  },
  {
    key: 'PF',
    text: 'French Polynesian',
    value: 'French Polynesian'
  },
  {
    key: 'TF',
    text: 'French Southern Territories',
    value: 'French Southern Territories'
  },
  {
    key: 'GA',
    text: 'Gabonese',
    value: 'Gabonese'
  },
  {
    key: 'GM',
    text: 'Gambian',
    value: 'Gambian'
  },
  {
    key: 'GE',
    text: 'Georgian',
    value: 'Georgian'
  },
  {
    key: 'DE',
    text: 'German',
    value: 'German'
  },
  {
    key: 'GH',
    text: 'Ghanaian',
    value: 'Ghanaian'
  },
  {
    key: 'GI',
    text: 'Gibraltar',
    value: 'Gibraltar'
  },
  {
    key: 'GR',
    text: 'Greek, Hellenic',
    value: 'Greek, Hellenic'
  },
  {
    key: 'GL',
    text: 'Greenlandic',
    value: 'Greenlandic'
  },
  {
    key: 'GD',
    text: 'Grenadian',
    value: 'Grenadian'
  },
  {
    key: 'GP',
    text: 'Guadeloupe',
    value: 'Guadeloupe'
  },
  {
    key: 'GU',
    text: 'Guamanian, Guambat',
    value: 'Guamanian, Guambat'
  },
  {
    key: 'GT',
    text: 'Guatemalan',
    value: 'Guatemalan'
  },
  {
    key: 'GG',
    text: 'Channel Island',
    value: 'Channel Island'
  },
  {
    key: 'GN',
    text: 'Guinean',
    value: 'Guinean'
  },
  {
    key: 'GW',
    text: 'Bissau-Guinean',
    value: 'Bissau-Guinean'
  },
  {
    key: 'GY',
    text: 'Guyanese',
    value: 'Guyanese'
  },
  {
    key: 'HT',
    text: 'Haitian',
    value: 'Haitian'
  },
  {
    key: 'HM',
    text: 'Heard Island or McDonald Islands',
    value: 'Heard Island or McDonald Islands'
  },
  {
    key: 'VA',
    text: 'Vatican',
    value: 'Vatican'
  },
  {
    key: 'HN',
    text: 'Honduran',
    value: 'Honduran'
  },
  {
    key: 'HK',
    text: 'Hong Kong, Hong Kongese',
    value: 'Hong Kong, Hong Kongese'
  },
  {
    key: 'HU',
    text: 'Hungarian, Magyar',
    value: 'Hungarian, Magyar'
  },
  {
    key: 'IS',
    text: 'Icelandic',
    value: 'Icelandic'
  },
  {
    key: 'IN',
    text: 'Indian',
    value: 'Indian'
  },
  {
    key: 'ID',
    text: 'Indonesian',
    value: 'Indonesian'
  },
  {
    key: 'IR',
    text: 'Iranian, Persian',
    value: 'Iranian, Persian'
  },
  {
    key: 'IQ',
    text: 'Iraqi',
    value: 'Iraqi'
  },
  {
    key: 'IE',
    text: 'Irish',
    value: 'Irish'
  },
  {
    key: 'IM',
    text: 'Manx',
    value: 'Manx'
  },
  {
    key: 'IL',
    text: 'Israeli',
    value: 'Israeli'
  },
  {
    key: 'IT',
    text: 'Italian',
    value: 'Italian'
  },
  {
    key: 'JM',
    text: 'Jamaican',
    value: 'Jamaican'
  },
  {
    key: 'JP',
    text: 'Japanese',
    value: 'Japanese'
  },
  {
    key: 'JE',
    text: 'Channel Island',
    value: 'Channel Island'
  },
  {
    key: 'JO',
    text: 'Jordanian',
    value: 'Jordanian'
  },
  {
    key: 'KZ',
    text: 'Kazakhstani, Kazakh',
    value: 'Kazakhstani, Kazakh'
  },
  {
    key: 'KE',
    text: 'Kenyan',
    value: 'Kenyan'
  },
  {
    key: 'KI',
    text: 'I-Kiribati',
    value: 'I-Kiribati'
  },
  {
    key: 'KP',
    text: 'North Korean',
    value: 'North Korean'
  },
  {
    key: 'KR',
    text: 'South Korean',
    value: 'South Korean'
  },
  {
    key: 'KW',
    text: 'Kuwaiti',
    value: 'Kuwaiti'
  },
  {
    key: 'KG',
    text: 'Kyrgyzstani, Kyrgyz, Kirgiz, Kirghiz',
    value: 'Kyrgyzstani, Kyrgyz, Kirgiz, Kirghiz'
  },
  {
    key: 'LA',
    text: 'Lao, Laotian',
    value: 'Lao, Laotian'
  },
  {
    key: 'LV',
    text: 'Latvian',
    value: 'Latvian'
  },
  {
    key: 'LB',
    text: 'Lebanese',
    value: 'Lebanese'
  },
  {
    key: 'LS',
    text: 'Basotho',
    value: 'Basotho'
  },
  {
    key: 'LR',
    text: 'Liberian',
    value: 'Liberian'
  },
  {
    key: 'LY',
    text: 'Libyan',
    value: 'Libyan'
  },
  {
    key: 'LI',
    text: 'Liechtenstein',
    value: 'Liechtenstein'
  },
  {
    key: 'LT',
    text: 'Lithuanian',
    value: 'Lithuanian'
  },
  {
    key: 'LU',
    text: 'Luxembourg, Luxembourgish',
    value: 'Luxembourg, Luxembourgish'
  },
  {
    key: 'MO',
    text: 'Macanese, Chinese',
    value: 'Macanese, Chinese'
  },
  {
    key: 'MK',
    text: 'Macedonian',
    value: 'Macedonian'
  },
  {
    key: 'MG',
    text: 'Malagasy',
    value: 'Malagasy'
  },
  {
    key: 'MW',
    text: 'Malawian',
    value: 'Malawian'
  },
  {
    key: 'MY',
    text: 'Malaysian',
    value: 'Malaysian'
  },
  {
    key: 'MV',
    text: 'Maldivian',
    value: 'Maldivian'
  },
  {
    key: 'ML',
    text: 'Malian, Malinese',
    value: 'Malian, Malinese'
  },
  {
    key: 'MT',
    text: 'Maltese',
    value: 'Maltese'
  },
  {
    key: 'MH',
    text: 'Marshallese',
    value: 'Marshallese'
  },
  {
    key: 'MQ',
    text: 'Martiniquais, Martinican',
    value: 'Martiniquais, Martinican'
  },
  {
    key: 'MR',
    text: 'Mauritanian',
    value: 'Mauritanian'
  },
  {
    key: 'MU',
    text: 'Mauritian',
    value: 'Mauritian'
  },
  {
    key: 'YT',
    text: 'Mahoran',
    value: 'Mahoran'
  },
  {
    key: 'MX',
    text: 'Mexican',
    value: 'Mexican'
  },
  {
    key: 'FM',
    text: 'Micronesian',
    value: 'Micronesian'
  },
  {
    key: 'MD',
    text: 'Moldovan',
    value: 'Moldovan'
  },
  {
    key: 'MC',
    text: 'Monégasque, Monacan',
    value: 'Monégasque, Monacan'
  },
  {
    key: 'MN',
    text: 'Mongolian',
    value: 'Mongolian'
  },
  {
    key: 'ME',
    text: 'Montenegrin',
    value: 'Montenegrin'
  },
  {
    key: 'MS',
    text: 'Montserratian',
    value: 'Montserratian'
  },
  {
    key: 'MA',
    text: 'Moroccan',
    value: 'Moroccan'
  },
  {
    key: 'MZ',
    text: 'Mozambican',
    value: 'Mozambican'
  },
  {
    key: 'MM',
    text: 'Burmese',
    value: 'Burmese'
  },
  {
    key: 'NA',
    text: 'Namibian',
    value: 'Namibian'
  },
  {
    key: 'NR',
    text: 'Nauruan',
    value: 'Nauruan'
  },
  {
    key: 'NP',
    text: 'Nepali, Nepalese',
    value: 'Nepali, Nepalese'
  },
  {
    key: 'NL',
    text: 'Dutch, Netherlandic',
    value: 'Dutch, Netherlandic'
  },
  {
    key: 'NC',
    text: 'New Caledonian',
    value: 'New Caledonian'
  },
  {
    key: 'NZ',
    text: 'New Zealand, NZ',
    value: 'New Zealand, NZ'
  },
  {
    key: 'NI',
    text: 'Nicaraguan',
    value: 'Nicaraguan'
  },
  {
    key: 'NE',
    text: 'Nigerien',
    value: 'Nigerien'
  },
  {
    key: 'NG',
    text: 'Nigerian',
    value: 'Nigerian'
  },
  {
    key: 'NU',
    text: 'Niuean',
    value: 'Niuean'
  },
  {
    key: 'NF',
    text: 'Norfolk Island',
    value: 'Norfolk Island'
  },
  {
    key: 'MP',
    text: 'Northern Marianan',
    value: 'Northern Marianan'
  },
  {
    key: 'NO',
    text: 'Norwegian',
    value: 'Norwegian'
  },
  {
    key: 'OM',
    text: 'Omani',
    value: 'Omani'
  },
  {
    key: 'PK',
    text: 'Pakistani',
    value: 'Pakistani'
  },
  {
    key: 'PW',
    text: 'Palauan',
    value: 'Palauan'
  },
  {
    key: 'PS',
    text: 'Palestinian',
    value: 'Palestinian'
  },
  {
    key: 'PA',
    text: 'Panamanian',
    value: 'Panamanian'
  },
  {
    key: 'PG',
    text: 'Papua New Guinean, Papuan',
    value: 'Papua New Guinean, Papuan'
  },
  {
    key: 'PY',
    text: 'Paraguayan',
    value: 'Paraguayan'
  },
  {
    key: 'PE',
    text: 'Peruvian',
    value: 'Peruvian'
  },
  {
    key: 'PH',
    text: 'Philippine, Filipino',
    value: 'Philippine, Filipino'
  },
  {
    key: 'PN',
    text: 'Pitcairn Island',
    value: 'Pitcairn Island'
  },
  {
    key: 'PL',
    text: 'Polish',
    value: 'Polish'
  },
  {
    key: 'PT',
    text: 'Portuguese',
    value: 'Portuguese'
  },
  {
    key: 'PR',
    text: 'Puerto Rican',
    value: 'Puerto Rican'
  },
  {
    key: 'QA',
    text: 'Qatari',
    value: 'Qatari'
  },
  {
    key: 'RE',
    text: 'Réunionese, Réunionnais',
    value: 'Réunionese, Réunionnais'
  },
  {
    key: 'RO',
    text: 'Romanian',
    value: 'Romanian'
  },
  {
    key: 'RU',
    text: 'Russian',
    value: 'Russian'
  },
  {
    key: 'RW',
    text: 'Rwandan',
    value: 'Rwandan'
  },
  {
    key: 'BL',
    text: 'Barthélemois',
    value: 'Barthélemois'
  },
  {
    key: 'SH',
    text: 'Saint Helenian',
    value: 'Saint Helenian'
  },
  {
    key: 'KN',
    text: 'Kittitian or Nevisian',
    value: 'Kittitian or Nevisian'
  },
  {
    key: 'LC',
    text: 'Saint Lucian',
    value: 'Saint Lucian'
  },
  {
    key: 'MF',
    text: 'Saint-Martinoise',
    value: 'Saint-Martinoise'
  },
  {
    key: 'PM',
    text: 'Saint-Pierrais or Miquelonnais',
    value: 'Saint-Pierrais or Miquelonnais'
  },
  {
    key: 'VC',
    text: 'Saint Vincentian, Vincentian',
    value: 'Saint Vincentian, Vincentian'
  },
  {
    key: 'WS',
    text: 'Samoan',
    value: 'Samoan'
  },
  {
    key: 'SM',
    text: 'Sammarinese',
    value: 'Sammarinese'
  },
  {
    key: 'ST',
    text: 'São Toméan',
    value: 'São Toméan'
  },
  {
    key: 'SA',
    text: 'Saudi, Saudi Arabian',
    value: 'Saudi, Saudi Arabian'
  },
  {
    key: 'SN',
    text: 'Senegalese',
    value: 'Senegalese'
  },
  {
    key: 'RS',
    text: 'Serbian',
    value: 'Serbian'
  },
  {
    key: 'SC',
    text: 'Seychellois',
    value: 'Seychellois'
  },
  {
    key: 'SL',
    text: 'Sierra Leonean',
    value: 'Sierra Leonean'
  },
  {
    key: 'SG',
    text: 'Singaporean',
    value: 'Singaporean'
  },
  {
    key: 'SX',
    text: 'Sint Maarten',
    value: 'Sint Maarten'
  },
  {
    key: 'SK',
    text: 'Slovak',
    value: 'Slovak'
  },
  {
    key: 'SI',
    text: 'Slovenian, Slovene',
    value: 'Slovenian, Slovene'
  },
  {
    key: 'SB',
    text: 'Solomon Island',
    value: 'Solomon Island'
  },
  {
    key: 'SO',
    text: 'Somali, Somalian',
    value: 'Somali, Somalian'
  },
  {
    key: 'ZA',
    text: 'South African',
    value: 'South African'
  },
  {
    key: 'GS',
    text: 'South Georgia or South Sandwich Islands',
    value: 'South Georgia or South Sandwich Islands'
  },
  {
    key: 'SS',
    text: 'South Sudanese',
    value: 'South Sudanese'
  },
  {
    key: 'ES',
    text: 'Spanish',
    value: 'Spanish'
  },
  {
    key: 'LK',
    text: 'Sri Lankan',
    value: 'Sri Lankan'
  },
  {
    key: 'SD',
    text: 'Sudanese',
    value: 'Sudanese'
  },
  {
    key: 'SR',
    text: 'Surinamese',
    value: 'Surinamese'
  },
  {
    key: 'SJ',
    text: 'Svalbard',
    value: 'Svalbard'
  },
  {
    key: 'SZ',
    text: 'Swazi',
    value: 'Swazi'
  },
  {
    key: 'SE',
    text: 'Swedish',
    value: 'Swedish'
  },
  {
    key: 'CH',
    text: 'Swiss',
    value: 'Swiss'
  },
  {
    key: 'SY',
    text: 'Syrian',
    value: 'Syrian'
  },
  {
    key: 'TW',
    text: 'Chinese, Taiwanese',
    value: 'Chinese, Taiwanese'
  },
  {
    key: 'TJ',
    text: 'Tajikistani',
    value: 'Tajikistani'
  },
  {
    key: 'TZ',
    text: 'Tanzanian',
    value: 'Tanzanian'
  },
  {
    key: 'TH',
    text: 'Thai',
    value: 'Thai'
  },
  {
    key: 'TL',
    text: 'Timorese',
    value: 'Timorese'
  },
  {
    key: 'TG',
    text: 'Togolese',
    value: 'Togolese'
  },
  {
    key: 'TK',
    text: 'Tokelauan',
    value: 'Tokelauan'
  },
  {
    key: 'TO',
    text: 'Tongan',
    value: 'Tongan'
  },
  {
    key: 'TT',
    text: 'Trinidadian or Tobagonian',
    value: 'Trinidadian or Tobagonian'
  },
  {
    key: 'TN',
    text: 'Tunisian',
    value: 'Tunisian'
  },
  {
    key: 'TR',
    text: 'Turkish',
    value: 'Turkish'
  },
  {
    key: 'TM',
    text: 'Turkmen',
    value: 'Turkmen'
  },
  {
    key: 'TC',
    text: 'Turks and Caicos Island',
    value: 'Turks and Caicos Island'
  },
  {
    key: 'TV',
    text: 'Tuvaluan',
    value: 'Tuvaluan'
  },
  {
    key: 'UG',
    text: 'Ugandan',
    value: 'Ugandan'
  },
  {
    key: 'UA',
    text: 'Ukrainian',
    value: 'Ukrainian'
  },
  {
    key: 'AE',
    text: 'Emirati, Emirian, Emiri',
    value: 'Emirati, Emirian, Emiri'
  },
  {
    key: 'GB',
    text: 'British, UK',
    value: 'British, UK'
  },
  {
    key: 'UM',
    text: 'American',
    value: 'American'
  },
  {
    key: 'US',
    text: 'American',
    value: 'American'
  },
  {
    key: 'UY',
    text: 'Uruguayan',
    value: 'Uruguayan'
  },
  {
    key: 'UZ',
    text: 'Uzbekistani, Uzbek',
    value: 'Uzbekistani, Uzbek'
  },
  {
    key: 'VU',
    text: 'Ni-Vanuatu, Vanuatuan',
    value: 'Ni-Vanuatu, Vanuatuan'
  },
  {
    key: 'VE',
    text: 'Venezuelan',
    value: 'Venezuelan'
  },
  {
    key: 'VN',
    text: 'Vietnamese',
    value: 'Vietnamese'
  },
  {
    key: 'VG',
    text: 'British Virgin Island',
    value: 'British Virgin Island'
  },
  {
    key: 'VI',
    text: 'U.S. Virgin Island',
    value: 'U.S. Virgin Island'
  },
  {
    key: 'WF',
    text: 'Wallis and Futuna, Wallisian or Futunan',
    value: 'Wallis and Futuna, Wallisian or Futunan'
  },
  {
    key: 'EH',
    text: 'Sahrawi, Sahrawian, Sahraouian',
    value: 'Sahrawi, Sahrawian, Sahraouian'
  },
  {
    key: 'YE',
    text: 'Yemeni',
    value: 'Yemeni'
  },
  {
    key: 'ZM',
    text: 'Zambian',
    value: 'Zambian'
  },
  {
    key: 'ZW',
    text: 'Zimbabwean',
    value: 'Zimbabwean'
  }
];

export default nationalityOptions;