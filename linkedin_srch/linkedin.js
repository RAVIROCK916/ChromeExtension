console.log("Hii Ravi Rock");
function profile(name, headline, location, c_role, url){
    this.name = name;
    this.headline = headline;
    this.location = location;;
    tis.c_role = c_role;
    this.url = url;
}

names = [];
headlines = [];
locations = [];
c_roles = [];
urls = [];

var list = document.getElementsByClassName("search-result__info.pt3.pb4.ph0");
//for(elt of list){
    var class_name = document.getElementsByClassName("name.actor-name");

    var class_headline = document.getElementsByClassName("subline-level-1.t-14.t-black.t-normal.search-result__truncate");
    var class_location = document.getElementsByClassName("subline-level-2.t-12.t-black--light.t-normal.search-result__truncate");
    var class_c_role = document.getElementsByClassName("mt2.t-12.t-black--light.t-normal.search-result__snippets-black");
    var class_url = document.getElementsByClassName("search-result__result-link.ember-view ----href").getAttribute("href");
    for(i=0; i<class_name.length(); i++)
    {
        names[i] = class_name[i].innerHTML();
        headlines[i] = class_headline[i].innerHTML();
        locations[i] = class_location[i].innerHTML();
        c_roles[i] = class_c_role[i].innerHTML();
        urls[i] = class_urls[i].innerHTML();
        objects[i] = new profile(names[i], headlines[i], locations[i], c_roles[i], urls[i]);
        console.log(objects[i]);
    }
//}
/*
Classes:-
    list : div.search-result__info.pt3.pb4.ph0
        name : h3.name.actor-name
        headline : p.subline-level-1.t-14.t-black.t-normal.search-result__truncate
        location : p.subline-level-2.t-12.t-black--light.t-normal.search-result__truncate
        c_role : p.mt2.t-12.t-black--light.t-normal.search-result__snippets-black
        url : a.search-result__result-link.ember-view ----href
*/
