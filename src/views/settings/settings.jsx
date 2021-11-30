import React, { Component } from "react";
import { SketchPicker } from "react-color";
import temp1 from "../../res/images/invoice/Template 1.jpg";
import temp2 from "../../res/images/invoice/Template 2.jpg";
import temp3 from "../../res/images/invoice/Template 3.jpg";
import temp4 from "../../res/images/invoice/Template 4.jpg";
import temp5 from "../../res/images/invoice/Template 5.jpg";
import $ from "jquery";

class Settings extends Component {
  state = {
    docDefinition: localStorage.getItem("docDefinition")
      ? JSON.parse(localStorage.getItem("docDefinition"))
      : {
          backgroundColor: "#0069D9",
          watermark: {
            text: "",
            opacity: 0.3,
            bold: false,
            italics: false,
          },
          pageSize: "A4",
          pageOrientation: "portrait",
        },
    defaultSettings: localStorage.getItem("defaultSettings")
      ? JSON.parse(localStorage.getItem("defaultSettings"))
      : {
          imgSrc: "",
          invoiceFrom: "",
          terms: "",
          defaultTemplate: "temp1",
          defaultCurrency: "USD",
          footNote: "",
        },

    pageSize: [
      "4A0",
      "2A0",
      "A0",
      "A1",
      "A2",
      "A3",
      "A4",
      "A5",
      "A6",
      "A7",
      "A8",
      "A9",
      "A10",
    ],
    pageOrientation: ["portrait", "landscape"],
    currency: [
      { code: "AFN", name: "Afghan Afghani" },
      { code: "ALL", name: "Albanian Lek" },
      { code: "DZD", name: "Algerian Dinar" },
      { code: "AOA", name: "Angolan Kwanza" },
      { code: "ARS", name: "Argentine Peso" },
      { code: "AMD", name: "Armenian Dram" },
      { code: "AWG", name: "Aruban Florin" },
      { code: "AUD", name: "Australian Dollar" },
      { code: "AZN", name: "Azerbaijani Manat" },
      { code: "BSD", name: "Bahamian Dollar" },
      { code: "BHD", name: "Bahraini Dinar" },
      { code: "BDT", name: "Bangladeshi Taka" },
      { code: "BBD", name: "Barbadian Dollar" },
      { code: "BYN", name: "Belarusian Ruble" },
      { code: "BZD", name: "Belize Dollar" },
      { code: "BMD", name: "Bermudan Dollar" },
      { code: "BTN", name: "Bhutanese Ngultrum" },
      { code: "BTC", name: "Bitcoin" },
      { code: "BOB", name: "Bolivian Boliviano" },
      { code: "BAM", name: "Bosnia-Herzegovina Convertible Mark" },
      { code: "BWP", name: "Botswanan Pula" },
      { code: "BRL", name: "Brazilian Real" },
      { code: "GBP", name: "British Pound Sterling" },
      { code: "BND", name: "Brunei Dollar" },
      { code: "BGN", name: "Bulgarian Lev" },
      { code: "BIF", name: "Burundian Franc" },
      { code: "XOF", name: "CFA Franc BCEAO" },
      { code: "XAF", name: "CFA Franc BEAC" },
      { code: "XPF", name: "CFP Franc" },
      { code: "KHR", name: "Cambodian Riel" },
      { code: "CAD", name: "Canadian Dollar" },
      { code: "CVE", name: "Cape Verdean Escudo" },
      { code: "KYD", name: "Cayman Islands Dollar" },
      { code: "CLP", name: "Chilean Peso" },
      { code: "CLF", name: "Chilean Unit of Account (UF)" },
      { code: "CNY", name: "Chinese Yuan" },
      { code: "CNH", name: "Chinese Yuan (Offshore)" },
      { code: "COP", name: "Colombian Peso" },
      { code: "KMF", name: "Comorian Franc" },
      { code: "CDF", name: "Congolese Franc" },
      { code: "CRC", name: "Costa Rican Colón" },
      { code: "HRK", name: "Croatian Kuna" },
      { code: "CUC", name: "Cuban Convertible Peso" },
      { code: "CUP", name: "Cuban Peso" },
      { code: "CZK", name: "Czech Republic Koruna" },
      { code: "DKK", name: "Danish Krone" },
      { code: "DJF", name: "Djiboutian Franc" },
      { code: "DOP", name: "Dominican Peso" },
      { code: "XCD", name: "East Caribbean Dollar" },
      { code: "EGP", name: "Egyptian Pound" },
      { code: "ERN", name: "Eritrean Nakfa" },
      { code: "ETB", name: "Ethiopian Birr" },
      { code: "EUR", name: "Euro" },
      { code: "FKP", name: "Falkland Islands Pound" },
      { code: "FJD", name: "Fijian Dollar" },
      { code: "GMD", name: "Gambian Dalasi" },
      { code: "GEL", name: "Georgian Lari" },
      { code: "GHS", name: "Ghanaian Cedi" },
      { code: "GIP", name: "Gibraltar Pound" },
      { code: "XAU", name: "Gold Ounce" },
      { code: "GTQ", name: "Guatemalan Quetzal" },
      { code: "GGP", name: "Guernsey Pound" },
      { code: "GNF", name: "Guinean Franc" },
      { code: "GYD", name: "Guyanaese Dollar" },
      { code: "HTG", name: "Haitian Gourde" },
      { code: "HNL", name: "Honduran Lempira" },
      { code: "HKD", name: "Hong Kong Dollar" },
      { code: "HUF", name: "Hungarian Forint" },
      { code: "ISK", name: "Icelandic Króna" },
      { code: "INR", name: "Indian Rupee" },
      { code: "IDR", name: "Indonesian Rupiah" },
      { code: "IRR", name: "Iranian Rial" },
      { code: "IQD", name: "Iraqi Dinar" },
      { code: "ILS", name: "Israeli New Sheqel" },
      { code: "JMD", name: "Jamaican Dollar" },
      { code: "JPY", name: "Japanese Yen" },
      { code: "JEP", name: "Jersey Pound" },
      { code: "JOD", name: "Jordanian Dinar" },
      { code: "KZT", name: "Kazakhstani Tenge" },
      { code: "KES", name: "Kenyan Shilling" },
      { code: "KWD", name: "Kuwaiti Dinar" },
      { code: "KGS", name: "Kyrgystani Som" },
      { code: "LAK", name: "Laotian Kip" },
      { code: "LBP", name: "Lebanese Pound" },
      { code: "LSL", name: "Lesotho Loti" },
      { code: "LRD", name: "Liberian Dollar" },
      { code: "LYD", name: "Libyan Dinar" },
      { code: "MOP", name: "Macanese Pataca" },
      { code: "MKD", name: "Macedonian Denar" },
      { code: "MGA", name: "Malagasy Ariary" },
      { code: "MWK", name: "Malawian Kwacha" },
      { code: "MYR", name: "Malaysian Ringgit" },
      { code: "MVR", name: "Maldivian Rufiyaa" },
      { code: "IMP", name: "Manx pound" },
      { code: "MRU", name: "Mauritanian Ouguiya" },
      { code: "MRO", name: "Mauritanian Ouguiya (pre-2018)" },
      { code: "MUR", name: "Mauritian Rupee" },
      { code: "MXN", name: "Mexican Peso" },
      { code: "MDL", name: "Moldovan Leu" },
      { code: "MNT", name: "Mongolian Tugrik" },
      { code: "MAD", name: "Moroccan Dirham" },
      { code: "MZN", name: "Mozambican Metical" },
      { code: "MMK", name: "Myanma Kyat" },
      { code: "NAD", name: "Namibian Dollar" },
      { code: "NPR", name: "Nepalese Rupee" },
      { code: "ANG", name: "Netherlands Antillean Guilder" },
      { code: "TWD", name: "New Taiwan Dollar" },
      { code: "NZD", name: "New Zealand Dollar" },
      { code: "NIO", name: "Nicaraguan Córdoba" },
      { code: "NGN", name: "Nigerian Naira" },
      { code: "KPW", name: "North Korean Won" },
      { code: "NOK", name: "Norwegian Krone" },
      { code: "OMR", name: "Omani Rial" },
      { code: "PKR", name: "Pakistani Rupee" },
      { code: "XPD", name: "Palladium Ounce" },
      { code: "PAB", name: "Panamanian Balboa" },
      { code: "PGK", name: "Papua New Guinean Kina" },
      { code: "PYG", name: "Paraguayan Guarani" },
      { code: "PEN", name: "Peruvian Nuevo Sol" },
      { code: "PHP", name: "Philippine Peso" },
      { code: "XPT", name: "Platinum Ounce" },
      { code: "PLN", name: "Polish Zloty" },
      { code: "QAR", name: "Qatari Rial" },
      { code: "RON", name: "Romanian Leu" },
      { code: "RUB", name: "Russian Ruble" },
      { code: "RWF", name: "Rwandan Franc" },
      { code: "SHP", name: "Saint Helena Pound" },
      { code: "SVC", name: "Salvadoran Colón" },
      { code: "WST", name: "Samoan Tala" },
      { code: "SAR", name: "Saudi Riyal" },
      { code: "RSD", name: "Serbian Dinar" },
      { code: "SCR", name: "Seychellois Rupee" },
      { code: "SLL", name: "Sierra Leonean Leone" },
      { code: "XAG", name: "Silver Ounce" },
      { code: "SGD", name: "Singapore Dollar" },
      { code: "SBD", name: "Solomon Islands Dollar" },
      { code: "SOS", name: "Somali Shilling" },
      { code: "ZAR", name: "South African Rand" },
      { code: "KRW", name: "South Korean Won" },
      { code: "SSP", name: "South Sudanese Pound" },
      { code: "XDR", name: "Special Drawing Rights" },
      { code: "LKR", name: "Sri Lankan Rupee" },
      { code: "SDG", name: "Sudanese Pound" },
      { code: "SRD", name: "Surinamese Dollar" },
      { code: "SZL", name: "Swazi Lilangeni" },
      { code: "SEK", name: "Swedish Krona" },
      { code: "CHF", name: "Swiss Franc" },
      { code: "SYP", name: "Syrian Pound" },
      { code: "STN", name: "São Tomé and Príncipe Dobra" },
      { code: "STD", name: "São Tomé and Príncipe Dobra (pre-2018)" },
      { code: "TJS", name: "Tajikistani Somoni" },
      { code: "TZS", name: "Tanzanian Shilling" },
      { code: "THB", name: "Thai Baht" },
      { code: "TOP", name: "Tongan Pa'anga" },
      { code: "TTD", name: "Trinidad and Tobago Dollar" },
      { code: "TND", name: "Tunisian Dinar" },
      { code: "TRY", name: "Turkish Lira" },
      { code: "TMT", name: "Turkmenistani Manat" },
      { code: "UGX", name: "Ugandan Shilling" },
      { code: "UAH", name: "Ukrainian Hryvnia" },
      { code: "AED", name: "United Arab Emirates Dirham" },
      { code: "USD", name: "United States Dollar" },
      { code: "UYU", name: "Uruguayan Peso" },
      { code: "UZS", name: "Uzbekistan Som" },
      { code: "VUV", name: "Vanuatu Vatu" },
      { code: "VEF", name: "Venezuelan Bolívar Fuerte (Old)" },
      { code: "VES", name: "Venezuelan Bolívar Soberano" },
      { code: "VND", name: "Vietnamese Dong" },
      { code: "YER", name: "Yemeni Rial" },
      { code: "ZMW", name: "Zambian Kwacha" },
      { code: "ZWL", name: "Zimbabwean Dollar" },
    ],
  };

  constructor() {
    super();
    this.handleDefaultSettings = this.handleDefaultSettings.bind(this);
    this.onImageChangeDefaultSetting =
      this.onImageChangeDefaultSetting.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
    this.handleSettingChange = this.handleSettingChange.bind(this);
    this.handleSettingWatermarkChange =
      this.handleSettingWatermarkChange.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <ul
                  className="nav nav-tabs card-header-tabs"
                  id="bologna-list"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      onClick={this.handleTabClick}
                      href="#settings"
                      role="tab"
                      aria-controls="settings"
                      aria-selected="true"
                    >
                      PDF Settings
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      onClick={this.handleTabClick}
                      href="#defaultsettings"
                      role="tab"
                      aria-controls="defaultsettings"
                      aria-selected="false"
                    >
                      Default Settings
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      onClick={this.handleTabClick}
                      href="#template"
                      role="tab"
                      aria-controls="template"
                      aria-selected="false"
                    >
                      Template
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content">
                  <div
                    className="tab-pane active"
                    id="settings"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-md-3">
                        <p className="card-text">Background Color</p>
                        <SketchPicker
                          color={this.state.docDefinition.backgroundColor}
                          onChangeComplete={this.handleColorChange}
                        />
                      </div>
                      <div className="col-md-9">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label
                                htmlFor="pageOrientation"
                                className="col-sm-6 col-form-label"
                              >
                                Page Orientation
                              </label>
                              <div className="col-sm-6">
                                <select
                                  className="form-control"
                                  name="pageOrientation"
                                  id="pageOrientation"
                                  value={
                                    this.state.docDefinition.pageOrientation
                                  }
                                  onChange={this.handleSettingChange}
                                >
                                  {this.state.pageOrientation.map((item) => (
                                    <option key={item} value={item}>
                                      {item}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label
                                htmlFor="pageSize"
                                className="col-sm-6 col-form-label"
                              >
                                Page Size
                              </label>
                              <div className="col-sm-6">
                                <select
                                  className="form-control"
                                  name="pageSize"
                                  id="pageSize"
                                  value={this.state.docDefinition.pageSize}
                                  onChange={this.handleSettingChange}
                                >
                                  {this.state.pageSize.map((item) => (
                                    <option key={item} value={item}>
                                      {item}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <fieldset>
                              <legend>Watermark</legend>
                              <div className="form-group row">
                                <label
                                  htmlFor="watermarkText"
                                  className="col-sm-1 col-form-label"
                                >
                                  Text
                                </label>
                                <div className="col-sm-11">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="watermarkText"
                                    name="text"
                                    maxLength="30"
                                    onChange={this.handleSettingWatermarkChange}
                                    value={
                                      this.state.docDefinition.watermark.text
                                    }
                                  />
                                </div>
                              </div>
                              <div className="form-inline">
                                <label className="my-1 mr-2" htmlFor="opacity">
                                  Opacity
                                </label>
                                <input
                                  type="number"
                                  className="form-control my-1 mr-sm-2"
                                  id="opacity"
                                  name="opacity"
                                  min="0.1"
                                  max="1"
                                  step="0.1"
                                  onChange={this.handleSettingWatermarkChange}
                                  value={
                                    this.state.docDefinition.watermark.opacity
                                  }
                                />
                                <div className="custom-control custom-checkbox my-1 ml-3 mr-sm-2">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="bold"
                                    name="bold"
                                    checked={
                                      this.state.docDefinition.watermark.bold
                                    }
                                    onChange={this.handleSettingWatermarkChange}
                                    value={
                                      this.state.docDefinition.watermark.bold
                                    }
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="bold"
                                  >
                                    Bold
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox my-1 ml-3 mr-sm-2">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="italics"
                                    name="italics"
                                    checked={
                                      this.state.docDefinition.watermark.italics
                                    }
                                    onChange={this.handleSettingWatermarkChange}
                                    value={
                                      this.state.docDefinition.watermark.italics
                                    }
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="italics"
                                  >
                                    Italics
                                  </label>
                                </div>
                              </div>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane"
                    id="defaultsettings"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="custom-file1 files color">
                              <input
                                type="file"
                                className="custom-file-input1 form-control-sm"
                                accept="image/x-png,image/jpg,image/jpeg"
                                id="customFile"
                                onChange={this.onImageChangeDefaultSetting}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            {this.state.defaultSettings.imgSrc !== "" && (
                              <div>
                                <React.Fragment>
                                  <img
                                    src={this.state.defaultSettings.imgSrc}
                                    className="mr-3 rounded preview-image"
                                    alt=""
                                  />
                                  <button
                                    type="button"
                                    title="Remove logo"
                                    onClick={
                                      this.handleRemoveImageDefaultSetting
                                    }
                                    className="btn btn-dark btn-sm preview-image-remove"
                                  >
                                    &times;
                                  </button>
                                </React.Fragment>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="defaultCurrency">
                            Default Currency
                          </label>
                          <select
                            className="form-control"
                            name="defaultCurrency"
                            id="defaultCurrency"
                            value={this.state.defaultSettings.defaultCurrency}
                            onChange={this.handleDefaultSettings}
                          >
                            {this.state.currency.map((item) => (
                              <option key={item.code} value={item.code}>
                                {item.name} ({item.code})
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="defaultInvoiceFrom">
                            Invoice from
                          </label>
                          <textarea
                            className="form-control"
                            id="defaultInvoiceFrom"
                            name="invoiceFrom"
                            rows="3"
                            placeholder="Who is this invoice from?"
                            value={this.state.defaultSettings.invoiceFrom}
                            onChange={this.handleDefaultSettings}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="defaultTerms">Terms</label>
                          <textarea
                            className="form-control"
                            id="defaultTerms"
                            name="terms"
                            rows="3"
                            placeholder="Terms and conditions - late fees, payment methods, delivery schedule"
                            value={this.state.defaultSettings.terms}
                            onChange={this.handleDefaultSettings}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="defaultFootNote">Foot Note</label>
                          <textarea
                            className="form-control"
                            id="defaultFooterNotes"
                            name="footNote"
                            rows="3"
                            placeholder="Thank you for your business"
                            value={this.state.defaultSettings.footNote}
                            onChange={this.handleDefaultSettings}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane"
                    id="template"
                    role="tabpanel"
                    aria-labelledby="template-tab"
                  >
                    <div className="row">
                      <div className="col-md-3 mb-4">
                        <div className="card">
                          <img
                            src={temp1}
                            className="card-img-top"
                            alt="Template 1"
                          />
                          <div className="card-body">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                name="defaultTemplate"
                                id="temp1"
                                value="temp1"
                                checked={
                                  this.state.defaultSettings.defaultTemplate ===
                                  "temp1"
                                }
                                onChange={this.handleDefaultSettings}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="temp1"
                              >
                                Template 1
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-4">
                        <div className="card">
                          <img
                            src={temp2}
                            className="card-img-top"
                            alt="Template 2"
                          />
                          <div className="card-body">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                name="defaultTemplate"
                                id="temp2"
                                value="temp2"
                                checked={
                                  this.state.defaultSettings.defaultTemplate ===
                                  "temp2"
                                }
                                onChange={this.handleDefaultSettings}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="temp2"
                              >
                                Template 2
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-4">
                        <div className="card">
                          <img
                            src={temp3}
                            className="card-img-top"
                            alt="Template 3"
                          />
                          <div className="card-body">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                name="defaultTemplate"
                                id="temp3"
                                value="temp3"
                                checked={
                                  this.state.defaultSettings.defaultTemplate ===
                                  "temp3"
                                }
                                onChange={this.handleDefaultSettings}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="temp3"
                              >
                                Template 3
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-4">
                        <div className="card">
                          <img
                            src={temp4}
                            className="card-img-top"
                            alt="Template 4"
                          />
                          <div className="card-body">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                name="defaultTemplate"
                                id="temp4"
                                value="temp4"
                                checked={
                                  this.state.defaultSettings.defaultTemplate ===
                                  "temp4"
                                }
                                onChange={this.handleDefaultSettings}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="temp4"
                              >
                                Template 4
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card">
                          <img
                            src={temp5}
                            className="card-img-top"
                            alt="Template 5"
                          />
                          <div className="card-body">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                name="defaultTemplate"
                                id="temp5"
                                value="temp5"
                                checked={
                                  this.state.defaultSettings.defaultTemplate ===
                                  "temp5"
                                }
                                onChange={this.handleDefaultSettings}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="temp5"
                              >
                                Template 5
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  handleDefaultSettings = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState(
      (prevState) => {
        return {
          defaultSettings: {
            ...prevState.defaultSettings,
            [name]: value,
          },
        };
      },
      () => this.setLocalStorage("defaultSettings", this.state.defaultSettings)
    );
  };

  setLocalStorage = (key, obj) => {
    localStorage.setItem(key, JSON.stringify(obj));
  };

  onImageChangeDefaultSetting = (e) => {
    // this / e.target is current target element.
    // stops the browser from redirecting.
    e.stopPropagation();
    e.preventDefault();
    var files = e.target.files;
    var fileCount = files.length;
    var i;
    if (fileCount > 0) {
      for (i = 0; i < fileCount; i = i + 1) {
        var file = files[i];
        // var name = file.name;
        // var size = this.bytesToSize(file.size);
        var reader = new FileReader();
        var state = { ...this.state };
        var self = this;
        // eslint-disable-next-line no-loop-func
        reader.onload = function (e) {
          state.defaultSettings.imgSrc = e.target.result;
          self.setState(
            {
              state,
            },
            () => self.setLocalStorage("defaultSettings", state.defaultSettings)
          );
        };
        reader.readAsDataURL(file);
      }
    }
    return false;
  };

  handleTabClick = (e) => {
    e.preventDefault();
    $(e.target).tab("show");
  };

  handleSettingChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(
      (prevState) => {
        return {
          docDefinition: {
            ...prevState.docDefinition,
            [name]: value,
          },
        };
      },
      () => this.setLocalStorage("docDefinition", this.state.docDefinition)
    );
  };

  handleSettingWatermarkChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState(
      (prevState) => {
        return {
          docDefinition: {
            ...prevState.docDefinition,
            watermark: {
              ...prevState.docDefinition.watermark,
              [name]: value,
            },
          },
        };
      },
      () => this.setLocalStorage("docDefinition", this.state.docDefinition)
    );
  };

  handleColorChange = (color, event) => {
    this.setState(
      (prevState) => {
        return {
          docDefinition: {
            ...prevState.docDefinition,
            backgroundColor: color.hex,
          },
        };
      },
      () => this.setLocalStorage("docDefinition", this.state.docDefinition)
    );
  };
}

export default Settings;
