AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
    update: function () {
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
  
      //check if the infoBanner plane already has comic text info child entity
      //if so remove the child to avoid the overlapping of the text
      c = fadeBackgroundEl.children;
      if (c.length > 0) {
        var i;
        for (i = 0; i <= c.length; i++) {
          fadeBackgroundEl.removeChild(c[i]);
        }
      } else {
        this.handleMouseClickEvents();
      }
    },
    handleMouseEnterEvents: function () {
      // Mouse Enter Events
      this.el.addEventListener("mouseenter", () => {
        const id = this.el.getAttribute("id");
        const postersId = [
          "superman",
          "spiderman",
          "captain-aero",
          "outer-space",
        ];
        if (postersId.includes(id)) {
          const postersContainer = document.querySelector("#posters-container");
          postersContainer.setAttribute("cursor-listener", {
            selectedItemId: id,
          });
          this.el.setAttribute("material", { color: "#1565c0" });
        }
      });
    },
