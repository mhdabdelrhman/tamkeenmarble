import $ from "jquery";

export const setBackgroundImages = () => {
  $("[data-background]").each(function() {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });
};

export const doAnimations = elements => {
  var animationEndEvents =
    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
  elements.each(function() {
    var $this = $(this);
    var $animationDelay = $this.data("delay");
    var $animationType = "animated " + $this.data("animation");
    $this.css({
      "animation-delay": $animationDelay,
      "-webkit-animation-delay": $animationDelay
    });
    $this.addClass($animationType).one(animationEndEvents, function() {
      $this.removeClass($animationType);
    });
  });
};

export default {
  setBackgroundImages,
  doAnimations
};
