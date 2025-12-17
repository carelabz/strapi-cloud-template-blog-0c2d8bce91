import { gql } from "@apollo/client";

export const GET_NAVBAR = gql`
  query {
      navbar {
        Logo {
          url
          alternativeText
        }
        buttonlink
        buttontext
        items {
          badge
          heading
          id
          label
          link
          order
          submenus {
          icon
           slug
            Button
            featureheading
            features {
              name
              id
            }
            subtitle
            title
            id
          }
        }
        regions {
          link
          name
          order
          siteUrl
        }
        viewText
        regions_connection {
          nodes {
            link
            siteUrl
            order
            name
          }
        }
        regionTitle
        regionSelector
        documentId
      }
      }
    `;

export const GET_BLOG = gql`
    query  {
      blogs {
        title
        slug
        content
        description
        link
        featureImage {
          url
        }
        seo {
          keywords
          metaDescription
          metaRobots
          metaTitle
          metaViewport
          structuredData
          openGraph {
            ogDescription
            ogImage {
              url
            }
            ogType
            ogTitle
            ogUrl
          }
        }
      }
    }`;


export const GET_HOME_SECTION_1 = gql`
query  {
  homes {
    title1
    title2 
    title3
    heading
    description
    btn1_link
    btn1_text
    btn2_link
    btn2_text
    stats {
      label
      number
      id
    }
  }
}`;


export const GET_HOME_SECTION_12 = gql`
query ($locale: I18NLocaleCode!) {
  homes(locale: $locale) {
    title1
    title2
    title3
    heading
    description
    btn1_link
    btn1_text
    btn2_link
    btn2_text
    stats {
      id
      label
      number
    }
  }
}
`;


export const GET_GLOBAL_REACH = gql`
query {
  homeSerivices {
    badge
    title
    description
    home_service_items {
      order
      name
      icon
      Image {
        url
      }
      button1link
      button1text
      button2link
      button2text
      description
      featureheading
      linktext
      performanceheading
      performance {
        name
        stats
      }
      serviceFeatures {
        name
      }
    }
  }
}

`
export const GET_WORLD_IMPACT = gql` 
query {
  worldwideImpact {
    badge
    description
    title
    projectsStat {
      count
      countryCount
      countryName
      title
    }
    successStat {
      title
      value
      icon
    }
  }
}

`
export const GET_INSIGHTS = gql`
query {
  insight {
    title
    description
    button
    buttonLink
    articles {
      title
      slug
      image {
        url
      }
      featuredText
      featured
      description
      date
      content
      icon
      category
      buttontext
      buttonlink
      blog_category {
        category
      }
    }
  }
}
  
`
export const GET_INSIGHTS_BY_LOCALE = gql`
query  ($locale: I18NLocaleCode!){
  insight (locale: $locale){
    title
    description
    button
    buttonLink
    articles {
      title
      slug
      image {
        url
      }
      featuredText
      featured
      description
      date
      content
      icon
      category
      buttontext
      buttonlink
      blog_category {
        category
      }
      locale
    }
  }
}
  
`

export const GET_TESTIMONIALS = gql`
 query {
  testimonialsSection {
    badge
    title
    description
    testimonials {
      feedback
      name
      company
      position
    }
  }
}
  
`
export const GET_FOOTER = gql`
query {
  footer {
    logo {
      url
    }
    description
    socialLinks {
      icon
      url
    }
    footerMenu {
      title
      links {
        label
        url
      }
    }
    bottomLinks {
      label
      url
    }
    copyrightText
    floating_cta {
      heading
      subheading
      button1text
      button1link
      button2icon
    }
  }
}

`
export const GET_SERVICES = gql`
query {
  services {
    badge
    badgeicon
    mainheading1
    mainheading2
    maindesc
    mainbutton1
    mainbuttonlink1
    mainbutton2
    mainbuttonlink2
    mainbutton3
    mainbuttonlink3
    mainimage {
      url
    }
    service_stats {
      label
      number
    }
    service_features {
      title
      description
    }
    Why_Matters {
      title
      subtitle
      icon
      ans1
      ans2
      ans3
      ans4
    }
    WhatsIncludedtitle
    WhatsIncludedsubtitle
    whats_include_features {
      icon
      label
      description
      stat
    }
    methodsTitle
    methodsSubtitle
    methodology {
      Order
      icon
      OrderTitleText
      OrderSubtitleText
    }
    sectorBenefitsTitle
    sectorBenefitsSubtitle
    sectorBenefits {
      icon
      label
      list1
      list2
      list3
    }
    resultsTitle
    resultsSubtitle
    resultsStat {
      percentage
      description
    }
    resultName {
      icon
      label
      description
    }
    readyTitle
    readySubtitle
    readyButton1
    readyButton1Link
    readyButton2
    readyButton2Link
    relatedTitle
    relatedSubtitle
    relatedServices {
      icon
      label
      description
    }
    faqTitle
    faqSubtitle
    questions {
      questionName
      questionAns
    }
    technicalTitle
    technicalItems {
      icon
      label
      format
    }
  }
}

`

export const GET_SINGLE_SERVICE_BY_SLUG = gql`
  query ($slug: String!) {
    services(filters: { slug: { eq: $slug } }) {
      slug
      badge
      badgeicon
      mainheading1
      mainheading2
      maindesc
      mainbutton1
      mainbuttonlink1
      mainbutton2
      mainbuttonlink2
      mainbutton3
      mainbuttonlink3
      mainimage { url }
      service_stats {
        label
        number
      }
        service_features {
      title
      description
      icon
    }
    Why_Matters {
      title
      subtitle
      icon
      ans1
      ans2
      ans3
      ans4
    }
    WhatsIncludedtitle
    WhatsIncludedsubtitle
    whats_include_features {
      icon
      label
      description
      stat
    }
    methodsTitle
    methodsSubtitle
    methodology {
      Order
      icon
      OrderTitleText
      OrderSubtitleText
      image {
        url
      }
    }
    sectorBenefitsTitle
    sectorBenefitsSubtitle
    sectorBenefits {
      icon
      label
      list1
      list2
      list3
    }
    resultsTitle
    resultsSubtitle
    resultsStat {
      percentage
      description
      icon
    }
    resultName {
      icon
      label
      description
    }
    readyTitle
    readySubtitle
    readyButton1
    readyButton1Link
    readyButton2
    readyButton2Link
    relatedTitle
    relatedSubtitle
    relatedServices {
      icon
      label
      description
    }
    faqTitle
    faqSubtitle
    questions {
      questionName
      questionAns
    }
    technicalTitle
    technicalItems {
      icon
      label
      format
     }
    }
  }
`;


export const GET_INSIGHTS_BY_SLUG = gql`
  query ($slug: String!) {
    insightblogs(filters: { slug: { eq: $slug } }) {
      badge
      badgeicon
      mainheading
      description
      mainimage {
        url
      }
      authoricon
      author
      publishedicon
      publishedOn
      timeicon
      time
      slug
      blog_categories {
        category
      }
      category {
        title
      }
      introtitle
      IntroductionContent
      articleSection {
        title
        articleItems {
          order
          slug
          title
        }
      }
      Weeklytitle
      Weeklydesc
      emailplaceholder
      subscribebutton
      subscribebuttonlink
      sections {
        ... on ComponentInsightsWhyTraditionalMaintenance {
          title
          slug
          introduction
          WhyTraditionalItems {
            title
            description
          }
        }
        ... on ComponentInsightsWhatAiPoweredPredictive {
          title
          slug
          content
          imagetext
          image {
            url
          }
        }
        ... on ComponentInsightsKeyBuildingBlocks {
          title
          slug
          KeyBuildingBlocksItems {
            order
            title
            icon
            content
          }
          image {
            url
          }
          imagetext
        }
        ... on ComponentInsightsRealWorld {
          title
          slug
          RealWorldItems {
            icon
            title
            content
            result
          }
        }
        ... on ComponentInsightsHowtoGetStarted {
          title
          content
          image {
            url
          }
          imagetext
          slug
        }
        ... on ComponentInsightsChallenges {
          title
          slug
          introduction
          ChallengesItems {
            title
            description
          }
          conclusion
        }
        ... on ComponentInsightsTheRoadAhead {
          title
          slug
          content
          conclusion
        }
      }
      exploretitle
      exploresubtitle
      button1text
      button1icon
      button1link
      button2text
      button2link
      RelatedArticlesText
      RelatedArticleItems {
        icon
        category
        title
        readtext
        readicon
        link
      }
    }
  }
`;


export const GET_INSIGHTS_BY_SLUG_By_LOCALE = gql`
   query ($slug: String!, $locale: I18NLocaleCode) {
    insightblogs(
      filters: { slug: { eq: $slug } }
      locale: $locale
    ) {
      badge
      badgeicon
      mainheading
      description
      authoricon
      author
      publishedicon
      publishedOn
      timeicon
      time
      slug
      locale
      blog_categories {
        category
      }
      category {
        title
      }
      introtitle
      IntroductionContent
      articleSection {
        title
        articleItems {
          order
          slug
          title
        }
      }
      Weeklytitle
      Weeklydesc
      emailplaceholder
      subscribebutton
      subscribebuttonlink
      sections {
        ... on ComponentInsightsWhyTraditionalMaintenance {
          title
          slug
          introduction
          WhyTraditionalItems {
            title
            description
          }
        }
        ... on ComponentInsightsWhatAiPoweredPredictive {
          title
          slug
          content
          imagetext
          image {
            url
          }
        }
        ... on ComponentInsightsKeyBuildingBlocks {
          title
          slug
          KeyBuildingBlocksItems {
            order
            title
            icon
            content
          }
          image {
            url
          }
          imagetext
        }
        ... on ComponentInsightsRealWorld {
          title
          slug
          RealWorldItems {
            icon
            title
            content
            result
          }
        }
        ... on ComponentInsightsHowtoGetStarted {
          title
          content
          image {
            url
          }
          imagetext
          slug
        }
        ... on ComponentInsightsChallenges {
          title
          slug
          introduction
          ChallengesItems {
            title
            description
          }
          conclusion
        }
        ... on ComponentInsightsTheRoadAhead {
          title
          slug
          content
          conclusion
        }
      }
      exploretitle
      exploresubtitle
      button1text
      button1icon
      button1link
      button2text
      button2link
      RelatedArticlesText
      RelatedArticleItems {
        icon
        category
        title
        readtext
        readicon
        link
      }
    }
  }
`;


export const GET_REGIONCOMPLIANCE_BY_LOCALE = gql`
query ($locale: I18NLocaleCode) {
  homeCompliances (locale:$locale) {
    locale
    description
    badgeicon
    badge
    notetext
    components_features {
      color
      description
      icon
      subtitle
      title
    }
    title
  }
}
`

export const GET_HOME_SERVICES_BY_LOCALE = gql`
query ($locale: I18NLocaleCode) {
   homeSerivices (locale:$locale) {
    badge
    title
    description
    home_service_items {
      order
      name
      icon
      Image {
        url
      }
      button1link
      button1text
      button2link
      button2text
      description
      featureheading
      linktext
      performanceheading
      performance {
        name
        stats
      }
      serviceFeatures {
        name
      }
    }
    locale
  }
}

`
export const GET_PAGE_SEO = gql`
query ($locale: I18NLocaleCode) {
   homePage(locale:$locale) {
    homeseo {
      metaTitle
      keywords
      metaDescription
    }
    locale
  }
}   
`

export const GET_OURTEAM_PAGE = gql`
  query {
    ourTeamPage {
      documentId
      mainheading
      maindescription
      ourteam_stats {
        stats
        label
      }
      button1text
      button1link
      button2text
      button2link
      scrolltext
      mainimage {
        url
      }
      images {
        image {
          url
        }
        label
      }
      snapshot {
        title
        description
        image {
          url
        }
        snapshot_stats {
          icon
          label
          stats
        }
      }
      Drives_Us {
        title
        Drives_Us_Items {
          icon
          title
          Drives_Us_subItems {
            points
          }
        }
      }
      Work_Together {
        title
        description
        Work_Together_Items {
          icon
          title
          description
        }
      }
      Guiding {
        title
        description
        Guiding_Items {
          title
          subtitle
          description
          image {
            url
          }
          hovertext
        }
      }
      Teams_in_Action {
        title
        description
        Teams_in_Action_Items {
          icon
          title
          image {
            url
          }
          Teams_in_Action_Points {
            points
          }
        }
      }
      How_We_Partner {
        title
        description
        How_We_Partner_Items {
          icon
          step
          title
          description
        }
      }
      Milestones {
        title
        description
        Milestones_Items {
          title
          description
          icon
          year
          image {
            url
          }
        }
      }
      What_it_feels {
        title
        description
        What_it_feels_gallery {
          image {
            url
          }
          hovertext
        }
      }
      Where_you_work {
        title
        description
        viewText
        viewLink
        Where_you_work_Items {
          icon
          title
          Where_you_work_countries {
            country
          }
        }
      }
      Recognitions {
        icon
        title
        description
        Recognitions_Item1 {
          label
          icon
        }
        Recognitions_Item2 {
          title
          countryyear
        }
      }
      Ready_to_Talk {
        title
        description
        Ready_to_Talk_buttons {
          icon
          link
          text
        }
      }
      ourteam_page_seo {
        metaTitle
        metaDescription
        metaImage {
          url
        }
        openGraph {
          ogTitle
          ogDescription
          ogImage {
            url
          }
          ogUrl
          ogType
        }
        keywords
        metaRobots
        metaViewport
        canonicalURL
        structuredData
      }
    }
  }
`

export const GET_CONTACT_PAGE = gql`
  query {
    contactPage {
      documentId
      badgeicon
      badge
      title
      description
      image{
       url
      }
      buttons {
        text
        link
      }
      features {
        label
      }
      Choose_how_to_connect {
        title
        description
        connect_items {
          title
          description
          sharetext
          sharelink
          icon
        }
      }
      Tell_us_about_project {
        title
        note
        What_to_share_text
        what_to_share_Items {
          label
        }
        contact_form {
          contact_form_fields {
            fieldname
            placeholder
            required
            order
            errorMessage
          }
          typeOfHelpTitle
          typeOfHelpOptions {
            order
            name
            default
          }
          servicesTitle
          services {
            order
            label
          }
          contactMethodTitle
          contactMethods {
            label
            order
          }
          submitbutton
          reply_msg
        }
      }
      Where_we_support {
        title
        description
        presence_types {
          title
          presence_type_item {
            label
            icon
            icon_color
          }
        }
        regions {
          title
          region_item {
            region_name
            map_embed_code
          }
        }
        locations {
          location_name
          icon
          type
          type_color
          description
        }
      }
      Not_sure {
        title
        description
        Not_sure_Item {
          heading
          description
          Go_to_from_text
          Go_to_from_link
          icon
        }
      }
      Local_expertise {
        title
        Local_expertise_Item {
          count
          label
          icon
        }
        Trusted_text
      }
      Before_you_reach_out_heading
      Before_you_reach_out_subheading
      Before_you_reach_out_Item {
        question
        answer
      }
      contact_cta {
        heading
        icon
        subheading
        link
        message
      }
      contact_page_seo {
        metaTitle
        metaDescription
        metaImage {
          url
        }
        openGraph {
          ogTitle
          ogDescription
          ogImage {
            url
          }
          ogUrl
          ogType
        }
        keywords
        metaRobots
        metaViewport
        canonicalURL
        structuredData
      }  
    }
  }`


export const GET_REGION_CLIENTS_BY_LOCALE = gql`
    query ($locale: I18NLocaleCode){
       homeOurClients(locale:$locale) {
          Clients {
            title
            Clients_name {
              name
              logo {
                url
              }
            }
          }
          Partners {
            Partners_names {
              countryName
              description
              id
            }
            Recenttitle
            description
            title
            id
          }
          badge
          badgeicon
          description
          createdAt
          documentId
          locale
          publishedAt
          title
        }
      }`

export const GET_REGIONS = gql`
 query {
     regions {
        name
        link
        siteUrl
        isDefault
        order
        language
        language_value
      }
  }
`;

export const GET_CONTACT_POPUP_FIELDNAMES = gql`
query  {
  contactPopup {
    documentId
    logo {
      url
    }
    heading
    subheading
    form_fields {
      label
      placeholder
      field_type
      required
      options {
        options_name
      }
    }
    buttontext
    buttonlink
   createdAt
}
}
`;

export const GET_DEFAULT_PAGE = gql`
  query ($slug: String!) {
    pages (filters: { slug: { eq: $slug } }) {
      documentId
      badge
      badgeicon
      title
      buttontext
      buttonlink
      mainimage {
        url
      }
      introtitle
      introcontent
      slug
    }
  }
`;

export const GET_DEFAULT_PAGE_BY_LOCALE = gql`
query ($slug: String!, $locale: I18NLocaleCode) {
    pages(
      filters: { slug: { eq: $slug } }
      locale: $locale
    ) {
      documentId
      badge
      badgeicon
      title
      buttontext
      buttonlink
      mainimage {
        url
      }
      introtitle
      introcontent
      slug
    }
  }
`;


// :::::::::::: Optimize Api Calls :::::::::::::::::://

export const GET_HOMEPAGE_DATA = gql`
  query ($locale: I18NLocaleCode) {
  homePage (locale: $locale) {
    documentId
    title
    slug
    homebanner {
      documentId
      title1
      title2
      title3
      description
      btn1_text
      btn1_link
      stats {
        number
        label
      }
      btn2_text
      btn2_link
      heading
      createdAt
      updatedAt
      publishedAt
      locale
    }
    home_service {
      badge
      title
      description
      home_service_items {
        order
        name
        icon
        linktext
        description
        Image {
          url
        }
        featureheading
        performanceheading
        button1text
        button1link
        button2text
        button2link
        serviceFeatures {
          name
        }
        performance {
          stats
          name
        }
      }
    }
    home_industry {
      badgeicon
      badge
      title
      description
      industry_categories {
        label
      }
      key_industries {
        title
        icon
        highlight_text
        highlight_color
        key_features {
          label
        }
      }
      locale
    }
    home_compliance {
      badgeicon
      badge
      title
      description
      components_features {
        title
        subtitle
        description
        icon
        color
      }
      notetext
    }
    homeseo {
      metaTitle
      metaDescription
      metaImage {
        url
      }
      openGraph {
        ogTitle
        ogDescription
        ogImage {
          url
        }
        ogUrl
        ogType
      }
      keywords
      metaRobots
      metaViewport
      canonicalURL
      structuredData
    }
    testimonials_section {
      badge
      title
      description
      testimonials {
        feedback
        name
        position
        company
      }
    }
    worldwideimpact_section {
      badge
      title
      description
      projectStat {
        title
        countryName
        count
        countryCount
      }
      successStat {
        title
        icon
        value
      }
    }
    home_insights {
      title
      description
      buttontext
      buttonlink
      articles {
        documentId
        title
        slug
        description
        content
        image {
          url
        }
        category
        date
        featured
        buttontext
        buttonlink
        featuredText
        blog_category {
          category
        }
        icon
       
      }
    }
    home_our_client {
      badgeicon
      badge
      title
      description
      Partners {
        Partners_names {
          countryName
          description
        }
      }
      Clients {
        title
        Clients_name {
          logo {
            url
          }
        }
      }
    }
  }
}
`

export const GET_ALL_INSIGHTBLOGS = gql`
  query {
    insightblogs (pagination: { page: 1, pageSize: 1000 }) {
      mainheading
      slug
      description
      mainimage {
        url
      }
      publishedicon
      publishedOn
      blog_categories {
        category
      }
    }
  }
`;

