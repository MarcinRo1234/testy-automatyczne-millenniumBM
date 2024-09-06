/// <reference types ="cypress" />

// const { describe } = require("mocha");

// const { beforeEach } = require("mocha")
beforeEach (() => {
  cy.visit('https://www.millenniumbm.pl/');
  cy.viewport(1920, 1080);
  cy.get("div#cookie-m-wrapper-n div.cookies-m-buttons a#allow-cookies-m-btn").click();
  
})
describe('Home Page menu testing - righ top corner', () => {
  it('First button - Punkty usług maklerskich', () => {
    
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only li a.mds.bm-tertiary-menu__item").eq(0).click();
    cy.location("pathname").should("eq", "/pum");
    // cy.wait(3000);
    // cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_JRaq8MoypXpi div.bm-facilities-map__sidebar div.bm-facilities-map__search-and-filters div.bm-search-input").type("Warszawa {enter}");
    // cy.wait(3000);
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only li a.mds.bm-tertiary-menu__item").last().click();
    // cy.location("pathname").contains("/en/bsp/");
    cy.url().should("include", "/en/bsp?languageChange=true")
    // cy.wait(3000);
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ div.mds.bm-nav-footer__btm").scrollIntoView();
    
  })
  it("Second button - kontakt", () => {
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only li a.mds.bm-tertiary-menu__item").eq(1).click();
    cy.location("pathname").should("eq", "/kontakt");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only li a.mds.bm-tertiary-menu__item").last().click();
    cy.url().should("include", "/en/contact?languageChange=true")
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ div.mds.bm-nav-footer__btm").scrollIntoView();
  })
})
describe("Second menu test - search", () => {
  it("Test Search login", ()=> {
    cy.get('header.mds.bm-menu-header div.mds.bm-menu-header__right button.mds.bm-search-login__btn.desktop-only').click();
    cy.wait(3000);
    cy.get("div.bm-search-curtain__curtain-container div.bm-search-curtain__content div.mds.bm-search div.bm-search__input").eq(1).type("konto {enter}", {delay: 500});
    // cy.wait(3000);
    // cy.get("p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_7hVjfLupABiI_").should("be.visible");
    cy.url().should("include", "/wyniki-wyszukiwania?q=konto")
    // cy.wait(3000);
    // cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ div.mds.bm-menu-header__right span.mds.desktop-only").click();
    // cy.wait(3000);

    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_7hVjfLupABiI_ div.gsc-results.gsc-webResult table.gsc-table-result td.gsc-table-cell-snippet-close div.gs-title.gsc-table-cell-thumbnail.gsc-thumbnail-left a").as("SearchListResults");
    // cy.get("@SearchListResults").first().click();
    cy.get("@SearchListResults").should("have.length", 10);
    // cy.get("@SearchListResults").invoke("removeAttr", "target").first().click()
    // cy.go("back");
  })
})
describe("Second menu test - login", () => {
  it("Test login", ()=> {
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ div.mds.bm-menu-header__right span.mds.desktop-only").click();
    cy.get("dialog.bm-modal-col-d-8.bm-modal-double__container div.bm-modal-double div.bm-modal__buttons--centered wc-button a").invoke('removeAttr', 'target').first().click();
    cy.get("div#login input#logLogin").focus();
    cy.url().should("include", "https://epp.millenniumbm.pl/")
    cy.go("back");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ div.mds.bm-menu-header__right span.mds.desktop-only").click();
    cy.get("dialog.bm-modal-col-d-8.bm-modal-double__container div.bm-modal-double div.bm-modal__buttons--centered wc-button a").invoke('removeAttr', 'target').eq(1).click();
    cy.url().should("include", "https://service.millenniumbm.pl/web/guest/home?p_p_state=maximized&p_p_mode=view&refererPlid=135001&saveLastPath=false&_com_liferay_login_web_portlet_LoginPortlet_mvcRenderCommandName=%2Flogin%2Flogin&p_p_id=com_liferay_login_web_portlet_LoginPortlet&p_p_lifecycle=0&_com_liferay_login_web_portlet_LoginPortlet_redirect=%2Fgroup%2Fguest%2F");
    
  })
})
describe("Home Page Main Menu test", () => {
  // beforeEach (() => {
  //   cy.visit('https://www.millenniumbm.pl/');
  //   cy.get("div#cookie-m-wrapper-n div.cookies-m-buttons a#allow-cookies-m-btn").click();
  //   cy.viewport(1920, 1080);
  // })
  it("Main Menu - first button", () => {
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.mds.bm-secondary-menu.desktop-only li a.mds.bm-secondary-menu__item").eq(0).click();
    cy.location("pathname").should("eq", "/rachunki-maklerskie");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ div.mds.bm-nav-footer__btm").scrollIntoView();
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only li a.mds.bm-tertiary-menu__item").last().click();
    cy.url().should("include", "/en/brokerage-accounts?languageChange=true")
    
  })
  it("Main Menu - second button", () => {
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.mds.bm-secondary-menu.desktop-only li a.mds.bm-secondary-menu__item").eq(1).click();
    cy.location("pathname").should("eq", "/ikze");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ div.mds.bm-nav-footer__btm").scrollIntoView();
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only li a.mds.bm-tertiary-menu__item").last().click();
    cy.url().should("include", "/en/ikze-en?languageChange=true")
  })
  it("Main Menu - third button", () => {
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.mds.bm-secondary-menu.desktop-only li a.mds.bm-secondary-menu__item").eq(2).click();
    cy.location("pathname").should("eq", "/serwisy-i-narzedzia");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ div.mds.bm-nav-footer__btm").scrollIntoView();
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only li a.mds.bm-tertiary-menu__item").last().click();
    cy.url().should("include", "/en/services-and-tools?languageChange=true")
  })
  it("Main Menu - four button", () => {
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.mds.bm-secondary-menu.desktop-only li a.mds.bm-secondary-menu__item").eq(3).click();
    cy.location("pathname").should("eq", "/instrumenty");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ div.mds.bm-nav-footer__btm").scrollIntoView();
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only li a.mds.bm-tertiary-menu__item").last().click();
    cy.url().should("include", "/en/instruments?languageChange=true")
  })
  it("Main Menu - fifth button", () => {
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.mds.bm-secondary-menu.desktop-only li a.mds.bm-secondary-menu__item").eq(4).click();
    cy.location("pathname").should("eq", "/emitenci-i-akcjonariusze");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ div.mds.bm-nav-footer__btm").scrollIntoView();
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only li a.mds.bm-tertiary-menu__item").last().click();
    cy.url().should("include", "/en/issuers-and-shareholders?languageChange=true")
  })
  it("Main Menu - sixth button", () => {
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.mds.bm-secondary-menu.desktop-only li a.mds.bm-secondary-menu__item").last().click();
    cy.location("pathname").should("eq", "/analizy-i-edukacja");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ div.mds.bm-nav-footer__btm").scrollIntoView();
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only li a.mds.bm-tertiary-menu__item").last().click();
    cy.url().should("include", "/en/analyses-and-education?languageChange=true")
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ div.mds.bm-nav-footer__btm").scrollIntoView();
        cy.wait(5000);
  })
  })
describe("Komponent Banner_2023", () => {
    it("Button checking", () => {
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_x5aSOhQRa6l2_ div.mds.bm-banner__btns wc-button").click();
      cy.location("pathname").should("eq", "/rachunki-maklerskie");
    })
  })


describe("Komponent PROMO_BOX_2023", () => {
    it("First button test", () => {
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_0eSEXWkw0G42_ ul.bm-col-d-9.bm-promo-box-group-expand__visible li wc-button").eq(0).click();
      cy.location("pathname").should("eq", "/rachunki-maklerskie");
      cy.go("back");
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_0eSEXWkw0G42_ ul.bm-col-d-9.bm-promo-box-group-expand__visible li wc-button").eq(1).click();
      cy.location("pathname").should("eq", "/ikze");
      cy.go("back");
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_0eSEXWkw0G42_ ul.bm-col-d-9.bm-promo-box-group-expand__visible li wc-button").eq(2).click();
      cy.location("pathname").should("eq", "/emitenci-i-akcjonariusze");
    })
  })
describe("Komponent ARTICLE_2023", () => {
  it("Checking-button", () => {
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_BuorUbQq9bsS_ div.mds.bm-article__content.bm-col-d-4 div.bm-button-group wc-button-link").click();
  })
})
describe("Komunikaty i ogłoszenia - test", () => {
  it("Checking", () => {
    cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_GmbgK9KPm8K2 h2").as("documentListHeader");
    cy.get("@documentListHeader").and("include.text", "Komunikaty i ogłoszenia")
    cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_GmbgK9KPm8K2 ul.bm-faq__list li.mds.bm-faq-item").should("have.length.at.least", 2);
    cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_GmbgK9KPm8K2 ul.bm-faq__list li.mds.bm-faq-item span.bm-faq-item__header-chevron i.mds.bm-icon.bm-icon__chevron").as("documentListChevrons");
    cy.get("@documentListChevrons").first().click();
    cy.get("@documentListChevrons").eq(3).click();
    cy.get("@documentListChevrons").eq(5).click();
  })
})

describe("Footer test", () => {
  it("Top footer test", () => {
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ div.bm-nav-footer__top ul.bm-nav-footer__top__left li wc-button-link").first().click();
    cy.location("pathname").should("eq", "/pum");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ div.bm-nav-footer__top ul.bm-nav-footer__top__left li wc-button-link").eq(1).click();
    cy.location("pathname").should("eq", "/kontakt/formularz-kontaktowy");
    
  })
  it("Mid footer test", () => {
    cy.get("section.bm-nav-footer__mid__group.bm-col-d-3 ul.bm-nav-footer__mid__links li wc-button-link").as("midFooter");
    cy.get("@midFooter").first().click();
    cy.location("pathname").should("eq", "/kim-jestesmy");
    cy.get("@midFooter").eq(1).click();
    cy.location("pathname").should("eq", "/kim-jestesmy/podstawowe-informacje");
    cy.get("@midFooter").eq(2).click();
    cy.location("pathname").should("eq", "/adekwatnosc-kapitalowa");
    cy.get("@midFooter").eq(3).click();
    cy.location("pathname").should("eq", "/esg");
    cy.get("@midFooter").eq(4).click();
    cy.location("pathname").should("eq", "/kontakt");
    cy.get("@midFooter").eq(5).click();
    cy.location("pathname").should("eq", "/regulaminy");
    cy.get("@midFooter").eq(6).click();
    cy.location("pathname").should("eq", "/prowizje-i-oplaty");
    cy.get("@midFooter").eq(7).click();
    cy.location("pathname").should("eq", "/komunikaty");
    cy.get("@midFooter").eq(8).click();
    cy.location("pathname").should("eq", "/reklamacje");
    cy.get("@midFooter").eq(9).click();
    cy.location("pathname").should("eq", "/podatek");
    cy.get("@midFooter").eq(10).click();
    cy.location("pathname").should("eq", "/mifid");
    cy.get("@midFooter").eq(11).click();
    cy.location("pathname").should("eq", "/fatca-i-crs");
    cy.get("@midFooter").eq(12).click();
    cy.location("pathname").should("eq", "/zasady-bezpieczenstwa");
    cy.get("@midFooter").eq(13).click();
    cy.location("pathname").should("eq", "/pliki-cookies");
  })
  it("Bottom footer test", () => {
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ div.bm-nav-footer__btm ul.bm-nav-footer__btm__links li wc-button-link").as("btmFooterLinks");
    cy.get("@btmFooterLinks").first().click();
    cy.location("pathname").should("eq", "/ochrona-danych");
    cy.get("@btmFooterLinks").eq(1).click();
    cy.location("pathname").should("eq", "/zastrzezenia-prawne");
    cy.get("@btmFooterLinks").eq(2).click();
    cy.location("pathname").should("eq", "/mapa-strony");
    // cy.wait(7000);
  
  })
describe("social footer", () =>{
  it("test pierwszej ikonki", () => {
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ div.bm-nav-footer__btm ul.bm-nav-footer__btm__socials li wc-button-link a").invoke('removeAttr', 'target').first().click();
      cy.origin('https://www.bankmillennium.pl/', () => {
          // cy.get("a span.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3").eq(9).click();
          cy.location().should(location => {
        expect(location.origin).to.eq("https://www.bankmillennium.pl");
        // cy.go("back");
        // cy.url().should("eq", "https://www.bankmillennium.pl");
          })
      })
   })
   it("test drugiej ikonki", () => {
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ div.bm-nav-footer__btm ul.bm-nav-footer__btm__socials li wc-button-link a").invoke('removeAttr', 'target').eq(1).click();
    cy.url('https://www.x.com/BankMillennium', () => {
      cy.location().should(location => {
        expect(location.pathname).to.eq("https://www.x.com/BankMillennium");
      })
    })
  
  
    })
    it("test trzeciej ikonki", () => {
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ div.bm-nav-footer__btm ul.bm-nav-footer__btm__socials li wc-button-link a").invoke('removeAttr', 'target').eq(2).click();
      cy.url('https://www.youtube.com/user/BankMillennium', () => {
        cy.location().should(location => {
          expect(location.pathname).to.eq("https://www.youtube.com/user/BankMillennium");
        })
      })
    
    
      })
      it("test czwartej ikonki", () => {
        cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ div.bm-nav-footer__btm ul.bm-nav-footer__btm__socials li wc-button-link a").invoke('removeAttr', 'target').eq(3).click();
        cy.url('https://www.linkedin.com/company/bank-millennium', () => {
          cy.location().should(location => {
            expect(location.pathname).to.eq("https://www.linkedin.com/company/bank-millennium");
          })
        })
      
      
        })
})  
})
