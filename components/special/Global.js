import React, { Fragment } from "react";
import { Container, Subscribe } from "unstated";
import PinOverlay from "./PinOverlay";
import ShowPins from "./ShowPins";
import shortId from "shortid";
import _ from "lodash";
import { frontend, prodFrontend } from "../../config";
import { endpoint, prodEndPoint } from "../../config";

const backendUrl =
  process.env.NODE_ENV === "development" ? endpoint : prodEndPoint;
var frontendUrl =
  process.env.NODE_ENV === "development" ? frontend : prodFrontend;

class Global extends Container {
  state = {
    overIframe: [],
    urlSelected: backendUrl + "/api/screenshot?url=http://bugherd.com",
    pageLoading: true,
    showPins: true,
    showCanvas: false,
    canvas: null,
    iframe: {
      size: { height: 0, width: 200 }
    },
    showToolbarOverlay: false,
    toolbarOverlayContents: "",
    toolbar: [],
    isPlacingPin: false,
    pins: []
  };

  addSimpleTextBlock = () => {
    this.toggleToolbarOverlay();

    var simpleText = {
      id: shortId.generate(),
      type: "text",
      value: "test",
      label: "test"
    };

    var toolbar = this.state.toolbar;

    toolbar.push(simpleText);

    this.setState({ toolbar });
  };

  addPinBlock = () => {
    this.toggleToolbarOverlay();

    this.setState({
      overIframe: [
        ...this.state.overIframe,
        { belongsTo: "test", component: ShowPins }
      ]
    });

    var pin = {
      id: shortId.generate(),
      type: "pin"
    };

    //place pin view over iframe

    var toolbar = this.state.toolbar;

    toolbar.push(pin);

    this.setState({ toolbar });
  };

  putComponentInToolbar = component => {
    this.setState({ toolbarOverlayContents: component });
  };

  toggleToolbarOverlay = () => {
    this.setState({ showToolbarOverlay: !this.state.showToolbarOverlay });
  };

  togglePinPlacement = (id, block) => {
    if (this.state.isPlacingPin) {
      var stat = this.state.overIframe;

      stat = _.filter(stat, function(i) {
        return i.belongsTo != id;
      });

      this.setState({
        overIframe: stat,
        isPlacingPin: false
      });
    } else {
      this.setState({
        overIframe: [
          ...this.state.overIframe,
          { belongsTo: id, component: PinOverlay }
        ],
        isPlacingPin: true
      });
    }
  };

  addPath = () => {
    var canvas = this.state.canvas;
    var path = new fabric.Path("M 0 0 L 200 100 L 170 200 z");
    path.set({ left: 120, top: 120 });
    canvas.add(path);
    this.setState({ canvas });
  };

  addArrow = () => {
    var canvas = this.state.canvas;
    fabric.loadSVGFromURL("/static/images/arrow.svg", function(
      objects,
      options
    ) {
      var obj = fabric.util.groupSVGElements(objects, options);
      canvas.add(obj).renderAll();
    });
    this.setState({ canvas });
  };

  showCanvas = () => {
    this.setState({ showCanvas: true });
  };

  hideCanvas = () => {
    this.setState({ showCanvas: false });
  };

  instantiateCanvas = that => {
    const canvas = new fabric.Canvas(that.c);
    this.setState({ canvas });
  };

  clear = () => {
    var canvas = this.state.canvas;
    var canvas = canvas.clear();
    this.setState({ canvas });
  };

  _placePin = pin => {
    pin.id = shortId.generate();
    var pins = this.state.pins;
    pins.push(pin);
    this.setState({ pins });

    console.log("Pin placed.");
  };

  _updatePinCommentByID = (id, text, previousState) => {
    var that = previousState;
    _.find(that, { id: id }).comment = text;
    this.setState({ pins: that });
  };

  _loadStateFromHash = hash => {
    var hash = atob(hash);
    var previousState = this.state;
    hash = JSON.parse(hash);
    console.log("Hash loaded.");

    if (hash.pins.length > 0) {
      previousState.overIframe = [
        {
          belongsTo: "test",
          component: ShowPins
        }
      ];
    }
    previousState.pins = _.cloneDeep(hash.pins);
    previousState.toolbar = hash.toolbar;

    previousState.urlSelected = hash.urlSelected;
    previousState.isPlacingPin = false;
    previousState.pageLoading = true;
    this.setState({ ...previousState });
  };

  resetUI = () => {
    this.setState({
      overIframe: [],
      pageLoading: true,
      showPins: true,
      showCanvas: false,
      canvas: null,
      iframe: {
        size: { height: 0, width: 200 }
      },
      showToolbarOverlay: false,
      toolbarOverlayContents: "",
      toolbar: [],
      isPlacingPin: false,
      pins: []
    });
  };

  fetchPage = url => {
    this.resetUI();
    this.setState({
      pageLoading: true,
      urlSelected: backendUrl + "/api/screenshot?url=" + url
    });
  };
}

export { Global };
