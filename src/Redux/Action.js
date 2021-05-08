import {actionTypes} from './ActionTypes';
import axios from "axios"
import { baseurl } from '../config/baseurl';



export const actionMainNav = () => {
 
  const headers = {
    headers: {
    'Accept': 'application/vnd.api+json'
    }
  }

  /**
   * REMOTE SITE
   * Install Module used
   * https://www.drupal.org/project/rest_menu_items
   * 
   * Set Permission : Access GET on Menu items per menu resource
   * Enable : Rest UI : Rest Menu Item to GET 
   * 
   */
  
  /**
   * if npm run on localhost:3000
   * fetch data from local json file.
   */
  /** MAIN NAVIGATION */
  const NavLocal = './data/mainnav.json';
  const NavRemote = `${baseurl.URL}/api/menu_items/main`;
  const NAV = window.location.origin === 'http://localhost:3000' 
                    ? NavLocal
                    : NavRemote;

  /** HOME PAGE */
  const HomeLocal = './data/homepage.json';
  const HomeRemote = `${baseurl.URL}/rest/home`;
  const HOME = window.location.origin === 'http://localhost:3000' 
                    ? HomeLocal
                    : HomeRemote;


  /** ABOUT PAGE */
  const AboutLocal = './data/aboutpage.json';
  const AboutRemote = `${baseurl.URL}/rest/about`;
  const ABOUT = window.location.origin === 'http://localhost:3000' 
                    ? AboutLocal
                    : AboutRemote;
  /** FOOD MENU */
  const FoodMenuLocal = './data/foodMenu.json';
  const FoodMenuRemote = `${baseurl.URL}/rest/food-menu`;
  const FOODMENU = window.location.origin === 'http://localhost:3000' 
                    ? FoodMenuLocal
                    : FoodMenuRemote;
  /** FOOD MENU TAXANOMY TERMS */
  const FoodMenuTxnTermLocal = './data/foodMenuTxnTerm.json';
  const FoodMenuTxnTermRemote = `${baseurl.URL}/rest/food-menu-taxanomy`;
  const FOODMENU_TXN_TERM = window.location.origin === 'http://localhost:3000' 
                    ? FoodMenuTxnTermLocal
                    : FoodMenuTxnTermRemote;
  
  /** FOOD MENU BACKGROUND IMAGE */
  const FoodMenuBGLocal = './data/foodMenuBG.json';
  const FoodMenuBGRemote = `${baseurl.URL}/rest/food-menu-bg-image`;
  const FOODMENU_BG = window.location.origin === 'http://localhost:3000' 
                    ? FoodMenuBGLocal
                    : FoodMenuBGRemote;


  return function (dispatch) {

    /** NAVIGATION */
    dispatch({
      type: actionTypes.MAIN_NAV_START_FETCHING
    })
    const reqNav = axios.get(NAV, headers)
    reqNav.then((res) => {
        //console.log("action",res.data)
        dispatch({
          type: actionTypes.MAIN_NAV_FETCHED,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.MAIN_NAV_FETCH_ERROR,
          fetched: false,
          error: err
        })
      })


    /** HOMEPAGE */
    dispatch({
      type: actionTypes.HOME_START_FETCHING
    })
    const reqHome = axios.get(HOME, headers)
    reqHome.then((res) => {
        //console.log("action",res.data)
        dispatch({
          type: actionTypes.HOME_FETCHED,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.HOME_FETCH_ERROR,
          fetched: false,
          error: err
        })
      })


    /** ABOUT PAGE */
    dispatch({
      type: actionTypes.ABOUT_START_FETCHING
    })
    const reqAbout = axios.get(ABOUT, headers)
    reqAbout.then((res) => {
       // console.log("action",res.data)
        dispatch({
          type: actionTypes.ABOUT_FETCHED,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.ABOUT_FETCH_ERROR,
          fetched: false,
          error: err
        })
      })

    /** FOOD-MENU PAGE */
    dispatch({
      type: actionTypes.FOOD_MENU_START_FETCHING
    })
    const reqFoodMenu = axios.get(FOODMENU, headers)
    reqFoodMenu.then((res) => {
        //console.log("action",res.data)
        dispatch({
          type: actionTypes.FOOD_MENU_FETCHED,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.FOOD_MENU_FETCH_ERROR,
          fetched: false,
          error: err
        })
      })

    /** FOOD-MENU - TAXANOMY TERSM */
    dispatch({
      type: actionTypes.FOOD_MENU_TXN_TERM_START_FETCHING
    })
    const reqFoodMenuTxtTerm = axios.get(FOODMENU_TXN_TERM, headers)
    reqFoodMenuTxtTerm.then((response) => {
        console.log("'taxanomy action",response.data)
        dispatch({
          type: actionTypes.FOOD_MENU_TXN_TERM_FETCHED,
          data: response.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.FOOD_MENU_TXN_TERM_FETCH_ERROR,
          fetched: false,
          error: err
        })
      })


      /** FOOD-MENU - BG */
    dispatch({
      type: actionTypes.FOOD_MENU_BG_START_FETCHING
    })
    const reqFoodMenuBG = axios.get(FOODMENU_BG, headers)
    reqFoodMenuBG.then((response) => {
        console.log("'taxanomy action",response.data)
        dispatch({
          type: actionTypes.FOOD_MENU_BG_FETCHED,
          data: response.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionTypes.FOOD_MENU_BG_FETCH_ERROR,
          fetched: false,
          error: err
        })
      })





  }
}