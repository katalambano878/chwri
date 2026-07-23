export type PubType = "Research Paper" | "Policy Brief" | "Report" | "Case Study";

export type ContributorId =
  | "aziato"
  | "aborigo"
  | "ali"
  | "jaliu"
  | "network";

export const CONTRIBUTORS: Record<
  ContributorId,
  { label: string; shortLabel: string }
> = {
  aziato: {
    label: "Prof. Lydia Aziato",
    shortLabel: "Aziato",
  },
  aborigo: {
    label: "Dr. Raymond Aborigo",
    shortLabel: "Aborigo",
  },
  ali: {
    label: "Dr. Mohammed Ali",
    shortLabel: "Ali",
  },
  jaliu: {
    label: "Abubakari Jaliu",
    shortLabel: "Jaliu",
  },
  network: {
    label: "CHWRI Research Network",
    shortLabel: "Network",
  },
};

export type Publication = {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  type: PubType;
  theme: string;
  contributors: ContributorId[];
  doi: string;
  href: string;
  featured?: boolean;
  summary: string;
};

export const PUBLICATIONS: Publication[] = [
  // —— Featured / recent network & board-linked work ——
  {
    id: "bmjopen-2025-098784",
    title:
      "Breast and cervical cancer care in Ghana: a qualitative exploratory study of stakeholder perspectives on National Health Insurance Scheme coverage",
    authors: "Amankwah, I., Gone, M., Jaliu, A., Morand, M., & Owusu, R.",
    journal: "BMJ Open",
    year: "2026",
    type: "Research Paper",
    theme: "Cancer & Health Financing",
    contributors: ["jaliu", "network"],
    doi: "10.1136/bmjopen-2025-098784",
    href: "https://doi.org/10.1136/bmjopen-2025-098784",
    featured: true,
    summary:
      "Explores stakeholder perspectives on NHIS coverage for breast and cervical cancer care in Ghana, highlighting gaps between policy entitlements and lived financial protection.",
  },
  {
    id: "cam4-71890",
    title:
      "Partnership Driving Impact: An Integrated Women-Centric Model to Improve Early Detection and Treatment of Cervical and Breast Cancer in Ghana and India",
    authors:
      "Commeh, M. E., Husain, N., Afrane, C. B., Apatu, M., Asiedu, A., et al.",
    journal: "Cancer Medicine",
    year: "2026",
    type: "Research Paper",
    theme: "Cancer & Oncology",
    contributors: ["network"],
    doi: "10.1002/cam4.71890",
    href: "https://doi.org/10.1002/cam4.71890",
    featured: true,
    summary:
      "Documents a partnership-driven, women-centred model to strengthen early detection and treatment pathways for cervical and breast cancer across Ghana and India.",
  },
  {
    id: "ssmhs-100167",
    title:
      "“Now we are each other’s keepers”: A qualitative study assessing acceptability, experience and perceived influence of a midwife-led peer support club on provider well-being and resilience in Ghana and Mali",
    authors: "Ba, A., Asiedu, A., Thera, I., Acheampong, E., Hanson, F., et al.",
    journal: "SSM – Health Systems",
    year: "2026",
    type: "Research Paper",
    theme: "Health Workforce & Wellbeing",
    contributors: ["network"],
    doi: "10.1016/j.ssmhs.2026.100167",
    href: "https://doi.org/10.1016/j.ssmhs.2026.100167",
    featured: true,
    summary:
      "Assesses how midwife-led peer support clubs influence provider wellbeing and resilience in Ghana and Mali, with implications for sustaining quality maternity care.",
  },

  // —— Prof. Lydia Aziato ——
  {
    id: "bmcpsych-2020-02760",
    title:
      "Psychological and physical effects of breast cancer diagnosis and treatment on young Ghanaian women: a qualitative study",
    authors: "Iddrisu, M., Aziato, L., & Dedey, F.",
    journal: "BMC Psychiatry",
    year: "2020",
    type: "Research Paper",
    theme: "Cancer & Oncology",
    contributors: ["aziato"],
    doi: "10.1186/s12888-020-02760-4",
    href: "https://doi.org/10.1186/s12888-020-02760-4",
    featured: true,
    summary:
      "Qualitative evidence on the psychological and physical impact of breast cancer diagnosis and treatment among young women in Ghana.",
  },
  {
    id: "hcwi-2015-911299",
    title:
      "Breast Cancer Diagnosis and Factors Influencing Treatment Decisions in Ghana",
    authors: "Aziato, L., & Clegg-Lamptey, J. N. A.",
    journal: "Health Care for Women International",
    year: "2015",
    type: "Research Paper",
    theme: "Cancer & Oncology",
    contributors: ["aziato"],
    doi: "10.1080/07399332.2014.911299",
    href: "https://doi.org/10.1080/07399332.2014.911299",
    summary:
      "Explores how Ghanaian women experience breast cancer diagnosis and the social, clinical, and personal factors shaping treatment decisions.",
  },
  {
    id: "nop2-590",
    title:
      "Socioeconomic impact of breast cancer on young women in Ghana: A qualitative study",
    authors: "Iddrisu, M., Aziato, L., & Ohene, L. A.",
    journal: "Nursing Open",
    year: "2021",
    type: "Research Paper",
    theme: "Cancer & Oncology",
    contributors: ["aziato"],
    doi: "10.1002/nop2.590",
    href: "https://doi.org/10.1002/nop2.590",
    summary:
      "Examines the socioeconomic consequences of breast cancer for young Ghanaian women, including livelihood, family roles, and care costs.",
  },
  {
    id: "scc-2025-09234",
    title:
      "Psycho-spiritual wellbeing and coping strategies of women with breast cancer post-radiation therapy in Kumasi, Ghana",
    authors: "Owusu, S. B., Konlan, K. D., & Aziato, L.",
    journal: "Supportive Care in Cancer",
    year: "2025",
    type: "Research Paper",
    theme: "Cancer & Oncology",
    contributors: ["aziato"],
    doi: "10.1007/s00520-025-09234-x",
    href: "https://doi.org/10.1007/s00520-025-09234-x",
    summary:
      "Investigates psycho-spiritual wellbeing and coping among women after radiation therapy for breast cancer in Kumasi.",
  },
  {
    id: "bmcpregn-2017-1248",
    title:
      "Labour pain experiences and perceptions: a qualitative study among post-partum women in Ghana",
    authors: "Aziato, L., Acheampong, A. K., & Umoar, K. L.",
    journal: "BMC Pregnancy and Childbirth",
    year: "2017",
    type: "Research Paper",
    theme: "Maternal & Newborn Health",
    contributors: ["aziato"],
    doi: "10.1186/s12884-017-1248-1",
    href: "https://doi.org/10.1186/s12884-017-1248-1",
    summary:
      "Captures postpartum women’s experiences and perceptions of labour pain and the care contexts that shape those experiences in Ghana.",
  },
  {
    id: "reprohealth-2017-0398",
    title:
      "Experiences of midwives on pharmacological and non-pharmacological labour pain management in Ghana",
    authors: "Aziato, L., Kyei, A. A., & Deku, G.",
    journal: "Reproductive Health",
    year: "2017",
    type: "Research Paper",
    theme: "Maternal & Newborn Health",
    contributors: ["aziato"],
    doi: "10.1186/s12978-017-0398-y",
    href: "https://doi.org/10.1186/s12978-017-0398-y",
    summary:
      "Documents midwives’ experiences delivering pharmacological and non-pharmacological labour pain management in Ghanaian maternity settings.",
  },
  {
    id: "bmcnurs-2015-0094",
    title:
      "Validation of three pain scales among adult postoperative patients in Ghana",
    authors:
      "Aziato, L., Dedey, F., Marfo, K., Asamani, J. A., & Clegg-Lamptey, J. N. A.",
    journal: "BMC Nursing",
    year: "2015",
    type: "Research Paper",
    theme: "Pain & Nursing Practice",
    contributors: ["aziato"],
    doi: "10.1186/s12912-015-0094-6",
    href: "https://doi.org/10.1186/s12912-015-0094-6",
    summary:
      "Validates commonly used pain assessment scales among adult postoperative patients in Ghana to strengthen clinical nursing practice.",
  },
  {
    id: "jtcn-2015-4526246",
    title:
      "An Ethnographic Exploration of Postoperative Pain Experiences Among Ghanaian Surgical Patients",
    authors: "Aziato, L., & Adejumo, O.",
    journal: "Journal of Transcultural Nursing",
    year: "2015",
    type: "Research Paper",
    theme: "Pain & Nursing Practice",
    contributors: ["aziato"],
    doi: "10.1177/1043659614526246",
    href: "https://doi.org/10.1177/1043659614526246",
    summary:
      "Ethnographic study of how Ghanaian surgical patients experience and communicate postoperative pain in clinical settings.",
  },
  {
    id: "pmn-2014-002",
    title:
      "The Ghanaian Surgical Nurse and Postoperative Pain Management: A Clinical Ethnographic Insight",
    authors: "Aziato, L., & Adejumo, O.",
    journal: "Pain Management Nursing",
    year: "2014",
    type: "Research Paper",
    theme: "Pain & Nursing Practice",
    contributors: ["aziato"],
    doi: "10.1016/j.pmn.2012.10.002",
    href: "https://doi.org/10.1016/j.pmn.2012.10.002",
    summary:
      "Clinical ethnographic insight into Ghanaian surgical nurses’ roles, constraints, and practices in postoperative pain management.",
  },

  // —— Dr. Raymond Aborigo ——
  {
    id: "lancetgh-2019-30132",
    title:
      "Person-centred maternity care in low-income and middle-income countries: analysis of data from Kenya, Ghana, and India",
    authors: "Afulani, P. A., Phillips, B., Aborigo, R. A., & Moyer, C. A.",
    journal: "The Lancet Global Health",
    year: "2019",
    type: "Research Paper",
    theme: "Maternal & Newborn Health",
    contributors: ["aborigo"],
    doi: "10.1016/S2214-109X(18)30403-0",
    href: "https://doi.org/10.1016/S2214-109X(18)30403-0",
    featured: true,
    summary:
      "Analyses person-centred maternity care experiences across Kenya, Ghana, and India, informing quality-of-care measurement and improvement.",
  },
  {
    id: "birt-2019-12418",
    title:
      "Can an integrated obstetric emergency simulation training improve respectful maternity care? Results from a pilot study in Ghana",
    authors:
      "Afulani, P. A., Aborigo, R. A., Walker, D., Moyer, C. A., Cohen, S., & Williams, J.",
    journal: "Birth",
    year: "2019",
    type: "Research Paper",
    theme: "Maternal & Newborn Health",
    contributors: ["aborigo"],
    doi: "10.1111/birt.12418",
    href: "https://doi.org/10.1111/birt.12418",
    featured: true,
    summary:
      "Pilot evidence from Ghana on whether integrated obstetric emergency simulation training can strengthen respectful maternity care practices.",
  },
  {
    id: "midwifery-2020-102904",
    title:
      "Providing respectful maternity care in northern Ghana: A mixed-methods study with maternity care providers",
    authors:
      "Moyer, C. A., McNally, B., Aborigo, R. A., Williams, J. E. O., & Afulani, P.",
    journal: "Midwifery",
    year: "2021",
    type: "Research Paper",
    theme: "Maternal & Newborn Health",
    contributors: ["aborigo"],
    doi: "10.1016/j.midw.2020.102904",
    href: "https://doi.org/10.1016/j.midw.2020.102904",
    summary:
      "Mixed-methods study with maternity care providers on delivering respectful maternity care in northern Ghana.",
  },
  {
    id: "midwifery-2014-maltreatment",
    title:
      "‘They treat you like you are not a human being’: Maltreatment during labour and delivery in rural northern Ghana",
    authors:
      "Moyer, C. A., Adongo, P. B., Aborigo, R. A., Hodgson, A., & Engmann, C. M.",
    journal: "Midwifery",
    year: "2014",
    type: "Research Paper",
    theme: "Maternal & Newborn Health",
    contributors: ["aborigo"],
    doi: "10.1016/j.midw.2013.05.006",
    href: "https://doi.org/10.1016/j.midw.2013.05.006",
    summary:
      "Documents women’s experiences of maltreatment during labour and delivery in rural northern Ghana and implications for respectful care.",
  },
  {
    id: "bmcpregn-2023-06118",
    title: "Promoting a global culture of respectful maternity care",
    authors:
      "Puthussery, S., Bayih, W. A., Brown, H., & Aborigo, R. A.",
    journal: "BMC Pregnancy and Childbirth",
    year: "2023",
    type: "Research Paper",
    theme: "Maternal & Newborn Health",
    contributors: ["aborigo"],
    doi: "10.1186/s12884-023-06118-y",
    href: "https://doi.org/10.1186/s12884-023-06118-y",
    summary:
      "Advances a global agenda for respectful maternity care, drawing on multi-country scholarship and practice experience.",
  },
  {
    id: "heapol-2016-czw072",
    title:
      "Addressing the continuum of maternal and newborn care in Ghana: implications for policy and practice",
    authors:
      "Engmann, C. M., Hodgson, A., Aborigo, R., Adongo, P. L., & Moyer, C. A.",
    journal: "Health Policy and Planning",
    year: "2016",
    type: "Policy Brief",
    theme: "Maternal & Newborn Health",
    contributors: ["aborigo"],
    doi: "10.1093/heapol/czw072",
    href: "https://doi.org/10.1093/heapol/czw072",
    summary:
      "Policy-oriented analysis of Ghana’s maternal and newborn care continuum, with implications for programme design and health systems practice.",
  },
  {
    id: "plosone-2013-58924",
    title:
      "Why Are Babies Dying in the First Month after Birth? A 7-Year Study of Neonatal Mortality in Northern Ghana",
    authors:
      "Welaga, P., Moyer, C. A., Aborigo, R., Adongo, P., Williams, J., Hodgson, A., Oduro, A., & Engmann, C.",
    journal: "PLoS ONE",
    year: "2013",
    type: "Research Paper",
    theme: "Maternal & Newborn Health",
    contributors: ["aborigo"],
    doi: "10.1371/journal.pone.0058924",
    href: "https://doi.org/10.1371/journal.pone.0058924",
    summary:
      "Seven-year analysis of neonatal mortality patterns in northern Ghana to inform prevention and health-system response.",
  },
  {
    id: "bmcpregn-2012-76",
    title:
      "Infant nutrition in the first seven days of life in rural northern Ghana",
    authors:
      "Aborigo, R. A., Moyer, C. A., Rominski, S., Adongo, P., Williams, J., Logonia, G., Affah, G., Hodgson, A., & Engmann, C.",
    journal: "BMC Pregnancy and Childbirth",
    year: "2012",
    type: "Research Paper",
    theme: "Nutrition & Child Health",
    contributors: ["aborigo"],
    doi: "10.1186/1471-2393-12-76",
    href: "https://doi.org/10.1186/1471-2393-12-76",
    summary:
      "Examines early infant feeding practices in the first seven days of life in rural northern Ghana.",
  },
  {
    id: "mchj-2014-1240",
    title:
      "“It’s up to the Woman’s People”: How Social Factors Influence Facility-Based Delivery in Rural Northern Ghana",
    authors:
      "Moyer, C. A., Adongo, P. B., Aborigo, R. A., Hodgson, A., Engmann, C. M., & DeVries, R.",
    journal: "Maternal and Child Health Journal",
    year: "2014",
    type: "Research Paper",
    theme: "Maternal & Newborn Health",
    contributors: ["aborigo"],
    doi: "10.1007/s10995-013-1240-y",
    href: "https://doi.org/10.1007/s10995-013-1240-y",
    summary:
      "Analyses how family and community social dynamics shape decisions about facility-based delivery in rural northern Ghana.",
  },

  // —— Dr. Mohammed Ali ——
  {
    id: "gmh-2021-15",
    title:
      "Effect of a lay counselor-delivered integrated maternal mental health and early childhood development group-based intervention in Northern Ghana: a cluster-randomized controlled trial",
    authors:
      "Baumgartner, J. N., Ali, M., Gallis, J. A., Lillie, M., Owusu, R., Abubakr-Bibilazu, S., Adam, H., Aborigo, R., McEwan, E., et al.",
    journal: "Global Mental Health",
    year: "2021",
    type: "Research Paper",
    theme: "Mental Health & ECD",
    contributors: ["ali", "aborigo"],
    doi: "10.1017/gmh.2021.15",
    href: "https://doi.org/10.1017/gmh.2021.15",
    featured: true,
    summary:
      "Cluster-randomized trial of a lay counselor-delivered maternal mental health and early childhood development intervention in northern Ghana.",
  },
  {
    id: "bmcph-2021-12121",
    title:
      "The impact of a maternal mental health intervention on intimate partner violence in Northern Ghana and the mediating roles of social support and couple communication",
    authors:
      "Cao, J., Gallis, J. A., Ali, M., Lillie, M., Abubakr-Bibilazu, S., Adam, H., et al.",
    journal: "BMC Public Health",
    year: "2021",
    type: "Research Paper",
    theme: "Mental Health & ECD",
    contributors: ["ali"],
    doi: "10.1186/s12889-021-12121-9",
    href: "https://doi.org/10.1186/s12889-021-12121-9",
    summary:
      "Secondary analysis assessing whether a maternal mental health intervention reduced intimate partner violence and through which pathways.",
  },
  {
    id: "globhealth-2017-0243",
    title:
      "The effect of social behavior change communication package on maternal knowledge in obstetric danger signs among mothers in East Mamprusi District of Ghana",
    authors:
      "Saaka, M., Aryee, P., Kuganab-Lem, R., Ali, M., & Masahudu, A. R.",
    journal: "Globalization and Health",
    year: "2017",
    type: "Research Paper",
    theme: "Maternal & Newborn Health",
    contributors: ["ali"],
    doi: "10.1186/s12992-017-0243-7",
    href: "https://doi.org/10.1186/s12992-017-0243-7",
    summary:
      "Evaluates a social and behaviour change communication package’s effect on maternal knowledge of obstetric danger signs.",
  },
  {
    id: "dip-2017-1327028",
    title:
      "Mobilising faith-based and lay leaders to address antenatal care outcomes in northern Ghana",
    authors:
      "Hembling, J., McEwan, E., Ali, M., Passaniti, A., Aryee, P. A., & Saaka, M.",
    journal: "Development in Practice",
    year: "2017",
    type: "Case Study",
    theme: "Community Engagement",
    contributors: ["ali"],
    doi: "10.1080/09614524.2017.1327028",
    href: "https://doi.org/10.1080/09614524.2017.1327028",
    summary:
      "Case evidence on engaging faith-based and lay leaders to improve antenatal care outcomes in northern Ghana.",
  },
  {
    id: "ijsrmt-2026-1401",
    title:
      "Transforming Rural Health Systems: Evaluating a Centre of Excellence Model for Maternal and Child Health in Rural Northern Ghana",
    authors: "Ali, M., Yakubu, M. D., & Iddrisu, Z. A.",
    journal: "International Journal of Scientific Research and Modern Technology",
    year: "2026",
    type: "Research Paper",
    theme: "Health Systems Strengthening",
    contributors: ["ali"],
    doi: "10.38124/ijsrmt.v5i5.1401",
    href: "https://doi.org/10.38124/ijsrmt.v5i5.1401",
    summary:
      "Evaluates a Centre of Excellence model for maternal and child health as a pathway to stronger rural health systems in northern Ghana.",
  },
  {
    id: "ijmhr-2026-807",
    title:
      "Paternal Nutritional Knowledge and Its Effectiveness in Shaping Maternal Health and Fetal Outcomes in Rural Ghana",
    authors: "Ali, M., & Yakubu, M. D.",
    journal: "International Journal of Medical and Health Research",
    year: "2026",
    type: "Research Paper",
    theme: "Nutrition & Child Health",
    contributors: ["ali"],
    doi: "10.61424/ijmhr.v4i2.807",
    href: "https://doi.org/10.61424/ijmhr.v4i2.807",
    summary:
      "Assesses how fathers’ nutritional knowledge relates to maternal health practices and fetal outcomes in rural Ghana.",
  },

  // —— User-provided Ghana health-system / MNCH DOIs ——
  {
    id: "pgph-0003649",
    title:
      "Coaching visits and supportive supervision for primary care facilities to improve malaria service data quality in Ghana: An intervention case study",
    authors:
      "Asiedu, A., Haws, R. A., Mohammed, W., Boye-Doe, J., Agblanya, C., et al.",
    journal: "PLOS Global Public Health",
    year: "2025",
    type: "Case Study",
    theme: "Health Information Systems",
    contributors: ["network"],
    doi: "10.1371/journal.pgph.0003649",
    href: "https://doi.org/10.1371/journal.pgph.0003649",
    summary:
      "Intervention case study on coaching and supportive supervision to improve malaria service data quality in Ghanaian primary care facilities.",
  },
  {
    id: "ghsp-d-24-00008",
    title:
      "Documenting Community Health Worker Compensation Schemes and Their Perceived Effectiveness in Seven sub-Saharan African Countries: A Qualitative Study",
    authors: "Davis, A. L., Flomen, L., Ahmed, J., Arouna, D. M., Asiedu, A., et al.",
    journal: "Global Health: Science and Practice",
    year: "2024",
    type: "Research Paper",
    theme: "Community Health Systems",
    contributors: ["network"],
    doi: "10.9745/GHSP-D-24-00008",
    href: "https://doi.org/10.9745/GHSP-D-24-00008",
    summary:
      "Qualitative multi-country documentation of CHW compensation schemes and stakeholder perceptions of their effectiveness across seven African countries, including Ghana.",
  },
  {
    id: "gatesopen-12936",
    title:
      "“It builds your confidence… you’ve done well”: Healthcare workers’ experiences of participating in a low-dose, high-frequency training to improve newborn survival on the day of birth in Ghana",
    authors:
      "Asiedu, A., Nelson, A. R., Gomez, P. P., Tappis, H., Effah, F., & Allen, C.",
    journal: "Gates Open Research",
    year: "2019",
    type: "Research Paper",
    theme: "Maternal & Newborn Health",
    contributors: ["network"],
    doi: "10.12688/gatesopenres.12936.1",
    href: "https://doi.org/10.12688/gatesopenres.12936.1",
    summary:
      "Healthcare workers’ experiential accounts of low-dose, high-frequency training designed to improve newborn survival on the day of birth in Ghana.",
  },
  {
    id: "ajtmh-23-0206",
    title:
      "Use of Supervision Data to Improve Quality of Care for Malaria in Pregnancy: Experience in Six African Countries",
    authors:
      "Wolf, K., Mostel, J., Oseni, L., Gomez, P., Kibuka, T., Emerson, C., et al.",
    journal: "The American Journal of Tropical Medicine and Hygiene",
    year: "2024",
    type: "Research Paper",
    theme: "Malaria & Quality of Care",
    contributors: ["network"],
    doi: "10.4269/ajtmh.23-0206",
    href: "https://doi.org/10.4269/ajtmh.23-0206",
    summary:
      "Presents experience from six African countries on using supervision data to strengthen quality of care for malaria in pregnancy.",
  },
  {
    id: "bmcpregn-2018-1705",
    title:
      "Accelerating newborn survival in Ghana through a low-dose, high-frequency health worker training approach: a cluster randomized trial",
    authors:
      "Gomez, P. P., Nelson, A. R., Asiedu, A., Addo, E., Agbodza, D., Allen, C., et al.",
    journal: "BMC Pregnancy and Childbirth",
    year: "2018",
    type: "Research Paper",
    theme: "Maternal & Newborn Health",
    contributors: ["network"],
    doi: "10.1186/s12884-018-1705-5",
    href: "https://doi.org/10.1186/s12884-018-1705-5",
    summary:
      "Cluster-randomized trial evaluating a low-dose, high-frequency training approach to accelerate newborn survival in Ghanaian hospitals.",
  },
  {
    id: "globhealth-2017-0313",
    title:
      "Incremental cost and cost-effectiveness of low-dose, high-frequency training in basic emergency obstetric and newborn care as compared to status quo: part of a cluster-randomized training intervention evaluation in Ghana",
    authors:
      "Willcox, M., Harrison, H., Asiedu, A., Nelson, A., Gomez, P., & LeFevre, A.",
    journal: "Globalization and Health",
    year: "2017",
    type: "Research Paper",
    theme: "Health Economics & Training",
    contributors: ["network"],
    doi: "10.1186/s12992-017-0313-x",
    href: "https://doi.org/10.1186/s12992-017-0313-x",
    summary:
      "Cost-effectiveness analysis of low-dose, high-frequency EmONC training versus status quo approaches in Ghana.",
  },
];

export const PUBLICATION_THEMES = Array.from(
  new Set(PUBLICATIONS.map((p) => p.theme))
).sort();
