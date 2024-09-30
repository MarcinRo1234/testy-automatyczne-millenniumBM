/// <reference types ="cypress" />


beforeEach (() => {
  cy.visit('https://www.millenniumbm.pl/');
  cy.viewport(1920, 1080);
  cy.get("div#cookie-m-wrapper-n div.cookies-m-buttons a#allow-cookies-m-btn").click();
  
})


describe('Home Page menu testing - righ top corner', () => {
  it("Right top corner - style", () =>{
    //Style kontenera
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only").should("have.css", "justify-content", "flex-end");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only").should("have.css", "grid-area", "tertiaryMenu");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only").should("have.css", "margin", "0px");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only").should("have.css", "column-gap", "24px");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only").should("have.css", "align-items", "center");
    // Style elementu listy - 1st element
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only li a.mds.bm-tertiary-menu__item").first().should("have.css", "font-size", "14px");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only li a.mds.bm-tertiary-menu__item").first().should("have.css", "line-height", "20px");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only li a.mds.bm-tertiary-menu__item").first().should("have.css", "column-gap", "8px");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only li a.mds.bm-tertiary-menu__item").first().should("have.css", "color", "rgb(46, 46, 46)");
    //Style elementu listy - 2nd element
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only li a.mds.bm-tertiary-menu__item").eq(1).should("have.css", "font-size", "14px");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only li a.mds.bm-tertiary-menu__item").eq(1).should("have.css", "line-height", "20px");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only li a.mds.bm-tertiary-menu__item").eq(1).should("have.css", "column-gap", "8px");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only li a.mds.bm-tertiary-menu__item").eq(1).should("have.css", "color", "rgb(46, 46, 46)");

  }
  )
  it('First button - Punkty usług maklerskich - click', () => {
    
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only li a.mds.bm-tertiary-menu__item").first().click();
    cy.location("pathname").should("eq", "/pum");

    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only li a.mds.bm-tertiary-menu__item").last().click();
    cy.url().should("include", "/en/bsp?languageChange=true")
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ div.mds.bm-nav-footer__btm").scrollIntoView();
    
  })
  it("Second button - kontakt - click", () => {
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only li a.mds.bm-tertiary-menu__item").eq(1).click();
    cy.location("pathname").should("eq", "/kontakt");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.bm-tertiary-menu.desktop-only li a.mds.bm-tertiary-menu__item").last().click();
    cy.url().should("include", "/en/contact?languageChange=true")
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ div.mds.bm-nav-footer__btm").scrollIntoView();
  })
})
describe("Second menu test", () => {
  it("Style kontenera", () => {
    cy.get("header.mds.bm-menu-header").as("secondMenu");
    cy.get("@secondMenu").should("have.css", "padding-top", "24px");
    cy.get("@secondMenu").should("have.css", "border-top", "1px solid rgb(223, 223, 223)");
    cy.get("@secondMenu").should("have.css", "margin-top", "12px");
    cy.get("@secondMenu").should("have.css", "margin-bottom", "36px");
    cy.get("@secondMenu").should("have.css", "display", "flex");
    cy.get("@secondMenu").should("have.css", "flex-direction", "row");
    cy.get("@secondMenu").should("have.css", "justify-content", "space-between");
    cy.get("@secondMenu").should("have.css", "align-items", "center");
    cy.get("@secondMenu").should("have.css", "z-index", "1");
  })
  it("Style - logo biura maklerskiego", () => {
    cy.get("header.mds.bm-menu-header img").should("have.css", "width", "212px");
    cy.get("header.mds.bm-menu-header img").should("have.css", "display", "block");
    cy.get("header.mds.bm-menu-header img").should("be.visible");
  })
  it("Style kontenera - wyszukiwarka i przycisk zaloguj", () => {
    cy.get("header.mds.bm-menu-header div.mds.bm-search-login").as("searchAndLoginStyle");
    cy.get("@searchAndLoginStyle").should("have.css", "display", "flex");
    cy.get("@searchAndLoginStyle").should("have.css", "align-items", "center");
    cy.get("@searchAndLoginStyle").should("have.css", "display", "flex");
  })
  it("Style - lupka", () => {
    cy.get("header.mds.bm-menu-header button.mds.bm-search-login__btn.desktop-only.bm-search-button").as("searchButton");
    cy.get("@searchButton").should("have.css", "display", "flex");
    cy.get("@searchButton").should("have.css", "width", "40px");
    cy.get("@searchButton").should("have.css", "height", "40px");
    cy.get("@searchButton").should("have.css", "border", "0px none rgb(46, 46, 46)");
    cy.get("@searchButton").should("have.css", "margin", "0px 24px 0px 0px");
    cy.get("@searchButton").should("have.css", "padding", "0px");
    cy.get("@searchButton").should("have.css", "flex-direction", "column");
    cy.get("@searchButton").should("have.css", "align-items", "center");
    cy.get("@searchButton").should("have.css", "justify-content", "center");
    cy.get("@searchButton").should("have.css", "cursor", "pointer");
    cy.get("@searchButton").should("have.css", "color", "rgb(46, 46, 46)");
  });
  it("Style - przycisk zaloguj", () => {
    cy.get("header.mds.bm-menu-header button.mds.bm-button.bm-button--primary").as("loginButton");
    cy.get("@loginButton").should("have.css", "background-color", "rgb(189, 0, 79)");
    cy.get("@loginButton").should("have.css", "color", "rgb(255, 255, 255)");
    cy.get("@loginButton").should("have.css", "position", "relative");
    cy.get("@loginButton").should("have.css", "font-weight", "700");
    cy.get("@loginButton").should("have.css", "font-size", "16px");
    cy.get("@loginButton").should("have.css", "overflow", "hidden");
    cy.get("@loginButton").should("have.css", "transition", "0.4s");
    cy.get("@loginButton").should("have.css", "height", "51px");
    cy.get("@loginButton").should("have.css", "padding", "0px 24px");
    cy.get("@loginButton").should("have.css", "border", "0px none rgb(255, 255, 255)");
    cy.get("@loginButton").should("have.css", "display", "flex");
    cy.get("@loginButton").should("have.css", "align-items", "center");
    cy.get("@loginButton").should("have.css", "justify-content", "center");
    cy.get("@loginButton").should("have.css", "border-radius", "4px");
    cy.get("@loginButton").should("have.css", "text-transform", "uppercase");
    cy.get("@loginButton").should("have.css", "cursor", "pointer");
    cy.get("@loginButton").should("have.css", "font-size", "16px");
    cy.get("@loginButton").should("have.css", "line-height", "24px");
  })
  it("Style - kurtyna - wyszukiwarka", () => {
    cy.get('header.mds.bm-menu-header div.mds.bm-menu-header__right button.mds.bm-search-login__btn.desktop-only').click();
    cy.get("div.mds.bm-menu-search.desktop-only div.bm-search-curtain__curtain-container").as("styleKurtyna");
    cy.get("@styleKurtyna").should("have.css", "opacity", "1");
    cy.get("@styleKurtyna").should("have.css", "transform", "matrix(1, 0, 0, 1, -960, 0)");
    cy.get("@styleKurtyna").should("have.css", "box-shadow", "rgba(46, 46, 46, 0.1) 0px 20px 20px 0px");
    cy.get("@styleKurtyna").should("have.css", "position", "absolute");
    cy.get("@styleKurtyna").should("have.css", "left", "0px");
    cy.get("@styleKurtyna").should("have.css", "right", "0px");
    cy.get("@styleKurtyna").should("have.css", "display", "flex");
    cy.get("@styleKurtyna").should("have.css", "place-content", "center");
    cy.get("@styleKurtyna").should("have.css", "background", "rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box");
    cy.get("@styleKurtyna").should("have.css", "transition", "transform 0.3s, opacity 0.3s");
    cy.get("@styleKurtyna").should("have.css", "width", "1920px");
    cy.get("@styleKurtyna").should("have.css", "margin-left", "800px");
  })
  it("Style modal zaloguj", () => {
    it("Style kontenera", () => {
      cy.get("mds.bm-modal  bm-modal-col-d-8.bm-modal-double__container").as("modalContainer");
      cy.get("@modalContainer").should("have.css", "max-width", "1060px");
      cy.get("@modalContainer").should("have.css", "animation", "scale-up 0.4s fade-in 0.4s forwards");
      cy.get("@modalContainer").should("have.css", "z-index", "999");
      cy.get("@modalContainer").should("have.css", "z-index", "999");
      cy.get("@modalContainer").should("have.css", "background-color", "rgb(255, 255, 255)");
      cy.get("@modalContainer").should("have.css", "border-radius", "10px");
      cy.get("@modalContainer").should("have.css", "border", "0px");
      cy.get("@modalContainer").should("have.css", "height", "fit-content");
      cy.get("@modalContainer").should("have.css", "margin", "auto");
      cy.get("@modalContainer").should("have.css", "padding", "40px");
    })
    it("Style boxów", () => {
      cy.get("dialog.mds.bm-modal.bm-modal-col-d-8.bm-modal-double__container div.mds.bm-modal-double__content h2").first().as("boxHeaderLeft");
      cy.get("@boxHeaderLeft").should("have.css", "margin-top", "20px");
      cy.get("@boxHeaderLeft").should("have.css", "margin-bottom", "20px");
      cy.get("@boxHeaderLeft").should("have.css", "font-size", "24px");
      cy.get("@boxHeaderLeft").should("have.css", "line-height", "32px");

      cy.get("dialog.mds.bm-modal.bm-modal-col-d-8.bm-modal-double__container div.mds.bm-modal-double__content h2").eq(1).as("boxHeaderRight");
      cy.get("@boxHeaderRight").should("have.css", "margin-top", "20px");
      cy.get("@boxHeaderRight").should("have.css", "margin-bottom", "20px");
      cy.get("@boxHeaderRight").should("have.css", "font-size", "24px");
      cy.get("@boxHeaderRight").should("have.css", "line-height", "32px");
      
      cy.get("dialog.mds.bm-modal.bm-modal-col-d-8.bm-modal-double__container div.bm-modal__buttons.bm-modal__buttons--centered").as("buttonLeft");
      cy.get("@buttonLeft").should("have.css", "margin-bottom", "20px");
      cy.get("@buttonLeft").should("have.css", "padding", "40px 40px 20px");

      cy.get("dialog.mds.bm-modal.bm-modal-col-d-8.bm-modal-double__container div.bm-modal__buttons.bm-modal__buttons--centered").as("buttonRight");
      cy.get("@buttonRight").should("have.css", "margin-bottom", "20px");
      cy.get("@buttonRight").should("have.css", "padding", "40px 40px 20px");

    })
  })
})
describe("Second menu test - search", () => {
  it("Test Search login", ()=> {
    cy.get('header.mds.bm-menu-header div.mds.bm-menu-header__right button.mds.bm-search-login__btn.desktop-only').click();
    // cy.wait(3000);
    cy.get("div.bm-search-curtain__curtain-container div.bm-search-curtain__content div.mds.bm-search div.bm-search__input").eq(1).type("konto {enter}", {delay: 500});
    cy.url().should("include", "/wyniki-wyszukiwania?q=konto")


    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_7hVjfLupABiI_ div.gsc-results.gsc-webResult table.gsc-table-result td.gsc-table-cell-snippet-close div.gs-title.gsc-table-cell-thumbnail.gsc-thumbnail-left a").as("SearchListResults");

    cy.get("@SearchListResults").should("have.length", 10);

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
  it("Main menu - style", () => {
    //Style kontenera
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.mds.bm-secondary-menu.desktop-only").should("have.css", "justify-content", "space-between");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.mds.bm-secondary-menu.desktop-only").should("have.css", "padding-bottom", "24px");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.mds.bm-secondary-menu.desktop-only").should("have.css", "padding-left", "34px");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.mds.bm-secondary-menu.desktop-only").should("have.css", "padding-right", "34px");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.mds.bm-secondary-menu.desktop-only").should("have.css", "grid-area", "secondaryMenu");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.mds.bm-secondary-menu.desktop-only").should("have.css", "display", "flex");
    //Style elementów listy
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.mds.bm-secondary-menu.desktop-only li a.mds.bm-secondary-menu__item").first().should("have.css", "font-size", "18px");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.mds.bm-secondary-menu.desktop-only li a.mds.bm-secondary-menu__item").first().should("have.css", "line-height", "24px");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.mds.bm-secondary-menu.desktop-only li a.mds.bm-secondary-menu__item").first().should("have.css", "color", "rgb(46, 46, 46)");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_COMPLETE_MENU_2023_ ul.mds.bm-secondary-menu.desktop-only li a.mds.bm-secondary-menu__item").first().should("have.css", "font-weight", "700");
  })
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
  it("Main Menu - fourth button", () => {
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
        // cy.wait(5000);
  })
  })
describe("Komponent Banner_2023", () => {
    it("Sprawdzenie wymiarów komponentu", () => {
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_x5aSOhQRa6l2_ div.mds.bm-col-d-12").should("have.css", "width", "1600px")
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_x5aSOhQRa6l2_ div.mds.bm-col-d-12").should("have.css", "height", "460px")  
    })
    it("Sprawdzenie wymiarów grafiki", () => {
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_x5aSOhQRa6l2_ article.mds.bm-container.bm-container__wider.bm-banner__wrapper picture.mds.bm-banner__img").should("have.css", "width", "731px")
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_x5aSOhQRa6l2_ article.mds.bm-container.bm-container__wider.bm-banner__wrapper picture.mds.bm-banner__img").should("have.css", "height", "460px")
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_x5aSOhQRa6l2_ article.mds.bm-container.bm-container__wider.bm-banner__wrapper picture.mds.bm-banner__img").should("be.visible");
    })
    it("Sprawdzenie czcionek", () => {
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_x5aSOhQRa6l2_ div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 h1").should("have.css", "font-size", "28px");
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_x5aSOhQRa6l2_ div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 h1").should("have.css", "font-family", "Roboto");
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_x5aSOhQRa6l2_ div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 h1").should("have.css", "Margin", "0px 0px 20px");
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_x5aSOhQRa6l2_ div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 h1").should("have.css", "color", "rgb(46, 46, 46)");
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_x5aSOhQRa6l2_ div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 P").should("have.css", "color", "rgb(106, 106, 106)");
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_x5aSOhQRa6l2_ div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 P").should("have.css", "font-size", "16px");
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_x5aSOhQRa6l2_ div.mds.bm-banner__info.bm-col-d-6.bm-offset-d-1 P").should("have.css", "font-family", "Roboto");
    })
    it("Sprawdzenie wymiarów buttona", () => {
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_x5aSOhQRa6l2_ div.mds.bm-banner__btns wc-button").should("have.css", "width", "184.25px");
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_x5aSOhQRa6l2_ div.mds.bm-banner__btns wc-button").should("have.css", "height", "51px");
      cy.get(".bm-banner__btns > wc-button > .mds").should("have.css", "background-color", "rgb(189, 0, 79)");
      
    })
    it("Sprawdzenie buttona - kliknięcie", () => {
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_x5aSOhQRa6l2_ div.mds.bm-banner__btns wc-button").click();
      cy.location("pathname").should("eq", "/rachunki-maklerskie");
    })
  })
describe("Komponent Article 2023", () => {
    it("Sprawdzenie wymiarów komponentów", () => {
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_Lad3qzY7nBYe_ article.mds.bm-article.bm-container").should("have.css", "width", "1600px");
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_Lad3qzY7nBYe_ article.mds.bm-article.bm-container").should("have.css", "height", "381.15625px");
    })
    it("Sprawdzenie wymiarów grafiki", () => {
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_Lad3qzY7nBYe_ picture.bm-col-d-4.bm-offset-d-2.mds.desktop-only img").should("be.visible");
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_Lad3qzY7nBYe_ picture.bm-col-d-4.bm-offset-d-2.mds.desktop-only img").should("have.css", "width", "520px");
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_Lad3qzY7nBYe_ picture.bm-col-d-4.bm-offset-d-2.mds.desktop-only img").should("have.css", "height", "381.15625px");
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_Lad3qzY7nBYe_ picture.bm-col-d-4.bm-offset-d-2.mds.desktop-only img").should("be.visible");
    })
    it("Sprawdzenie styli - czcionki, wielkości czcionek, kolor czcionek, marginesów", () => {
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_Lad3qzY7nBYe_ div.mds.bm-article__content.bm-col-d-4 h2").should("have.css", "font-size", "24px");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_Lad3qzY7nBYe_ div.mds.bm-article__content.bm-col-d-4 h2").should("have.css", "font-family", "Roboto, sans-serif");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_Lad3qzY7nBYe_ div.mds.bm-article__content.bm-col-d-4 h2").should("have.css", "color", "rgb(46, 46, 46)");

    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_Lad3qzY7nBYe_ div.mds.bm-article__content.bm-col-d-4 div.bm-article__description").should("have.css", "font-family", "Roboto, sans-serif");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_Lad3qzY7nBYe_ div.mds.bm-article__content.bm-col-d-4 div.bm-article__description").should("have.css", "color", "rgb(115, 115, 115)");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_Lad3qzY7nBYe_ div.mds.bm-article__content.bm-col-d-4 div.bm-article__description").should("have.css", "font-size", "16px");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_Lad3qzY7nBYe_ div.mds.bm-article__content.bm-col-d-4 div.bm-article__description").should("have.css", "margin", "20px 0px");
  })
})

describe("Komponent PROMO_BOX_2023", () => {
    it("Sprawdzenie wymiarów komponentu", () => {
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_0eSEXWkw0G42_ div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible").should("have.css", "width", "1195px");
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_0eSEXWkw0G42_ div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible").should("have.css", "height", "565.296875px");
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_0eSEXWkw0G42_ div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li").first().should("have.css", "width", "385px");
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_0eSEXWkw0G42_ div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible").first().should("have.css", "height", "565.296875px");
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_0eSEXWkw0G42_ div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li").last().should("have.css", "width", "385px");
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_0eSEXWkw0G42_ div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible").last().should("have.css", "height", "565.296875px");
      
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_0eSEXWkw0G42_ div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible section.bm-promo-box__content").last().should("have.css", "padding", "0px 32px");
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_0eSEXWkw0G42_ div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible section.bm-promo-box__content").last().should("have.css", "padding", "0px 32px");
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_0eSEXWkw0G42_ div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible section.bm-promo-box__btns").first().should("have.css", "padding", "0px 32px 32px");

    })
    it("Sprawdzenie wymiarów grafiki", () => {
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_0eSEXWkw0G42_ div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li img").first().should("have.css", "width", "383px")
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_0eSEXWkw0G42_ div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li img").first().should("have.css", "height", "259.296875px")
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_0eSEXWkw0G42_ div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li img").last().should("have.css", "width", "383px")
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_0eSEXWkw0G42_ div.mds.bm-container.bm-promo-box-group-expand ul.bm-col-d-9.bm-promo-box-group-expand__visible li img").last().should("have.css", "height", "259.296875px")
    })
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
  it("Sprawdzenie wymiarów komponentu", () => {
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_BuorUbQq9bsS_ article.mds.bm-article.bm-container").should("have.css", "width", "1600px");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_BuorUbQq9bsS_ article.mds.bm-article.bm-container").should("have.css", "height", "403px");
  })
  it("Sprawdzenie wymiarów grafiki", () => {
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_BuorUbQq9bsS_ picture.bm-col-d-4.bm-offset-d-2.mds.desktop-only img").should("have.css", "width", "520px");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_BuorUbQq9bsS_ picture.bm-col-d-4.bm-offset-d-2.mds.desktop-only img").should("have.css", "height", "381.15625px");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_BuorUbQq9bsS_ picture.bm-col-d-4.bm-offset-d-2.mds.desktop-only img").should("be.visible");
  })
  it("Sprawdzenie czcionek", () => {
  cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_BuorUbQq9bsS_ div.mds.bm-article__content.bm-col-d-4 h2").should("have.css", "font-size", "24px");
  cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_BuorUbQq9bsS_ div.mds.bm-article__content.bm-col-d-4 h2").should("have.css", "font-family", "Roboto, sans-serif");
  cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_BuorUbQq9bsS_ div.mds.bm-article__content.bm-col-d-4 h2").should("have.css", "color", "rgb(46, 46, 46)");

  cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_BuorUbQq9bsS_ div.mds.bm-article__content.bm-col-d-4 div.bm-article__description").should("have.css", "font-family", "Roboto, sans-serif");
  cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_BuorUbQq9bsS_ div.mds.bm-article__content.bm-col-d-4 div.bm-article__description").should("have.css", "color", "rgb(115, 115, 115)");
  cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_BuorUbQq9bsS_ div.mds.bm-article__content.bm-col-d-4 div.bm-article__description").should("have.css", "font-size", "16px");
  cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_BuorUbQq9bsS_ div.mds.bm-article__content.bm-col-d-4 div.bm-article__description").should("have.css", "margin", "20px 0px");
  })
  it("Sprawdzenie listy i poszczególnych punktów", () => {

  cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_BuorUbQq9bsS_ ul.mds.bm-list").should("have.css", "margin", "0px 0px 20px");
  cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_BuorUbQq9bsS_ ul.mds.bm-list li").first().should("have.css", "padding", "0px 0px 0px 18px")
  cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_BuorUbQq9bsS_ ul.mds.bm-list li").first().should("have.css", "margin", "0px 0px 16px")

  })
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
    cy.get("@documentListChevrons").last().click();
  })
  it("Sprawdzanie styli nagłówka", () => {
    cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_GmbgK9KPm8K2 h2.mds.bm-title--small.bm-faq__title").as("faq_title");
    cy.get("@faq_title").should("have.css", "margin", "0px 0px 24px");
    cy.get("@faq_title").should("have.css", "font-size", "24px");
    cy.get("@faq_title").should("have.css", "line-height", "32px");
  })
  it("Sprawdzenie styli elementu listy", () => {
    cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_GmbgK9KPm8K2 ul.bm-faq__list li label.bm-faq-item__header").should("have.css", "padding", "20px 0px");
    cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_GmbgK9KPm8K2 ul.bm-faq__list li").should("have.css", "border-top", "1px solid rgb(223, 223, 223)");
  })
  it("Sprawdzenie elementu listy - ikona", ()=> {
    cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_GmbgK9KPm8K2 ul.bm-faq__list li label.bm-faq-item__header span.bm-faq-item__header-icon").should("have.css", "margin-right", "16px");
    cy.get("div#portlet_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_GmbgK9KPm8K2 ul.bm-faq__list li label.bm-faq-item__header span.bm-faq-item__header-icon").should("be.visible");
  })
})

describe("Footer test", () => {
  it("Style kontenera", () => {
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ nav.mds.bm-nav-footer.bm-container").as("footerStyle");
    cy.get("@footerStyle").should("have.css", "max-width", "1600px");
    cy.get("@footerStyle").should("not.have.css", "margin", "0px auto 48px");
    cy.get("@footerStyle").should("have.css", "display", "flex");
    cy.get("@footerStyle").should("have.css", "flex-flow", "row wrap");
    cy.get("@footerStyle").should("have.css", "column-gap", "20px");
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ nav.mds.bm-nav-footer").as("footerStyleSecond");
    cy.get("@footerStyleSecond").should("have.css", "padding", "0px");
    cy.get("@footerStyleSecond").should("have.css", "margin", "156px 160px 0px");
    cy.get("@footerStyleSecond").should("have.css", "margin-top", "156px");
  })
  it("Style", () => {
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ div.bm-nav-footer__top").as("styleFooter");
    cy.get("@styleFooter").should("have.css", "width", "1600px");
    cy.get("@styleFooter").should("have.css", "border-top", "1px solid rgb(223, 223, 223)");
    cy.get("@styleFooter").should("have.css", "display", "flex");
    cy.get("@styleFooter").should("have.css", "justify-content", "space-between");
    cy.get("@styleFooter").should("have.css", "padding", "32px 74px");
    cy.get("@styleFooter").should("have.css", "margin", "0px");
  })
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
  
  })
describe("social footer", () =>{
  it("Test pierwszej ikonki - Bank Millennium", () => {
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ div.bm-nav-footer__btm ul.bm-nav-footer__btm__socials li wc-button-link a").invoke('removeAttr', 'target').first().click();
      cy.url('https://www.bankmillennium.pl/', () => {
          cy.location().should(location => {
        expect(location.origin).to.eq("https://www.bankmillennium.pl");

          })
      })
   }) 
  it("Test drugiej ikonki - Twitter", () => {
    cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ div.bm-nav-footer__btm ul.bm-nav-footer__btm__socials li wc-button-link a").invoke('removeAttr', 'target').eq(1).click();
    cy.url('https://www.x.com/BankMillennium', () => {
      cy.location().should(location => {
        expect(location.pathname).to.eq("https://www.x.com/BankMillennium");
      })
    })
  
  
    })
  it("Test trzeciej ikonki - Youtube", () => {
      cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ div.bm-nav-footer__btm ul.bm-nav-footer__btm__socials li wc-button-link a").invoke('removeAttr', 'target').eq(2).click();
      cy.url('https://www.youtube.com/user/BankMillennium', () => {
        cy.location().should(location => {
          expect(location.pathname).to.eq("https://www.youtube.com/user/BankMillennium");
        })
      })
    
    
      })
  it("Test czwartej ikonki - Linkedin", () => {
        cy.get("div#p_p_id_com_liferay_journal_content_web_portlet_JournalContentPortlet_INSTANCE_FOOTER_2023_ div.bm-nav-footer__btm ul.bm-nav-footer__btm__socials li wc-button-link a").invoke('removeAttr', 'target').eq(3).click();
        cy.url('https://www.linkedin.com/company/bank-millennium', () => {
          cy.location().should(location => {
            expect(location.pathname).to.eq("https://www.linkedin.com/company/bank-millennium");
          })
        })
      
      
        })
})  
})
