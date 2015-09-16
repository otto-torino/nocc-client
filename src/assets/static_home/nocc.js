(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/head.png", id:"head"},
		{src:"images/semaforo_def2sfuma.jpg", id:"semaforo_def2sfuma"}
	]
};



// symbols:



(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1010,186);


(lib.semaforo_def2sfuma = function() {
	this.initialize(img.semaforo_def2sfuma);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,417,570);


(lib.semaforo = function() {
	this.initialize();

	// Livello 1
	this.instance = new lib.semaforo_def2sfuma();
	this.instance.setTransform(-208.5,-285);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-208.5,-285,417,570);


(lib.popD = function() {
	this.initialize();

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5EA5").s().p("AgtBCQgRgPABgVIAAAAIAcAAQABAPAKAHQAKAHANAAQAPAAAJgGQAJgGAAgLQAAgJgHgGQgIgGgTgFQgcgHgOgIQgPgLAAgSQAAgUARgNQAQgOAYAAQAcAAAQAOQARAOgBAVIAAABIgcAAQAAgKgJgJQgIgIgPAAQgNAAgIAHQgHAHAAAJQAAAJAHAGQAGAGASADQAfAHAOAJQAPALAAATQAAAUgRAOQgSANgbAAQgdAAgRgQg");
	this.shape.setTransform(-368.6,-77.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5EA5").s().p("AgGBZQgKgLAAgXIAAheIgZAAIAAgVIAZAAIAAgnIAbAAIAAAnIAeAAIAAAVIgeAAIAABeQAAALAEAFQAFAFAHAAIAGgBIAFgCIAEAUIgJAFIgNABQgRAAgJgKg");
	this.shape_1.setTransform(-382,-79.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5EA5").s().p("AgNByIAAidIAbAAIAACdgAgNhTIAAgeIAbAAIAAAeg");
	this.shape_2.setTransform(-390.6,-81.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5EA5").s().p("AgxBeQgQgVAAgiIAAgDQAAgkAQgYQAQgXAeAAQAMAAAKAFQALAFAHAKIAAhXIAdAAIAADiIgXAAIgDgTQgIALgLAFQgLAGgNAAQgeAAgQgVgAgbgHQgKAPAAAcIAAADQAAAYAKAOQAKAPASAAQANAAAKgGQAIgGAFgLIAAhHQgEgJgJgHQgKgGgMAAQgTAAgKARg");
	this.shape_3.setTransform(-403.3,-81);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5EA5").s().p("AguA8QgTgXAAgjIAAgEQAAghAUgXQAUgXAaAAQAgAAAQAUQARATAAAgIAAAQIhlAAIgBABQACAYAKANQALAPASAAQAQAAAKgEQAKgEAJgIIALATQgJAJgNAFQgPAGgTAAQgfAAgUgWgAgWguQgKANgDASIABAAIBHAAIAAgDQAAgRgJgMQgJgLgSAAQgNAAgKAMg");
	this.shape_4.setTransform(-419.2,-77.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5EA5").s().p("AgmBQIAAicIAaAAIACAXQAIgNAHgGQAKgHANAAIALABIgEAbIgPgBQgLAAgIAGQgGAFgEAKIAABvg");
	this.shape_5.setTransform(-431.2,-77.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5EA5").s().p("Ag4BUQgXgaAAgnIAAgkQAAgnAXgbQAXgZAiAAQAkAAAVATQAWATgBAgIAAABIgcAAQAAgWgNgOQgOgNgXAAQgWAAgPAUQgOAUAAAcIAAAkQAAAdAOAUQAPATAWAAQAYAAANgMQANgOAAgWIAcAAIAAABQABAegWAUQgWAUgjAAQgiAAgXgZg");
	this.shape_6.setTransform(-446.5,-80.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgXAxQgLgHAAgQIAAAAIAJAAQAAALAIAGQAHAHAKAAQAMgBAHgFQAHgHAAgLQAAgMgIgGQgHgGgLAAIgKAAIAAgGIAKAAQALAAAGgFQAGgHAAgKQAAgJgGgIQgGgFgLgBQgKAAgGAHQgHAGAAAKIgJAAIAAAAQgBgNAKgJQAKgJANAAQAOAAAKAJQAJAJAAAOQAAAHgFAIQgGAHgIADQALABAFAIQAFAGAAALQAAAOgKAJQgJAJgQgBQgNABgKgJg");
	this.shape_7.setTransform(-226.6,70.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXAxQgJgIAAgPIAAAAIAJAAQAAALAGAGQAGAGALAAQALAAAGgIQAGgHAAgPQAAgMgGgHQgGgGgLAAQgJAAgGADQgFADgDAFIgIgBIAHg8IA1AAIAAAJIgtAAIgFAoIAKgGQAEgBAIgBQAOAAAJAKQAJAIAAAQQAAARgJALQgJAKgPAAQgOAAgJgIg");
	this.shape_8.setTransform(-235.1,70.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgXAxQgJgIAAgPIAAAAIAJAAQAAALAGAGQAGAGALAAQALAAAGgIQAGgHAAgPQAAgMgGgHQgGgGgLAAQgJAAgGADQgFADgDAFIgIgBIAHg8IA1AAIAAAJIgtAAIgFAoIAKgGQAEgBAIgBQAOAAAJAKQAJAIAAAQQAAARgJALQgJAKgPAAQgOAAgJgIg");
	this.shape_9.setTransform(-243.9,70.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgNA4IABgKQADgdAJgVQAKgWARgVIg/AAIAAgIIBJAAIAAAIQgTAWgJAWQgJAWgDAbIgBAKg");
	this.shape_10.setTransform(-253,70.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZAyQgKgIAAgQQAAgJAHgIQAGgIAKgBQgJgDgGgHQgFgGAAgKQABgOAIgJQAJgIAOAAQAOAAAJAIQAKAJAAAOQgBAKgFAGQgEAHgKADQALACAFAHQAHAHAAAKQAAAQgKAIQgKAHgQAAQgPAAgKgHgAgSAJQgHAGAAALQAAALAHAHQAIAFAKABQALgBAIgFQAHgHAAgLQAAgLgHgGQgJgHgKAAQgKAAgIAHgAgQgrQgHAHAAAKQAAAKAHAGQAHAGAJAAQAKAAAGgGQAHgGAAgKQAAgKgHgGQgGgHgKAAQgJABgHAFg");
	this.shape_11.setTransform(-261.7,70.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgNA4IgMgDIACgIQAEACAGABIAMACQALAAAHgJQAIgIAAgQIAAgMQgEAHgHAEQgGAEgIAAQgPAAgJgLQgKgJAAgRQAAgQAKgMQAKgMAOAAQAPAAAKALQAKALAAAUIAAAgQAAATgLALQgKAKgPAAIgMgBgAgRgnQgHAKAAAMQAAAOAGAGQAHAJALAAQAJAAAGgFQAHgFADgGIAAgMQAAgRgHgHQgHgJgLAAQgKAAgHAKg");
	this.shape_12.setTransform(-270.7,70.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgZAyQgKgJAAgPQAAgKAGgHQAIgIAJgBQgJgDgGgHQgEgGAAgKQgBgOAKgJQAIgIAOAAQAOAAAJAIQAKAJgBAOQABAKgGAGQgEAHgKADQALACAGAHQAGAHAAAKQAAAQgLAIQgJAHgQAAQgPAAgKgHgAgSAJQgIAGAAALQAAALAIAHQAIAFAKABQAMgBAHgFQAIgHgBgLQABgLgIgGQgIgHgLAAQgKAAgIAHgAgQgrQgGAHAAAKQAAAKAGAGQAIAGAIAAQAKAAAGgGQAHgGAAgKQAAgKgHgGQgGgHgKAAQgJABgHAFg");
	this.shape_13.setTransform(-279.3,70.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAJA4IAAhlIgbADIAAgHIAkgGIAABvg");
	this.shape_14.setTransform(-293,70.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAJA4IAAhlIgbADIAAgHIAlgGIAABvg");
	this.shape_15.setTransform(-301.8,70.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYAuQgKgNAAgVIAAgXQgBgVAKgMQAKgNAPAAQAQAAAKANQAJAMAAAVIAAAXQAAAVgJANQgKALgQAAQgQAAgIgLgAgTgoQgGAKAAARIAAAbQAAARAHAJQAHAKALAAQAMAAAHgKQAHgIAAgSIAAgbQAAgRgHgKQgHgIgMgBQgMABgHAIg");
	this.shape_16.setTransform(-309.8,70.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_17.setTransform(-320.3,75.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_18.setTransform(-323.9,70.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgWAgQgLgMAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAJQAIAKAKAAQAJAAAGgCQAHgDADgEIAEAHQgGAFgGACQgHADgKAAQgOAAgKgLgAgPgaQgHAIgBALIAAABIAwAAIAAgDQAAgKgHgHQgGgIgLAAQgJAAgHAIg");
	this.shape_19.setTransform(-329.8,72.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgCAvQgFgEAAgNIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIADAEQADADAFAAIAEAAIAFgBIABAHIgFACIgHAAQgKAAgCgGg");
	this.shape_20.setTransform(-336.6,71.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgRAEIAAgHIAjAAIAAAHg");
	this.shape_21.setTransform(-345.3,71.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D22040").s().p("AgCAvQgFgFAAgMIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIADAEQADADAFAAIAEAAIAFgBIABAHIgFACIgHAAQgJAAgDgGg");
	this.shape_22.setTransform(-354.2,71.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D22040").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_23.setTransform(-358.5,70.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D22040").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_24.setTransform(-362.3,75.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D22040").s().p("AgaAgQgKgMAAgTIAAgBQAAgSAKgMQALgMAPAAQAQAAAKAMQAKANAAARIAAABQAAASgKANQgKALgQAAQgPAAgLgLgAgTgYQgIAKAAAOIAAABQAAAOAIAKQAHAKAMAAQAMAAAIgKQAIgKgBgOIAAgBQABgOgIgKQgIgKgMAAQgMAAgHAKg");
	this.shape_25.setTransform(-368.5,72.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D22040").s().p("AgCAvQgFgEAAgNIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIADAEQADADAFAAIAEAAIAFgBIABAHIgFACIgHAAQgJAAgDgGg");
	this.shape_26.setTransform(-375.5,71.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D22040").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_27.setTransform(-380,75.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D22040").s().p("AgaAgQgKgMABgTIAAgBQgBgSAKgMQALgMAPAAQAQAAAKAMQAKANAAARIAAABQAAASgKANQgKALgQAAQgPAAgLgLgAgTgYQgHAKgBAOIAAABQABAOAHAKQAIAKALAAQAMAAAIgKQAHgKAAgOIAAgBQAAgOgHgKQgIgKgMAAQgLAAgIAKg");
	this.shape_28.setTransform(-386.3,72.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D22040").s().p("AgCAvQgFgEAAgNIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIADAEQADADAFAAIAEAAIAFgBIABAHIgFACIgHAAQgJAAgDgGg");
	this.shape_29.setTransform(-393.3,71.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D22040").s().p("AgCAvQgFgEAAgNIAAg1IgOAAIAAgIIAOAAIAAgVIAHAAIAAAVIATAAIAAAIIgTAAIAAA1QAAAIADAEQADADAFAAIAFAAIAFgBIABAHIgGACIgGAAQgKAAgCgGg");
	this.shape_30.setTransform(-398.5,71.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D22040").s().p("AgaAgQgKgNAAgSIAAgBQAAgRAKgNQALgMAPAAQARAAAJAMQALAMAAASIAAABQAAASgLANQgKALgQAAQgPAAgLgLgAgTgYQgHAKAAAOIAAABQAAANAHALQAHAKAMAAQAMAAAIgKQAHgKAAgOIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_31.setTransform(-405.5,72.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D22040").s().p("AgvA1QgQgUABghQACgfASgUQASgUAbAAQAeAAAQASQAPATgBAhQgCAPgIAMQgIAMgQAAQgGAAgEgDQgEgEgBgHQgFAIgFADQgFAEgHgBQgKAAgGgJQgFgJABgPQADgSAIgMQAJgLALAAQAIAAAEABIAKAHIAAAAIgEAqQAAALACADQAEAEAEAAQAKAAAHgJQAHgLAAgNQACgegNgQQgNgSgcABQgXAAgRASQgQASgBAcQgCAdAOASQAPATAagBQAFAAAHgCIALgDIADAFQgFADgIACIgOACQgdAAgQgTgAgLgUQgGAHgCASQgBAMADAHQAEAHAHAAQAGAAAEgEQAGgDADgIIAAgBIAEgpIgGgCIgGgBQgJAAgHAJg");
	this.shape_32.setTransform(-417.2,72.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D22040").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_33.setTransform(-426.2,70.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D22040").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_34.setTransform(-429.8,70.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D22040").s().p("AgZAkQgHgFAAgMQAAgLAKgIQAKgEAPgBIATAAIAAgKQgBgIgFgGQgGgFgKAAQgIAAgGAFQgHAFAAAHIgIgBQgBgJAJgIQAJgHAMAAQAOAAAJAHQAIAHAAANIABAwIABAJIgKAAIgBgIIAAgGQgFAGgIAFQgIAEgHAAQgNAAgGgHgAgPAGQgIAFAAAIQAAAHAFAFQAEAEAJAAQAIAAAIgFQAHgFAEgHIAAgSIgTAAQgKABgIAFg");
	this.shape_35.setTransform(-436,72.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D22040").s().p("AAxAqIAAgvQAAgPgFgHQgGgGgKAAQgKAAgHAGQgFAHgCALIAAABIAAAyIgHAAIAAgvQAAgPgFgHQgHgGgJAAQgKAAgGAFQgFAFgDAIIAAA5IgJAAIAAhSIAIAAIABAOQAEgHAHgEQAHgEAJAAQAJAAAHAEQAFAFACAKQAEgJAHgFQAHgFAKAAQANAAAIAJQAHAIAAATIAAAvg");
	this.shape_36.setTransform(-447.2,72.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgEApIAAgMIAJAAIAAAMgAgEgcIAAgNIAJAAIAAANg");
	this.shape_37.setTransform(-338.2,34.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_38.setTransform(-341.7,32.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAXAqIAAgxQgBgOgFgGQgFgGgLAAQgHAAgGAFQgHAFgCAIIAAA5IgJAAIAAhSIAIAAIABAPQAEgIAHgEQAGgEAIAAQAOAAAHAIQAGAIABASIAAAxg");
	this.shape_39.setTransform(-347.9,34);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgZAfQgKgLAAgTIAAgBQAAgSAKgMQAKgMAPAAQARAAAKAMQAKALgBATIAAABQABAUgKAKQgKAMgRAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAHAKAMAAQANAAAHgKQAHgKABgOIAAgBQgBgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_40.setTransform(-356.8,34.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_41.setTransform(-363,32.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AggApIAAgGIAxhEIgvAAIAAgIIA7AAIAAAIIgxBDIA0AAIAAAHg");
	this.shape_42.setTransform(-368.6,34.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgGQAKgGAPAAIASAAIAAgKQAAgJgFgFQgGgFgKAAQgIAAgHAEQgGAGAAAHIgJAAIAAgBQAAgJAJgHQAJgIAMAAQANAAAJAHQAIAGAAAOIABAwIACAIIgKAAIgCgNQgEAGgIAEQgHAFgJAAQgMAAgHgGgAgQAGQgHAFAAAIQAAAHAFAEQAFAFAHAAQAIAAAIgFQAIgFADgHIAAgRIgSAAQgKAAgJAFg");
	this.shape_43.setTransform(-376.9,34.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAxAqIAAgvQgBgQgFgGQgFgGgKAAQgLAAgFAGQgHAHgBALIAAAzIgIAAIAAgvQAAgQgFgGQgFgGgKAAQgLAAgEAFQgGAEgDAJIAAA5IgJAAIAAhSIAIAAIABAOQAEgHAGgEQAHgEAKAAQAKAAAGAEQAFAFACAKQADgJAIgFQAHgFAKAAQAOAAAGAJQAIAJAAASIAAAvg");
	this.shape_44.setTransform(-388.1,34);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgIAGgEQAFgEAIAAIAEAAIACABIgBAIIgHAAQgJAAgDAFQgGAFgCAIIAAA4g");
	this.shape_45.setTransform(-397.4,34);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgZAfQgLgLAAgTIAAgBQAAgSALgMQAKgMAPAAQARAAAJAMQALAMAAASIAAABQAAATgKALQgLAMgQAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAHAKAMAAQANAAAHgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_46.setTransform(-405,34.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgJA9IAAhLIgOAAIAAgHIAOAAIAAgNQAAgMAGgHQAFgHALAAIAFAAIAGACIgBAHIgEgBIgFAAQgHAAgEAFQgDAFAAAIIAAANIASAAIAAAHIgSAAIAABLg");
	this.shape_47.setTransform(-411.7,32.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgGgFQgEgGgLAAQgIAAgFAFQgHAFgDAIIAAA5IgIAAIAAhSIAIAAIAAAPQAEgIAIgEQAGgEAIAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_48.setTransform(-419,34);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_49.setTransform(-425.3,32.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgTAqIAAhSIAIAAIACAOIAAABQAEgIAFgEQAFgEAIAAIADAAIAEABIgCAIIgGAAQgKAAgDAFQgGAEgCAJIAAA4g");
	this.shape_50.setTransform(-433.1,34);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgWAfQgLgMAAgRIAAgCQAAgTALgLQAKgMANAAQAPAAAJAJQAJALAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAKAAAFgDQAGgCAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgOgaQgHAHgCANIABAAIAvAAIAAgCQAAgMgHgHQgHgHgKAAQgIAAgHAIg");
	this.shape_51.setTransform(-440.4,34.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AglA4IAAhvIAmAAQARAAAKAJQAKAJAAAPQAAAPgKAHQgKAJgRAAIgcAAIAAAvgAgbABIAcAAQAMAAAIgFQAHgIAAgKQAAgKgHgIQgHgHgNAAIgcAAg");
	this.shape_52.setTransform(-449,32.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_53.setTransform(125.6,-0.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgcAfQgKgMAAgTIAAAAQAAgSAKgMQALgMARAAQASAAALAMQAKAMAAASIAAAAQAAATgKAMQgLAMgSAAQgRAAgLgMgAgLgSQgEAGAAAMIAAAAQAAAMAEAHQAEAGAHAAQAIAAAEgGQAEgHAAgMIAAAAQAAgMgEgGQgDgHgJAAQgHAAgEAHg");
	this.shape_54.setTransform(119.3,-4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AANAqIAAgyQAAgJgDgDQgDgEgHAAQgCAAgEACIgGAFIAAA7IgXAAIAAhRIAVAAIABALQAEgGAGgEQAEgDAIAAQANAAAHAIQAHAHAAASIAAAyg");
	this.shape_55.setTransform(110.4,-4.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgbAfQgLgMAAgTIAAAAQAAgSALgMQAKgMARAAQASAAAKAMQALAMAAASIAAAAQAAATgLAMQgKAMgSAAQgRAAgKgMgAgLgSQgFAHAAALIAAAAQAAALAFAIQADAGAIAAQAIAAAEgGQAFgIAAgLIAAAAQAAgLgFgHQgEgHgIAAQgHAAgEAHg");
	this.shape_56.setTransform(101.4,-4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgWAqIAAhRIAVAAIABALQABgGAFgEQAEgDAHAAIADAAIADABIgDAUIgIAAQgEAAgEABQgEACAAAFIAAA2g");
	this.shape_57.setTransform(94.6,-4.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgYAfQgLgLAAgSIAAgCQAAgSAKgMQAKgNAQABQARAAAJAKQAJALAAARIAAAKIgwAAIAAABQABAJAFAEQAEAGAHAAQAIAAAFgCIAKgFIAHAOQgGAFgIACQgIADgKAAQgRAAgKgMgAgHgUQgEAGgBAHIAAAAIAaAAIAAgCQAAgHgDgEQgDgFgHAAQgEAAgEAFg");
	this.shape_58.setTransform(87.2,-4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgdAwQgNgKAAgRIAWAAQAAAKAGAFQAHAEAJAAQAJAAAFgDQAFgEAAgGQAAgHgFgEQgFgEgLgDQgTgGgKgGQgKgIAAgOQAAgOAMgJQAMgJAQAAQATAAALAKQAMAKAAAPIAAAAIgWAAQAAgIgGgEQgFgFgJAAQgHAAgFAEQgFADAAAHQAAAGAFADQAFAEALAEQATAGAKAGQAJAJAAANQAAAPgLAIQgMAJgSAAQgQAAgPgKg");
	this.shape_59.setTransform(77.9,-5.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAMA8IgVgjIgGAAIAAAjIgXAAIAAh3IAXAAIAABDIAFAAIASgeIAaAAIgbAkIAgAug");
	this.shape_60.setTransform(69.2,-5.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgZAfQgKgNAAgSIAAAAQAAgSAKgMQAKgMARAAQAQAAAJAJQAJAJAAAOIAAAAIgVAAQAAgGgEgFQgDgEgGAAQgHAAgEAHQgEAJAAAJIAAAAQAAAKAEAJQAEAGAHAAQAGABADgEQAEgEAAgFIAVAAIAAAAQAAAMgKAJQgKAJgOAAQgRAAgKgMg");
	this.shape_61.setTransform(60.3,-4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgWAqIAAhRIAVAAIABALQACgGAEgEQAEgDAHAAIADAAIADABIgCAUIgJAAQgDAAgFABIgEAHIAAA2g");
	this.shape_62.setTransform(53.8,-4.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgYAfQgLgLAAgSIAAgCQAAgRAKgNQAKgMAPAAQASAAAJAKQAJAKAAASIAAAKIgwAAIAAABQABAIAFAFQAEAGAHAAQAIAAAEgCQAGgBAFgEIAGAOQgFAFgIACQgIADgKAAQgRAAgKgMgAgHgUQgEAGgBAHIAAAAIAaAAIAAgCQAAgGgDgFQgEgFgHAAQgEAAgDAFg");
	this.shape_63.setTransform(46.5,-4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAjA4IADhSIgBAAIgeBSIgNAAIgehRIgBAAIACBRIgWAAIAAhvIAdAAIAcBRIAAAAIAchRIAeAAIAABvg");
	this.shape_64.setTransform(35.3,-5.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_65.setTransform(22.7,-5.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgYAxQgIgKAAgUIAAgBQAAgTAIgLQAJgMAPAAQAHAAAGADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgDAHgIADQgHAEgGAAQgPAAgJgMgAgRgGQgGAHAAARIAAABQAAAQAGAJQAGAJALAAQAIAAAGgEQAIgFACgHIAAglQgDgHgGgFQgFgFgKAAQgKAAgHALg");
	this.shape_66.setTransform(16.3,-5.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRALgMQAJgMAOAAQAQAAAIAKQAJAJAAAQIAAAHIg5AAIAAACQAAAOAHAJQAIAKAKAAQAIAAAHgDQAFgBAFgGIAEAHQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgbQgGAIgCAMIAAAAIAwAAIAAgCQAAgKgHgIQgGgIgLAAQgIAAgIAIg");
	this.shape_67.setTransform(4.1,-4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgHQgFgGgKAAQgIAAgGAGQgGAGgDAIIAAA4IgKAAIAAhRIAJAAIABAOQAEgIAGgEQAGgEAJAAQAOAAAGAIQAIAJAAARIAAAxg");
	this.shape_68.setTransform(-4.4,-4.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgZAfQgLgMAAgTIAAAAQAAgTALgLQAJgMAQAAQARAAAJAMQALALAAATIAAAAQAAATgLAMQgJAMgRAAQgPAAgKgMgAgTgYQgHAKAAAOIAAAAQAAAQAHAJQAHAKAMAAQANAAAHgKQAHgJAAgQIAAAAQAAgOgHgKQgIgLgMAAQgMAAgHALg");
	this.shape_69.setTransform(-13.3,-4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_70.setTransform(-19.5,-5.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AggApIAAgGIAxhDIgvAAIAAgIIA6AAIAAAGIgwBEIA1AAIAAAHg");
	this.shape_71.setTransform(-25,-4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAJgEAQAAIASAAIAAgLQAAgKgFgEQgHgGgJAAQgHABgIAFQgGAFAAAGIgJAAIAAAAQAAgKAJgHQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAwQAAAEACAEIgKAAIgBgHIgBgGQgEAGgIAFQgHAEgIAAQgMAAgHgHgAgPAGQgIAFAAAIQAAAHAFAFQAFADAIAAQAIABAIgFQAHgFADgHIAAgSIgSAAQgKAAgIAGg");
	this.shape_72.setTransform(-33.4,-4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgfApIAAgGIAwhDIgvAAIAAgIIA7AAIAAAGIgxBEIA0AAIAAAHg");
	this.shape_73.setTransform(-41.4,-4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgfApIAAgGIAwhDIgvAAIAAgIIA7AAIAAAGIgxBEIA1AAIAAAHg");
	this.shape_74.setTransform(-49.1,-4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_75.setTransform(-54.9,-5.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgTAqIAAhRIAJAAIABANIAAABQAEgIAFgEQAEgEAJAAIAEAAIADABIgCAJIgGgBQgKAAgDAFQgGAFgCAJIAAA3g");
	this.shape_76.setTransform(-58.9,-4.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgaAfQgKgNAAgSIAAAAQAAgSAKgMQAKgMAQAAQARAAAJAMQALALAAATIAAAAQAAATgLAMQgJAMgRAAQgPAAgLgMgAgTgYQgHAKAAAOIAAAAQAAAQAHAJQAHAKAMAAQAMAAAIgKQAHgJAAgQIAAAAQAAgOgHgKQgIgLgMAAQgMAAgHALg");
	this.shape_77.setTransform(-66.6,-4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgWAjQgIgGAAgLIAAgBIAJAAQAAAKAHAEQAHAEAHAAQAKAAAGgEQAGgFAAgGQAAgGgFgEQgEgEgNgDQgOgDgHgEQgHgGAAgKQAAgJAIgHQAIgGAMAAQAPAAAHAHQAIAHAAAKIAAABIgJAAQAAgIgGgEQgFgGgKAAQgIAAgGAFQgFAFAAAFQAAAHAFADQAEAEALADQAOACAJAFQAHAFAAALQAAAJgIAHQgKAHgNAAQgNAAgJgIg");
	this.shape_78.setTransform(-75.1,-4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgHQgFgGgKAAQgIAAgHAGQgGAGgCAIIAAA4IgJAAIAAhRIAIAAIAAAOQAFgIAGgEQAHgEAHAAQAOAAAHAIQAIAHgBATIAAAxg");
	this.shape_79.setTransform(-83.5,-4.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgaAfQgKgNAAgSIAAAAQABgSAJgMQALgMAPAAQAQAAAKAMQAKAMAAASIAAAAQAAASgKANQgKAMgQAAQgPAAgLgMgAgTgYQgHAKgBAOIAAAAQABAQAHAJQAHAKAMAAQAMAAAIgKQAHgJAAgQIAAAAQAAgOgHgKQgIgLgMAAQgMAAgHALg");
	this.shape_80.setTransform(-92.3,-4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAEgHAHgEQAGgDAHAAQAQAAAIAMQAIALAAAVIAAABQAAASgIAKQgJAMgPAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgGAFgDAHIAAAmQAEAHAFAEQAHAEAHAAQAMAAAGgJQAGgKAAgNIAAgBQAAgRgGgJQgGgLgMAAQgIAAgGAFg");
	this.shape_81.setTransform(-101,-2.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgWAjQgIgGAAgLIAAgBIAJAAQAAAKAHAEQAIAEAGAAQAKAAAGgEQAGgFAAgGQAAgGgFgEQgEgFgNgCQgOgDgHgEQgHgFAAgLQAAgJAIgHQAIgGAMAAQAPAAAHAHQAIAHAAAKIAAABIgJAAQAAgIgGgEQgFgGgKAAQgIAAgGAFQgFAFAAAFQAAAHAFADQAEAEALADQAOACAJAFQAHAFAAALQAAAJgIAHQgKAHgNAAQgNAAgJgIg");
	this.shape_82.setTransform(-109.7,-4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAKgEAPAAIATAAIAAgLQAAgKgGgEQgHgGgJAAQgHABgIAFQgFAFAAAGIgJAAIgBAAQABgKAIgHQAKgHALAAQAPAAAIAHQAIAHAAANIAAAwIACAIIgKAAIgBgHIAAgGQgFAGgIAFQgHAEgIAAQgMAAgHgHgAgPAGQgIAFAAAIQAAAHAFAFQAFADAIAAQAIABAHgFQAJgFADgHIAAgSIgTAAQgKAAgIAGg");
	this.shape_83.setTransform(-121.9,-4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_84.setTransform(-127.9,-5.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_85.setTransform(-131.5,-5.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAKgEAPAAIATAAIAAgLQAAgKgGgEQgHgGgJAAQgHABgIAFQgFAFAAAGIgJAAIgBAAQABgKAIgHQAKgHALAAQAPAAAIAHQAIAHAAANIAAAwIACAIIgKAAIgBgHIAAgGQgFAGgIAFQgHAEgIAAQgMAAgHgHgAgPAGQgIAFAAAIQAAAHAFAFQAFADAIAAQAIABAHgFQAJgFADgHIAAgSIgTAAQgKAAgIAGg");
	this.shape_86.setTransform(-137.7,-4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgXAfQgKgLAAgSIAAgDQAAgSAKgLQAKgMANAAQAQAAAJAKQAJAJAAAQIAAAHIg6AAIAAACQAAAOAIAJQAHAKALAAQAIAAAGgDQAHgBAEgGIAEAHQgEAFgIADQgHADgKAAQgOAAgLgMgAgPgbQgHAJgBALIAAAAIAvAAIAAgCQAAgLgGgHQgGgIgMAAQgIAAgHAIg");
	this.shape_87.setTransform(-149.7,-4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_88.setTransform(-155.7,-5.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AggApIAAgGIAxhDIgvAAIAAgIIA7AAIAAAGIgxBEIA0AAIAAAHg");
	this.shape_89.setTransform(-161.2,-4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAJgEAQAAIATAAIAAgLQgBgKgFgEQgHgGgJAAQgHABgIAFQgGAFAAAGIgIAAIAAAAQAAgKAIgHQAJgHAMAAQAPAAAIAHQAIAHAAANIABAwIABAIIgJAAIgCgHIAAgGQgEAGgJAFQgHAEgIAAQgMAAgHgHgAgPAGQgIAFAAAIQAAAHAFAFQAFADAIAAQAIABAHgFQAJgFADgHIAAgSIgTAAQgKAAgIAGg");
	this.shape_90.setTransform(-169.6,-4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgTAqIAAhRIAJAAIABANIAAABQAEgIAFgEQAFgEAIAAIAEAAIADABIgBAJIgIgBQgJAAgDAFQgGAFgCAJIAAA3g");
	this.shape_91.setTransform(-176,-4.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgLA6IgMgFIACgHQAEACAHACQAFABAFAAQAMAAAGgHQAGgHAAgNIAAgKQgEAFgHAFQgIADgFAAQgPAAgJgMQgIgLAAgQIAAgCQAAgTAIgNQAJgMAPAAQAHAAAHAEQAHAEADAHIACgNIAHAAIAABQQAAARgJAJQgJAJgPAAIgLgBgAgRgoQgGAKAAAQIAAACQAAANAGAJQAGAJALAAQAIAAAHgEQAFgEAEgHIAAgmQgDgHgGgEQgGgFgJgBQgKAAgHALg");
	this.shape_92.setTransform(-183.8,-2.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgXAfQgKgLAAgSIAAgDQAAgRAKgMQAKgMANAAQAQAAAJAKQAJAJAAAQIAAAHIg6AAIAAACQAAAOAIAJQAHAKALAAQAIAAAGgDQAGgBAFgGIAEAHQgEAFgIADQgIADgJAAQgOAAgLgMgAgPgbQgGAIgCAMIAAAAIAwAAIAAgCQAAgLgHgHQgGgIgMAAQgIAAgHAIg");
	this.shape_93.setTransform(-195.9,-4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_94.setTransform(-201.9,-5.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_95.setTransform(-205.5,-5.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgNA5QgGgEgFgHIAAANIgIAAIAAh3IAJAAIAAAyQAFgHAFgEQAHgDAHAAQAPAAAJAMQAJAMAAASIAAABQAAATgJALQgJAMgPAAQgHAAgHgEgAgOgMQgGAGgDAGIAAAlQADAIAGADQAHAFAHAAQAMAAAGgJQAGgJAAgQIAAgBQAAgQgGgIQgGgLgMAAQgIAAgGAFg");
	this.shape_96.setTransform(-211.5,-5.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_97.setTransform(-217.9,-5.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgWAjQgIgGAAgLIAAgBIAJAAQAAAKAHAEQAIAEAGAAQAKAAAGgEQAGgFAAgGQAAgGgFgEQgEgEgNgDQgOgDgHgEQgHgGAAgKQAAgJAIgHQAIgGAMAAQAPAAAHAHQAIAHAAAKIAAABIgJAAQAAgIgGgEQgFgGgKAAQgIAAgGAFQgFAFAAAFQAAAHAFADQAEAEALADQAOACAJAFQAHAFAAALQAAAJgIAHQgKAHgNAAQgNAAgJgIg");
	this.shape_98.setTransform(-223.8,-4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgWAjQgIgHAAgKIAAgBIAJAAQAAAKAHAEQAHAEAHAAQAKAAAGgEQAGgEAAgHQAAgGgFgEQgEgFgNgCQgOgDgHgEQgHgGAAgKQAAgJAIgHQAIgGAMAAQAPAAAHAHQAIAHAAAKIAAABIgJAAQAAgIgFgEQgHgGgJAAQgJAAgEAFQgGAFAAAFQAAAHAFADQAEAEALADQAOACAJAFQAHAFAAALQAAAJgIAHQgJAHgOAAQgNAAgJgIg");
	this.shape_99.setTransform(-231.9,-4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgZAfQgLgNABgSIAAAAQgBgSALgMQAJgMAQAAQAQAAALAMQAJAMABASIAAAAQgBASgJANQgLAMgQAAQgPAAgKgMgAgTgYQgIAKABAOIAAAAQgBAQAIAJQAIAKALAAQANAAAHgKQAIgJgBgQIAAAAQABgOgIgKQgHgLgNAAQgLAAgIALg");
	this.shape_100.setTransform(-240.3,-4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAEgHAHgEQAGgDAHAAQAQAAAIAMQAIALAAAVIAAABQAAASgIAKQgJAMgPAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgGAFgDAHIAAAmQAEAHAFAEQAHAEAHAAQAMAAAGgJQAGgKAAgNIAAgBQAAgRgGgJQgGgLgMAAQgIAAgGAFg");
	this.shape_101.setTransform(-249,-2.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgMAKgHQAJgEAQAAIASAAIAAgLQABgKgGgEQgGgGgKAAQgHABgIAFQgGAFAAAGIgJAAIAAAAQAAgKAJgHQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAwQAAAEACAEIgJAAIgCgHIgBgGQgEAGgIAFQgHAEgIAAQgMAAgIgHgAgQAGQgHAFAAAIQAAAHAFAFQAFADAIAAQAIABAHgFQAJgFACgHIAAgSIgSAAQgKAAgJAGg");
	this.shape_102.setTransform(-261.8,-4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgWAjQgIgGAAgLIAAgBIAJAAQAAAKAHAEQAIAEAGAAQALAAAFgEQAGgFAAgGQAAgGgFgEQgEgFgNgCQgOgDgHgEQgHgFAAgLQAAgJAIgHQAIgGAMAAQAPAAAHAHQAIAHAAAKIAAABIgJAAQAAgIgGgEQgFgGgKAAQgIAAgGAFQgFAFAAAFQAAAHAFADQAEAEALADQAOACAJAFQAHAFAAALQAAAJgIAHQgKAHgNAAQgNAAgJgIg");
	this.shape_103.setTransform(-270.1,-4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRAKgMQAKgMAOAAQAPAAAJAKQAJAJAAAQIAAAHIg6AAIAAACQAAAOAIAJQAHAKALAAQAHAAAIgDQAFgBAFgGIAEAHQgEAFgIADQgHADgKAAQgOAAgKgMgAgPgbQgHAJgBALIAAAAIAvAAIAAgCQAAgKgGgIQgGgIgLAAQgJAAgHAIg");
	this.shape_104.setTransform(-278.1,-4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgTAqIAAhRIAIAAIABANIAAABQAEgHAGgFQAEgEAJAAIADAAIAEABIgCAJIgHgBQgJAAgDAFQgGAEgDAKIAAA3g");
	this.shape_105.setTransform(-284.3,-4.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAKgEAPAAIATAAIAAgLQAAgKgGgEQgGgGgKAAQgIABgGAFQgHAEAAAHIgIAAIgBAAQAAgKAJgHQAKgHAMAAQAOAAAHAHQAJAGAAAOIAAAwIACAIIgKAAIgBgHIAAgGQgFAGgHAFQgIAEgIAAQgMAAgHgHgAgPAGQgHAFAAAIQAAAHAEAFQAFADAIAAQAIABAIgFQAHgFAEgHIAAgSIgTAAQgKAAgIAGg");
	this.shape_106.setTransform(-295.8,-4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADADQADADAEAAIAKAAIABAHIgFABIgHABQgJAAgDgFg");
	this.shape_107.setTransform(-302.6,-5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAKgEAPAAIATAAIAAgLQgBgKgFgEQgHgGgJAAQgHABgHAFQgHAFAAAGIgIAAIAAAAQAAgKAIgHQAKgHALAAQAPAAAHAHQAJAHAAANIABAwIABAIIgJAAIgCgHIAAgGQgFAGgIAFQgHAEgIAAQgMAAgHgHgAgPAGQgIAFABAIQgBAHAFAFQAFADAIAAQAIABAHgFQAIgFAEgHIAAgSIgTAAQgKAAgIAGg");
	this.shape_108.setTransform(-309.6,-4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAHAAIAAAWIATAAIAAAHIgTAAIAAA1QAAAIADADQADADAFAAIAKAAIABAHIgGABIgGABQgJAAgDgFg");
	this.shape_109.setTransform(-316.4,-5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgVAjQgJgHAAgKIAAgBIAJAAQAAAKAHAEQAHAEAIAAQAKAAAFgEQAGgFAAgGQAAgGgFgEQgEgFgNgCQgPgDgFgEQgHgFAAgLQAAgJAIgHQAHgGAMAAQAPAAAIAHQAIAHgBAKIAAABIgIAAQAAgIgGgEQgHgGgJAAQgIAAgFAFQgFAFAAAFQAAAHAEADQAFAEALADQAOACAIAFQAHAFAAALQAAAKgIAGQgJAHgNAAQgOAAgIgIg");
	this.shape_110.setTransform(-323.1,-4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgWAvQgLgLAAgSIAAgFQAAgQALgMQAKgLANAAQAPAAAJAJQAJAJAAAPIAAAIIg5AAIAAADQAAAOAHAJQAIAKAKAAQAIAAAHgDQAFgCAFgFIAEAHQgEAFgIADQgHADgKAAQgOAAgKgMgAgOgLQgHAIgCAKIABAAIAvAAIAAgCQAAgJgHgHQgGgIgLAAQgIAAgHAIgAAAglIgSgVIAMAAIANAVg");
	this.shape_111.setTransform(-335,-5.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgXAfQgKgKAAgTIAAgDQAAgSAKgLQAKgMANAAQAQAAAJAKQAJAJAAAQIAAAHIg6AAIAAACQAAAOAIAJQAHAKALAAQAIAAAGgDQAGgBAFgGIAEAHQgEAFgIADQgHADgKAAQgOAAgLgMgAgPgbQgHAIgBAMIAAAAIAvAAIAAgCQAAgLgGgHQgGgIgMAAQgIAAgHAIg");
	this.shape_112.setTransform(-347,-4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAXAqIAAgxQAAgOgGgHQgFgGgLAAQgGAAgHAGQgHAGgCAIIAAA4IgJAAIAAhRIAHAAIACAOQADgHAHgFQAGgEAJAAQANAAAHAIQAHAJABARIAAAxg");
	this.shape_113.setTransform(-355.6,-4.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgZAfQgLgNABgSIAAAAQgBgSALgMQAJgMAQAAQAQAAAKAMQALAMgBASIAAAAQABASgLANQgKAMgQAAQgPAAgKgMgAgTgYQgIAKABAOIAAAAQgBAQAIAJQAIAKALAAQAMAAAIgKQAHgJAAgQIAAAAQAAgOgHgKQgIgLgMAAQgLAAgIALg");
	this.shape_114.setTransform(-364.4,-4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_115.setTransform(-370.7,-5.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AggApIAAgGIAxhDIgvAAIAAgIIA7AAIAAAGIgxBEIA0AAIAAAHg");
	this.shape_116.setTransform(-376.2,-4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAKgEAPAAIATAAIAAgLQAAgKgGgEQgHgGgJAAQgIABgGAFQgHAEAAAHIgIAAIgBAAQAAgKAJgHQAKgHALAAQAPAAAHAHQAJAGAAAOIAAAwIACAIIgKAAIgBgHIAAgGQgFAGgIAFQgHAEgIAAQgMAAgHgHgAgPAGQgIAFAAAIQAAAHAFAFQAFADAIAAQAIABAIgFQAHgFAEgHIAAgSIgTAAQgKAAgIAGg");
	this.shape_117.setTransform(-384.6,-4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AggApIAAgGIAxhDIgvAAIAAgIIA7AAIAAAGIgxBEIA0AAIAAAHg");
	this.shape_118.setTransform(-392.5,-4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgfApIAAgGIAwhDIgvAAIAAgIIA7AAIAAAGIgyBEIA1AAIAAAHg");
	this.shape_119.setTransform(-400.3,-4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_120.setTransform(-406.1,-5.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_121.setTransform(-409.7,-5.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgMAKgHQAJgEAQAAIATAAIAAgLQgBgKgGgEQgFgGgKAAQgIABgHAFQgGAEAAAHIgIAAIAAAAQgBgKAJgHQAKgHALAAQAPAAAHAHQAJAGAAAOIAAAwIACAIIgKAAIgBgNQgFAFgIAGQgIAEgIAAQgLAAgIgHgAgQAGQgHAFAAAIQAAAHAEAFQAGADAHAAQAJABAHgFQAHgFAFgHIAAgSIgTAAQgLAAgIAGg");
	this.shape_122.setTransform(-415.9,-4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRALgMQAKgMANAAQAPAAAJAKQAJAJAAAQIAAAHIg5AAIAAACQAAAOAHAJQAIAKAKAAQAIAAAHgDQAFgBAFgGIAEAHQgEAFgIADQgHADgKAAQgOAAgKgMgAgOgbQgHAIgCAMIABAAIAvAAIAAgCQAAgLgHgHQgGgIgLAAQgIAAgHAIg");
	this.shape_123.setTransform(-424.1,-4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgTAqIAAhRIAJAAIABANIAAABQAEgIAFgEQAEgEAKAAIADAAIACABIgBAJIgHgBQgJAAgDAFQgFAEgDAKIAAA3g");
	this.shape_124.setTransform(-430.3,-4.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAJgEAQAAIASAAIAAgLQAAgKgFgEQgGgGgKAAQgHABgIAFQgGAFAAAGIgJAAIAAAAQAAgKAJgHQAJgHAMAAQAOAAAJAHQAIAHAAANIAAAwQAAAEACAEIgKAAIgBgHIgBgGQgEAGgIAFQgHAEgJAAQgLAAgHgHgAgQAGQgHAFAAAIQAAAHAFAFQAFADAIAAQAIABAHgFQAJgFACgHIAAgSIgSAAQgKAAgJAGg");
	this.shape_125.setTransform(-441.7,-4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgfA4IAAhvIAKAAIAABnIA1AAIAAAIg");
	this.shape_126.setTransform(-449.5,-5.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_127.setTransform(281.1,-19.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgaAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQAQAAAKAMQAKALAAATIAAABQAAATgKALQgJAMgRAAQgPAAgLgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAIAKALAAQAMAAAIgKQAHgJAAgPIAAgBQAAgOgHgKQgIgKgMAAQgLAAgIAKg");
	this.shape_128.setTransform(274.9,-23.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgXAfQgJgMgBgSIAAgBQABgSAJgMQAKgMAPAAQANAAAKAIQAIAJAAANIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAKQgHAIAAAQIAAABQAAAPAHAKQAGAJAMAAQAIAAAIgFQAHgGAAgJIAIAAIAAABQABAMgKAHQgLAIgLAAQgQAAgJgMg");
	this.shape_129.setTransform(266.4,-23.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgXAfQgJgMAAgSIAAgBQAAgTAJgLQAJgMAPAAQAOAAAJAIQAJAJAAANIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAKQgGAKAAAOIAAABQAAAOAGALQAHAJALAAQAKAAAHgFQAHgGAAgJIAIAAIAAABQAAAMgJAHQgLAIgMAAQgOAAgKgMg");
	this.shape_130.setTransform(258.1,-23.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgXAhQgIgJABgTIAAguIAIAAIAAAuQAAAQAGAGQAGAHAJAAQAJAAAGgFQAFgDAEgKIAAg5IAJAAIAABRIgIAAIgBgNQgEAHgHAEQgHAEgIAAQgNAAgHgJg");
	this.shape_131.setTransform(249.6,-23);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgbAxQgMgJAAgQIAAAAIAJAAQAAAOAKAFQAJAHAMAAQANAAAIgGQAJgGAAgKQAAgJgHgGQgHgGgRgEQgRgDgJgHQgKgIAAgMQAAgOALgHQALgJAOAAQARAAALAKQALAKAAAOIgBAAIgIAAQAAgMgIgGQgIgIgOAAQgLAAgIAGQgIAGAAAJQAAAJAHAGQAIAGAPAEQATADAIAHQAKAIAAANQAAAOgLAIQgLAIgRAAQgPAAgNgJg");
	this.shape_132.setTransform(240.4,-24.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_133.setTransform(230,-24.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgIAAgGAFQgGAEgDAKIAAA4IgKAAIAAhRIAJAAIABAOQAEgHAGgFQAHgEAIAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_134.setTransform(223.7,-23.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgGgFQgFgGgKAAQgHAAgHAFQgFAEgDAKIAAA4IgKAAIAAhRIAIAAIACAOQADgHAIgFQAGgEAIAAQANAAAIAIQAGAJABARIAAAxg");
	this.shape_135.setTransform(214.9,-23.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgIQAKgEAPAAIATAAIAAgLQAAgJgGgFQgHgFgJAAQgHAAgHAFQgHAFAAAHIgIAAIgBgBQABgJAIgIQAKgHAMAAQAOAAAHAHQAJAHAAANIAAAwIACAIIgKAAIgBgHIAAgGQgFAGgHAFQgJAEgHAAQgLAAgIgGgAgPAGQgHAGgBAHQABAHAEAFQAFAEAIAAQAIAAAHgFQAIgEAEgIIAAgRIgTAAQgLAAgHAFg");
	this.shape_136.setTransform(206.1,-23.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgCApIgghRIAJAAIAYA8IABAKIAAAAIAZhGIAKAAIggBRg");
	this.shape_137.setTransform(198.2,-23.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgZAfQgKgMAAgSIAAgBQAAgSAKgMQAKgMAPAAQAQAAALAMQAKALgBATIAAABQABATgKALQgKAMgRAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAHAKAMAAQAMAAAIgKQAHgJABgPIAAgBQgBgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_138.setTransform(190,-23.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_139.setTransform(183.8,-24.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgcAsQgMgNAAgWIAAgSQAAgVALgNQAMgOARAAQATAAAKAKQAKAJACAOIAAABIgJAAQgCgMgIgHQgIgHgOAAQgMAAgKALQgJAMAAARIAAASQAAASAKALQAJAMAPAAQALAAAIgDQAIgEACgDIAAgeIgdAAIAAgIIAmAAIAAApQgDAGgLAEQgLAFgNAAQgSAAgNgOg");
	this.shape_140.setTransform(176.4,-24.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_141.setTransform(165.2,-19.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgJA9IAAhKIgOAAIAAgIIAOAAIAAgMQAAgNAHgHQAEgHALAAIALACIgBAHIgJgBQgHAAgEAFQgDAEAAAKIAAAMIATAAIAAAIIgTAAIAABKg");
	this.shape_142.setTransform(161.1,-25);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgSALgMQAKgMAPAAQARAAAJAMQALAMAAASIAAABQAAASgLAMQgJAMgRAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAHAKAMAAQANAAAHgKQAHgJAAgPIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_143.setTransform(153.8,-23.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgSAqIAAhRIAIAAIABANIAAABQADgHAGgFQAFgEAIAAIAGABIgBAJIgHgBQgIAAgEAFQgGAGgCAHIAAA4g");
	this.shape_144.setTransform(147.3,-23.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgkA4IAAhvIAkAAQATAAAJAJQAJAJAAAPQAAAPgJAHQgJAJgTAAIgbAAIAAAvgAgbABIAbAAQAPAAAGgFQAIgIgBgKQABgLgIgHQgGgHgPAAIgbAAg");
	this.shape_145.setTransform(139.6,-24.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_146.setTransform(128.6,-24.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgMAKgHQAJgEAQAAIASAAIAAgLQAAgJgFgFQgHgFgJAAQgIAAgHAFQgGAFAAAHIgJAAIAAgBQAAgJAJgIQAJgHAMAAQAOAAAIAHQAIAHAAANIABAwIACAIIgKAAIgCgNQgDAGgJAFQgHAEgJAAQgLAAgHgGgAgPAGQgIAGAAAHQAAAHAFAFQAFAEAHAAQAJAAAHgFQAHgEAEgIIAAgRIgSAAQgMAAgGAFg");
	this.shape_147.setTransform(122.5,-23.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgaQgGAHgCAMIAAABIAwAAIAAgDQAAgKgHgIQgGgHgLAAQgIAAgIAIg");
	this.shape_148.setTransform(110.4,-23.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgGgGgJAAQgLAAgFAHQgHAHgBAKIAAAzIgHAAIAAgvQAAgPgGgHQgGgGgJAAQgJAAgHAFQgFAFgDAIIAAA5IgJAAIAAhRIAIAAIABANQAEgHAHgEQAHgEAJAAQAJAAAHAFQAFAFACAJQAEgIAHgGQAIgFAJAAQANAAAIAJQAHAJAAASIAAAvg");
	this.shape_149.setTransform(99.2,-23.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgaQgHAIgBALIAAABIAwAAIAAgDQAAgKgHgIQgGgHgLAAQgIAAgIAIg");
	this.shape_150.setTransform(88.1,-23.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_151.setTransform(82.2,-24.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgWAkQgIgIAAgKIAAAAIAJAAQABAJAGAEQAHAEAHAAQAKAAAGgEQAGgFAAgGQAAgGgFgEQgEgFgNgCQgPgDgFgEQgIgFAAgKQAAgJAJgHQAIgHALAAQAOAAAIAHQAJAIgBAKIAAAAIgIAAQAAgHgGgFQgHgFgJAAQgIAAgFAEQgFAFAAAFQAAAHAEADQAEAEAMADQAOADAIAEQAHAGAAAKQAAAKgIAHQgJAGgOAAQgNAAgJgHg");
	this.shape_152.setTransform(76.3,-23.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgGgGgKAAQgHAAgHAFQgFAEgEAKIAAA4IgJAAIAAhRIAIAAIABAOQAEgHAHgFQAHgEAHAAQAOAAAHAIQAIAJgBARIAAAxg");
	this.shape_153.setTransform(67.9,-23.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_154.setTransform(61.7,-24.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgLAKgIQAJgEAQAAIASAAIAAgLQAAgJgFgFQgHgFgJAAQgHAAgHAFQgHAFAAAHIgJAAIAAgBQAAgJAJgIQAJgHAMAAQAPAAAHAHQAJAHAAANIAAAwQAAAFACADIgKAAIgBgHIgBgGQgEAGgIAFQgHAEgIAAQgMAAgIgGgAgPAGQgIAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAHgFQAIgFADgHIAAgRIgSAAQgLAAgHAFg");
	this.shape_155.setTransform(51.6,-23.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgCAvQgFgGAAgMIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADADQADAEAFAAIAJgBIABAGIgFADIgHAAQgIAAgEgGg");
	this.shape_156.setTransform(44.7,-24);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgHQAKgEAPAAIATAAIAAgLQAAgJgGgFQgHgFgJAAQgHAAgIAFQgGAFAAAHIgJAAIAAgBQAAgJAJgIQAJgHAMAAQANAAAKAHQAIAHAAANIAAAwQAAAFACADIgKAAIgBgNQgFAGgIAFQgIAEgIAAQgLAAgIgGgAgQAGQgHAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAHgFQAHgEAFgIIAAgRIgTAAQgMAAgHAFg");
	this.shape_157.setTransform(37.8,-23.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADADQADAEAFAAIAJgBIABAGIgFADIgHAAQgIAAgEgGg");
	this.shape_158.setTransform(30.9,-24);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAHAAIAAAVIATAAIAAAIIgTAAIAAA0QAAAJADADQADAEAFAAIAKgBIABAGIgGADIgGAAQgJAAgDgGg");
	this.shape_159.setTransform(25.7,-24);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgXAfQgKgLAAgSIAAgCQAAgSAKgMQALgMAMAAQAQAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAJAKAAQAIAAAGgCQAGgCAFgFIAEAGQgEAFgIADQgHADgKAAQgOAAgLgMgAgPgaQgGAHgCAMIAAABIAwAAIAAgDQAAgLgHgHQgGgHgMAAQgIAAgHAIg");
	this.shape_160.setTransform(19.1,-23.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgMA6IgLgEIACgIIAKAEQAGABAFAAQALAAAHgHQAGgHAAgNIAAgKQgEAGgHAEQgHADgGAAQgPAAgIgLQgKgLAAgRIAAgCQAAgUAKgMQAHgMAQAAQAHAAAGAEQAHAEAFAHIAAgNIAIAAIAABQQAAARgIAJQgKAJgPAAIgMgBgAgQgoQgHAKAAAQIAAACQAAANAGAJQAHAJAKAAQAIAAAGgEQAHgEADgHIAAglQgDgIgGgEQgFgFgKAAQgLAAgFAKg");
	this.shape_161.setTransform(10.3,-21.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgZAfQgLgLAAgTIAAgBQAAgTALgLQAJgMAQAAQAQAAALAMQAJAMABASIAAABQgBASgJAMQgLAMgQAAQgQAAgJgMgAgTgYQgIAKABAOIAAABQgBAPAIAJQAHAKAMAAQAMAAAIgKQAIgJAAgPIAAgBQAAgOgIgKQgIgKgMAAQgMAAgHAKg");
	this.shape_162.setTransform(1.7,-23.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgSAqIAAhRIAIAAIABANIAAABQADgHAGgFQAEgEAJAAIAGABIgBAJIgHgBQgIAAgEAFQgGAFgCAIIAAA4g");
	this.shape_163.setTransform(-4.8,-23.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABAOQAEgIAHgEQAGgDAHAAQAQAAAIAMQAIAMAAAUIAAACQAAARgIAKQgJAMgPAAQgFAAgIgEQgHgDgEgGIAAArgAgOgtQgFAEgEAHIAAAnQAEAIAFADQAHAEAHAAQAMAAAGgJQAGgKAAgMIAAgCQAAgPgGgLQgHgKgLAAQgIgBgGAFg");
	this.shape_164.setTransform(-12.3,-21.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgaQgGAHgCAMIAAABIAwAAIAAgDQAAgKgHgIQgGgHgLAAQgIAAgIAIg");
	this.shape_165.setTransform(-24.8,-23.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgaAfQgKgMABgSIAAgBQgBgSAKgMQALgMAPAAQAQAAAKAMQAKALAAATIAAABQAAATgKALQgJAMgRAAQgPAAgLgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAIAKALAAQAMAAAIgKQAHgJAAgPIAAgBQAAgOgHgKQgIgKgMAAQgLAAgIAKg");
	this.shape_166.setTransform(-37.2,-23.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgFgGgKAAQgIAAgGAFQgGAEgDAKIAAA4IgKAAIAAhRIAJAAIABAOQAEgHAGgFQAIgEAHAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_167.setTransform(-46,-23.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_168.setTransform(-52.2,-24.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgTAqIAAhRIAJAAIABANIAAABQAEgIAFgEQAGgEAIAAIAFABIgBAJIgGgBQgKAAgDAFQgGAFgCAIIAAA4g");
	this.shape_169.setTransform(-56.2,-23.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgaAfQgJgMgBgSIAAgBQABgSAJgMQALgMAPAAQARAAAJAMQAKALAAATIAAABQAAATgKALQgJAMgRAAQgPAAgLgMgAgTgYQgHALAAANIAAABQAAAOAHAKQAHAKAMAAQAMAAAIgKQAHgJAAgPIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_170.setTransform(-63.9,-23.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgDA4IAAhnIgnAAIAAgIIBVAAIAAAIIgnAAIAABng");
	this.shape_171.setTransform(-72.2,-24.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_172.setTransform(-82.6,-24.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgYAxQgIgLAAgSIAAgCQAAgSAIgMQAJgMAPAAQAGAAAHADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgFAHgGADQgGAEgHAAQgPAAgJgMgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAIAAAHgEQAGgFADgHIAAglQgDgHgGgFQgFgFgKABQgLAAgGAKg");
	this.shape_173.setTransform(-89,-24.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgKA8IAAh3IAVAAIAAB3g");
	this.shape_174.setTransform(-99.2,-24.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgWAqIAAhRIAVAAIABAMQABgHAFgDQAFgEAGAAIAGABIgDAUIgIAAQgFAAgDACIgEAGIAAA2g");
	this.shape_175.setTransform(-103.7,-23.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgZAjQgJgJAAgLIAAAAIAVAAQAAAHAEADQAFADAEAAQAGAAAEgDQADgDAAgEQAAgDgDgDQgGgDgGgCQgPgDgHgEQgIgGAAgKQAAgLAJgHQAJgIAOAAQAQAAAJAHQAKAIgBALIAAABIgWAAQAAgFgDgDQgDgDgGAAQgEAAgDACQgDADAAAEQAAAEADACQAEADAIACQAPADAIAEQAHAGAAAKQAAAMgJAHQgKAHgQAAQgPAAgKgIg");
	this.shape_176.setTransform(-111.1,-23.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgcAfQgKgMAAgTIAAAAQAAgSAKgMQALgMARAAQASAAALAMQAKAMAAASIAAAAQAAATgKAMQgLAMgSAAQgRAAgLgMgAgMgRQgDAHAAAKIAAAAQAAAMADAHQAFAHAHAAQAJAAAEgHQADgIAAgLIAAAAQAAgKgDgIQgFgHgIAAQgHAAgFAIg");
	this.shape_177.setTransform(-123.5,-23.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgFAuQgGgGAAgOIAAgpIgNAAIAAgQIANAAIAAgVIAUAAIAAAVIAOAAIAAAQIgOAAIAAApQAAAFACACQACACAEAAIADAAIADgBIACAQIgOADQgLAAgFgHg");
	this.shape_178.setTransform(-131,-24);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgFAuQgGgGAAgOIAAgpIgNAAIAAgQIANAAIAAgVIAUAAIAAAVIAOAAIAAAQIgOAAIAAApQAAAFACACQACACAEAAIADAAIADgBIACAQIgOADQgLAAgFgHg");
	this.shape_179.setTransform(-136.5,-24);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AghAsQgNgOAAgUIAAgTQAAgUANgOQANgOAUAAQAVAAAMAOQAOAOAAAUIAAATQAAAUgOAOQgMAOgVAAQgTAAgOgOgAgRgfQgGAKAAAMIAAATQAAAMAGAKQAHAIAKAAQALAAAGgIQAHgJAAgNIAAgTQAAgNgHgIQgGgJgLAAQgLAAgGAIg");
	this.shape_180.setTransform(-144.5,-24.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgIQAKgEAPAAIASAAIAAgLQAAgJgFgFQgHgFgJAAQgHAAgHAFQgHAFAAAHIgJAAIAAgBQAAgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAwQABAFABADIgKAAIgBgHIgBgGQgEAGgIAFQgIAEgHAAQgMAAgHgGgAgPAGQgIAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAIgFQAHgFADgHIAAgRIgSAAQgLAAgHAFg");
	this.shape_181.setTransform(-158.2,-23.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgYAxQgIgLAAgSIAAgCQAAgSAIgMQAJgMAPAAQAHAAAGADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgFAHgGADQgGAEgHAAQgPAAgJgMgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAIAAAHgEQAGgFADgHIAAglQgEgIgFgEQgFgFgKABQgLAAgGAKg");
	this.shape_182.setTransform(-167,-24.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgIQAKgEAPAAIASAAIAAgLQAAgJgFgFQgHgFgJAAQgHAAgHAFQgHAFAAAHIgIAAIgBgBQABgKAIgHQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAwIACAIIgKAAIgBgHIgBgGQgDAGgIAFQgJAEgHAAQgMAAgHgGgAgPAGQgIAGABAHQgBAHAFAFQAFAEAIAAQAIAAAHgFQAJgEACgIIAAgRIgSAAQgLAAgHAFg");
	this.shape_183.setTransform(-179.4,-23.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAHAAIAAAVIATAAIAAAIIgTAAIAAA0QAAAJADADQADAEAFAAIAKgBIABAGIgGADIgGAAQgJAAgDgGg");
	this.shape_184.setTransform(-186.3,-24);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgLAKgIQAJgEAQAAIASAAIAAgLQAAgJgFgFQgGgFgKAAQgHAAgIAFQgGAFAAAHIgJAAIAAgBQAAgJAJgIQAJgHAMAAQAOAAAJAHQAIAHAAANIABAwQAAAFABADIgJAAIgCgHIgBgGQgEAGgIAFQgIAEgHAAQgLAAgJgGgAgQAGQgHAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAHgFQAJgFACgHIAAgRIgSAAQgLAAgIAFg");
	this.shape_185.setTransform(-193.2,-23.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AghA6IAAhyIAJAAIAAAOQAFgIAGgEQAIgDAGAAQAPAAAJAMQAIANAAATIAAACQAAAQgIALQgJAMgOAAQgGAAgIgEQgGgCgFgHIAAArgAgOgtQgGAEgDAHIAAAnQAEAIAFADQAHAEAHAAQALAAAHgJQAGgJAAgNIAAgCQAAgQgGgKQgHgKgLAAQgIgBgGAFg");
	this.shape_186.setTransform(-201.6,-21.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AggA6IAAhyIAHAAIACAOQADgHAHgFQAHgDAHAAQAPAAAJAMQAIANAAATIAAACQAAAQgIALQgJAMgPAAQgFAAgIgEQgGgCgFgHIAAArgAgOgtQgGAEgDAHIAAAnQAEAIAFADQAHAEAHAAQALAAAHgJQAGgKAAgMIAAgCQAAgQgGgKQgHgKgLAAQgIgBgGAFg");
	this.shape_187.setTransform(-210.5,-21.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAuQAAAQAFAGQAFAHAKAAQAIAAAHgFQAGgEACgJIAAg5IAKAAIAABRIgIAAIgBgNQgDAGgIAFQgHAEgHAAQgOAAgHgJg");
	this.shape_188.setTransform(-219.5,-23);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_189.setTransform(-225.7,-24.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_190.setTransform(-229.3,-24.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgCApIgghRIAJAAIAZBGIAAAAIADgKIAWg8IAKAAIggBRg");
	this.shape_191.setTransform(-235,-23.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgWAkQgIgHAAgLIAAAAIAJAAQAAAJAHAEQAIAEAGAAQALAAAFgEQAGgFAAgGQAAgGgFgEQgFgFgMgCQgOgDgHgEQgHgFAAgKQAAgKAIgGQAJgHALAAQAOAAAIAHQAIAHAAALIAAAAIgJAAQAAgHgGgFQgGgFgJAAQgIAAgGAEQgFAFAAAFQAAAHAFADQAEAEALADQAPADAIAEQAHAGAAAKQAAAKgIAHQgKAGgNAAQgNAAgJgHg");
	this.shape_192.setTransform(-243,-23.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgNA5QgGgEgFgHIAAANIgJAAIAAh3IAKAAIAAAzQAFgHAFgFQAIgDAGAAQAPAAAJAMQAJAMAAASIAAACQAAASgJALQgJAMgPAAQgHAAgHgEgAgOgMQgGAFgDAHIAAAlQADAHAGAEQAHAFAHAAQAMAAAGgJQAGgJAAgPIAAgCQAAgQgGgIQgHgKgLAAQgJAAgFAEg");
	this.shape_193.setTransform(-255.1,-24.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSAKgMQALgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAJAKAAQAHAAAIgCQAFgCAFgFIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgPgaQgHAIgBALIAAABIAvAAIAAgDQAAgKgGgIQgGgHgLAAQgJAAgHAIg");
	this.shape_194.setTransform(-263.7,-23.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AAWApIgWhFIAAAAIgVBFIgIAAIgYhRIAJAAIATBFIABAAIAWhFIAGAAIAVBGIABAAIAThGIAJAAIgYBRg");
	this.shape_195.setTransform(-273.9,-23.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgIQAKgEAPAAIASAAIAAgLQAAgJgFgFQgHgFgJAAQgHAAgHAFQgHAFAAAHIgIAAIgBgBQAAgKAJgHQAJgHAMAAQAPAAAHAHQAJAHAAANIAAAwIACAIIgKAAIgBgHIgBgGQgEAGgHAFQgJAEgHAAQgMAAgHgGgAgPAGQgHAGgBAHQABAHAEAFQAFAEAIAAQAIAAAHgFQAIgEADgIIAAgRIgSAAQgLAAgHAFg");
	this.shape_196.setTransform(-288.1,-23.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgFgGgKAAQgLAAgGAHQgGAHgBAKIAAAzIgHAAIAAgvQAAgPgGgHQgFgGgKAAQgJAAgHAFQgFAFgDAIIAAA5IgJAAIAAhRIAIAAIABANQAEgHAHgEQAHgEAJAAQAJAAAHAFQAFAEACAKQAEgJAHgFQAIgFAJAAQANAAAIAJQAHAJAAASIAAAvg");
	this.shape_197.setTransform(-299.3,-23.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgSAqIAAhRIAIAAIABANIAAABQAEgIAFgEQAEgEAJAAIAGABIgBAJIgHgBQgIAAgEAFQgGAFgCAIIAAA4g");
	this.shape_198.setTransform(-308.5,-23.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgaAfQgKgMABgSIAAgBQgBgSAKgMQALgMAPAAQAQAAAKAMQAKAMAAASIAAABQAAATgKALQgJAMgRAAQgPAAgLgMgAgTgYQgHAKgBAOIAAABQABAPAHAJQAIAKALAAQAMAAAIgKQAHgJAAgPIAAgBQAAgOgHgKQgIgKgMAAQgLAAgIAKg");
	this.shape_199.setTransform(-316.2,-23.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgJA9IAAhKIgOAAIAAgIIAOAAIAAgMQAAgMAGgIQAEgHAMAAIALACIgCAHIgIgBQgIAAgEAFQgCAFAAAJIAAAMIASAAIAAAIIgSAAIAABKg");
	this.shape_200.setTransform(-322.9,-25);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgHQAJgEAQAAIASAAIAAgLQABgJgHgFQgFgFgKAAQgIAAgGAFQgHAFAAAHIgJAAIAAgBQAAgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAwIACAIIgKAAIgCgNQgDAGgJAFQgIAEgIAAQgLAAgIgGgAgPAGQgIAGAAAHQAAAHAEAFQAGAEAIAAQAIAAAHgFQAIgEADgIIAAgRIgSAAQgMAAgGAFg");
	this.shape_201.setTransform(-330.2,-23.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADADQADAEAFAAIAJgBIABAGIgFADIgHAAQgJAAgDgGg");
	this.shape_202.setTransform(-337.1,-24);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAHAAIAAAVIATAAIAAAIIgTAAIAAA0QAAAJADADQADAEAFAAIAKgBIABAGIgGADIgGAAQgJAAgDgGg");
	this.shape_203.setTransform(-342.3,-24);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgLAKgIQAKgEAPAAIASAAIAAgLQAAgJgFgFQgHgFgJAAQgHAAgIAFQgGAFAAAHIgIAAIAAgBQgBgJAJgIQAJgHAMAAQAOAAAJAHQAIAHAAANIABAwIABAIIgJAAIgCgHIgBgGQgEAGgIAFQgIAEgHAAQgLAAgJgGgAgQAGQgHAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAHgFQAIgFADgHIAAgRIgSAAQgLAAgIAFg");
	this.shape_204.setTransform(-349.3,-23.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_205.setTransform(-355.2,-24.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AghA6IAAhyIAIAAIABAOQAFgIAGgEQAIgDAGAAQAPAAAJAMQAJANAAATIAAACQAAAQgJALQgJAMgPAAQgGAAgHgEQgGgCgFgHIAAArgAgOgtQgGAEgDAHIAAAnQADAIAGADQAHAEAHAAQALAAAHgJQAGgJAAgNIAAgCQAAgQgGgKQgHgKgLAAQgJgBgFAFg");
	this.shape_206.setTransform(-361.3,-21.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgIQAKgEAPAAIATAAIAAgLQAAgJgGgFQgGgFgKAAQgHAAgIAFQgGAFAAAHIgIAAIAAgBQAAgKAIgHQAJgHAMAAQAPAAAHAHQAJAHAAANIABAwIABAIIgJAAIgCgHIAAgGQgFAGgIAFQgIAEgHAAQgMAAgHgGgAgPAGQgIAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAHgFQAIgFAEgHIAAgRIgTAAQgLAAgHAFg");
	this.shape_207.setTransform(-374.1,-23.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgGgGgKAAQgHAAgHAFQgFAEgEAKIAAA4IgIAAIAAhRIAHAAIABAOQAEgHAIgFQAGgEAHAAQAOAAAIAIQAGAJABARIAAAxg");
	this.shape_208.setTransform(-382.7,-23.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAuQAAARAFAFQAFAHAKAAQAIAAAHgFQAGgEACgJIAAg5IAKAAIAABRIgJAAIAAgNQgDAGgIAFQgHAEgHAAQgOAAgHgJg");
	this.shape_209.setTransform(-391.6,-23);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgWAvQgLgLAAgSIAAgEQAAgRALgMQAKgMANABQAPgBAJAKQAJALAAAOIAAAIIg6AAIAAACQAAAOAIAKQAIAJAKAAQAIAAAHgDQAFgCAFgEIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgKQgHAHgBAKIAAABIAwAAIAAgDQAAgIgHgIQgGgIgLABQgJgBgHAJgAAAglIgTgVIAAAAIAMAAIAOAVg");
	this.shape_210.setTransform(-403.9,-24.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgeAsQgNgMAAgVIAAgVQAAgVANgMQAMgOASAAQAVAAAMALQAMALgBASIAAABIgWAAQAAgMgGgFQgFgGgLAAQgIAAgGAIQgGAJAAAMIAAAVQAAANAGAIQAHAIAIAAQALAAAFgGQAFgFAAgMIAWAAIAAABQAAASgLALQgMALgUAAQgSAAgNgOg");
	this.shape_211.setTransform(-416.9,-24.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgeAsQgNgMAAgVIAAgVQAAgVANgMQAMgOASAAQAVAAAMALQAMALgBASIAAABIgWAAQAAgMgGgFQgFgGgLAAQgIAAgGAIQgGAJAAAMIAAAVQAAANAGAIQAHAIAIAAQALAAAFgGQAFgFAAgMIAWAAIAAABQAAASgLALQgMALgUAAQgSAAgNgOg");
	this.shape_212.setTransform(-427,-24.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AghAsQgNgNAAgVIAAgTQAAgVANgNQANgOAUAAQAUAAAOAOQAMAOAAAUIAAATQAAAUgMAOQgOAOgUAAQgUAAgNgOgAgRgfQgGAJAAANIAAATQAAANAGAJQAGAIALAAQAKAAAHgIQAHgKAAgMIAAgTQAAgMgHgJQgGgJgLAAQgLAAgGAIg");
	this.shape_213.setTransform(-437.6,-24.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AAXA4IgshLIAAAAIAABLIgXAAIAAhvIAXAAIArBLIABAAIAAhLIAWAAIAABvg");
	this.shape_214.setTransform(-448.6,-24.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#0C5EA5").ss(6.2).p("EBHKATkMiOTAAAQhvAAhPhPQhPhPAAhvIAA+tQAAhvBPhPQBPhPBvAAMCOTAAAQBvAABPBPQBPBPAABvIAAetQAABvhPBPQhPBPhvAAg");

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("EhHJATkQhvAAhPhPQhPhPAAhvIAA+tQAAhvBPhPQBPhPBvAAMCOSAAAQBwAABOBPQBPBPAABvIAAetQAABvhPBPQhOBPhwAAg");

	this.addChild(this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-485.4,-128.3,970.8,256.7);


(lib.popC = function() {
	this.initialize();

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5EA5").s().p("Ag4BUQgXgaAAgnIAAgkQAAgoAXgZQAXgaAiAAQAkAAAVATQAWAUgBAfIAAABIgcAAQAAgWgNgNQgNgNgYAAQgWAAgPATQgOAUAAAcIAAAlQAAAcAOAUQAPAUAWAAQAXAAAOgNQANgNAAgXIAcAAIAAABQABAegWAUQgVAUgkAAQgiAAgXgZg");
	this.shape.setTransform(-145.9,-42.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5EA5").s().p("Ag4BUQgXgaAAgnIAAgkQAAgoAXgZQAXgaAiAAQAkAAAVATQAWAUgBAfIAAABIgcAAQAAgWgNgNQgNgNgYAAQgWAAgPATQgOAUAAAcIAAAlQAAAcAOAUQAPAUAWAAQAXAAAOgNQANgNAAgXIAcAAIAAABQABAegWAUQgVAUgkAAQgiAAgXgZg");
	this.shape_1.setTransform(-164.9,-42.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5EA5").s().p("Ag9BUQgXgbAAgmIAAgkQAAgnAXgaQAYgaAlAAQAkAAAZAaQAYAaAAAnIAAAkQAAAngYAaQgYAZglAAQglAAgYgZgAgohCQgPATAAAdIAAAlQAAAeAPASQAPATAZAAQAZAAAQgTQAPgTAAgdIAAglQAAgdgQgTQgPgSgZAAQgZAAgPASg");
	this.shape_2.setTransform(-184.9,-42.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5EA5").s().p("AA0BqIhmijIAAABIAACiIgdAAIAAjTIAdAAIBkCjIACgBIAAiiIAcAAIAADTg");
	this.shape_3.setTransform(-205.8,-42.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5EA5").s().p("AgtA8QgUgWAAgjIAAgFQAAgiAUgWQAVgXAZAAQAgAAAQAUQARATAAAgIAAAQIhlAAIAAABQAAAXALAOQAMAPARAAQAPAAALgEQALgEAIgIIALATQgJAJgNAFQgPAGgTAAQgfAAgTgWgAgWguQgKAMgCATIAAABIBHAAIAAgEQAAgRgJgMQgJgLgSAAQgMAAgLAMg");
	this.shape_4.setTransform(-231.7,-39.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5EA5").s().p("AgmBQIAAicIAaAAIADAXQAHgNAIgGQAJgHANAAIAGAAIAFABIgEAbIgPgBQgKAAgJAGQgFAFgFAKIAABvg");
	this.shape_5.setTransform(-243.8,-39.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5EA5").s().p("Ag0BFQgNgMAAgXQAAgXATgLQASgMAdAAIAgAAIAAgQQAAgNgJgJQgIgIgQAAQgNAAgHAHQgJAHAAAKIgcAAIAAgBQgBgRARgOQASgPAZAAQAbAAAQAOQARAOAAAaIAABaIAEAQIgeAAIgDgYQgJAMgMAHQgMAIgOAAQgZAAgNgNgAgaAOQgKAJAAAMQAAAKAHAGQAGAHANAAQANAAANgIQANgJAEgKIAAgaIghAAQgPAAgLAJg");
	this.shape_6.setTransform(-258.1,-39.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5EA5").s().p("Ag+BPIAAgVIBVhxIhTAAIAAgXIB2AAIAAAUIhVByIBaAAIAAAXg");
	this.shape_7.setTransform(-273.7,-39.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C5EA5").s().p("Ag+BPIAAgVIBUhxIhTAAIAAgXIB2AAIAAAUIhUByIBZAAIAAAXg");
	this.shape_8.setTransform(-288.8,-39.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0C5EA5").s().p("AgNByIAAidIAbAAIAACdgAgNhTIAAgeIAbAAIAAAeg");
	this.shape_9.setTransform(-300.3,-42.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0C5EA5").s().p("AgNByIAAjjIAbAAIAADjg");
	this.shape_10.setTransform(-307.8,-42.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0C5EA5").s().p("AgNByIAAidIAbAAIAACdgAgNhTIAAgeIAbAAIAAAeg");
	this.shape_11.setTransform(-315.4,-42.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0C5EA5").s().p("AgGBZQgKgLAAgXIAAheIgZAAIAAgVIAZAAIAAgmIAbAAIAAAmIAeAAIAAAVIgeAAIAABeQAAAMAFAEQAEAFAIAAIAFgBIAGgBIADATQgDADgGACQgGABgHAAQgRAAgJgKg");
	this.shape_12.setTransform(-324.8,-41.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0C5EA5").s().p("AgxBAQgOgRAAgjIAAhbIAdAAIAABcQAAAZAHAJQAIAKAQAAQANAAAKgGQAKgHAFgLIAAhwIAdAAIAACcIgaAAIgCgXQgHANgMAGQgLAHgOAAQgaAAgPgQg");
	this.shape_13.setTransform(-338.1,-39.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0C5EA5").s().p("AgyBZQgTgWAAgkIAAgDQAAgiATgWQASgXAgAAQAhAAASAXQATAWAAAiIAAADQAAAkgTAWQgSAWghAAQgfAAgTgWgAgegMQgLAPAAAYIAAAEQAAAZALAQQALARATAAQAUAAALgRQALgQAAgZIAAgEQAAgZgLgOQgLgQgUAAQgTAAgLAQgAgJhHIglgmIAAgBIAiAAIAYAng");
	this.shape_14.setTransform(-362.6,-42.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0C5EA5").s().p("AgxBAQgOgQAAgkIAAhbIAdAAIAABcQAAAZAHAJQAHAKARAAQAOAAAJgGQAJgGAGgMIAAhwIAdAAIAACcIgaAAIgCgXQgIANgLAGQgLAHgOAAQgaAAgPgQg");
	this.shape_15.setTransform(-379.6,-39.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0C5EA5").s().p("AhCBvIAAjaIAWAAIAEAVQAJgMALgGQALgGAOAAQAdAAAQAYQARAXAAAmIAAAEQAAAggRAVQgQAVgcAAQgOAAgKgFQgMgFgHgKIAABOgAgXhRQgJAGgFAKIAABKQAGALAIAFQAJAFAMAAQATAAAKgPQALgPAAgWIAAgDQAAgagLgSQgKgRgTAAQgMAAgJAFg");
	this.shape_16.setTransform(-396.3,-36.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0C5EA5").s().p("AgNByIAAidIAbAAIAACdgAgNhTIAAgeIAbAAIAAAeg");
	this.shape_17.setTransform(-416.4,-42.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0C5EA5").s().p("AAjByIAAhkQAAgRgIgKQgJgJgRAAQgKAAgKAFQgJAGgHAKIAABzIgcAAIAAjjIAcAAIAABcQAJgMAMgGQALgHAOAAQAZAAAOAQQAOAPAAAdIAABkg");
	this.shape_18.setTransform(-428.7,-42.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0C5EA5").s().p("Ag4BUQgXgaAAgnIAAgkQAAgnAXgaQAXgaAiAAQAkAAAWATQAVAUAAAfIgBABIgbAAQAAgWgOgNQgMgNgZAAQgWAAgOATQgPAUAAAcIAAAlQAAAcAPAUQAOAUAWAAQAYAAANgNQAOgNAAgXIAbAAIABABQAAAegWAUQgVAUgkAAQgiAAgXgZg");
	this.shape_19.setTransform(-446.5,-42.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_20.setTransform(381.2,37.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgHQAKgFAPAAIASAAIAAgKQAAgIgGgGQgFgFgKAAQgJAAgFAFQgHAEAAAHIgIAAIAAAAQgBgJAJgIQAJgHAMAAQANAAAJAHQAIAGAAAPIAAAmIACAJIABAIIgKAAIgCgNQgFAHgHAEQgIAEgIAAQgMAAgHgGgAgQAGQgHAGAAAHQAAAHAFAEQAEAFAJAAQAIAAAHgFQAIgEADgIIAAgSIgSAAQgKAAgJAGg");
	this.shape_21.setTransform(375,34.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgMQAJgLAQAAQANAAAKAIQAJAIgBAOIAAAAIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAJQgHAKAAAPIAAABQAAAPAHAJQAGAKAMAAQAJAAAHgFQAHgFAAgJIAIAAQABAMgKAHQgJAIgNAAQgQAAgJgMg");
	this.shape_22.setTransform(366.7,34.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_23.setTransform(360.8,32.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_24.setTransform(357.2,32.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgMAKgHQALgFAOAAIATAAIAAgKQAAgJgGgFQgGgFgKAAQgIAAgHAFQgGAFAAAGIgIAAIAAAAQAAgJAIgHQAJgIAMAAQAOAAAIAHQAJAHAAANIAAAnIACASIgKAAIgBgIIAAgGQgHAIgFADQgJAEgHAAQgNAAgGgGgAgPAGQgIAFABAJQgBAGAFAEQAFAFAIAAQAIAAAHgFQAIgEAEgIIAAgSIgTAAQgKAAgIAGg");
	this.shape_25.setTransform(351,34.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgJA9IAAhLIgOAAIAAgHIAOAAIAAgMQAAgNAGgHQAFgHALAAIAFAAIAGACIgBAHIgEgBIgFAAQgHAAgFAFQgCAFAAAJIAAAMIASAAIAAAHIgSAAIAABLg");
	this.shape_26.setTransform(344.5,32.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgWAgQgLgMAAgSIAAgCQAAgTALgLQAKgMANAAQAPAAAJAKQAJAJAAARIAAAGIg5AAIAAACQAAAOAHAJQAHAKALAAQAKAAAEgCQAHgDAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgLgAgPgaQgHAHgBANIABAAIAuAAIAAgDQAAgLgGgHQgGgHgLAAQgJAAgHAIg");
	this.shape_27.setTransform(337.6,34.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgcAsQgMgOAAgVIAAgRQAAgVAMgOQAMgNAQAAQATAAAKAJQAKAKACARIAAAAIgJAAQgCgNgIgJQgIgGgOAAQgNgBgJAMQgIAKAAATIAAARQAAATAIAKQAJAMANgBQAOAAAIgGQAIgIACgPIAJAAIAAABQgCARgKAKQgKAJgTAAQgQAAgMgNg");
	this.shape_28.setTransform(328.4,32.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgaAfQgJgLgBgTIAAgBQABgTAJgLQALgMAPAAQAQAAAKAMQALAMgBASIAAABQABATgLALQgKAMgQAAQgPAAgLgMgAgTgYQgIAKAAAOIAAABQAAAPAIAJQAHAKAMAAQANAAAHgKQAHgJAAgPIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_29.setTransform(315,34.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgXAgQgJgMAAgTIAAgBQAAgTAJgLQAJgMAQAAQANAAAKAIQAJAIgBAOIAAAAIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAJQgHAKAAAPIAAABQAAAPAHAJQAGAKAMAAQAJAAAHgFQAHgFAAgKIAIAAQABAMgKAIQgJAIgNAAQgQAAgJgLg");
	this.shape_30.setTransform(306.4,34.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_31.setTransform(300.5,32.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgCAqIgghSIAKAAIAXA8IABAKIAAAAIAahGIAJAAIggBSg");
	this.shape_32.setTransform(294.8,34.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgSAqIAAhSIAHAAIACAOIAAABQAEgIAFgEQAEgEAJAAIAEAAIADABIgCAIIgGAAQgKAAgDAFQgGAEgCAJIAAA4g");
	this.shape_33.setTransform(288.6,34.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgSALgLQAKgMANAAQAPAAAJAKQAJAJAAARIAAAGIg5AAIAAACQAAAPAHAIQAIAKAKAAQAKAAAFgCQAGgDAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgOgaQgHAHgCAMIABABIAvAAIAAgCQAAgMgHgHQgHgHgKAAQgIAAgHAIg");
	this.shape_34.setTransform(281.3,34.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgcAsQgMgOAAgWIAAgPQAAgWAMgOQALgNARAAQATAAAKAJQAKAKACAQIAAABIgJAAQgCgOgIgHQgIgIgOABQgNgBgJAMQgJAMAAARIAAAQQAAATAJALQAJALANABQAOgBAIgGQAIgJACgNIAJAAIAAAAQgCARgKAKQgKAKgTgBQgRABgLgOg");
	this.shape_35.setTransform(272.2,32.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgGQALgGAOABIATAAIAAgLQAAgIgGgGQgGgFgKAAQgJAAgFAFQgHAFAAAHIgIAAIAAgBQgBgJAJgHQAJgIAMAAQAOAAAIAHQAJAHAAANIAAAwIACAJIgKAAIgBgOQgFAHgIADQgHAFgIAAQgNAAgGgHgAgPAGQgIAGAAAHQAAAHAFAEQAEAFAJAAQAIAAAIgFQAHgFAEgHIAAgRIgTAAQgKAAgIAFg");
	this.shape_36.setTransform(258.8,34.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_37.setTransform(252.8,32.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgMA6QgFgBgHgDIADgIIAKADQAGACAFAAQALAAAHgHQAGgIAAgMIAAgKQgFAHgGACQgGAEgHAAQgQAAgIgLQgIgLAAgRIAAgCQAAgVAIgLQAJgMAPAAQAHAAAGAEQAHADAEAIIABgOIAIAAIAABRQAAAQgJAKQgJAJgPAAIgMgBgAgRgoQgGAJAAARIAAACQAAANAGAJQAGAJALAAQAIAAAHgEQAGgFADgHIAAglQgDgHgGgFQgGgEgJAAQgLAAgGAKg");
	this.shape_38.setTransform(246.4,35.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgaAfQgJgLAAgTIAAgBQgBgUAKgKQALgMAPAAQAQAAAKAMQALAMAAASIAAABQAAATgLALQgKAMgQAAQgPAAgLgMgAgTgYQgIAKAAAOIAAABQAAAOAIAKQAHAKAMAAQANAAAHgKQAIgKAAgOIAAgBQAAgOgIgKQgHgKgNAAQgMAAgHAKg");
	this.shape_39.setTransform(237.8,34.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_40.setTransform(231.5,32.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgTALgLQAKgMAPAAQAQAAAKAMQALALAAATIAAABQAAASgLAMQgKAMgQAAQgPAAgKgMgAgTgYQgIAKABAOIAAABQgBAOAIAKQAHAKAMAAQANAAAHgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_41.setTransform(225.3,34.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgXAgQgJgMAAgTIAAgBQAAgTAJgMQAJgLAQAAQANAAAKAIQAJAJgBAMIAAABIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAJQgHAKAAAPIAAABQAAAPAHAJQAGAKAMAAQAJAAAHgFQAHgFAAgJIAIAAQABALgKAIQgJAIgNAAQgQAAgJgLg");
	this.shape_42.setTransform(216.8,34.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgGgGgKAAQgIAAgGAFQgGAFgDAIIAAA5IgIAAIAAhSIAHAAIABAPQAEgHAIgFQAGgEAHAAQAPAAAGAIQAIAJgBARIAAAxg");
	this.shape_43.setTransform(208.3,34.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgfAsQgLgOAAgWIAAgQQAAgVALgOQAMgOATABQATgBAMAOQAMANAAAWIAAAQQAAAWgMAOQgMANgTABQgTgBgMgNgAgYgmQgJAMAAASIAAARQAAATAJALQAJAKAPAAQAQAAAJgKQAJgMAAgSIAAgRQAAgRgJgNQgKgKgPAAQgPAAgJAKg");
	this.shape_44.setTransform(198.5,32.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_45.setTransform(187.5,32.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgYAyQgIgLAAgTIAAgCQAAgTAIgLQAJgMAPAAQAHAAAGADQAGAEAFAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgGADQgHAEgHAAQgQAAgIgLgAgRgGQgGAHAAARIAAACQAAAPAGAJQAHAJAKAAQAJAAAFgEQAGgDAEgIIAAgmQgDgHgGgFQgGgEgJAAQgLAAgGAKg");
	this.shape_46.setTransform(181.1,32.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgLAKgHQAKgFAPAAIATAAIAAgLQAAgIgGgGQgFgFgLAAQgJAAgFAFQgHAEAAAIIgIAAIAAgBQgBgJAJgHQAJgIAMAAQAOAAAIAHQAJAGAAAPIAAAvIACAJIgKAAIgBgOQgFAHgIAEQgHAEgIAAQgNAAgGgGgAgPAGQgIAGAAAIQAAAGAFAEQAFAFAIAAQAIAAAIgFQAHgEAEgIIAAgRIgTAAQgKgBgIAGg");
	this.shape_47.setTransform(168.6,34.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgJAAgFAFQgGAFgDAIIAAA5IgJAAIAAhSIAIAAIAAAPQAFgIAHgEQAGgEAIAAQAOAAAGAIQAHAIAAASIAAAxg");
	this.shape_48.setTransform(160,34.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgMAKgHQAKgFAPAAIATAAIAAgKQAAgJgGgFQgFgFgLAAQgIAAgHAFQgGAFAAAHIgIAAIAAgBQgBgJAJgHQAJgIAMAAQAOAAAIAHQAJAHAAANIAAAwIACAIIgJAAIgCgHIAAgGQgGAHgHAEQgHAEgIAAQgMAAgIgHgAgPAGQgIAGAAAHQAAAHAFAFQAEAEAJAAQAIAAAHgFQAIgFAEgHIAAgSIgTAAQgKAAgIAGg");
	this.shape_49.setTransform(151.2,34.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_50.setTransform(145.3,32.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_51.setTransform(141.7,32.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgLAKgHQAKgFAPAAIATAAIAAgLQgBgJgFgFQgFgFgLAAQgIAAgGAFQgHAFAAAGIgIAAIAAAAQgBgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAwIACAIIgKAAIgBgHIAAgGQgGAHgGAEQgJAEgHAAQgNAAgGgHgAgPAGQgIAFAAAJQAAAGAFAEQAEAFAJAAQAIAAAIgFQAHgFAEgHIAAgRIgTAAQgKAAgIAFg");
	this.shape_52.setTransform(135.5,34.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgCAvQgFgGAAgLIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIADADQADAEAFAAIAJgBIABAHIgFABIgHABQgIAAgEgGg");
	this.shape_53.setTransform(128.6,33.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgDA4IAAhvIAHAAIAABvg");
	this.shape_54.setTransform(123.9,32.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgTALgLQAKgMANAAQAQAAAIAJQAJAKAAARIAAAGIg5AAIAAACQAAAPAHAIQAIAKAKAAQAKAAAFgDQAGgCAEgEIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgbQgGAIgCAMIAAABIAwAAIAAgDQAAgKgHgIQgHgHgKAAQgIAAgIAHg");
	this.shape_55.setTransform(113.8,34.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgFgGgKAAQgJAAgFAFQgGAFgDAIIAAA5IgKAAIAAhSIAJAAIABAPQAEgIAGgEQAIgEAHAAQAOAAAGAIQAIAJAAARIAAAxg");
	this.shape_56.setTransform(105.3,34.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgZAfQgLgLAAgTIAAgBQAAgTALgLQAKgMAPAAQARAAAJAMQALALAAATIAAABQAAATgLALQgJAMgRAAQgPAAgKgMgAgTgYQgHAKAAAOIAAAAQAAAQAHAJQAHAKAMAAQANAAAHgKQAHgJAAgQIAAAAQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_57.setTransform(96.4,34.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_58.setTransform(90.2,32.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgfApIAAgGIAwhDIgvAAIAAgIIA7AAIAAAGIgxBDIA1AAIAAAIg");
	this.shape_59.setTransform(84.7,34.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgLAKgIQAKgFAPABIASAAIAAgLQAAgJgFgFQgGgFgKAAQgIAAgGAFQgHAFAAAGIgJAAIAAAAQAAgJAJgHQAJgIAMAAQAOAAAJAHQAIAHAAANIABAwIABAIIgKAAIgBgHIgBgGQgFAHgHADQgIAFgHAAQgNAAgHgGgAgPAGQgIAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAIgFQAHgFADgHIAAgSIgSAAQgKAAgIAGg");
	this.shape_60.setTransform(76.3,34.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_61.setTransform(70.3,32.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgXAfQgKgMAAgSIAAgBQAAgSAKgMQAKgMAOAAQAPAAAJAIQAIAIABAOIgBAAIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAJQgGAKAAAPIAAABQAAAPAGAKQAGAJAMAAQAKAAAHgFQAHgFAAgKIAIAAQABANgKAHQgKAIgNAAQgPAAgJgMg");
	this.shape_62.setTransform(64.4,34.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgZAfQgLgKAAgUIAAgBQAAgTALgLQAKgMAPAAQAQAAAKAMQAKALAAATIAAABQAAASgKAMQgKAMgQAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAHAKAMAAQANAAAHgKQAIgKAAgOIAAgBQAAgOgIgKQgHgKgNAAQgMAAgHAKg");
	this.shape_63.setTransform(55.9,34.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgWAkQgIgIAAgJIAAgBIAJAAQABAKAGADQAGAEAIAAQAKAAAGgFQAGgDAAgHQAAgGgFgEQgEgFgNgDQgNgCgHgEQgIgFAAgKQAAgJAIgIQAIgGAMAAQAOAAAIAHQAJAHgBAKIAAABIgIAAQAAgHgGgFQgGgFgKAAQgIAAgFAEQgFAFAAAFQAAAGAEAEQAEAEALACQAQAEAHAEQAHAFAAALQAAAKgIAGQgIAHgPAAQgMAAgKgHg");
	this.shape_64.setTransform(47.3,34.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgVAkQgJgHAAgLIAAAAIAJAAQABAKAGADQAGAEAJAAQAKAAAFgEQAGgEAAgHQAAgHgFgDQgEgFgNgDQgNgCgHgEQgHgFAAgKQAAgKAIgGQAIgHALAAQAOAAAJAHQAIAHgBAKIAAABIgIAAQAAgHgGgFQgGgFgKAAQgIAAgFAEQgFAEAAAGQAAAHAEADQAFAEALACQAPAEAHAEQAHAFAAALQAAAKgIAHQgIAGgOAAQgOAAgIgHg");
	this.shape_65.setTransform(39.2,34.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAlA4IgMggIgyAAIgLAgIgKAAIArhvIAHAAIAqBvgAgVAQIArAAIgWg7g");
	this.shape_66.setTransform(30.3,32.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgGARIAFgUIAAgNIAIAAIAAANIgHAUg");
	this.shape_67.setTransform(19.8,38.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgfAsQgMgNAAgUIAAgUQAAgVAMgOQANgMASAAQAUAAAMAKQAMAMAAARIgBABIgVAAQAAgMgFgFQgFgGgMAAQgJAAgGAIQgGAIAAANIAAAVQAAANAHAIQAGAIAJAAQAKAAAGgFQAFgGAAgMIAVAAIAAABQABASgMALQgLALgUAAQgTAAgNgOg");
	this.shape_68.setTransform(13.5,32.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgfAtQgMgNAAgVIAAgUQAAgVAMgNQANgOASABQAVAAALAKQAMAMAAARIgBABIgWAAQABgMgGgFQgEgGgMAAQgJAAgGAIQgFAIgBANIAAAVQABANAGAIQAGAIAJAAQAKAAAFgGQAGgFgBgMIAWAAIAAABQABASgMALQgLALgUAAQgTgBgNgMg");
	this.shape_69.setTransform(3.3,32.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AggAsQgOgNAAgWIAAgSQAAgUAOgOQANgNATgBQAUABANANQANANAAAVIAAASQAAAWgNANQgNAOgUgBQgTABgNgOgAgRgfQgGAIAAAOIAAASQAAAOAGAIQAGAJALAAQALAAAGgJQAHgIAAgOIAAgSQAAgOgHgIQgGgIgLAAQgLAAgGAIg");
	this.shape_70.setTransform(-7.3,32.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgKA4IAAhvIAVAAIAABvg");
	this.shape_71.setTransform(-15,32.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAbA4IgIgYIglAAIgIAYIgXAAIAnhvIAVAAIAnBvgAgNAOIAbAAIgOgrIAAAAg");
	this.shape_72.setTransform(-22.4,32.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgGgFQgFgGgKAAQgIAAgFAFQgHAFgDAIIAAA5IgJAAIAAhSIAJAAIAAAPQAFgIAGgEQAIgEAGAAQAOAAAHAIQAIAJAAARIAAAxg");
	this.shape_73.setTransform(-35.8,34.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgZAfQgLgLAAgTIAAgBQAAgTALgLQAKgMAPAAQARAAAJAMQALALAAATIAAABQAAATgKALQgLAMgQAAQgPAAgKgMgAgTgYQgHAKAAAOIAAAAQAAAQAHAJQAHAKAMAAQANAAAHgKQAHgKAAgPIAAAAQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_74.setTransform(-44.7,34.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgXAgQgJgNAAgSIAAgBQAAgTAJgMQAJgLAPAAQAPAAAIAIQAJAJAAAMIAAABIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAJQgGALAAAOIAAABQAAAOAGALQAHAJALAAQAKAAAHgFQAHgFAAgKIAIAAQAAANgJAHQgKAIgNAAQgOAAgKgLg");
	this.shape_75.setTransform(-53.2,34.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgaAfQgKgMAAgSIAAgBQAAgTAKgLQALgMAPAAQAQAAALAMQAJALAAATIAAABQAAASgJAMQgLAMgQAAQgPAAgLgMgAgTgYQgIAKAAAOIAAAAQAAAQAIAJQAHAKAMAAQANAAAHgKQAHgJAAgQIAAAAQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_76.setTransform(-65.6,34.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAPAAQAHAAAGADQAHAFAEAGIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgGAEgHAAQgQAAgIgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAJAAAGgEQAFgEAEgHIAAgmQgDgHgGgFQgGgEgJAAQgLAAgGAKg");
	this.shape_77.setTransform(-74.6,32.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQAEgIAFgEQAFgEAIAAIAEAAIACABIgBAIIgHAAQgJAAgDAFQgFAEgDAJIAAA4g");
	this.shape_78.setTransform(-80.9,34.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgZAfQgLgLAAgTIAAgBQAAgTALgLQAKgMAPAAQARAAAJAMQALALAAATIAAABQAAAUgLAKQgJAMgRAAQgPAAgKgMgAgTgYQgHAKAAAOIAAAAQAAAPAHAKQAHAKAMAAQANAAAHgKQAIgKgBgPIAAAAQABgOgIgKQgHgKgNAAQgMAAgHAKg");
	this.shape_79.setTransform(-88.5,34.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgXAgQgKgNAAgSIAAgBQAAgSAKgMQAKgMAPAAQAOAAAIAIQAJAJAAAMIAAABIgIAAQAAgKgHgGQgHgGgJAAQgMAAgHAKQgGAJAAAPIAAABQAAAPAGAJQAHAKAMAAQAJAAAHgFQAHgFAAgJIAIAAQAAALgJAIQgKAIgMAAQgPAAgKgLg");
	this.shape_80.setTransform(-97,34.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgLQAJgMAPAAQAPAAAIAIQAKAIgBAOIAAAAIgIAAQAAgKgHgGQgGgGgLAAQgLAAgHAJQgGALAAAOIAAABQAAAOAGALQAHAJAMAAQAJAAAHgFQAHgGAAgIIAIAAQAAALgJAIQgKAIgMAAQgQAAgJgMg");
	this.shape_81.setTransform(-105.3,34.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgZAkQgHgHAAgKQAAgLAKgIQALgFAOAAIATAAIAAgKQAAgJgGgFQgFgFgLAAQgIAAgHAFQgGAEAAAHIgJAAIAAAAQAAgJAJgIQAJgHAMAAQAOAAAJAHQAIAHAAANIAAAnIACASIgKAAIgBgIIAAgGQgGAHgGAEQgIAEgIAAQgNAAgGgHgAgPAGQgIAGAAAIQAAAGAFAEQAEAFAJAAQAIAAAHgFQAIgFAEgHIAAgSIgTAAQgKABgIAFg");
	this.shape_82.setTransform(-113.8,34.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgGgFQgEgGgLAAQgIAAgFAFQgHAFgDAIIAAA5IgIAAIAAhSIAHAAIABAPQAEgIAHgEQAIgEAGAAQAOAAAIAIQAGAJAAARIAAAxg");
	this.shape_83.setTransform(-126.2,34.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_84.setTransform(-132.4,32.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgGARIAFgUIAAgNIAIAAIAAANIgHAUg");
	this.shape_85.setTransform(-139.8,38.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgXAfQgKgLAAgSIAAgDQAAgSAKgLQALgMAMAAQAQAAAJAJQAJALAAAQIAAAGIg6AAIAAACQAAAOAIAJQAHAKALAAQAJAAAFgCQAHgDAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgLgMgAgPgaQgHAIgBAMIAAAAIAvAAIAAgDQAAgLgGgHQgGgHgMAAQgIAAgHAIg");
	this.shape_86.setTransform(-145.2,34.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgIAAgHAFQgGAFgCAIIAAA5IgJAAIAAhSIAHAAIABAPQAFgIAGgEQAIgEAGAAQAPAAAGAIQAIAJAAARIAAAxg");
	this.shape_87.setTransform(-153.7,34.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgZAfQgLgLAAgTIAAgBQAAgTALgLQAKgMAPAAQAQAAAKAMQAKALAAATIAAABQAAATgKALQgKAMgQAAQgPAAgKgMgAgTgYQgIAKAAAOIAAABQAAAOAIAKQAHAKAMAAQANAAAHgKQAHgKABgOIAAgBQgBgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_88.setTransform(-162.6,34.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_89.setTransform(-168.8,32.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AggApIAAgGIAxhDIgvAAIAAgIIA7AAIAAAHIgxBDIA0AAIAAAHg");
	this.shape_90.setTransform(-174.4,34.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_91.setTransform(-180.2,32.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgGgGgJAAQgJAAgGAFQgFAFgDAIIAAA5IgJAAIAAhSIAHAAIACAPQADgHAIgFQAHgEAGAAQAOAAAHAIQAHAJABARIAAAxg");
	this.shape_92.setTransform(-186.4,34.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAYA9IAAhSIAKAAIAABSgAgTA9IAAhLIgOAAIAAgHIAOAAIAAgLQAAgNAIgIQAIgHAKAAIALABIAKAEIgBAIIgJgDIgKgBQgIAAgFAFQgEAEAAAKIAAALIARAAIAAAHIgRAAIAABLg");
	this.shape_93.setTransform(-195.6,32.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgWAgQgLgMAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAIAAASIAAAGIg5AAIAAACQAAAOAHAJQAIAKAKAAQAKAAAFgDQAGgCAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgLgAgOgbQgHAIgCANIABAAIAvAAIAAgDQAAgLgHgHQgHgHgKAAQgIAAgHAHg");
	this.shape_94.setTransform(-203.4,34.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAPAAQAIAAAFADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgGADQgHAEgHAAQgPAAgJgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAJAAAGgEQAFgDAEgIIAAgmQgDgHgGgFQgGgEgJAAQgKAAgHAKg");
	this.shape_95.setTransform(-212.2,32.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_96.setTransform(-222,32.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAPAAQAHAAAGADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgFAEgIAAQgPAAgJgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAJAAAGgEQAFgEAEgHIAAgmQgDgHgGgFQgFgEgKAAQgLAAgGAKg");
	this.shape_97.setTransform(-228.5,32.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgMAKgGQALgFAOgBIASAAIAAgKQAAgJgFgFQgGgFgKAAQgIAAgHAFQgGAFAAAGIgIAAIgBAAQAAgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAnIACARIgKAAIgBgHIgBgGQgFAHgHADQgHAFgIAAQgNAAgGgGgAgPAGQgHAFAAAJQAAAGAEAFQAFAEAIAAQAJAAAHgFQAIgFACgHIAAgRIgSAAQgKgBgIAGg");
	this.shape_98.setTransform(-240.9,34.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_99.setTransform(-246.9,32.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgCAqIgghTIAKAAIAXA+IABAJIAAAAIAahHIAJAAIggBTg");
	this.shape_100.setTransform(-252.6,34.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAXAqIAAgxQgBgOgFgGQgFgGgLAAQgHAAgHAFQgGAFgCAIIAAA5IgKAAIAAhSIAIAAIABAPQAFgIAGgEQAIgEAHAAQAOAAAGAIQAHAIABASIAAAxg");
	this.shape_101.setTransform(-264.7,34.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_102.setTransform(-271,32.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgZAfQgLgKAAgUIAAgBQAAgUALgKQAJgMAQAAQAQAAAKAMQALALAAATIAAABQAAASgLAMQgKAMgQAAQgQAAgJgMgAgTgYQgHAKAAAOIAAAAQAAAQAHAJQAHAKAMAAQANAAAHgKQAHgJAAgQIAAAAQAAgPgHgJQgHgKgNAAQgMAAgHAKg");
	this.shape_103.setTransform(-281,34.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgLAAQgHAAgHAFQgGAFgCAIIAAA5IgJAAIAAhSIAIAAIABAPQAEgIAHgEQAGgEAIAAQAOAAAHAIQAGAIAAASIAAAxg");
	this.shape_104.setTransform(-289.9,34.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgSALgMQAKgMAPAAQAQAAAKAMQAKALAAATIAAABQAAATgKALQgJAMgRAAQgPAAgKgMgAgTgYQgHAJAAAPIAAABQAAAPAHAJQAHAKAMAAQANAAAHgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_105.setTransform(-298.7,34.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgWAkQgJgIABgJIAAgBIAIAAQABAJAHAEQAGAEAIAAQALAAAFgEQAGgEAAgHQAAgGgFgEQgFgFgMgCQgNgDgIgEQgHgFAAgKQAAgKAIgHQAIgGAMAAQAOAAAIAHQAJAHgBALIAAAAIgJAAQAAgHgGgFQgFgFgKAAQgIAAgGAEQgFAEAAAGQAAAGAFAEQAEADALADQAQAEAHAEQAHAFAAAKQAAALgIAHQgJAGgOAAQgNAAgJgHg");
	this.shape_106.setTransform(-307.2,34.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_107.setTransform(-316.9,32.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIADAEQADADAFAAIAJgBIABAHIgFABIgHABQgIAAgEgGg");
	this.shape_108.setTransform(-321.4,33.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgWAkQgJgHABgKIAAgBIAJAAQABAKAGADQAGAEAIAAQAKAAAGgEQAGgEAAgHQAAgGgFgEQgFgFgMgCQgNgDgIgEQgHgGAAgJQAAgKAIgGQAIgHAMAAQAOAAAIAHQAIAHAAALIAAAAIgJAAQAAgHgFgFQgGgFgKAAQgIAAgFAEQgGAFAAAFQAAAHAFADQAEADALADQAQAEAHAEQAHAFAAAKQAAALgIAHQgIAGgPAAQgMAAgKgHg");
	this.shape_109.setTransform(-328.1,34.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgaAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQAQAAAKAMQAKAMAAASIAAABQAAASgKAMQgKAMgQAAQgPAAgLgMgAgTgYQgIAKAAAOIAAABQAAAPAIAJQAHAKAMAAQANAAAHgKQAIgJAAgPIAAgBQAAgOgIgKQgHgKgNAAQgMAAgHAKg");
	this.shape_110.setTransform(-336.5,34.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgXAgQgJgMAAgTIAAgBQAAgTAJgMQAJgLAQAAQANAAAKAIQAJAIgBAOIAAAAIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAJQgHAKAAAPIAAABQAAAPAHAKQAGAJAMAAQAJAAAHgFQAHgFAAgKIAIAAQABAMgKAIQgJAIgNAAQgQAAgJgLg");
	this.shape_111.setTransform(-345,34.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_112.setTransform(-354.8,32.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgSALgLQAKgMANAAQAPAAAJAKQAJAJAAARIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAKAAAFgCQAGgDAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgPgaQgGAIgCAMIABAAIAvAAIAAgDQAAgLgHgHQgHgHgKAAQgIAAgIAIg");
	this.shape_113.setTransform(-364.5,34.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgaA0QgGgGAAgLQAAgMAKgHQAKgHAPAAIATAAIAAgJQAAgIgGgFQgFgFgLAAQgIAAgHAFQgGAFAAAGIgJAAIAAAAQAAgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAAMIAAAxIACAIIgKAAIgBgHIAAgGQgGAHgHADQgHAFgIAAQgNAAgHgHgAgQAWQgHAFAAAIQAAAHAFAEQAEAFAJAAQAJAAAGgFQAIgFAEgHIAAgSIgTAAQgKAAgJAGgAgBglIgUgUIABgBIAMAAIAOAVg");
	this.shape_114.setTransform(-376.9,32.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgCAwQgFgHAAgLIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADAEQADADAFAAIAJgBIABAHIgFABIgHABQgIAAgEgFg");
	this.shape_115.setTransform(-383.8,33.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_116.setTransform(-388.1,32.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_117.setTransform(-391.7,32.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgLAKgHQAKgGAPAAIATAAIAAgKQAAgJgGgFQgFgFgLAAQgJAAgFAFQgHAFAAAHIgIAAIAAgBQgBgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAwIACAJIgKAAIgBgOQgFAHgIADQgHAFgIAAQgNAAgGgHgAgPAGQgIAGAAAIQAAAGAFAEQAFAFAIAAQAIAAAIgFQAHgEAEgIIAAgRIgTAAQgKAAgIAFg");
	this.shape_118.setTransform(-397.9,34.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAPAAQAHAAAGADQAGAEAFAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgGAEgHAAQgQAAgIgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAJAAAFgEQAHgEADgHIAAgmQgDgHgGgFQgGgEgJAAQgLAAgGAKg");
	this.shape_119.setTransform(-406.7,32.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgaAfQgJgLgBgTIAAgBQABgTAJgLQALgMAPAAQARAAAJAMQALALAAATIAAABQAAATgLALQgJAMgRAAQgPAAgLgMgAgTgYQgHAKAAAOIAAAAQAAAPAHAKQAHAKAMAAQANAAAHgKQAHgKAAgPIAAAAQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_120.setTransform(-415.3,34.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgGgGgJAAQgLAAgFAGQgHAHgBALIAAABIABACIAAAwIgIAAIAAgvQAAgPgGgHQgFgGgKAAQgKAAgGAFQgFAEgCAJIAAA5IgKAAIAAhSIAJAAIAAAOQAFgIAGgDQAHgEAJAAQAJAAAHAEQAFAFACAKQAEgJAHgFQAHgFAKAAQANAAAIAJQAHAJAAASIAAAvg");
	this.shape_121.setTransform(-426.8,34.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgWAgQgLgMAAgSIAAgDQAAgSALgLQAKgMANAAQAPAAAJAJQAJAKAAARIAAAGIg6AAIAAACQAAAPAIAJQAHAJALAAQAJAAAGgCQAGgDAEgEIAEAGQgFAFgHADQgHADgKAAQgOAAgKgLgAgPgbQgHAJgBALIAAABIAvAAIAAgDQAAgLgGgHQgHgHgKAAQgJAAgHAHg");
	this.shape_122.setTransform(-441.7,34.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgfA4IAAhvIAJAAIAABnIA2AAIAAAIg");
	this.shape_123.setTransform(-449.5,32.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_124.setTransform(39.3,18.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgGQAJgGAQAAIATAAIAAgKQAAgJgGgFQgFgFgLAAQgIAAgGAEQgHAGAAAGIgIAAIAAAAQgBgJAJgIQAJgHAMAAQAPAAAHAHQAJAHAAANIAAAwIACAIIgKAAIgBgOQgEAGgJAGQgHAEgIAAQgNAAgGgHgAgPAGQgIAFAAAIQAAAHAFAFQAEAEAJAAQAIAAAIgFQAHgFAEgHIAAgRIgTAAQgKAAgIAFg");
	this.shape_125.setTransform(33.1,15.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA0QAAAJADADQADAEAFAAIAJgBIABAHIgFACIgHAAQgJAAgDgGg");
	this.shape_126.setTransform(26.3,14.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgWAjQgIgGAAgLIAAAAIAJAAQAAAIAHAFQAHAEAHAAQAKAAAGgEQAGgFAAgGQAAgGgFgEQgEgEgNgDQgNgDgIgEQgHgFAAgKQAAgKAIgHQAIgGAMAAQAPAAAHAHQAIAGAAAMIAAAAIgJAAQAAgGgFgGQgGgFgKAAQgIAAgGAEQgFAFAAAGQAAAFAFAEQAEAEALACQAPAEAIADQAHAHAAAKQAAAJgIAHQgJAHgOAAQgNAAgJgIg");
	this.shape_127.setTransform(19.6,15.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgWAfQgLgMAAgRIAAgCQAAgSALgMQAKgMANAAQAQAAAIAJQAJALAAAQIAAAGIg5AAIAAACQAAAOAHAJQAIAKAKAAQAKAAAFgDQAGgCAEgEIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgaQgGAHgCANIAwAAIAAgCQAAgLgHgIQgGgHgLAAQgIAAgIAIg");
	this.shape_128.setTransform(11.6,15.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_129.setTransform(5.6,13.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAWA8IAAg0QAAgMgFgGQgGgGgJAAQgIAAgGAFQgGAFgDAGIAAA8IgKAAIAAh3IAKAAIAAAzQADgGAIgFQAIgEAGAAQANgBAIAIQAHAJAAAPIAAA0g");
	this.shape_130.setTransform(-0.6,13.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgSAJgNQAKgLAPAAQANAAAKAIQAJAIgBAOIAAAAIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAJQgHAKAAAOIAAACQAAAPAHAKQAGAJAMAAQAJAAAHgFQAHgFAAgKIAIAAIAAABQABALgKAIQgJAIgNAAQgQAAgJgMg");
	this.shape_131.setTransform(-9.1,15.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_132.setTransform(-15,13.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQAEgIAFgEQAFgEAIAAIAEAAIACAAIgBAJIgHAAQgJAAgDAFQgGAFgCAIIAAA4g");
	this.shape_133.setTransform(-19,15.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAJgEAQgBIATAAIAAgKQAAgJgGgFQgGgFgKAAQgIAAgGAFQgHAFAAAHIgIAAIAAgBQgBgKAJgGQAJgIAMAAQAPAAAHAHQAJAHAAANIAAAwIACAJIgJAAIgCgIIAAgGQgFAGgHAEQgJAFgHAAQgMAAgHgHgAgPAGQgIAFAAAIQAAAGAFAGQAEAEAJAAQAIAAAHgFQAJgFADgHIAAgSIgTAAQgKAAgIAGg");
	this.shape_134.setTransform(-30.5,15.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_135.setTransform(-36.4,13.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgXAfQgKgMAAgSIAAgBQAAgSAKgMQAKgMAOAAQAPAAAJAIQAIAIAAAOIAAAAIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAJQgGAKAAAOIAAACQAAAPAGAKQAHAJALAAQAKAAAHgFQAHgFAAgKIAIAAIAAAAQABAMgKAIQgKAIgNAAQgOAAgKgMg");
	this.shape_136.setTransform(-42.3,15.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgLQAJgMAPAAQAPAAAIAIQAJAIAAANIAAABIgIAAQAAgKgHgGQgGgGgLAAQgLAAgHAKQgGAKAAAOIAAABQAAAOAGAKQAHAKALAAQAKAAAHgFQAHgGAAgJIAIAAIAAAAQAAAMgJAIQgKAIgNAAQgPAAgJgMg");
	this.shape_137.setTransform(-50.6,15.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgMAKgHQAJgEAQAAIASAAIAAgLQABgJgGgFQgGgFgKAAQgIAAgGAFQgHAFABAHIgKAAIAAgBQAAgKAJgHQAJgHAMAAQAPAAAHAHQAJAHAAANIAAAnIACASIgJAAIgCgIIgBgHQgDAHgIAEQgJAFgHAAQgMAAgHgGgAgPAGQgIAGAAAIQAAAGAFAFQAEADAJABQAIgBAHgEQAJgFACgHIAAgSIgSAAQgKABgIAFg");
	this.shape_138.setTransform(-59.1,15.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgJA9IAAhKIgOAAIAAgIIAOAAIAAgMQAAgNAGgHQAFgHALAAIALACIgCAHIgDAAIgFAAQgHAAgFAEQgCAFAAAJIAAAMIASAAIAAAIIgSAAIAABKg");
	this.shape_139.setTransform(-65.5,13.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRALgMQAKgMANAAQAPAAAJAKQAJAJAAAQIAAAHIg5AAIAAACQAAAOAHAKQAIAJAKAAQAKAAAFgDQAGgCAEgEIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgaQgGAIgCALIAwAAIAAgCQAAgKgHgIQgGgHgLAAQgIAAgIAIg");
	this.shape_140.setTransform(-76.4,15.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgGgGgJAAQgJAAgFAFQgHAFgCAIIAAA5IgKAAIAAhSIAJAAIABAPQADgIAHgEQAIgEAHAAQANAAAIAIQAGAJABARIAAAxg");
	this.shape_141.setTransform(-84.9,15.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgXAfQgKgMAAgRIAAgDQAAgSAKgLQALgMANAAQAPAAAJAJQAJAKAAAQIAAAHIg6AAIAAACQAAAOAIAKQAIAJAKAAQAJAAAGgCQAGgDAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgLgMgAgOgbQgHAIgCAMIAvAAIAAgCQABgLgHgHQgGgHgLAAQgJAAgGAHg");
	this.shape_142.setTransform(-97.2,15.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AAWA8IAAg0QAAgMgFgGQgFgGgKABQgHAAgHAFQgGAEgDAHIAAA7IgJAAIAAh3IAJAAIAAA0QADgIAIgEQAHgFAHAAQAOAAAGAJQAHAHABAQIAAA0g");
	this.shape_143.setTransform(-105.8,13.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgMQAJgLAPAAQAPAAAIAIQAKAJgBANIAAAAIgIAAQAAgKgHgGQgGgGgLAAQgLAAgHAJQgGALAAANIAAACQAAAOAGALQAHAJAMAAQAJAAAHgFQAHgGAAgJIAIAAIAAABQAAALgJAIQgKAIgMAAQgQAAgJgMg");
	this.shape_144.setTransform(-114.3,15.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgZAfQgKgMgBgTIAAAAQAAgTALgLQAKgMAPAAQAQAAAKAMQAKALABATIAAAAQgBAVgKAKQgJAMgRAAQgPAAgKgMgAgTgYQgHAJAAAPIAAAAQAAAQAHAJQAHAKAMAAQANAAAHgKQAHgJABgQIAAAAQgBgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_145.setTransform(-126.7,15.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgXAfQgJgMAAgSIAAgBQAAgSAJgNQAKgLAPAAQAOAAAIAIQAJAIABANIgBABIgIAAQAAgKgHgGQgHgGgJAAQgNAAgGAKQgGAJAAAOIAAACQAAAPAGAJQAGAKANAAQAJAAAHgFQAHgGAAgJIAIAAIAAABQABALgKAIQgJAIgNAAQgQAAgJgMg");
	this.shape_146.setTransform(-135.2,15.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_147.setTransform(-141.2,13.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgYAyQgIgLAAgUIAAgBQAAgTAIgLQAJgMAPAAQAHAAAGADQAGAEAFAHIAAgyIAJAAIAAB3IgIAAIgBgMQgDAGgHAEQgHAEgHAAQgPAAgJgLgAgRgGQgGAIAAAQIAAABQAAAQAGAJQAGAJALAAQAIAAAHgEQAEgDAFgIIAAgmQgEgHgFgFQgGgEgJAAQgLAAgGAKg");
	this.shape_148.setTransform(-147.6,13.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAQAAAIAKQAJAKAAAPIAAAHIg5AAIAAACQAAAOAHAKQAIAJAKAAQAKAAAFgDQAGgCAEgEIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgbQgGAJgCALIAwAAIAAgBQAAgLgHgIQgGgHgLAAQgIAAgIAHg");
	this.shape_149.setTransform(-155.9,15.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgGgGgJAAQgKAAgHAGQgGAHgBALIAAAzIgHAAIAAgvQAAgPgFgHQgHgGgJAAQgLAAgFAFQgFAEgCAJIAAA5IgKAAIAAhSIAIAAIABAOQAEgHAHgEQAGgEAKAAQAKAAAGAEQAFAFACAJQAEgJAHgEQAHgFAKAAQANAAAIAJQAHAIAAATIAAAvg");
	this.shape_150.setTransform(-167,15.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_151.setTransform(-179.7,13.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgWAjQgIgGAAgKIAAgBIAJAAQAAAIAHAFQAHAEAHAAQALAAAFgEQAGgFAAgGQAAgGgFgFQgEgDgNgDQgNgDgIgEQgHgFAAgKQAAgKAIgHQAIgGAMAAQAPAAAHAHQAIAHAAALIAAAAIgJAAQAAgHgGgFQgFgFgKAAQgIAAgGAEQgFAFAAAGQAAAFAFAEQAEAEALADQAPADAIAEQAHAFAAALQAAAJgIAHQgJAHgOAAQgNAAgJgIg");
	this.shape_152.setTransform(-185.6,15.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgMAKgGQAKgGAPAAIATAAIAAgKQAAgIgGgGQgGgFgKAAQgIAAgGAEQgHAFAAAHIgIAAIgBAAQAAgKAJgHQAJgHAMAAQAPAAAHAHQAJAGAAAOIAAAoIACARIgKAAIgBgIIAAgHQgFAHgHAEQgIAFgIAAQgNAAgGgGgAgPAGQgIAFABAJQgBAGAFAFQAEADAJAAQAIAAAIgEQAHgFAEgHIAAgRIgTAAQgKAAgIAFg");
	this.shape_153.setTransform(-194,15.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_154.setTransform(-200,13.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgWAjQgJgGABgLIAAAAIAJAAQAAAJAHAEQAHAEAHAAQAKAAAGgEQAGgFAAgGQAAgGgFgEQgEgEgNgEQgNgCgIgEQgHgFAAgKQAAgKAIgHQAIgGAMAAQAPAAAHAHQAIAGAAAMIAAAAIgJAAQAAgGgFgGQgGgFgKAAQgIAAgFAEQgGAFAAAFQAAAGAFAEQAEADALAEQAPADAIAEQAHAGAAAKQAAAJgIAIQgIAGgPAAQgNAAgJgIg");
	this.shape_155.setTransform(-205.9,15.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_156.setTransform(-211.7,13.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgHQAJgEAQgBIASAAIAAgKQAAgIgFgGQgGgFgKAAQgIAAgGAEQgHAGAAAGIgJAAIAAAAQgBgKAKgGQAJgIAMAAQAOAAAIAHQAIAHAAANIABAwIACAJIgKAAIgCgOQgDAFgJAGQgIAEgIAAQgMAAgHgGgAgQAGQgHAGAAAHQAAAHAEAEQAFAEAIABQAJgBAIgEQAHgEADgIIAAgSIgSAAQgKABgJAFg");
	this.shape_157.setTransform(-217.8,15.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgXAhQgHgJAAgTIAAguIAIAAIAAAvQAAAPAGAHQAFAGAJAAQAJAAAGgEQAGgFADgIIAAg6IAKAAIAABSIgJAAIgBgOQgEAIgGADQgIAEgGAAQgOAAgHgJg");
	this.shape_158.setTransform(-226.4,15.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AAYA6IAAgrQgEAGgHADQgGAEgHAAQgOAAgKgLQgIgMAAgRIAAgBQAAgUAIgMQAJgMAPAAQAHAAAGADQAHAFAEAGIABgNIAIAAIAABygAgQgnQgHAKAAAQIAAABQAAAOAHAJQAFAJALAAQAJAAAGgEQAFgEAEgHIAAgnQgEgHgFgEQgHgEgIAAQgLAAgFAKg");
	this.shape_159.setTransform(-235.5,16.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgZAkQgHgHAAgKQAAgMAKgGQAJgGAQAAIASAAIAAgKQAAgJgFgFQgGgFgKAAQgIAAgHAEQgGAGAAAGIgJAAIAAAAQABgKAIgHQAJgHAMAAQAPAAAHAHQAJAHAAANIAAAwIACAIIgKAAIgBgHIgBgGQgEAGgIAEQgIAFgHAAQgNAAgGgHgAgPAGQgIAGAAAHQAAAGAFAGQAEAEAJAAQAIAAAHgFQAIgFADgHIAAgRIgSAAQgKgBgIAGg");
	this.shape_160.setTransform(-247.9,15.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgYAyQgIgMAAgTIAAgBQAAgSAIgMQAJgMAPAAQAIAAAFADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgGADQgHAEgHAAQgOAAgKgLgAgRgGQgGAIAAAQIAAABQAAAQAGAJQAGAJALAAQAIAAAHgEQAFgDAEgIIAAgmQgEgHgFgFQgGgEgJAAQgKAAgHAKg");
	this.shape_161.setTransform(-256.7,13.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgZAfQgLgLAAgTIAAgBQAAgSALgMQAKgMAPAAQARAAAJAMQALAMAAASIAAABQAAATgLALQgJAMgRAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAHAKAMAAQANAAAHgKQAHgJAAgPIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_162.setTransform(-269.2,15.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIACADQAEAEAEAAIAKgBIABAHIgGABIgGABQgJAAgDgFg");
	this.shape_163.setTransform(-276.2,14.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgLAKgIQAKgEAPgBIASAAIAAgKQAAgJgFgFQgGgFgKAAQgIAAgHAEQgGAGAAAGIgJAAIAAAAQAAgKAJgHQAJgHAMAAQAPAAAIAHQAIAHAAANIABAwIABAIIgKAAIgBgHIgBgGQgEAGgIAFQgIAEgHAAQgMAAgHgHgAgPAGQgHAFAAAJQgBAGAFAEQAEAEAJAAQAIAAAHgEQAJgFACgHIAAgSIgSAAQgKABgIAFg");
	this.shape_164.setTransform(-283.1,15.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgfApIAAgGIAwhDIgvAAIAAgIIA6AAIAAAHIgwBCIA0AAIAAAIg");
	this.shape_165.setTransform(-291,15.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AggApIAAgGIAxhEIgvAAIAAgIIA7AAIAAAIIgxBCIA1AAIAAAIg");
	this.shape_166.setTransform(-298.8,15.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_167.setTransform(-304.6,13.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_168.setTransform(-308.2,13.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_169.setTransform(-311.8,13.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgCAwQgFgHAAgLIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIADADQADAEAFAAIAJgBIABAHIgFABIgHABQgIAAgEgFg");
	this.shape_170.setTransform(-316.4,14.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAJAAIAAAvQABAPAFAHQAFAGAJAAQAKAAAFgEQAHgGADgHIAAg6IAIAAIAABSIgIAAIAAgOQgFAIgHADQgHAEgGAAQgNAAgIgJg");
	this.shape_171.setTransform(-323.3,15.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAKAAAFgDQAGgCAEgEIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgbQgGAJgCAMIAwAAIAAgDQAAgKgHgIQgGgHgLAAQgIAAgIAHg");
	this.shape_172.setTransform(-335.7,15.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgTAqIAAhSIAIAAIACAOIAAABQADgIAGgEQAFgEAIAAIADAAIAEAAIgCAJIgGAAQgKAAgDAFQgGAEgCAJIAAA4g");
	this.shape_173.setTransform(-341.8,15.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAJQAJAKAAAQIAAAHIg5AAIAAACQAAAOAHAKQAIAJAKAAQAKAAAFgDQAGgCAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgOgaQgHAHgCAMIAwAAIAAgBQAAgMgHgHQgFgHgMAAQgIAAgHAIg");
	this.shape_174.setTransform(-349.1,15.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgWAjQgIgGAAgLIAAAAIAJAAQAAAJAHAEQAHAEAHAAQAKAAAGgFQAGgEAAgGQAAgGgFgFQgEgDgNgDQgNgDgIgEQgHgGAAgJQAAgKAIgHQAIgGAMAAQAPAAAHAHQAIAHAAAKIAAABIgJAAQAAgGgFgGQgGgFgKAAQgIAAgGAEQgFAFAAAFQAAAHAFADQAEADALAEQAPADAIAEQAHAGAAAJQAAALgIAGQgJAHgOAAQgNAAgJgIg");
	this.shape_175.setTransform(-357.3,15.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgWAjQgIgGAAgLIAAAAIAJAAQAAAJAHAEQAHAEAHAAQAKAAAGgEQAGgFAAgGQAAgGgFgFQgEgDgNgDQgNgDgIgEQgHgGAAgJQAAgJAIgIQAIgGAMAAQAPAAAHAHQAJAHgBAKIAAABIgJAAQAAgHgFgFQgGgFgKAAQgIAAgFAEQgFAFAAAFQAAAGAEAEQAEAEALADQAPADAIAEQAHAFAAALQAAAKgIAGQgIAHgPAAQgNAAgJgIg");
	this.shape_176.setTransform(-365.4,15.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgWAgQgLgMAAgSIAAgCQAAgTALgLQAKgMANAAQAPAAAJAJQAJAKAAARIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAKAAAFgDQAGgCAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgLgAgOgaQgHAHgCANIAwAAIAAgDQAAgLgHgHQgGgHgLAAQgIAAgHAIg");
	this.shape_177.setTransform(-373.5,15.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgZAvQgLgMAAgTIAAgCQAAgRALgLQAKgMAPAAQARAAAJAMQALAKAAASIAAACQAAAUgLALQgJAMgRAAQgPAAgKgMgAgTgIQgHAIAAAOIAAACQAAAPAHAKQAHAKAMAAQANAAAHgKQAIgKAAgPIAAgCQAAgOgIgIQgHgKgNAAQgMAAgHAKgAgBglIgTgUIAAgBIANAAIANAVg");
	this.shape_178.setTransform(-385.9,13.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAvQAAAPAFAHQAFAGAKAAQAIAAAGgEQAHgGACgHIAAg6IAKAAIAABSIgJAAIAAgOQgFAIgGADQgHAEgHAAQgOAAgHgJg");
	this.shape_179.setTransform(-394.7,15.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AggA6IAAhyIAHAAIACANQAEgHAGgEQAHgDAHAAQAPAAAJAMQAIAMAAAUIAAABQAAARgIAMQgKALgOAAQgHAAgGgEQgGgCgFgHIAAArgAgOgtQgGAEgDAIIAAAmQADAHAGAEQAHAEAHAAQALAAAHgJQAGgJAAgOIAAgBQAAgQgGgKQgHgKgLAAQgIAAgGAEg");
	this.shape_180.setTransform(-403.4,16.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgeAsQgNgNAAgUIAAgVQAAgTAMgPQANgNASAAQAVAAALALQANALgBASIAAABIgWAAQAAgLgGgHQgFgFgLAAQgIAAgGAIQgGAIAAANIAAAVQAAANAGAIQAGAIAJAAQAKAAAGgGQAFgGAAgKIAWAAIAAAAQAAASgLALQgMALgUAAQgSAAgNgOg");
	this.shape_181.setTransform(-416.8,13.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgeAsQgNgNAAgVIAAgUQAAgTAMgPQANgMASAAQAVAAALAKQANALgBASIAAABIgWAAQAAgLgGgGQgFgGgLAAQgIAAgGAIQgGAIAAANIAAAUQAAAOAGAIQAGAIAJAAQAKAAAGgFQAFgHAAgLIAWAAIAAABQAAASgLALQgMALgUAAQgSAAgNgOg");
	this.shape_182.setTransform(-427,13.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AghAsQgNgNAAgVIAAgTQAAgUANgOQAOgOATAAQAVAAAMAOQAOAOAAAUIAAATQAAAVgNANQgOAOgUgBQgTABgOgOgAgRgfQgGAKAAAMIAAATQAAANAGAIQAHAJAKAAQALAAAGgJQAHgIAAgNIAAgTQAAgNgHgJQgGgIgLAAQgKAAgHAIg");
	this.shape_183.setTransform(-437.6,13.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AAXA4IgshMIAAABIAABLIgXAAIAAhvIAXAAIArBLIABAAIAAhLIAWAAIAABvg");
	this.shape_184.setTransform(-448.6,13.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#0C5EA5").ss(6.2).p("EBH2ANkMiPrAAAQhdAAhChBQhBhCAAhdIAA0IQAAhdBBhBQBChCBdAAMCPrAAAQBdAABCBCQBBBBAABdIAAUIQAABdhBBCQhCBBhdAAg");

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("EhH1ANkQhdABhChCQhBhCAAhcIAA0IQAAheBBhBQBChCBdAAMCPrAAAQBdAABCBCQBBBBAABeIAAUIQAABchBBCQhCBChdgBg");

	this.addChild(this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-485.3,-90,970.8,180);


(lib.popB3 = function() {
	this.initialize();

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5EA5").s().p("Ag4BUQgXgZAAgoIAAgkQAAgoAXgZQAXgaAiAAQAkAAAWATQAVATgBAgIAAABIgcAAQAAgXgNgMQgNgNgYAAQgWAAgPATQgOATAAAdIAAAlQAAAdAOATQAPAUAWAAQAYAAANgNQANgNAAgXIAcAAIAAABQABAegWAUQgVAUgkAAQgiAAgXgZg");
	this.shape.setTransform(-174.9,-89.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5EA5").s().p("Ag4BUQgXgZAAgoIAAgkQAAgoAXgZQAXgaAiAAQAkAAAWATQAVATgBAgIAAABIgcAAQAAgXgNgMQgNgNgYAAQgWAAgPATQgOATAAAdIAAAlQAAAdAOATQAPAUAWAAQAYAAANgNQANgNAAgXIAcAAIAAABQABAegWAUQgVAUgkAAQgiAAgXgZg");
	this.shape_1.setTransform(-193.9,-89.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5EA5").s().p("Ag9BTQgXgZAAgnIAAgkQAAgnAXgaQAYgaAlAAQAlAAAYAaQAYAZAAAoIAAAkQAAAngYAZQgYAaglAAQglAAgYgagAgphCQgPATABAdIAAAlQgBAdAPATQAQATAZAAQAYAAAQgTQAQgSAAgeIAAglQAAgdgQgTQgPgSgZAAQgZAAgQASg");
	this.shape_2.setTransform(-213.9,-89.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5EA5").s().p("AAzBqIhkijIgBABIAACiIgdAAIAAjTIAdAAIBkCjIABgBIAAiiIAdAAIAADTg");
	this.shape_3.setTransform(-234.8,-89.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5EA5").s().p("Ag0BFQgNgMAAgXQAAgWASgMQATgMAdAAIAgAAIAAgQQAAgNgJgJQgJgIgPAAQgMAAgJAHQgIAHAAAKIgcAAIAAgBQgBgRARgOQASgPAZAAQAbAAAQAOQAQAOAAAZIABBbQABAGADAKIgeAAIgDgYQgIAKgNAJQgMAIgOAAQgZAAgNgNgAgaAOQgKAJAAAMQAAAKAGAGQAHAGANAAQAOAAAMgIQANgHAEgLIAAgaIghAAQgPAAgLAJg");
	this.shape_4.setTransform(-261.3,-87);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5EA5").s().p("AAjBQIAAhhQAAgVgIgJQgJgJgRAAQgLAAgIAGQgKAGgGALIAABxIgdAAIAAicIAaAAIACAXQAJgNALgGQAMgHANAAQAaAAANAPQAPAPAAAfIAABig");
	this.shape_5.setTransform(-278,-87.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5EA5").s().p("AgyA7QgUgXABgjIAAgBQgBgjAUgXQASgXAgAAQAgAAATAXQAUAXgBAjIAAABQABAjgUAXQgTAXggAAQgfAAgTgXgAgegpQgKAQAAAZIAAABQAAAZAKARQAKAQAUAAQAUAAALgQQAKgRAAgZIAAgBQAAgZgKgQQgLgRgUAAQgUAAgKARg");
	this.shape_6.setTransform(-295,-87);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5EA5").s().p("AgNByIAAidIAbAAIAACdgAgNhTIAAgeIAbAAIAAAeg");
	this.shape_7.setTransform(-307.3,-90.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C5EA5").s().p("Ag+BPIAAgVIBUhxIhTAAIAAgXIB3AAIAAAUIhVByIBZAAIAAAXg");
	this.shape_8.setTransform(-318.5,-87);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0C5EA5").s().p("AAjBQIAAhhQAAgVgJgJQgHgJgSAAQgKAAgKAGQgJAGgGALIAABxIgdAAIAAicIAaAAIACAXQAIgNAMgGQANgHAMAAQAaAAAOAPQAOAPAAAfIAABig");
	this.shape_9.setTransform(-334.7,-87.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0C5EA5").s().p("AgwBAQgPgRAAgjIAAhbIAdAAIAABbQAAAaAHAJQAIAKAQAAQANAAAKgGQALgHAEgLIAAhwIAdAAIAACcIgaAAIgCgXQgHANgMAGQgMAHgNAAQgaAAgOgQg");
	this.shape_10.setTransform(-351.8,-86.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0C5EA5").s().p("AgWBzIAAiHIgZAAIAAgVIAZAAIAAgUQAAgZANgPQALgNAZAAIAKAAIAKADIgDAWIgOgCQgMAAgHAIQgGAHAAAPIAAAUIAhAAIAAAVIghAAIAACHg");
	this.shape_11.setTransform(-365,-90.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0C5EA5").s().p("AgtA8QgUgWAAgjIAAgFQAAgiAUgWQAVgXAZAAQAgAAARAUQAQAUAAAfIAAAQIhlAAIAAABQAAAXALAOQAMAPARAAQAPAAALgEQAKgEAJgIIAMATQgJAIgOAGQgPAGgTAAQgfAAgTgWgAgWguQgKAMgCATIAAAAIBHAAIAAgDQAAgRgJgMQgKgLgRAAQgMAAgLAMg");
	this.shape_12.setTransform(-385.9,-87);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0C5EA5").s().p("ABRBQIAAhdQAAgYgIgJQgIgKgQAAQgOAAgKAKQgJALgCAPIAABkIgbAAIAAhdQAAgWgIgKQgIgLgQAAQgMAAgKAGQgIAFgFAKIAABzIgdAAIAAicIAaAAIACAVQAHgLANgHQALgGARAAQAQAAALAHQAKAHAFAPQAHgOANgHQALgIARAAQAZAAAOAQQAOAQAAAiIAABdg");
	this.shape_13.setTransform(-407.1,-87.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0C5EA5").s().p("AgzA7QgSgXgBgjIAAgBQABgjASgXQATgXAgAAQAgAAATAXQAUAXAAAjIAAABQAAAjgUAXQgTAXggAAQgfAAgUgXgAgegpQgLAQAAAZIAAABQAAAZALARQAKAQAUAAQAUAAALgQQAKgRAAgZIAAgBQAAgZgKgQQgLgRgUAAQgTAAgLARg");
	this.shape_14.setTransform(-428.7,-87);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0C5EA5").s().p("Ag4BUQgXgZAAgoIAAgkQAAgoAXgZQAXgaAiAAQAkAAAWATQAVATgBAgIAAABIgcAAQAAgXgNgMQgNgNgYAAQgWAAgOATQgPASAAAeIAAAlQAAAdAPATQAOAUAWAAQAYAAANgNQANgNAAgXIAcAAIAAABQABAegWAUQgVAUgkAAQgiAAgXgZg");
	this.shape_15.setTransform(-446.5,-89.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_16.setTransform(-119.2,50.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgMAKgGQAKgGAPABIATAAIAAgLQAAgJgGgFQgFgFgLAAQgJAAgFAFQgHAFAAAGIgIAAIAAAAQgBgJAJgIQAJgHAMAAQAOAAAIAHQAJAGAAAPIAAAvIACAIIgKAAIgBgNQgFAHgIAEQgHAEgIAAQgNAAgGgGgAgPAGQgIAFAAAJQAAAGAFAFQAFAEAIAAQAIAAAIgFQAHgEAEgIIAAgRIgTAAQgKgBgIAGg");
	this.shape_17.setTransform(-125.4,47);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgLQAJgMAPAAQAPAAAIAIQAKAJgBANIAAAAIgIAAQAAgKgHgGQgGgGgLAAQgLAAgGAKQgHAJAAAPIAAABQAAAPAGAJQAHAKAMAAQAJAAAHgFQAHgFAAgKIAIAAIAAABQABALgKAIQgKAIgMAAQgQAAgJgMg");
	this.shape_18.setTransform(-133.7,47);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_19.setTransform(-139.6,45.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgCAwQgFgHAAgLIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADADQADAEAFAAIAJgBIABAHIgFABIgHABQgIAAgEgFg");
	this.shape_20.setTransform(-144.1,46);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAvQAAAOAFAIQAFAGAKAAQAIAAAHgEQAGgFACgIIAAg6IAKAAIAABSIgIAAIgBgOQgEAHgHAEQgHAEgHAAQgNAAgIgJg");
	this.shape_21.setTransform(-151.1,47.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRALgMQAKgMANAAQAQAAAIAKQAJAKAAAQIAAAGIg5AAIAAACQAAAPAHAIQAIAKAKAAQAJAAAGgCQAHgEADgDIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgPgbQgGAJgCAMIABAAIAvAAIAAgDQAAgLgHgHQgHgHgKAAQgIAAgIAHg");
	this.shape_22.setTransform(-159.6,47);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIAAANQAFgHAGgDQAIgEAGAAQAPAAAJAMQAJAMgBAUIAAACQABAQgJAMQgJALgPAAQgHAAgGgEQgGgDgFgGIAAArgAgOgtQgHAFgCAHIAAAmQADAHAGAEQAFAEAJAAQALAAAHgJQAGgJAAgOIAAgBQAAgRgGgJQgHgKgLAAQgJAAgFAEg");
	this.shape_23.setTransform(-167.9,48.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgMAKgGQALgGAOABIATAAIAAgLQAAgJgGgFQgGgFgKAAQgJAAgFAFQgHAFAAAGIgIAAIgBAAQAAgJAJgIQAJgHAMAAQAOAAAIAHQAJAGAAAPIAAAvIACAIIgKAAIgBgHIAAgGQgFAHgIAEQgHAEgIAAQgNAAgGgGgAgPAGQgIAFAAAJQAAAGAFAFQAEAEAJAAQAIAAAIgFQAHgEAEgIIAAgRIgTAAQgKgBgIAGg");
	this.shape_24.setTransform(-176.9,47);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgTAqIAAhSIAIAAIABAOIAAABQAFgIAFgEQAEgEAJAAIAGABIgBAIIgHAAQgJAAgEAFQgEAFgEAIIAAA4g");
	this.shape_25.setTransform(-183.2,46.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRALgMQAKgMANAAQAQAAAIAKQAJAKAAAQIAAAGIg5AAIAAACQAAAPAHAIQAIAKAKAAQAJAAAGgCQAHgEADgDIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgbQgHAKgBALIAAAAIAwAAIAAgDQAAgKgHgIQgHgHgKAAQgIAAgIAHg");
	this.shape_26.setTransform(-190.5,47);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADADQADAEAFAAIAJgBIABAHIgFABIgHABQgIAAgEgFg");
	this.shape_27.setTransform(-197.4,46);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgMAKgGQALgGAOABIATAAIAAgLQAAgJgGgFQgGgFgKAAQgIAAgHAFQgGAFABAGIgJAAIgBAAQABgKAIgHQAKgHALAAQAOAAAJAHQAIAHAAAOIAAAmIACARIgKAAIgBgHIAAgGQgGAIgHADQgHAEgIAAQgMAAgHgGgAgPAGQgHAFAAAJQgBAGAFAFQAFAEAIAAQAIAAAIgFQAHgEAEgIIAAgRIgTAAQgKgBgIAGg");
	this.shape_28.setTransform(-208.2,47);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAHAAIAAAWIATAAIAAAHIgTAAIAAA1QAAAIADADQADAEAFAAIAKgBIABAHIgGABIgGABQgJAAgDgFg");
	this.shape_29.setTransform(-215,46);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgVAkQgJgIAAgJIAAgBIAJAAQABAKAGADQAGAEAJAAQAKAAAFgEQAGgEAAgHQAAgHgFgDQgEgEgNgDQgNgDgHgEQgHgFAAgKQAAgKAIgHQAIgGALAAQAOAAAJAHQAIAHgBAKIAAABIgIAAQAAgHgGgFQgGgFgKAAQgIAAgFAEQgFAEAAAGQAAAGAEAEQAGAFAKACQAPADAHAEQAHAFAAALQAAAKgIAHQgIAGgOAAQgOAAgIgHg");
	this.shape_30.setTransform(-221.7,47);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgZAfQgLgLAAgTIAAgBQAAgSALgMQAKgMAPAAQARAAAJAMQALAMAAASIAAABQAAATgKALQgLAMgQAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAHAKAMAAQANAAAHgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_31.setTransform(-230.1,47);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AggA6IAAhyIAHAAIACANQADgGAHgEQAHgEAHAAQAQAAAIAMQAIAMAAAUIAAACQAAAQgIAMQgIALgQAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgHAFgCAHIAAAmQAEAHAFAEQAGAEAIAAQALAAAHgJQAGgJAAgOIAAgBQAAgQgGgKQgHgKgLAAQgIAAgGAEg");
	this.shape_32.setTransform(-238.8,48.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgaAfQgKgKAAgUIAAgBQABgTAJgLQALgMAPAAQAQAAAKAMQALAMAAASIAAABQAAATgLALQgKAMgQAAQgPAAgLgMgAgTgYQgIAKAAAOIAAABQAAAOAIAKQAHAKAMAAQANAAAHgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_33.setTransform(-247.8,47);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgTAqIAAhSIAIAAIACAOIAAABQAEgJAFgDQAEgEAJAAIAGABIgBAIIgHAAQgJAAgDAFQgGAFgCAIIAAA4g");
	this.shape_34.setTransform(-254.2,46.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAEgHAHgDQAHgEAGAAQAQAAAIAMQAIALAAAVIAAACQAAARgIALQgIALgQAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgGAFgDAHIAAAmQADAHAGAEQAGAEAIAAQAMAAAGgJQAGgJAAgOIAAgBQAAgRgGgJQgGgKgMAAQgIAAgGAEg");
	this.shape_35.setTransform(-261.7,48.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgGQAKgGAPABIATAAIAAgLQAAgJgGgFQgGgFgKAAQgIAAgHAFQgGAFAAAGIgIAAIAAAAQgBgJAJgIQAJgHAMAAQANAAAKAHQAIAHAAAOIABAvIABAIIgJAAIgCgHIAAgGQgGAIgHADQgIAEgIAAQgMAAgHgGgAgQAGQgHAFAAAJQAAAGAFAFQAEAEAJAAQAJAAAGgFQAIgFAEgHIAAgRIgTAAQgKgBgJAGg");
	this.shape_36.setTransform(-274.5,47);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgDApIgfhRIAJAAIAXA9IACAKIAAAAIAZhHIAKAAIggBRg");
	this.shape_37.setTransform(-282.4,47);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgZAfQgLgLAAgTIAAgBQAAgSALgMQAKgMAPAAQAQAAALAMQAKAMAAASIAAABQAAATgKALQgLAMgQAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAHAKAMAAQANAAAHgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_38.setTransform(-290.7,47);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAvQAAAPAFAHQAFAGAKAAQAIAAAHgEQAGgFACgIIAAg6IAKAAIAABSIgIAAIgBgOQgEAHgHAEQgHAEgHAAQgOAAgHgJg");
	this.shape_39.setTransform(-299.5,47.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgJAAgFAFQgHAFgCAJIAAA4IgKAAIAAhSIAJAAIAAAPQAFgIAGgEQAIgEAHAAQAOAAAGAIQAHAIAAASIAAAxg");
	this.shape_40.setTransform(-308.3,46.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgGQAKgGAPABIASAAIAAgLQAAgJgFgFQgFgFgLAAQgJAAgGAFQgGAFAAAGIgIAAIAAAAQgBgJAJgIQAJgHAMAAQANAAAKAHQAHAGABAPIAAAmIAAAJIACAIIgKAAIgCgNQgFAIgHADQgHAEgJAAQgMAAgHgGgAgQAGQgHAFAAAJQAAAGAFAFQAFAEAHAAQAKAAAGgFQAIgEADgIIAAgRIgSAAQgKgBgJAGg");
	this.shape_41.setTransform(-321,47);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgJAAgFAFQgGAFgDAJIAAA4IgKAAIAAhSIAJAAIABAPQAEgIAGgEQAIgEAHAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_42.setTransform(-329.6,46.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAvQAAAPAFAHQAFAGAKAAQAIAAAGgEQAHgFACgIIAAg6IAKAAIAABSIgJAAIAAgOQgFAIgGADQgHAEgHAAQgOAAgHgJg");
	this.shape_43.setTransform(-338.4,47.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_44.setTransform(-348.5,45.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAPAAQAHAAAGADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgFAHgGADQgGAEgHAAQgQAAgIgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAJAAAGgEQAFgEAEgHIAAgmQgDgHgGgFQgFgEgKAAQgLAAgGAKg");
	this.shape_45.setTransform(-354.9,45.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRALgMQAKgMANAAQAQAAAIAKQAJAJAAARIAAAGIg5AAIAAACQAAAPAHAIQAIAKAKAAQAJAAAGgCQAHgEADgDIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgOgbQgHAIgCANIABAAIAvAAIAAgDQAAgLgHgHQgGgHgLAAQgIAAgHAHg");
	this.shape_46.setTransform(-367.1,47);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgFgGgKAAQgJAAgGAFQgGAFgCAJIAAA4IgJAAIAAhSIAIAAIABAPQADgHAHgFQAHgEAHAAQAOAAAHAIQAIAJAAARIAAAxg");
	this.shape_47.setTransform(-375.6,46.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgaAfQgKgKABgUIAAgBQgBgTAKgLQALgMAPAAQAQAAAKAMQAKAMAAASIAAABQAAATgKALQgKAMgQAAQgPAAgLgMgAgTgYQgHAKgBAOIAAABQABAOAHAKQAHAKAMAAQANAAAHgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_48.setTransform(-384.4,47);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_49.setTransform(-390.7,45.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AggApIAAgHIAxhCIgvAAIAAgIIA7AAIAAAHIgxBCIA1AAIAAAIg");
	this.shape_50.setTransform(-396.2,47);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_51.setTransform(-402,45.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgGgFQgEgGgKAAQgJAAgGAFQgGAFgDAJIAAA4IgJAAIAAhSIAJAAIAAAPQAEgIAHgEQAHgEAHAAQAOAAAHAIQAIAJgBARIAAAxg");
	this.shape_52.setTransform(-408.2,46.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAYA9IAAhSIAJAAIAABSgAgTA9IAAhLIgNAAIAAgHIANAAIAAgLQAAgNAIgIQAHgHALAAIALABIAKAEIgBAIIgJgDIgKgBQgIAAgEAFQgGAFAAAJIAAALIASAAIAAAHIgSAAIAABLg");
	this.shape_53.setTransform(-417.4,45.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRALgMQAKgMANAAQAQAAAIAKQAJAKAAAQIAAAGIg5AAIAAACQAAAPAHAIQAIAKAKAAQAJAAAGgCQAHgEADgDIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgPgbQgGAJgCAMIAAAAIAwAAIAAgDQAAgLgHgHQgHgHgKAAQgIAAgIAHg");
	this.shape_54.setTransform(-425.3,47);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAPAAQAHAAAGADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgFAHgGADQgFAEgIAAQgPAAgJgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAJAAAGgEQAFgEAEgHIAAgmQgDgHgGgFQgFgEgKAAQgLAAgGAKg");
	this.shape_55.setTransform(-434,45.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgMAKgGQALgGAOABIASAAIAAgLQAAgJgFgFQgFgFgLAAQgIAAgGAFQgHAFAAAGIgIAAIgBAAQAAgKAJgHQAJgHAMAAQAOAAAIAHQAJAHAAAOIAAAmIACARIgKAAIgBgHIgBgGQgFAHgGAEQgJAEgHAAQgMAAgHgGgAgPAGQgHAFAAAJQAAAGAEAFQAEAEAJAAQAIAAAIgFQAHgFADgHIAAgRIgSAAQgKgBgIAGg");
	this.shape_56.setTransform(-446.5,47);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_57.setTransform(-452.4,45.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgIAGgEQAFgEAIAAIAEAAIACABIgBAIIgHAAQgJAAgDAFQgFAEgDAJIAAA4g");
	this.shape_58.setTransform(443.6,27.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgWAfQgLgMAAgRIAAgCQAAgTALgLQAKgMANAAQAQAAAIAJQAJALAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAKAAAFgDQAGgCAEgEIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgaQgHAIgBAMIAwAAIAAgCQAAgLgHgIQgHgHgKAAQgIAAgIAIg");
	this.shape_59.setTransform(436.4,28);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAFgHAGgEQAGgDAHAAQAQAAAIAMQAIALAAAVIAAABQAAASgIALQgIALgQAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgGAFgDAHIAAAmQADAHAGAEQAGAEAIAAQAMAAAGgJQAGgJAAgOIAAgBQAAgRgGgJQgGgKgMAAQgIAAgGAEg");
	this.shape_60.setTransform(428,29.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgaAfQgKgMABgSIAAgBQgBgSAKgMQALgMAPAAQAQAAAKAMQAKALAAATIAAABQAAATgKALQgJAMgRAAQgPAAgLgMgAgTgYQgHAJAAAPIAAABQAAAPAHAJQAHAKAMAAQANAAAHgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_61.setTransform(415.1,28);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgCAvQgFgGAAgMIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADADQADAEAFAAIAJgBIABAHIgFACIgHAAQgIAAgEgGg");
	this.shape_62.setTransform(408.1,27);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgLAAQgIAAgFAFQgHAFgCAIIAAA5IgKAAIAAhSIAJAAIAAAPQAFgIAGgEQAHgEAIAAQAOAAAHAIQAGAIABASIAAAxg");
	this.shape_63.setTransform(401.2,27.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgZAfQgKgMAAgSIAAgBQAAgSAKgMQAKgMAPAAQARAAAKAMQAJALABATIAAABQgBATgJALQgKAMgRAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAHAKAMAAQANAAAHgKQAIgKAAgOIAAgBQAAgOgIgKQgHgKgNAAQgMAAgHAKg");
	this.shape_64.setTransform(392.3,28);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQAEgIAFgEQAFgEAIAAIAEAAIACABIgBAIIgHAAQgJAAgDAFQgGAFgCAIIAAA4g");
	this.shape_65.setTransform(385.9,27.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgJA9IAAhLIgOAAIAAgHIAOAAIAAgNQAAgLAGgIQAFgHALAAIAFAAIAGABIgCAIIgDgBIgFAAQgHAAgFAFQgCAFAAAIIAAANIASAAIAAAHIgSAAIAABLg");
	this.shape_66.setTransform(380.4,26);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAXAqIAAgxQAAgOgGgGQgFgGgLAAQgIAAgFAFQgHAFgCAIIAAA5IgJAAIAAhSIAIAAIAAAPQAFgIAHgEQAGgEAIAAQAOAAAGAIQAIAIAAASIAAAxg");
	this.shape_67.setTransform(373,27.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgZAfQgLgMABgSIAAgBQgBgSALgMQAKgMAPAAQARAAAKAMQAKALAAATIAAABQgBATgJALQgKAMgRAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAHAKAMAAQANAAAHgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_68.setTransform(364.2,28);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgXAfQgKgMABgSIAAgBQgBgSAKgNQAKgLAPAAQAOAAAIAIQAJAIAAANIAAABIgIAAQAAgKgHgGQgHgGgJAAQgMAAgHAKQgGAJAAAPIAAABQAAAPAGAKQAHAJAMAAQAJAAAHgFQAHgGAAgJIAIAAIAAABQABALgKAIQgJAIgNAAQgPAAgKgMg");
	this.shape_69.setTransform(355.7,28);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgFgGgKAAQgJAAgGAFQgGAFgDAIIAAA5IgJAAIAAhSIAJAAIAAAPQAEgHAHgFQAHgEAHAAQAOAAAHAIQAIAJgBARIAAAxg");
	this.shape_70.setTransform(343.3,27.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAvQAAAPAFAHQAFAGAKAAQAIAAAHgEQAGgGACgHIAAg6IAKAAIAABSIgIAAIgBgOQgEAHgHAEQgHAEgHAAQgOAAgHgJg");
	this.shape_71.setTransform(334.4,28);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgYAyQgIgLAAgUIAAgBQAAgTAIgLQAJgMAPAAQAIAAAFADQAGAEAFAHIAAgyIAJAAIAAB3IgIAAIgBgMQgDAHgHADQgHAEgHAAQgPAAgJgLgAgRgGQgGAHAAARIAAACQAAAPAGAJQAGAJALAAQAIAAAHgEQAFgDAEgIIAAgmQgDgHgGgFQgGgEgJAAQgLAAgGAKg");
	this.shape_72.setTransform(321.5,26.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgGQAKgGAPAAIATAAIAAgKQgBgJgFgFQgGgFgKAAQgHAAgHAEQgHAGAAAHIgIAAIAAgBQgBgJAJgHQAJgIAMAAQANAAAJAHQAJAHAAANIABAwIABAIIgKAAIgBgHIAAgGQgFAHgIADQgIAFgHAAQgNAAgHgGgAgQAGQgHAFAAAIQAAAHAFAEQAEAFAJAAQAHAAAJgFQAIgFADgHIAAgRIgTAAQgLAAgIAFg");
	this.shape_73.setTransform(312.9,28);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_74.setTransform(303.1,26.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgMQAJgLAPAAQAPAAAIAIQAKAIgBANIAAABIgIAAQAAgKgHgGQgGgGgLAAQgLAAgHAKQgGAKAAAOIAAABQAAAPAGAKQAHAJAMAAQAJAAAHgFQAHgFAAgKIAIAAIAAABQABALgKAIQgKAIgMAAQgQAAgJgMg");
	this.shape_75.setTransform(297.2,28);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_76.setTransform(291.3,26.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgYAyQgIgMAAgTIAAgBQAAgSAIgMQAJgMAPAAQAHAAAGADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgGAEgHAAQgPAAgJgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAIAAAHgEQAFgEAEgHIAAgmQgDgHgGgFQgFgEgKAAQgLAAgGAKg");
	this.shape_77.setTransform(284.8,26.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgWAfQgLgMAAgRIAAgCQAAgTAKgLQALgMANAAQAPAAAJAJQAJALAAAQIAAAGIg6AAIAAACQAAAOAIAKQAHAJALAAQAJAAAFgDQAHgCAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgPgaQgHAIgBAMIAvAAIAAgCQAAgMgGgHQgGgHgLAAQgJAAgHAIg");
	this.shape_78.setTransform(276.6,28);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAxAqIAAgvQAAgQgGgGQgFgGgKAAQgLAAgGAGQgFAHgCALIAAAzIgHAAIAAgvQAAgQgGgGQgFgGgKAAQgKAAgGAFQgGAFgCAIIAAA5IgJAAIAAhSIAIAAIABAOQAEgIAHgDQAHgEAJAAQAKAAAGAEQAFAEACALQAEgKAHgEQAHgFAKAAQAOAAAHAJQAHAJAAASIAAAvg");
	this.shape_79.setTransform(265.4,27.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_80.setTransform(252.7,26.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgMAKgGQAKgGAPAAIASAAIAAgKQAAgJgFgFQgGgFgKAAQgJAAgGAEQgGAGAAAHIgJAAIAAgBQAAgJAJgHQAJgIAMAAQANAAAJAHQAJAHgBANIABAwIACAIIgKAAIgCgNQgEAGgIAEQgHAFgIAAQgNAAgGgGgAgQAGQgHAFAAAIQAAAHAFAEQAFAFAHAAQAIAAAIgFQAIgFADgHIAAgRIgSAAQgKAAgJAFg");
	this.shape_81.setTransform(242.7,28);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADADQADAEAFAAIAJgBIABAHIgFACIgHAAQgJAAgDgGg");
	this.shape_82.setTransform(235.8,27);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_83.setTransform(231.4,26.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgCApIgghSIAKAAIAXA9IABAKIAAAAIAahHIAJAAIggBSg");
	this.shape_84.setTransform(225.7,28);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgJAAgFAFQgGAEgDAJIAAA5IgKAAIAAhSIAJAAIAAAPQAFgIAGgEQAHgEAIAAQAOAAAGAIQAIAJAAARIAAAxg");
	this.shape_85.setTransform(217.4,27.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_86.setTransform(211.2,26.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgMAKgGQAKgGAPAAIASAAIAAgKQAAgJgFgFQgGgFgKAAQgIAAgGAEQgHAGAAAHIgJAAIAAgBQAAgJAJgHQAJgIAMAAQANAAAJAHQAJAHAAANIAAAwIACAIIgKAAIgBgHIgBgGQgEAHgIADQgIAFgHAAQgNAAgGgGgAgPAGQgIAFAAAIQAAAHAFAEQAEAFAJAAQAHAAAIgFQAJgFACgHIAAgRIgSAAQgLAAgHAFg");
	this.shape_87.setTransform(201.2,28);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgFgGgKAAQgLAAgFAGQgHAHgBALIAAAzIgHAAIAAgvQAAgPgGgHQgFgGgKAAQgKAAgFAFQgGAEgDAJIAAA5IgJAAIAAhSIAIAAIABAOQAFgIAGgDQAHgEAJAAQAKAAAGAEQAFAFACAKQAEgJAHgFQAGgFALAAQANAAAIAJQAHAJAAASIAAAvg");
	this.shape_88.setTransform(190,27.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgWAfQgLgMAAgRIAAgCQAAgTALgLQAKgMANAAQAQAAAIAJQAJALAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAKAAAFgDQAGgCAEgEIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgaQgHAIgBAMIAwAAIAAgCQAAgLgHgIQgHgHgKAAQgIAAgIAIg");
	this.shape_89.setTransform(178.9,28);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADADQADAEAFAAIAJgBIABAHIgFACIgHAAQgIAAgEgGg");
	this.shape_90.setTransform(172,27);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgWAkQgJgHABgKIAAgBIAJAAQABAKAGADQAHAEAHAAQAKAAAGgFQAGgEAAgGQAAgGgFgEQgGgFgLgDQgNgCgIgEQgHgGAAgJQAAgKAIgGQAIgHAMAAQAOAAAIAHQAIAHAAALIAAAAIgJAAQAAgHgFgFQgGgFgKAAQgIAAgFAEQgGAEAAAGQAAAHAFADQAEADALADQAQAEAHAEQAHAFAAAKQAAAKgIAIQgIAGgPAAQgNAAgJgHg");
	this.shape_91.setTransform(165.4,28);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_92.setTransform(159.6,26.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgWAkQgIgIAAgJIAAgBIAJAAQABAKAGADQAHAEAHAAQAKAAAGgFQAGgEAAgGQAAgGgFgEQgGgFgLgDQgNgCgIgEQgHgGAAgJQAAgKAIgGQAIgHAMAAQAOAAAIAHQAJAHgBALIAAAAIgJAAQAAgHgFgFQgGgFgKAAQgIAAgFAEQgFAEAAAGQAAAGAEAEQAEADALADQAQAEAHAEQAHAFAAAKQAAAKgIAIQgIAGgPAAQgNAAgJgHg");
	this.shape_93.setTransform(153.7,28);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_94.setTransform(144,26.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_95.setTransform(140.4,26.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgGARIAGgUIAAgNIAHAAIAAANIgHAUg");
	this.shape_96.setTransform(133.1,32.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgZAfQgLgLAAgTIAAgBQAAgSALgMQAKgMAPAAQAQAAALAMQAKAMAAASIAAABQAAASgKAMQgLAMgQAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAHAKAMAAQANAAAHgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_97.setTransform(127.3,28);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgYAyQgIgLAAgUIAAgBQAAgTAIgLQAJgMAPAAQAHAAAGADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgDAHgIADQgGAEgHAAQgQAAgIgLgAgRgGQgGAHAAARIAAACQAAAPAGAJQAHAJAKAAQAIAAAGgEQAFgDAFgIIAAgmQgDgHgGgFQgGgEgJAAQgLAAgGAKg");
	this.shape_98.setTransform(118.3,26.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIAAAOIAAABQAEgIAGgEQAEgEAJAAIADAAIADABIgBAIIgHAAQgJAAgDAFQgGAEgDAJIAAA4g");
	this.shape_99.setTransform(112,27.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgaAfQgKgLAAgTIAAgBQAAgTAKgLQALgMAPAAQAQAAAKAMQAKAMAAASIAAABQAAASgKAMQgKAMgQAAQgPAAgLgMgAgTgYQgIAKAAAOIAAABQAAAOAIAKQAHAKAMAAQANAAAHgKQAIgKgBgOIAAgBQABgOgIgKQgHgKgNAAQgMAAgHAKg");
	this.shape_100.setTransform(104.4,28);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgMQAJgLAQAAQANAAAKAIQAJAIgBANIAAABIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAKQgHAJAAAPIAAABQAAAPAHAKQAGAJAMAAQAJAAAHgFQAHgFAAgKIAIAAIAAABQABALgKAIQgJAIgNAAQgQAAgJgMg");
	this.shape_101.setTransform(95.8,28);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgXAfQgJgMAAgSIAAgBQAAgSAJgNQAKgLAOAAQAPAAAIAIQAJAIAAANIAAABIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAKQgGAJAAAPIAAABQAAAPAGAKQAHAJALAAQAKAAAHgFQAHgGAAgJIAIAAIAAABQAAALgJAIQgKAIgNAAQgOAAgKgMg");
	this.shape_102.setTransform(87.6,28);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgMAKgGQAKgGAPAAIASAAIAAgKQAAgJgFgFQgGgFgKAAQgIAAgHAEQgGAGAAAHIgJAAIAAgBQAAgJAJgHQAJgIAMAAQANAAAJAHQAJAHAAANIAAAwIACAIIgKAAIgCgNQgEAHgIADQgHAFgIAAQgNAAgGgGgAgPAGQgIAFAAAIQAAAHAFAEQAEAFAJAAQAHAAAJgFQAHgFADgHIAAgRIgSAAQgKAAgIAFg");
	this.shape_103.setTransform(79.1,28);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgaAfQgJgMgBgSIAAgBQABgSAJgMQALgMAPAAQAQAAAKAMQAKAMAAASIAAABQAAATgKALQgJAMgRAAQgPAAgLgMgAgTgYQgIAKAAAOIAAABQAAAOAIAKQAHAKAMAAQANAAAHgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_104.setTransform(66.7,28);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgCAvQgFgGAAgMIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADADQADAEAFAAIAJgBIABAHIgFACIgHAAQgIAAgEgGg");
	this.shape_105.setTransform(59.7,27);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgMAKgGQAKgGAPAAIASAAIAAgKQAAgJgFgFQgGgFgKAAQgJAAgGAEQgGAGAAAHIgJAAIAAgBQAAgJAJgHQAJgIAMAAQANAAAJAHQAIAHAAANIABAwIACAIIgKAAIgCgNQgEAGgIAEQgHAFgJAAQgMAAgGgGgAgPAGQgIAFAAAIQAAAHAFAEQAFAFAHAAQAIAAAIgFQAHgFAEgHIAAgRIgSAAQgKAAgIAFg");
	this.shape_106.setTransform(52.8,28);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgMQAJgLAQAAQANAAAKAIQAJAIgBANIAAABIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAKQgHAJAAAPIAAABQAAAPAHAKQAGAJAMAAQAJAAAHgFQAHgFAAgKIAIAAIAAABQABALgKAIQgJAIgNAAQgQAAgJgMg");
	this.shape_107.setTransform(44.5,28);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgGgGgKAAQgIAAgFAFQgHAFgCAIIAAA5IgJAAIAAhSIAHAAIACAPQADgHAHgFQAHgEAIAAQANAAAHAIQAHAJABARIAAAxg");
	this.shape_108.setTransform(36,27.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgGQAKgGAPAAIATAAIAAgKQAAgJgHgFQgFgFgKAAQgIAAgGAEQgHAGAAAHIgIAAIAAgBQgBgJAJgHQAJgIAMAAQAOAAAIAHQAIAHAAANIABAwIACAIIgKAAIgBgNQgFAGgIAEQgIAFgHAAQgNAAgHgGgAgQAGQgHAFAAAIQAAAHAEAEQAGAFAHAAQAHAAAKgFQAHgFAEgHIAAgRIgTAAQgKAAgJAFg");
	this.shape_109.setTransform(27.2,28);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAwAqIAAgvQABgQgGgGQgFgGgKAAQgLAAgGAGQgFAHgCALIAAAzIgIAAIAAgvQABgQgGgGQgFgGgKAAQgKAAgGAFQgGAEgCAJIAAA5IgJAAIAAhSIAIAAIABAOQAEgIAHgDQAHgEAIAAQAKAAAHAEQAFAFACAKQAEgKAHgEQAGgFALAAQAOAAAHAJQAHAJAAASIAAAvg");
	this.shape_110.setTransform(16,27.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_111.setTransform(3.3,26.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgYAyQgIgMAAgTIAAgBQAAgSAIgMQAJgMAPAAQAHAAAGADQAHAFAEAGIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgGAEgHAAQgQAAgIgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAIAAAHgEQAFgEAEgHIAAgmQgDgHgGgFQgFgEgKAAQgLAAgGAKg");
	this.shape_112.setTransform(-3.2,26.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgaAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQARAAAJAMQAKALAAATIAAABQAAATgKALQgJAMgRAAQgPAAgLgMgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAHAKAMAAQANAAAHgKQAIgKgBgOIAAgBQABgOgIgKQgHgKgNAAQgMAAgHAKg");
	this.shape_113.setTransform(-15.7,28);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgWAkQgIgHAAgKIAAgBIAJAAQAAAJAHAEQAHAEAHAAQALAAAFgFQAGgEAAgGQAAgGgFgEQgFgEgMgEQgNgCgIgEQgHgFAAgKQAAgKAIgGQAIgHAMAAQAOAAAIAHQAIAHAAALIAAAAIgJAAQAAgHgGgFQgFgFgKAAQgIAAgGAEQgFAFAAAFQAAAHAFADQAEADALADQAQAEAHAEQAHAFAAAKQAAAKgIAIQgJAGgOAAQgNAAgJgHg");
	this.shape_114.setTransform(-24.2,28);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgLAKgHQALgGAPAAIASAAIAAgKQAAgJgGgFQgGgFgKAAQgIAAgGAEQgGAGgBAHIgIAAIgBgBQAAgJAJgHQAJgIANAAQANAAAIAHQAJAHAAANIAAAwIACAIIgKAAIgBgHIAAgGQgGAHgGADQgIAFgIAAQgNAAgGgGgAgPAGQgHAFgBAIQABAHAEAEQAEAFAJAAQAHAAAJgFQAHgFAEgHIAAgRIgTAAQgKAAgIAFg");
	this.shape_115.setTransform(-32.6,28);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgMQAJgLAPAAQAPAAAIAIQAJAIAAANIAAABIgIAAQAAgKgHgGQgGgGgLAAQgLAAgHAKQgGAKAAAOIAAABQAAAOAGALQAHAJALAAQAKAAAHgFQAHgGAAgJIAIAAIAAABQAAALgJAIQgKAIgNAAQgPAAgJgMg");
	this.shape_116.setTransform(-40.8,28);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgJAAgFAFQgGAEgDAJIAAA5IgKAAIAAhSIAJAAIAAAPQAFgIAGgEQAHgEAIAAQAOAAAGAIQAIAJAAARIAAAxg");
	this.shape_117.setTransform(-53.2,27.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgDA4IAAhvIAHAAIAABvg");
	this.shape_118.setTransform(-59.8,26.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_119.setTransform(-67.8,31.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgWAfQgLgMAAgRIAAgCQAAgTALgLQAKgMAMAAQAQAAAJAJQAJALAAAQIAAAGIg5AAIAAACQgBAOAIAKQAHAJALAAQAKAAAEgDQAHgCAEgEIAEAGQgEAFgIADQgIADgJAAQgOAAgKgMgAgOgaQgIAHgBANIAvAAIAAgCQAAgMgGgHQgGgHgMAAQgHAAgHAIg");
	this.shape_120.setTransform(-73.6,28);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgIAGgEQAFgEAIAAIAEAAIACABIgBAIIgHAAQgJAAgDAFQgGAFgCAIIAAA4g");
	this.shape_121.setTransform(-79.8,27.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_122.setTransform(-84.8,26.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAvQAAAPAFAHQAFAGAKAAQAIAAAGgEQAHgGACgHIAAg6IAKAAIAABSIgJAAIAAgOQgFAIgGADQgHAEgHAAQgOAAgHgJg");
	this.shape_123.setTransform(-91.1,28);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgLA6QgHgCgFgDIACgHQAGADAFAAIAKACQAMAAAGgHQAGgHAAgNIAAgLQgEAGgHAEQgFAEgIAAQgOAAgKgLQgIgMAAgRIAAgBQAAgUAIgMQAJgMAPAAQAIAAAGAEQAGADAFAIIABgOIAHAAIAABRQAAAQgIAKQgKAJgPAAIgLgBgAgQgoQgHAJAAARIAAACQAAANAGAJQAHAJAKAAQAIAAAHgEQAGgFADgHIAAglQgDgHgGgFQgGgEgJAAQgLAAgFAKg");
	this.shape_124.setTransform(-100.1,29.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgWAfQgLgMAAgRIAAgCQAAgTALgLQAKgMANAAQAPAAAJAJQAJALAAAQIAAAGIg6AAIAAACQAAAOAIAKQAHAJALAAQAJAAAGgDQAGgCAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgPgaQgHAIgBAMIAvAAIAAgCQAAgLgGgIQgHgHgKAAQgJAAgHAIg");
	this.shape_125.setTransform(-108.4,28);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgWAkQgIgIAAgJIAAgBIAJAAQABAKAGADQAHAEAHAAQAKAAAGgFQAGgEAAgGQAAgGgFgEQgFgEgMgEQgNgCgHgEQgIgFAAgKQAAgKAJgGQAHgHAMAAQAOAAAIAHQAJAHgBALIAAAAIgIAAQAAgHgGgFQgGgFgKAAQgIAAgFAEQgFAEAAAGQAAAHAEADQAEADAMADQAPAEAHAEQAHAFAAAKQAAALgIAHQgIAGgPAAQgNAAgJgHg");
	this.shape_126.setTransform(-116.6,28);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgGQAKgGAPAAIATAAIAAgKQAAgJgGgFQgFgFgLAAQgIAAgHAEQgGAGAAAHIgIAAIAAgBQgBgJAJgHQAJgIAMAAQANAAAJAHQAJAHAAANIABAwIABAIIgJAAIgCgHIAAgGQgGAHgHADQgIAFgIAAQgMAAgHgGgAgQAGQgHAFAAAIQAAAHAFAEQAFAFAIAAQAHAAAIgFQAIgFAEgHIAAgRIgTAAQgLAAgIAFg");
	this.shape_127.setTransform(-128.8,28);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgYAyQgIgMAAgTIAAgBQAAgSAIgMQAJgMAPAAQAHAAAGADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgGAEgHAAQgPAAgJgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAIAAAHgEQAFgEAEgHIAAgmQgDgHgGgFQgFgEgKAAQgLAAgGAKg");
	this.shape_128.setTransform(-137.6,26.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgLAKgHQAKgGAPAAIASAAIAAgKQABgJgGgFQgFgFgLAAQgHAAgIAEQgGAGAAAHIgJAAIAAgBQAAgJAJgHQAJgIAMAAQAOAAAIAHQAJAHAAANIABAwIABAIIgJAAIgCgHIgBgGQgEAHgIADQgIAFgHAAQgMAAgHgGgAgPAGQgIAFAAAIQAAAGAFAFQAEAFAJAAQAHAAAIgFQAJgFACgHIAAgRIgSAAQgKAAgIAFg");
	this.shape_129.setTransform(-150.1,28);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_130.setTransform(-156,26.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AghA6IAAhyIAJAAIABANQAFgHAFgEQAHgDAHAAQAPAAAJAMQAIAMAAAUIAAABQAAARgIAMQgJALgOAAQgIAAgGgEQgHgDgEgGIAAArgAgOgtQgGAFgDAHIAAAmQADAHAGAEQAFAEAJAAQALAAAGgJQAHgJAAgOIAAgBQAAgRgHgJQgFgKgMAAQgJAAgFAEg");
	this.shape_131.setTransform(-162.1,29.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgLAKgHQALgGAOAAIATAAIAAgKQAAgJgGgFQgGgFgKAAQgIAAgGAEQgHAGAAAHIgIAAIgBgBQABgJAIgHQAKgIAMAAQANAAAIAHQAJAHAAANIAAAwIACAIIgKAAIgBgHIAAgGQgGAHgGADQgJAFgHAAQgMAAgHgGgAgPAGQgHAFgBAIQABAHAEAEQAFAFAIAAQAHAAAIgFQAIgEAEgIIAAgRIgTAAQgKAAgIAFg");
	this.shape_132.setTransform(-171.1,28);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgIAGgEQAFgEAIAAIAEAAIACABIgBAIIgHAAQgJAAgDAFQgFAEgDAJIAAA4g");
	this.shape_133.setTransform(-177.4,27.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgWAfQgLgMAAgRIAAgCQAAgTALgLQAKgMANAAQAQAAAIAJQAJALAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAKAAAFgDQAGgCAEgEIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgaQgHAIgBAMIAwAAIAAgCQAAgLgHgIQgHgHgKAAQgJAAgHAIg");
	this.shape_134.setTransform(-184.7,28);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADADQADAEAFAAIAJgBIABAHIgFACIgHAAQgJAAgDgGg");
	this.shape_135.setTransform(-191.5,27);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgLAKgHQALgGAOAAIATAAIAAgKQgBgJgFgFQgGgFgKAAQgIAAgGAEQgHAGAAAHIgIAAIAAgBQAAgKAIgGQAJgIAMAAQAOAAAIAHQAJAHAAANIABAwIABAIIgKAAIgBgHIAAgGQgFAHgHADQgJAFgHAAQgNAAgGgGgAgPAGQgIAFABAIQgBAHAFAEQAEAFAJAAQAHAAAJgFQAIgFADgHIAAgRIgTAAQgKAAgIAFg");
	this.shape_136.setTransform(-202.3,28);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_137.setTransform(-208.3,26.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgWAfQgLgMAAgRIAAgCQAAgTALgLQAKgMANAAQAPAAAJAJQAJALAAAQIAAAGIg5AAIAAACQgBAOAIAKQAHAJALAAQAKAAAEgDQAHgCAEgEIAEAGQgEAFgIADQgGADgLAAQgOAAgKgMgAgOgaQgIAHgBANIAvAAIAAgCQABgMgHgHQgGgHgLAAQgJAAgGAIg");
	this.shape_138.setTransform(-218,28);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAHAAIAAAVIATAAIAAAIIgTAAIAAA0QAAAJADADQAEAEAEAAIAKgBIABAHIgGACIgGAAQgJAAgDgGg");
	this.shape_139.setTransform(-224.8,27);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgFgGgKAAQgJAAgFAFQgGAFgDAIIAAA5IgKAAIAAhSIAJAAIABAPQAEgIAGgEQAIgEAHAAQAOAAAGAIQAIAJAAARIAAAxg");
	this.shape_140.setTransform(-231.8,27.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgXAfQgKgMAAgRIAAgCQAAgTAKgLQALgMAMAAQAQAAAJAJQAJALAAAQIAAAGIg6AAIAAACQAAAOAIAKQAHAJALAAQAJAAAFgDQAHgCAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgLgMgAgPgaQgHAIgBAMIAvAAIAAgCQAAgMgGgHQgGgHgMAAQgIAAgHAIg");
	this.shape_141.setTransform(-240.3,28);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAxAqIAAgvQAAgQgGgGQgFgGgKAAQgLAAgGAGQgFAHgCALIAAAzIgHAAIAAgvQAAgQgGgGQgFgGgKAAQgKAAgGAFQgGAFgCAIIAAA5IgJAAIAAhSIAIAAIABAOQAEgIAHgDQAHgEAJAAQAKAAAGAEQAFAEACALQAEgKAHgEQAHgFAKAAQANAAAIAJQAHAJAAASIAAAvg");
	this.shape_142.setTransform(-251.5,27.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgLAKgHQALgGAOAAIASAAIAAgKQAAgJgFgFQgGgFgKAAQgHAAgIAEQgGAGAAAHIgIAAIgBgBQAAgKAJgGQAJgIAMAAQAOAAAIAHQAJAHAAANIAAAwIACAIIgKAAIgBgHIgBgGQgFAHgGADQgJAFgHAAQgMAAgHgGgAgPAGQgHAFgBAIQABAHAEAEQAEAFAJAAQAHAAAJgFQAHgFADgHIAAgRIgSAAQgKAAgIAFg");
	this.shape_143.setTransform(-262.9,28);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgXAfQgJgMAAgSIAAgBQAAgSAJgNQAKgLAOAAQAPAAAIAIQAJAIAAANIAAABIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAKQgGAKAAAOIAAABQAAAPAGAKQAHAJALAAQAKAAAHgFQAHgGAAgJIAIAAIAAABQAAALgJAIQgKAIgNAAQgOAAgKgMg");
	this.shape_144.setTransform(-271.1,28);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_145.setTransform(-277.1,26.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADADQADAEAEAAIAKgBIABAHIgFACIgHAAQgJAAgDgGg");
	this.shape_146.setTransform(-281.6,27);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgLAKgHQALgGAOAAIATAAIAAgKQAAgJgGgFQgFgFgLAAQgIAAgGAEQgHAGAAAHIgIAAIgBgBQAAgKAJgGQAJgIAMAAQAOAAAIAHQAJAHAAANIAAAoIACAQIgKAAIgBgHIAAgGQgGAHgGADQgJAFgHAAQgNAAgGgGgAgPAGQgHAFgBAIQAAAHAFAEQAEAFAJAAQAHAAAIgFQAIgEAEgIIAAgRIgTAAQgKAAgIAFg");
	this.shape_147.setTransform(-288.5,28);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgFgGgKAAQgLAAgGAGQgFAGgCAMIAAAzIgHAAIAAgvQAAgPgGgHQgFgGgKAAQgKAAgGAFQgGAFgCAIIAAA5IgJAAIAAhSIAIAAIABAOQAEgIAHgDQAHgEAJAAQAKAAAGAEQAFAEACALQAEgKAHgEQAHgFAKAAQANAAAIAJQAHAJAAASIAAAvg");
	this.shape_148.setTransform(-299.7,27.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgZAfQgLgMABgSIAAgBQgBgSALgMQAKgMAPAAQARAAAJAMQALALgBATIAAABQABATgLALQgJAMgRAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAHAKAMAAQANAAAHgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_149.setTransform(-311.2,28);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgCAvQgFgGAAgMIAAg0IgPAAIAAgIIAPAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJACADQAEAEAEAAIAKgBIABAHIgFACIgHAAQgJAAgDgGg");
	this.shape_150.setTransform(-318.1,27);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAJAAIAAAvQAAAPAGAHQAFAGAKAAQAIAAAGgEQAHgGADgHIAAg6IAIAAIAABSIgHAAIgBgOQgFAIgGADQgIAEgHAAQgNAAgHgJg");
	this.shape_151.setTransform(-325.1,28);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgLAKgHQAKgGAPAAIATAAIAAgKQAAgJgGgFQgGgFgKAAQgIAAgHAEQgGAGAAAHIgIAAIAAgBQAAgKAIgGQAJgIAMAAQAOAAAJAHQAIAHAAANIABAwIABAIIgJAAIgCgHIAAgGQgGAHgHADQgIAFgHAAQgNAAgGgGgAgPAGQgIAFAAAIQAAAGAFAFQAEAFAJAAQAHAAAIgFQAIgFAEgHIAAgRIgTAAQgKAAgIAFg");
	this.shape_152.setTransform(-333.9,28);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgLAKgHQAKgGAPAAIATAAIAAgKQgBgJgFgFQgGgFgKAAQgHAAgHAEQgHAGAAAHIgIAAIAAgBQAAgKAIgGQAJgIAMAAQAOAAAIAHQAJAHAAANIABAwIABAIIgKAAIgBgHIAAgGQgFAHgHADQgJAFgHAAQgNAAgGgGgAgPAGQgIAFAAAIQAAAGAFAFQAEAFAJAAQAHAAAJgFQAIgFADgHIAAgRIgTAAQgKAAgIAFg");
	this.shape_153.setTransform(-346.3,28);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgCAvQgFgGAAgMIAAg0IgOAAIAAgIIAOAAIAAgVIAHAAIAAAVIATAAIAAAIIgTAAIAAA0QAAAJAEADQADAEAFAAIAJgBIACAHIgHACIgGAAQgJAAgDgGg");
	this.shape_154.setTransform(-353.2,27);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgJAAgFAFQgGAEgDAJIAAA5IgKAAIAAhSIAJAAIAAAPQAFgIAGgEQAHgEAIAAQAOAAAGAIQAIAJAAARIAAAxg");
	this.shape_155.setTransform(-360.2,27.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgXAfQgKgMAAgRIAAgCQAAgTAKgLQALgMANAAQAPAAAJAJQAJALAAAQIAAAGIg5AAIAAACQAAAOAHAKQAHAJALAAQAJAAAFgDQAHgCAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgLgMgAgPgaQgHAHgBANIAvAAIAAgCQAAgMgGgHQgGgHgLAAQgJAAgHAIg");
	this.shape_156.setTransform(-368.6,28);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgCApIgghSIAKAAIAXA9IABAKIAAAAIAahHIAJAAIggBSg");
	this.shape_157.setTransform(-376.5,28);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_158.setTransform(-382.2,26.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgYAyQgIgMAAgTIAAgBQAAgSAIgMQAJgMAPAAQAHAAAGADQAHAFAEAGIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgGAEgHAAQgQAAgIgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAIAAAHgEQAFgEAEgHIAAgmQgDgHgGgFQgFgEgKAAQgLAAgGAKg");
	this.shape_159.setTransform(-388.7,26.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgGARIAFgUIAAgNIAIAAIAAANIgHAUg");
	this.shape_160.setTransform(-398.4,32.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgLAKgHQALgGAOAAIASAAIAAgKQAAgJgFgFQgGgFgKAAQgIAAgGAEQgHAGAAAHIgIAAIgBgBQAAgKAJgGQAJgIAMAAQAOAAAIAHQAJAHAAANIAAAwIACAIIgKAAIgBgHIgBgGQgFAHgGADQgJAFgHAAQgNAAgGgGgAgPAGQgHAFgBAIQABAHAEAEQAEAFAJAAQAHAAAJgFQAHgFADgHIAAgRIgSAAQgKAAgIAFg");
	this.shape_161.setTransform(-404.2,28);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgCApIgghSIAJAAIAZBHIAAAAIAahHIAJAAIggBSg");
	this.shape_162.setTransform(-412.1,28);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_163.setTransform(-417.8,26.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgCAvQgFgGAAgMIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADADQADAEAFAAIAJgBIABAHIgFACIgHAAQgIAAgEgGg");
	this.shape_164.setTransform(-422.3,27);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_165.setTransform(-426.7,26.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgWAkQgIgIAAgJIAAgBIAJAAQABAKAGADQAHAEAHAAQAKAAAGgFQAGgEAAgGQAAgGgFgEQgGgFgLgDQgNgCgIgEQgHgGAAgJQAAgKAIgGQAIgHAMAAQAOAAAIAHQAJAHgBALIAAAAIgJAAQAAgHgFgFQgGgFgKAAQgIAAgFAEQgFAEAAAGQAAAHAEADQAEADALADQAQAEAHAEQAHAFAAAKQAAAKgIAIQgIAGgPAAQgNAAgJgHg");
	this.shape_166.setTransform(-432.6,28);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgZAfQgKgMAAgSIAAgBQAAgSAKgMQAKgMAPAAQAQAAALAMQAJALABATIAAABQgBATgJALQgKAMgRAAQgPAAgKgMgAgTgYQgIAKAAAOIAAABQAAAOAIAKQAHAKAMAAQANAAAHgKQAHgKABgOIAAgBQgBgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_167.setTransform(-441,28);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAEgHAGgEQAHgDAHAAQAPAAAIAMQAJAMAAAUIAAABQAAASgJALQgHALgQAAQgIAAgFgEQgHgDgEgGIAAArgAgOgtQgHAFgCAHIAAAmQADAHAGAEQAFAEAJAAQALAAAHgJQAGgJAAgOIAAgBQAAgRgGgJQgGgKgMAAQgJAAgFAEg");
	this.shape_168.setTransform(-449.6,29.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgTALgLQAKgMANAAQAQAAAIAJQAJALAAAPIAAAHIg6AAIAAACQAAANAIAKQAIAKAKAAQAIAAAHgCQAFgDAFgFIAEAHQgFAFgHADQgHADgKAAQgOAAgKgLgAgPgbQgHAJgBALIAwAAIAAgCQAAgKgHgIQgGgHgLAAQgJAAgHAHg");
	this.shape_169.setTransform(444.8,8.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgHQgGgFgJAAQgJAAgFAFQgGAEgDAJIAAA5IgKAAIAAhSIAJAAIAAAPQAFgIAGgEQAHgEAIAAQAOAAAGAIQAIAIAAASIAAAxg");
	this.shape_170.setTransform(436.3,8.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgaAfQgKgMAAgTIAAAAQAAgSAKgMQALgMAPAAQAQAAAKAMQALALAAATIAAAAQAAATgLAMQgJAMgRAAQgPAAgLgMgAgTgZQgHALAAAOIAAAAQAAAPAHAKQAHAKAMAAQAMAAAIgKQAHgJAAgQIAAAAQAAgOgHgLQgIgJgMAAQgMAAgHAJg");
	this.shape_171.setTransform(427.4,8.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_172.setTransform(421.2,7.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AggAqIAAgIIAyhDIgwAAIAAgIIA7AAIAAAHIgxBEIA0AAIAAAIg");
	this.shape_173.setTransform(415.6,8.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAJgEAQgBIASAAIAAgKQAAgIgFgGQgFgFgLAAQgIAAgHAFQgGAFAAAGIgJAAIAAAAQgBgJAKgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAwIACAJIgKAAIgBgIIgBgHQgEAHgIAEQgHAFgIAAQgNAAgGgHgAgPAGQgIAGAAAHQAAAHAFAFQAEADAJAAQAIAAAIgEQAHgFADgHIAAgSIgSAAQgKAAgIAGg");
	this.shape_174.setTransform(407.3,8.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgCAvQgFgGAAgMIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADAEQADADAFAAIAJgBIABAHIgFACIgHAAQgIAAgEgGg");
	this.shape_175.setTransform(400.4,7.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAvQAAAPAFAHQAFAGAKAAQAIAAAHgEQAGgGACgIIAAg5IAKAAIAABSIgIAAIgBgOQgEAHgHAEQgHAEgHAAQgOAAgHgJg");
	this.shape_176.setTransform(393.4,9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_177.setTransform(387.2,7.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgMAKgHQAJgEAQgBIASAAIAAgKQAAgIgFgGQgFgFgLAAQgIAAgHAFQgGAEAAAHIgIAAIAAAAQgCgJAKgIQAJgHAMAAQAOAAAJAHQAHAGABAOIAAAwIACAJIgKAAIgCgPQgEAHgIAEQgHAFgJAAQgMAAgHgHgAgQAGQgHAGAAAHQAAAHAFAFQAEADAIAAQAJAAAHgEQAIgFADgHIAAgSIgSAAQgKAAgJAGg");
	this.shape_178.setTransform(381,8.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgCAqIgghTIAKAAIAXA9IABAKIAAAAIAahHIAJAAIggBTg");
	this.shape_179.setTransform(373.1,8.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgMAKgHQAJgEAQgBIATAAIAAgKQgBgIgGgGQgFgFgKAAQgIAAgGAFQgHAEAAAHIgIAAIAAAAQgCgJAKgIQAJgHAMAAQAOAAAIAHQAIAGABAOIAAAwIACAJIgKAAIgBgPQgFAHgIAEQgIAFgIAAQgMAAgHgHgAgQAGQgHAGAAAHQAAAHAEAFQAFADAIAAQAJAAAHgEQAHgFAFgHIAAgSIgTAAQgLAAgIAGg");
	this.shape_180.setTransform(361,8.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgHQgGgFgJAAQgJAAgFAFQgGAFgDAIIAAA5IgKAAIAAhSIAJAAIABAPQAEgIAGgEQAHgEAIAAQAOAAAGAIQAIAIAAASIAAAxg");
	this.shape_181.setTransform(352.4,8.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAvQAAAPAFAHQAFAGAKAAQAIAAAGgEQAHgGACgIIAAg5IAKAAIAABSIgJAAIAAgOQgFAIgGADQgHAEgHAAQgOAAgHgJg");
	this.shape_182.setTransform(343.5,9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgXAgQgKgMAAgSIAAgCQAAgTAKgLQALgMAMAAQAQAAAJAJQAJALAAAPIAAAHIg6AAIAAACQAAAOAIAJQAHAKALAAQAIAAAGgCQAGgDAFgFIAEAHQgEAFgIADQgHADgKAAQgOAAgLgLgAgPgbQgHAJgBALIAvAAIAAgCQAAgLgGgHQgGgHgMAAQgIAAgHAHg");
	this.shape_183.setTransform(331.2,8.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgHQgFgFgKAAQgIAAgHAFQgGAFgCAIIAAA5IgKAAIAAhSIAIAAIABAPQAEgHAHgFQAHgEAHAAQAOAAAIAIQAGAIAAASIAAAxg");
	this.shape_184.setTransform(322.7,8.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgTALgLQAKgMANAAQAPAAAJAJQAJALAAAPIAAAHIg5AAIAAACQAAAOAHAJQAIAKAKAAQAIAAAHgCQAFgDAFgFIAEAHQgFAFgHADQgHADgKAAQgOAAgKgLgAgPgbQgGAJgCALIAwAAIAAgCQAAgKgHgIQgGgHgLAAQgIAAgIAHg");
	this.shape_185.setTransform(314.2,8.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_186.setTransform(308.3,7.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADAEQADADAFAAIAJgBIABAHIgFACIgHAAQgIAAgEgGg");
	this.shape_187.setTransform(303.7,7.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAHAAIAAAVIATAAIAAAIIgTAAIAAA0QAAAJADAEQAEADAEAAIAKgBIABAHIgGACIgGAAQgJAAgDgGg");
	this.shape_188.setTransform(298.5,7.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgaAfQgKgMAAgTIAAAAQAAgSAKgMQALgMAPAAQAQAAAKAMQALALAAATIAAAAQAAATgLAMQgJAMgRAAQgPAAgLgMgAgTgZQgHALAAAOIAAAAQAAAPAHAKQAHAKAMAAQAMAAAIgKQAHgJAAgQIAAAAQAAgOgHgLQgIgJgMAAQgMAAgHAJg");
	this.shape_189.setTransform(291.5,8.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgTALgLQAKgMAMAAQAQAAAJAJQAJALAAAPIAAAHIg5AAIAAACQgBAOAIAJQAIAKAKAAQAIAAAGgCQAGgDAFgFIAEAHQgEAFgIADQgHADgKAAQgOAAgKgLgAgOgbQgIAIgBAMIAvAAIAAgCQAAgLgGgHQgGgHgMAAQgHAAgHAHg");
	this.shape_190.setTransform(279.2,8.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAHAAIAAAVIATAAIAAAIIgTAAIAAA0QAAAJADAEQAEADAEAAIAKgBIABAHIgGACIgGAAQgJAAgDgGg");
	this.shape_191.setTransform(272.3,7.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgVAjQgKgGABgLIAAAAIAJAAQAAAIAHAFQAHAEAIAAQAKAAAFgEQAGgFAAgGQAAgGgFgFQgEgDgNgEQgNgCgHgEQgHgFAAgKQAAgKAIgHQAIgGALAAQAPAAAIAHQAIAHgBAKIAAABIgIAAQAAgGgGgGQgGgFgKAAQgJAAgEAEQgFAEAAAHQAAAFAEAEQAFAEALADQAPADAHAEQAHAGAAAJQAAALgIAGQgIAHgOAAQgOAAgIgIg");
	this.shape_192.setTransform(265.6,8.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgXAgQgKgNAAgRIAAgCQAAgSAKgMQALgMAMAAQAQAAAJAJQAJALAAAPIAAAHIg6AAIAAACQAAAOAIAJQAHAKALAAQAIAAAGgCQAHgDAEgFIAEAHQgEAFgIADQgHADgKAAQgOAAgLgLgAgPgbQgHAJgBALIAvAAIAAgCQAAgLgGgHQgGgHgMAAQgIAAgHAHg");
	this.shape_193.setTransform(257.6,8.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAvQAAAPAFAHQAFAGAKAAQAJAAAGgEQAGgGACgIIAAg5IAKAAIAABSIgIAAIgBgOQgEAHgHAEQgHAEgHAAQgOAAgHgJg");
	this.shape_194.setTransform(249,9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AAXA6IAAgrQgDAGgHADQgHAEgGAAQgPAAgIgMQgJgLAAgRIAAgBQAAgUAJgMQAIgMAPAAQAHAAAGADQAGAEAFAGIABgMIAIAAIAABygAgRgnQgFAKAAAQIAAABQAAAOAFAJQAGAJALAAQAIAAAGgEQAHgEACgHIAAgnQgCgHgHgEQgFgEgJAAQgLAAgGAKg");
	this.shape_195.setTransform(240,10.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_196.setTransform(230.1,7.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgYAxQgIgKAAgUIAAgBQAAgTAIgLQAJgMAPAAQAHAAAHADQAFAEAFAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgGADQgJAEgFAAQgPAAgJgMgAgRgGQgGAIAAAQIAAABQAAAPAGAKQAHAJAKAAQAIAAAGgEQAHgEADgIIAAglQgDgHgGgFQgGgEgJAAQgLAAgGAKg");
	this.shape_197.setTransform(223.7,7.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAJgEAQgBIASAAIAAgKQAAgIgFgGQgGgFgKAAQgJAAgGAFQgGAEAAAHIgIAAIAAAAQgBgJAJgIQAJgHAMAAQAOAAAIAHQAIAGAAAOIABAwIACAJIgKAAIgCgPQgEAHgIAEQgHAFgJAAQgMAAgGgHgAgQAGQgHAGAAAHQAAAHAFAFQAEADAIAAQAJAAAHgEQAIgFADgHIAAgSIgSAAQgKAAgJAGg");
	this.shape_198.setTransform(211.3,8.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgHQgGgFgJAAQgJAAgFAFQgGAFgDAIIAAA5IgKAAIAAhSIAJAAIABAPQAEgIAGgEQAHgEAIAAQAOAAAGAIQAIAIAAASIAAAxg");
	this.shape_199.setTransform(202.7,8.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAvQAAAPAFAHQAFAGAKAAQAIAAAGgEQAHgGACgIIAAg5IAKAAIAABSIgJAAIAAgOQgFAIgGADQgHAEgHAAQgOAAgHgJg");
	this.shape_200.setTransform(193.8,9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgTALgLQAKgMANAAQAPAAAJAJQAJALAAAPIAAAHIg5AAIAAACQgBAOAIAJQAHAKALAAQAIAAAGgCQAGgDAFgFIAEAHQgEAFgIADQgHADgKAAQgOAAgKgLgAgOgbQgIAIgBAMIAvAAIAAgCQAAgLgGgHQgGgHgLAAQgJAAgGAHg");
	this.shape_201.setTransform(181.5,8.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgWAjQgJgGABgLIAAAAIAJAAQAAAIAHAFQAHAEAHAAQAKAAAGgEQAGgFAAgGQAAgGgFgFQgEgDgNgEQgNgCgIgEQgHgFAAgKQAAgKAIgHQAIgGAMAAQAPAAAHAHQAIAGAAALIAAABIgJAAQAAgGgFgGQgGgFgKAAQgJAAgEAEQgGAEAAAHQAAAFAFAEQAEAEALADQAPADAIAEQAHAGAAAJQAAALgIAGQgIAHgPAAQgNAAgJgIg");
	this.shape_202.setTransform(173.3,8.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgGAzIAFgVIAAgOIAIAAIAAAOIgHAVgAgCgmIAAgNIAJAAIAAANg");
	this.shape_203.setTransform(163.6,9.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgTALgLQAKgMANAAQAQAAAIAJQAJALAAAPIAAAHIg5AAIAAACQAAAOAHAJQAIAKAKAAQAIAAAHgCQAFgDAFgFIAEAHQgFAFgHADQgHADgKAAQgOAAgKgLgAgPgbQgGAJgCALIAwAAIAAgCQAAgKgHgIQgGgHgLAAQgIAAgIAHg");
	this.shape_204.setTransform(158,8.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AAWA8IAAg0QAAgNgFgFQgFgGgKABQgIAAgGAEQgGAFgDAHIAAA7IgKAAIAAh3IAKAAIAAAzQAEgHAHgFQAGgDAIAAQANgBAIAJQAHAIAAAPIAAA0g");
	this.shape_205.setTransform(149.4,7.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgXAfQgKgMAAgSIAAgBQAAgSAKgMQAKgMAPAAQAOAAAIAIQAKAIgBAOIAAAAIgIAAQAAgKgHgGQgHgGgJAAQgMAAgHAJQgGAKAAAPIAAABQAAAPAGAJQAGAKANAAQAJAAAHgFQAHgFAAgKIAIAAIAAABQABAMgKAHQgJAIgNAAQgPAAgKgMg");
	this.shape_206.setTransform(140.9,8.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_207.setTransform(135,7.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAHAAIAAAVIATAAIAAAIIgTAAIAAA0QAAAJADAEQAEADAEAAIAKgBIABAHIgGACIgGAAQgJAAgDgGg");
	this.shape_208.setTransform(130.5,7.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgXAhQgHgJgBgTIAAguIAKAAIAAAvQAAAPAFAHQAFAGAKAAQAIAAAHgEQAGgGACgIIAAg5IAJAAIAABSIgIAAIgBgOQgDAIgHADQgHAEgHAAQgNAAgIgJg");
	this.shape_209.setTransform(123.5,9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgSAKgMQALgMANAAQAPAAAJAJQAJALAAAPIAAAHIg6AAIAAACQAAAOAIAJQAHAKALAAQAIAAAGgCQAHgDAEgFIAEAHQgEAFgIADQgHADgKAAQgOAAgKgLgAgPgbQgHAJgBALIAvAAIAAgCQAAgLgGgHQgGgHgLAAQgJAAgHAHg");
	this.shape_210.setTransform(115,8.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAFgHAGgEQAFgDAIAAQAQAAAIAMQAIAMAAAUIAAABQAAARgIALQgJAMgPAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgHAFgCAHIAAAmQADAHAGAEQAHAEAHAAQALAAAHgJQAGgLAAgMIAAgBQAAgQgGgKQgHgKgLAAQgJAAgFAEg");
	this.shape_211.setTransform(106.6,10.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgLAKgIQAJgEAQgBIASAAIAAgKQAAgIgFgGQgGgFgKAAQgIAAgGAFQgHAFAAAGIgJAAIAAAAQgBgJAKgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAwIACAJIgKAAIgBgIIgBgHQgEAHgIAEQgIAFgHAAQgNAAgGgHgAgPAGQgIAGAAAHQAAAHAFAFQAEADAJAAQAIAAAHgEQAJgFACgHIAAgSIgSAAQgLAAgHAGg");
	this.shape_212.setTransform(97.7,8.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQAEgIAFgEQAGgEAIAAIACAAIADAAIgBAJIgHAAQgJAAgDAFQgFAEgDAJIAAA4g");
	this.shape_213.setTransform(91.3,8.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgXAgQgKgNAAgRIAAgCQAAgTAKgLQALgMANAAQAPAAAJAJQAJALAAAPIAAAHIg6AAIAAACQABAOAHAJQAIAKAKAAQAIAAAGgCQAGgDAFgFIAEAHQgEAFgIADQgHADgKAAQgOAAgLgLgAgOgbQgIAIgBAMIAvAAIAAgCQAAgLgGgHQgGgHgLAAQgJAAgGAHg");
	this.shape_214.setTransform(84.1,8.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAHAAIAAAVIATAAIAAAIIgTAAIAAA0QAAAJADAEQAEADAEAAIAKgBIABAHIgGACIgGAAQgJAAgDgGg");
	this.shape_215.setTransform(77.2,7.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgTALgLQAKgMANAAQAPAAAJAJQAJALAAAPIAAAHIg5AAIAAACQAAAOAHAJQAIAKAKAAQAIAAAHgCQAFgDAFgFIAEAHQgFAFgHADQgHADgKAAQgOAAgKgLgAgPgbQgGAJgCALIAwAAIAAgCQAAgKgHgIQgGgHgLAAQgIAAgIAHg");
	this.shape_216.setTransform(66.7,8.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgCAvQgFgGAAgMIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADAEQADADAFAAIAJgBIABAHIgFACIgHAAQgIAAgEgGg");
	this.shape_217.setTransform(59.9,7.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgWAjQgIgGAAgLIAAAAIAJAAQAAAIAHAFQAHAEAHAAQAKAAAGgEQAGgFAAgGQAAgGgFgFQgEgDgNgEQgNgCgHgEQgIgFAAgKQAAgJAIgIQAIgGAMAAQAPAAAHAHQAJAHgBAKIAAABIgIAAQAAgGgGgGQgGgFgKAAQgJAAgEAEQgFAEAAAHQAAAFAEAEQAEAEALADQAPADAIAEQAHAGAAAJQAAALgIAGQgIAHgPAAQgNAAgJgIg");
	this.shape_218.setTransform(53.2,8.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgZAfQgLgMAAgTIAAAAQAAgSALgMQAKgMAPAAQARAAAJAMQALALAAATIAAAAQAAAUgLALQgJAMgRAAQgPAAgKgMgAgTgZQgHAKAAAPIAAAAQAAAQAHAJQAHAKAMAAQAMAAAIgKQAIgJAAgQIAAAAQAAgOgIgLQgIgJgMAAQgMAAgHAJg");
	this.shape_219.setTransform(44.8,8.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AggA6IAAhyIAHAAIACANQAEgHAGgEQAHgDAHAAQAPAAAJAMQAIAMAAAUIAAABQAAARgIALQgJAMgOAAQgIAAgGgEQgGgCgFgHIAAArgAgOgtQgGAEgDAIIAAAmQADAHAGAEQAHAEAHAAQAMAAAFgJQAHgKAAgNIAAgBQAAgRgHgJQgFgKgMAAQgJAAgFAEg");
	this.shape_220.setTransform(36.2,10.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgZAfQgLgMAAgTIAAAAQAAgTALgLQAKgMAPAAQAQAAAKAMQALALAAATIAAAAQAAATgKAMQgLAMgQAAQgPAAgKgMgAgTgZQgHALAAAOIAAAAQAAAQAHAJQAIAKALAAQANAAAHgKQAHgKAAgPIAAAAQAAgOgHgLQgHgJgNAAQgLAAgIAJg");
	this.shape_221.setTransform(27.1,8.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgHAGgFQAFgEAIAAIAEAAIACAAIgBAJIgHAAQgJAAgDAFQgFAEgDAJIAAA4g");
	this.shape_222.setTransform(20.7,8.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AggA6IAAhyIAHAAIACANQAEgHAGgEQAHgDAHAAQAQAAAIAMQAIAMAAAUIAAABQAAARgIALQgJAMgPAAQgHAAgGgEQgGgCgFgHIAAArgAgOgtQgGAEgDAIIAAAmQADAHAGAEQAHAEAHAAQALAAAHgJQAGgKAAgNIAAgBQAAgQgGgKQgHgKgLAAQgJAAgFAEg");
	this.shape_223.setTransform(13.2,10.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgTALgLQAKgMANAAQAQAAAIAJQAJALAAAPIAAAHIg6AAIAAACQAAANAIAKQAIAKAKAAQAIAAAHgCQAFgDAFgFIAEAHQgFAFgHADQgHADgKAAQgOAAgKgLgAgPgbQgHAJgBALIAwAAIAAgCQAAgKgHgIQgGgHgLAAQgJAAgHAHg");
	this.shape_224.setTransform(0.7,8.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_225.setTransform(-5.2,7.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_226.setTransform(-8.8,7.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgXAhQgIgIAAgUIAAguIAKAAIAAAvQAAAPAFAHQAFAGAKAAQAJAAAGgEQAGgGACgIIAAg5IAKAAIAABSIgIAAIgBgOQgEAHgHAEQgHAEgHAAQgNAAgIgJg");
	this.shape_227.setTransform(-15.1,9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgWAjQgIgGAAgLIAAAAIAJAAQAAAIAHAFQAHAEAHAAQAKAAAGgEQAGgFAAgGQAAgGgFgFQgEgDgNgEQgNgCgHgEQgIgFAAgKQAAgJAJgIQAHgGAMAAQAPAAAHAHQAJAGgBALIAAABIgIAAQAAgGgGgGQgGgFgKAAQgJAAgEAEQgFAEAAAHQAAAFAEAEQAEAEAMADQAOADAIAEQAHAGAAAJQAAALgIAGQgIAHgPAAQgNAAgJgIg");
	this.shape_228.setTransform(-23.6,8.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgTALgLQAKgMANAAQAPAAAJAJQAJALAAAPIAAAHIg5AAIAAACQAAAOAHAJQAIAKAKAAQAIAAAHgCQAFgDAFgFIAEAHQgEAFgIADQgHADgKAAQgOAAgKgLgAgOgbQgHAIgCAMIAwAAIAAgCQAAgLgHgHQgGgHgLAAQgIAAgHAHg");
	this.shape_229.setTransform(-35.5,8.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgIAGgEQAFgEAIAAIAEAAIACAAIgBAJIgHAAQgJAAgDAFQgFAEgDAJIAAA4g");
	this.shape_230.setTransform(-41.6,8.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgTALgLQAKgMAMAAQAQAAAJAJQAJALAAAPIAAAHIg5AAIAAACQgBAOAIAJQAHAKALAAQAIAAAGgCQAGgDAFgFIAEAHQgEAFgIADQgGADgLAAQgOAAgKgLgAgOgbQgIAIgBAMIAvAAIAAgCQAAgLgGgHQgGgHgMAAQgHAAgHAHg");
	this.shape_231.setTransform(-48.9,8.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgHAGgFQAFgEAIAAIAEAAIACAAIgBAJIgHAAQgJAAgDAFQgGAFgCAIIAAA4g");
	this.shape_232.setTransform(-55.1,8.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgLAKgIQAKgEAPgBIATAAIAAgKQAAgIgGgGQgGgFgKAAQgIAAgGAFQgHAEABAHIgJAAIgBAAQAAgKAKgHQAIgHAMAAQAPAAAIAHQAIAHAAANIABAwIABAJIgJAAIgCgIIAAgHQgFAHgIAEQgIAFgHAAQgNAAgGgHgAgPAGQgIAGAAAHQAAAHAFAFQAEADAJAAQAIAAAHgEQAIgEAEgIIAAgSIgTAAQgKAAgIAGg");
	this.shape_233.setTransform(-62.7,8.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAEgHAGgEQAHgDAHAAQAQAAAIAMQAIAMAAAUIAAABQAAARgIALQgJAMgPAAQgHAAgGgEQgGgCgFgHIAAArgAgOgtQgGAEgDAIIAAAmQADAHAGAEQAHAEAHAAQALAAAHgJQAGgKAAgNIAAgBQAAgQgGgKQgHgKgLAAQgJAAgFAEg");
	this.shape_234.setTransform(-71.1,10.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgZAfQgLgLABgUIAAAAQgBgTALgLQAKgMAPAAQAQAAAKAMQALAMgBASIAAAAQABATgLAMQgKAMgQAAQgPAAgKgMgAgTgZQgHALgBAOIAAAAQABAQAHAJQAIAKALAAQAMAAAIgKQAHgJAAgQIAAAAQAAgOgHgLQgIgJgMAAQgLAAgIAJg");
	this.shape_235.setTransform(-83.9,8.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_236.setTransform(-90.2,7.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgHAGgFQAFgEAIAAIAEAAIACAAIgBAJIgHAAQgJAAgDAFQgFAEgDAJIAAA4g");
	this.shape_237.setTransform(-94.2,8.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AggA6IAAhyIAHAAIACANQAEgHAGgEQAHgDAHAAQAQAAAIAMQAIAMAAAUIAAABQAAARgIALQgJAMgPAAQgHAAgGgEQgGgCgFgHIAAArgAgOgtQgGAEgDAIIAAAmQADAHAGAEQAHAEAHAAQALAAAHgJQAGgKAAgNIAAgBQAAgQgGgKQgHgKgLAAQgJAAgFAEg");
	this.shape_238.setTransform(-101.6,10.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgaAfQgJgMgBgTIAAAAQABgSAJgMQALgMAPAAQAQAAAKAMQAKAMAAASIAAAAQAAATgKAMQgKAMgQAAQgPAAgLgMgAgTgZQgIALAAAOIAAAAQAAAQAIAJQAHAKAMAAQANAAAHgKQAIgJgBgQIAAAAQABgOgIgLQgHgJgNAAQgMAAgHAJg");
	this.shape_239.setTransform(-110.6,8.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgTAqIAAhSIAIAAIACAOIAAABQADgIAGgEQAFgEAIAAIAEAAIADAAIgCAJIgGAAQgKAAgDAFQgGAEgCAJIAAA4g");
	this.shape_240.setTransform(-117.1,8.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAFgHAGgEQAGgDAHAAQAQAAAIAMQAIALAAAVIAAABQAAASgIAKQgJAMgPAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgGAFgDAHIAAAmQADAHAGAEQAHAEAHAAQAMAAAGgJQAGgKAAgNIAAgBQAAgRgGgJQgGgKgMAAQgJAAgFAEg");
	this.shape_241.setTransform(-124.6,10.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_242.setTransform(-134.8,7.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_243.setTransform(-138.4,7.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgZAfQgLgMAAgTIAAAAQAAgTALgLQAKgMAPAAQAQAAALAMQAKAMAAASIAAAAQAAATgKAMQgLAMgQAAQgPAAgKgMgAgTgZQgHALAAAOIAAAAQAAAQAHAJQAIAKALAAQANAAAHgKQAHgJAAgQIAAAAQAAgOgHgLQgHgJgNAAQgLAAgIAJg");
	this.shape_244.setTransform(-148.5,8.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgHQgGgFgJAAQgIAAgHAFQgGAFgCAIIAAA5IgJAAIAAhSIAIAAIABAPQAEgIAGgEQAIgEAHAAQAOAAAGAIQAIAHAAATIAAAxg");
	this.shape_245.setTransform(-157.3,8.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgaAfQgKgMABgTIAAAAQgBgSAKgMQALgMAPAAQAQAAAKAMQAKALAAATIAAAAQAAAUgKALQgJAMgRAAQgPAAgLgMgAgTgZQgHAKAAAPIAAAAQAAAQAHAJQAHAKAMAAQAMAAAIgKQAHgJAAgQIAAAAQAAgOgHgLQgIgJgMAAQgMAAgHAJg");
	this.shape_246.setTransform(-166.2,8.9);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgFgHQgHgGgJAAQgLAAgGAGQgFAHgCALIAAAzIgHAAIAAgvQAAgPgFgHQgHgGgJAAQgKAAgGAFQgFAEgDAJIAAA5IgJAAIAAhSIAIAAIABAOQAFgIAGgDQAGgEAKAAQAKAAAGAEQAFAFACAJQAEgJAHgEQAGgFALAAQANAAAIAJQAHAIAAATIAAAvg");
	this.shape_247.setTransform(-177.6,8.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_248.setTransform(-186.5,7.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgHAGgFQAFgEAIAAIAEAAIACAAIgBAJIgHAAQgJAAgDAFQgGAFgCAIIAAA4g");
	this.shape_249.setTransform(-190.5,8.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AggA6IAAhyIAHAAIACANQAEgHAGgEQAHgDAHAAQAPAAAJAMQAIAMAAAUIAAABQAAARgIALQgJAMgPAAQgHAAgGgEQgGgCgFgHIAAArgAgOgtQgGAEgDAIIAAAmQACAHAHAEQAHAEAHAAQALAAAHgJQAGgKAAgNIAAgBQAAgQgGgKQgHgKgLAAQgJAAgFAEg");
	this.shape_250.setTransform(-197.9,10.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgWAjQgJgGABgLIAAAAIAJAAQAAAIAHAFQAHAEAHAAQAKAAAGgEQAGgFAAgGQAAgGgFgFQgEgDgNgEQgNgCgIgEQgHgFAAgKQAAgKAIgHQAIgGAMAAQAPAAAHAHQAIAGAAALIAAABIgJAAQAAgHgFgFQgGgFgKAAQgJAAgEAEQgFAEAAAHQAAAFAEAEQAEAEALADQAPADAIAEQAHAGAAAJQAAALgIAGQgIAHgPAAQgNAAgJgIg");
	this.shape_251.setTransform(-206.6,8.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgTALgLQAKgMANAAQAPAAAJAJQAJALAAAPIAAAHIg5AAIAAACQAAAOAHAJQAIAKAKAAQAIAAAHgCQAFgDAFgFIAEAHQgEAFgIADQgHADgKAAQgOAAgKgLgAgPgbQgGAJgCALIAwAAIAAgCQAAgLgHgHQgGgHgLAAQgIAAgIAHg");
	this.shape_252.setTransform(-214.7,8.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_253.setTransform(-224.5,7.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgLQAJgMAQAAQANAAAKAIQAJAIgBAOIAAAAIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAJQgHAKAAAPIAAABQAAAPAHAJQAGAKAMAAQAJAAAHgFQAHgFAAgKIAIAAIAAABQABALgKAIQgJAIgNAAQgQAAgJgMg");
	this.shape_254.setTransform(-230.4,8.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_255.setTransform(-236.3,7.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgYAxQgIgLAAgTIAAgBQAAgSAIgMQAJgMAPAAQAHAAAGADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgHAEgGAAQgPAAgJgMgAgRgGQgGAIAAAQIAAABQAAAQAGAJQAGAJALAAQAIAAAHgEQAGgEADgIIAAglQgDgHgGgFQgFgEgKAAQgLAAgGAKg");
	this.shape_256.setTransform(-242.7,7.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgSAKgMQALgMANAAQAPAAAJAJQAJALAAAPIAAAHIg6AAIAAACQAAAOAIAJQAHAKALAAQAHAAAIgCQAFgDAFgFIAEAHQgEAFgIADQgHADgKAAQgOAAgKgLgAgPgbQgHAJgBALIAvAAIAAgCQAAgLgGgHQgGgHgLAAQgJAAgHAHg");
	this.shape_257.setTransform(-251,8.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AAwAqIAAgvQAAgQgFgGQgFgGgKAAQgLAAgGAGQgFAHgCALIAAAzIgIAAIAAgvQABgQgGgGQgFgGgKAAQgKAAgGAFQgGAEgCAJIAAA5IgJAAIAAhSIAIAAIABAOQAEgIAGgDQAHgEAJAAQAKAAAHAEQAFAFACAJQAEgJAHgEQAGgFALAAQAOAAAGAJQAIAIAAATIAAAvg");
	this.shape_258.setTransform(-262.1,8.8);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_259.setTransform(-274.9,7.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_260.setTransform(-282.3,7.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAHAAIAAAVIATAAIAAAIIgTAAIAAA0QAAAJADAEQAEADAEAAIAKgBIABAHIgGACIgGAAQgJAAgDgGg");
	this.shape_261.setTransform(-286.8,7.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgCAvQgFgGAAgMIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADAEQADADAFAAIAJgBIABAHIgFACIgHAAQgIAAgEgGg");
	this.shape_262.setTransform(-292.1,7.9);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAvQAAAPAFAHQAFAGAKAAQAIAAAHgEQAGgGACgIIAAg5IAKAAIAABSIgIAAIgBgOQgEAHgHAEQgHAEgHAAQgNAAgIgJg");
	this.shape_263.setTransform(-299.1,9);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADAEQADADAFAAIAJgBIABAHIgFACIgHAAQgJAAgDgGg");
	this.shape_264.setTransform(-306.2,7.9);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgKAsIAAgUIAVAAIAAAUgAgKgXIAAgUIAVAAIAAAUg");
	this.shape_265.setTransform(-314.9,8.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgeAkQgHgHAAgMQABgMAJgFQAKgHARAAIALAAIAAgGQAAgFgDgFQgDgDgFAAQgEABgEACQgDADAAAEIgWAAIAAAAQAAgLAJgIQAKgHAOAAQAPAAAKAHQAJAJAAANIABAsIACALIgWAAIgCgHIgCgHQgCAGgHAFQgEAEgHAAQgNAAgIgHgAgKAIQgEADAAAGQAAAEADADQACACAFAAQAEAAAFgDQAFgCABgFIAAgLIgLAAQgHgBgDAEg");
	this.shape_266.setTransform(-321.4,8.9);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgKA8IAAhSIAVAAIAABSgAgKgqIAAgRIAVAAIAAARg");
	this.shape_267.setTransform(-327.8,7.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AglA6IAAhyIAVAAIABAKQAEgFAFgDQAGgDAEAAQAQAAAIAMQAKAMgBAUIAAABQABARgKALQgIAMgQAAQgEAAgFgDQgFgCgEgFIAAAogAgIgmIgGAGIAAAjQADAEADABQAEACAEAAQAHAAAEgGQADgFAAgLIAAgBQAAgNgEgHQgEgHgGAAQgEAAgEACg");
	this.shape_268.setTransform(-334.2,10.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgeAkQgHgHAAgMQAAgMAKgFQAJgHASAAIAMAAIAAgGQAAgFgEgFQgDgDgFAAQgFABgDACQgDADAAAEIgVAAIAAAAQgBgLAKgIQAJgHAOAAQAPAAAJAHQAKAIAAAOIAAAhIABALIADALIgXAAIgDgOQgDAGgGAFQgFAEgHAAQgMAAgJgHgAgLAIQgDADAAAGQAAAFADACQACACAFAAQAEAAAFgDQADgCAEgFIAAgLIgMAAQgHgBgEAEg");
	this.shape_269.setTransform(-343.2,8.9);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgWAqIAAhSIAVAAIABANQAAgGAGgFQAEgDAGAAIAEAAIADABIgDAUIgIgBQgEAAgEACQgDACgBAEIAAA3g");
	this.shape_270.setTransform(-349.8,8.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgYAgQgLgMAAgSIAAgCQAAgRAKgNQAKgMAQAAQARAAAJAKQAJAKAAASIAAAKIgwAAIAAABQAAAHAGAGQAEAFAHAAQAIAAAEgBQAGgCAFgDIAGAOQgEAFgJACQgJADgJAAQgRAAgKgLgAgHgUQgEAGgBAGIAAABIAaAAIAAgCQAAgHgDgEQgDgFgHAAQgEABgEAEg");
	this.shape_271.setTransform(-357.1,8.9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgFAuQgGgGAAgPIAAgoIgNAAIAAgQIANAAIAAgUIAUAAIAAAUIAPAAIAAAQIgPAAIAAAoQAAAFACACQACACAEAAIADAAIADgBIACARIgHACIgHAAQgLABgFgHg");
	this.shape_272.setTransform(-364.4,8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgeAkQgHgHAAgMQAAgMAKgFQAKgHARAAIALAAIAAgGQAAgGgDgEQgDgDgFAAQgEABgEACQgDADAAAEIgWAAIAAAAQgBgLAKgIQAKgHAOAAQAPAAAJAHQAKAIAAAOIAAAhIABALIADALIgXAAIgEgOQgCAGgHAFQgEAEgHAAQgNAAgIgHgAgKAIQgEAEAAAFQAAAFADACQACACAFAAQAEAAAFgDQADgCADgFIAAgLIgLAAQgHgBgDAEg");
	this.shape_273.setTransform(-375.2,8.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgKA8IAAh3IAVAAIAAB3g");
	this.shape_274.setTransform(-381.5,7.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgKA8IAAh3IAVAAIAAB3g");
	this.shape_275.setTransform(-385.8,7.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgZAgQgKgNAAgRIAAgCQAAgSAKgMQAKgMAPAAQARAAAKAKQAJALAAARIAAAKIgwAAIAAABQAAAHAFAGQAGAFAGAAQAHAAAFgBQAGgCAFgDIAGAOQgFAFgIACQgIADgLAAQgPAAgMgLgAgIgUQgDAGgBAGIAAABIAaAAIAAgCQAAgHgDgEQgEgFgHAAQgEABgEAEg");
	this.shape_276.setTransform(-392,8.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgcAxQgIgKAAgUIAAgBQAAgTAIgLQAJgMAPAAQAEAAAGACQAEADAFAFIAAguIAWAAIAAB3IgTAAIgCgKQgEAGgFADQgGADgFAAQgPAAgJgMgAgKAAQgEAFAAANIAAABQAAAMAEAGQADAGAHAAQAFAAAEgCIAGgGIAAgjIgGgFQgEgCgFAAQgGAAgEAHg");
	this.shape_277.setTransform(-401,7.1);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgeAkQgHgHAAgMQAAgLAKgGQAKgHARAAIALAAIAAgGQAAgFgDgFQgDgDgFAAQgEABgEACQgDADAAAEIgWAAIAAAAQgBgLAKgIQAKgHAOAAQAPAAAKAHQAJAIAAAOIAAAhIABALIADALIgXAAIgCgHIgBgHQgDAHgHAEQgDAEgIAAQgNAAgIgHgAgKAIQgEAEAAAFQAAAFADACQACACAFAAQAEAAAFgDQAEgCACgFIAAgLIgLAAQgHgBgDAEg");
	this.shape_278.setTransform(-413.5,8.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgFAuQgGgGAAgPIAAgoIgNAAIAAgQIANAAIAAgUIAUAAIAAAUIAOAAIAAAQIgOAAIAAAoQAAAGACABQACACAEAAIADAAIADgBIACARIgHACIgHAAQgLABgFgHg");
	this.shape_279.setTransform(-420.7,8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgKA8IAAh3IAVAAIAAB3g");
	this.shape_280.setTransform(-425.4,7.1);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgZAgQgKgNAAgRIAAgCQAAgRAKgNQAKgMAPAAQASAAAJAKQAJAKAAASIAAAKIgwAAIAAABQABAIAFAFQAEAFAHAAQAIAAAEgBQAGgCAFgDIAGAOQgFAFgIACQgIADgLAAQgPAAgMgLgAgHgUQgEAGgBAGIAAABIAaAAIAAgCQAAgGgDgFQgEgFgHAAQgEABgDAEg");
	this.shape_281.setTransform(-431.7,8.9);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgZAfQgKgMAAgTIAAAAQAAgSAKgMQAKgMARAAQAPAAAKAIQAKAKgBAOIAAABIgVAAQAAgIgDgDQgEgFgGAAQgHAAgEAHQgEAIAAAKIAAAAQAAAMAEAGQAEAIAHgBQAGAAAEgDQADgEAAgFIAVAAIAAAAQAAAMgKAJQgKAJgOAAQgRAAgKgMg");
	this.shape_282.setTransform(-440,8.9);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgcAwQgOgJAAgSIAAAAIAWAAQAAAKAHAEQAGAFAJABQAJgBAFgEQAFgDAAgHQAAgGgFgEQgEgFgMgDQgTgGgKgGQgKgHAAgOQAAgOAMgJQALgJARABQATgBAMAKQAMAKgBAOIAAABIgWAAQAAgIgGgFQgEgEgKgBQgHABgFAEQgFADAAAHQAAAGAFADQAHAEAJAEQATAFAKAHQAJAIAAAOQAAAPgLAIQgMAJgSgBQgRABgNgKg");
	this.shape_283.setTransform(-449.2,7.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#D22040").s().p("AgpA+QgLgKADgTIAAgBIAcAAQgCAIAEAFQAFAFAHABQAHAAAGgGQAGgFABgKQACgLgEgFQgDgFgIAAIgQAAIAEgTIANAAQAIAAAGgGQAFgGACgJQABgJgEgEQgDgFgIgBQgHAAgDAFQgGAFgBAHIgbAAIgBAAQACgSAPgKQAOgKARAAQAUAAALAKQALAKgDAUQgCAKgHAIQgHAJgKAEQALADAEAIQAEAIgBAMQgEAUgPALQgPAKgTAAQgSAAgMgKg");
	this.shape_284.setTransform(-403.6,-32.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#D22040").s().p("AgjAoQgLgPAEgWIAAgDQAEgYAOgPQAPgOASAAQAUAAAJANQAJANgDAWIgDANIg4AAQgBALAFAHQAEAGAIAAQAIAAAGgBIAOgGIAFARQgIAGgJADQgKADgLAAQgVAAgKgOgAgEgZQgFAGgCAKIAAAAIAcAAIAAgCQACgKgDgFQgDgFgHAAQgGAAgEAGg");
	this.shape_285.setTransform(-418.7,-30.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#D22040").s().p("AgkAsQgKgLADgOIAAAAIAaAAQgBAIAEAEQADAEAIAAQAFAAAEgDQAEgDABgGQABgFgEgDQgEgEgIgCQgQgDgIgGQgIgIACgMQACgPAMgJQAMgJARAAQASAAAKAJQAKAKgCAOIgBABIgbAAQABgHgDgEQgDgEgGAAQgFAAgDAEQgEAEgBAEQgBAFADADQAFAEAIACQARAEAIAFQAHAIgCANQgCAPgNAJQgMAIgSAAQgTAAgKgKg");
	this.shape_286.setTransform(-428.7,-30.3);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#D22040").s().p("AgoAuQgIgJADgOQADgRANgGQAMgIAUAAIANAAIABgIQACgIgDgEQgCgEgHAAQgGAAgCADQgEAEgBAFIgbAAIAAAAQACgPAOgJQAMgJASAAQARAAAJAKQAKAKgDARIgJApIgCAPIABAMIgcAAIgBgMQgHAHgEADQgGAEgKAAQgOAAgGgIgAgKALQgFAEgCAHQgBAGADACQACADAFAAQAFAAADgCQAGgEADgDIAEgSIgNAAQgGAAgEAFg");
	this.shape_287.setTransform(-438.7,-30.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#D22040").s().p("Ag7BHIAdiNIBaAAIgFAXIg+AAIgHAnIA0AAIgEATIg1AAIgMA8g");
	this.shape_288.setTransform(-447.8,-32.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#0C5EA5").ss(6.2).p("EBHAAVBMiN+AAAQh0AAhRhSQhShSAAhzMAAAghTQAAhzBShSQBRhSB0AAMCN+AAAQBzAABSBSQBSBSAABzMAAAAhTQAABzhSBSQhSBShzAAg");

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("EhG+AVBQh0AAhShSQhRhSAAhzMAAAghTQAAhzBRhSQBShSB0AAMCN+AAAQBzAABSBSQBSBSAABzMAAAAhTQAABzhSBSQhSBShzAAg");

	this.addChild(this.shape_290,this.shape_289,this.shape_288,this.shape_287,this.shape_286,this.shape_285,this.shape_284,this.shape_283,this.shape_282,this.shape_281,this.shape_280,this.shape_279,this.shape_278,this.shape_277,this.shape_276,this.shape_275,this.shape_274,this.shape_273,this.shape_272,this.shape_271,this.shape_270,this.shape_269,this.shape_268,this.shape_267,this.shape_266,this.shape_265,this.shape_264,this.shape_263,this.shape_262,this.shape_261,this.shape_260,this.shape_259,this.shape_258,this.shape_257,this.shape_256,this.shape_255,this.shape_254,this.shape_253,this.shape_252,this.shape_251,this.shape_250,this.shape_249,this.shape_248,this.shape_247,this.shape_246,this.shape_245,this.shape_244,this.shape_243,this.shape_242,this.shape_241,this.shape_240,this.shape_239,this.shape_238,this.shape_237,this.shape_236,this.shape_235,this.shape_234,this.shape_233,this.shape_232,this.shape_231,this.shape_230,this.shape_229,this.shape_228,this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223,this.shape_222,this.shape_221,this.shape_220,this.shape_219,this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-485.4,-137.6,970.8,275.3);


(lib.popB2 = function() {
	this.initialize();

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5EA5").s().p("Ag4BUQgXgZAAgoIAAgkQAAgoAXgZQAXgaAiAAQAkAAAWATQAVAUgBAfIAAABIgcAAQAAgXgNgMQgNgNgYAAQgWAAgPATQgOATAAAdIAAAlQAAAdAOATQAPAUAWAAQAYAAANgNQANgNAAgXIAcAAIAAABQABAegWAUQgVAUgkAAQgiAAgXgZg");
	this.shape.setTransform(-174.9,-75.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5EA5").s().p("Ag4BUQgXgZAAgoIAAgkQAAgoAXgZQAXgaAiAAQAkAAAWATQAVAUgBAfIAAABIgcAAQAAgXgNgMQgNgNgYAAQgWAAgPATQgOATAAAdIAAAlQAAAdAOATQAPAUAWAAQAYAAANgNQANgNAAgXIAcAAIAAABQABAegWAUQgVAUgkAAQgiAAgXgZg");
	this.shape_1.setTransform(-193.9,-75.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5EA5").s().p("Ag9BUQgXgaAAgnIAAgkQAAgnAXgaQAXgaAmAAQAkAAAZAaQAYAaAAAnIAAAkQAAAngYAaQgZAZgkAAQgmAAgXgZgAgphCQgPATAAAeIAAAkQAAAeAPASQAPATAaAAQAZAAAPgTQAQgSAAgeIAAgkQAAgegQgTQgPgSgZAAQgaAAgPASg");
	this.shape_2.setTransform(-213.9,-75.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5EA5").s().p("AAzBqIhkijIgBAAIAACjIgdAAIAAjTIAdAAIBkCiIABAAIAAiiIAdAAIAADTg");
	this.shape_3.setTransform(-234.8,-75.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5EA5").s().p("Ag0BFQgNgMAAgXQAAgWASgMQATgMAdAAIAgAAIAAgQQAAgNgJgJQgIgIgQAAQgLAAgKAHQgIAHAAAKIgcAAIAAgBQgBgRARgOQASgPAZAAQAbAAAQAOQAQANAAAbIABBaIAEAQIgeAAIgDgYQgJAMgMAHQgMAIgOAAQgZAAgNgNgAgaAOQgKAJAAAMQAAAKAGAGQAHAHANAAQANAAANgIQANgJAEgKIAAgaIghAAQgPAAgLAJg");
	this.shape_4.setTransform(-261.3,-72.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5EA5").s().p("AAjBQIAAhhQAAgUgIgKQgJgJgQAAQgLAAgKAGQgJAGgGALIAABxIgdAAIAAicIAaAAIACAXQAIgMAMgHQAMgHANAAQAaAAANAPQAPAPAAAfIAABig");
	this.shape_5.setTransform(-278,-72.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5EA5").s().p("AgzA7QgTgXAAgjIAAgBQAAgjATgXQAUgXAfAAQAgAAAUAXQASAXAAAjIAAABQAAAjgSAXQgUAXggAAQgfAAgUgXgAgegpQgLAQAAAZIAAABQAAAZALARQALAQATAAQAUAAALgQQALgRAAgZIAAgBQgBgZgKgQQgLgRgUAAQgTAAgLARg");
	this.shape_6.setTransform(-295,-72.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5EA5").s().p("AgNByIAAidIAbAAIAACdgAgNhTIAAgeIAbAAIAAAeg");
	this.shape_7.setTransform(-307.3,-76.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C5EA5").s().p("Ag+BPIAAgVIBUhxIhTAAIAAgXIB2AAIAAAUIhUByIBZAAIAAAXg");
	this.shape_8.setTransform(-318.5,-72.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0C5EA5").s().p("AAjBQIAAhhQAAgUgIgKQgJgJgRAAQgJAAgKAGQgKAGgGALIAABxIgdAAIAAicIAaAAIACAXQAJgMALgHQANgHAMAAQAaAAAOAPQAOAPAAAfIAABig");
	this.shape_9.setTransform(-334.7,-72.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0C5EA5").s().p("AgxBAQgOgRAAgjIAAhbIAdAAIAABcQAAAZAIAJQAHAKAPAAQAPAAAJgGQAKgGAFgMIAAhwIAdAAIAACcIgaAAIgCgXQgHAMgMAIQgLAGgOAAQgaAAgPgQg");
	this.shape_10.setTransform(-351.8,-72.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0C5EA5").s().p("AgWBzIAAiHIgZAAIAAgVIAZAAIAAgUQAAgaANgNQALgOAYAAIAWADIgEAWIgOgCQgMAAgHAIQgGAHAAAPIAAAUIAhAAIAAAVIghAAIAACHg");
	this.shape_11.setTransform(-365,-76.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0C5EA5").s().p("AgtA8QgUgWAAgjIAAgFQAAgiAUgWQAVgXAZAAQAgAAARAUQAQAUAAAfIAAAQIhlAAIAAABQAAAWALAQQAMAOARAAQAOAAAMgEQAKgEAJgHIAMASQgKAJgNAFQgNAGgVAAQgfAAgTgWgAgWguQgKAMgCATIAAABIBHAAIAAgEQAAgRgJgLQgJgMgSAAQgMAAgLAMg");
	this.shape_12.setTransform(-385.9,-72.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0C5EA5").s().p("ABRBQIAAhdQAAgXgIgKQgJgKgPAAQgPAAgJALQgJAJgCARIAABjIgbAAIAAhdQAAgVgIgLQgIgLgQAAQgMAAgKAGQgIAFgFAKIAABzIgdAAIAAicIAaAAIACAVQAIgLAMgHQANgGAPAAQAQAAALAHQAKAIAFAOQAHgMANgJQANgIAPAAQAZAAAOARQAOAQAAAiIAABcg");
	this.shape_13.setTransform(-407.1,-72.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0C5EA5").s().p("AgyA7QgUgXABgjIAAgBQgBgjAUgXQASgXAgAAQAgAAATAXQAUAXgBAjIAAABQABAjgUAXQgTAXggAAQgfAAgTgXgAgegpQgKAQAAAZIAAABQAAAZAKARQAKAQAUAAQAUAAALgQQAKgRAAgZIAAgBQAAgZgKgQQgLgRgUAAQgUAAgKARg");
	this.shape_14.setTransform(-428.7,-72.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0C5EA5").s().p("Ag4BUQgXgZAAgoIAAgkQAAgoAXgZQAXgaAiAAQAkAAAWATQAVAUgBAfIAAABIgcAAQAAgXgNgMQgNgNgYAAQgWAAgOATQgPATAAAdIAAAlQAAAdAPATQAOAUAWAAQAYAAANgNQANgNAAgXIAcAAIAAABQABAegWAUQgVAUgkAAQgiAAgXgZg");
	this.shape_15.setTransform(-446.5,-75.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_16.setTransform(290.2,45.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_17.setTransform(286.6,40.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAXAqIAAgxQAAgOgGgGQgFgGgLAAQgIAAgGAFQgFAFgEAJIAAA4IgJAAIAAhSIAIAAIABAPQAEgIAIgEQAGgEAHAAQAOAAAIAIQAGAJABARIAAAxg");
	this.shape_18.setTransform(280.4,42.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgZAfQgKgLAAgTIAAgBQAAgTAKgLQAKgMAPAAQAQAAALAMQAJAMABASIAAABQgBASgJAMQgLAMgQAAQgPAAgKgMgAgTgYQgIAKAAAOIAAABQAAAOAIALQAHAJAMAAQANAAAHgJQAIgLAAgOIAAgBQAAgOgIgKQgHgKgNAAQgMAAgHAKg");
	this.shape_19.setTransform(271.6,42.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_20.setTransform(265.3,40.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgfAqIAAgHIAwhEIgvAAIAAgIIA7AAIAAAHIgxBEIA0AAIAAAIg");
	this.shape_21.setTransform(259.8,42.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgLAKgIQALgEAPgBIASAAIAAgKQAAgJgGgFQgFgFgLAAQgJAAgFAFQgHAEABAIIgJAAIAAAAQgBgKAKgHQAIgIAMAAQAOAAAJAHQAIAIAAAMIABAwIABAJIgJAAIgCgIIAAgGQgFAGgIAFQgIAEgHAAQgNAAgGgHgAgPAGQgIAGABAHQAAAIAEADQAEAFAJAAQAJAAAGgFQAIgEAEgIIAAgSIgTAAQgKABgIAFg");
	this.shape_22.setTransform(251.4,42.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgFgGgKAAQgLAAgGAGQgFAHgCALIAAAzIgHAAIAAgvQAAgQgGgGQgFgGgKAAQgKAAgGAFQgGAGgCAHIAAA5IgJAAIAAhSIAIAAIABAOQAEgGAHgFQAHgEAJAAQAKAAAGAEQAFAFACAKQAEgJAHgFQAHgFAKAAQANAAAIAJQAHAJAAASIAAAvg");
	this.shape_23.setTransform(240.2,42.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQAEgIAFgEQAGgEAHAAIAHABIgCAIIgGAAQgJAAgEAFQgGAFgCAIIAAA4g");
	this.shape_24.setTransform(231,42.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgaAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQARAAAJAMQALAMAAASIAAABQAAATgLALQgKAMgQAAQgPAAgLgMgAgTgYQgHAKAAAOIAAABQAAAOAHALQAHAJAMAAQAMAAAIgJQAHgLAAgOIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_25.setTransform(223.3,42.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgJA9IAAhLIgOAAIAAgHIAOAAIAAgMQAAgNAGgHQAFgHALAAIALACIgCAHIgIgBQgHAAgFAFQgCAFAAAJIAAAMIASAAIAAAHIgSAAIAABLg");
	this.shape_26.setTransform(216.6,40.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgJAAgFAFQgGAEgDAKIAAA4IgKAAIAAhSIAJAAIAAAPQAFgIAGgEQAHgEAIAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_27.setTransform(209.3,42.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_28.setTransform(203.1,40.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAJAAAGgCQAHgDADgEIAEAHQgGAFgGACQgHADgKAAQgOAAgKgMgAgPgaQgGAHgCAMIAAABIAwAAIAAgCQAAgLgHgHQgGgIgLAAQgIAAgIAIg");
	this.shape_29.setTransform(193.3,42.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_30.setTransform(187.4,40.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAJAAAGgCQAHgDADgEIAEAHQgFAFgHACQgHADgKAAQgOAAgKgMgAgPgaQgGAHgCAMIAAABIAwAAIAAgCQAAgMgHgGQgGgIgLAAQgIAAgIAIg");
	this.shape_31.setTransform(177.7,42.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIADADQADAEAFAAIAEAAIAFgBIABAHIgFACIgHAAQgJAAgDgGg");
	this.shape_32.setTransform(170.8,41.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgCAvQgFgEAAgNIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIADADQADAEAFAAIAEAAIAFgBIABAHIgFACIgHAAQgKAAgCgGg");
	this.shape_33.setTransform(165.6,41.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAvQAAAPAFAHQAFAGAKAAQAIAAAHgEQAGgFACgIIAAg6IAKAAIAABSIgJAAIAAgOQgFAIgGADQgGAEgIAAQgOAAgHgJg");
	this.shape_34.setTransform(158.6,42.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgCAvQgFgEAAgNIAAg1IgOAAIAAgIIAOAAIAAgVIAHAAIAAAVIATAAIAAAIIgTAAIAAA1QAAAIADADQADAEAFAAIAFAAIAFgBIABAHIgGACIgGAAQgJAAgDgGg");
	this.shape_35.setTransform(151.5,41.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgSALgMQAKgMAPAAQAQAAALAMQAJAMABASIAAABQgBATgJALQgLAMgQAAQgPAAgKgMgAgTgYQgIAKABAOIAAABQgBAOAIALQAHAJAMAAQANAAAHgJQAIgLAAgOIAAgBQAAgOgIgKQgHgKgNAAQgMAAgHAKg");
	this.shape_36.setTransform(140.6,42.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQAEgIAFgEQAFgEAJAAIAFABIgBAIIgHAAQgIAAgEAFQgGAFgCAIIAAA4g");
	this.shape_37.setTransform(134.2,42.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgaAfQgKgMABgSIAAgBQgBgSAKgMQALgMAPAAQARAAAKAMQAKALgBATIAAABQABATgKALQgLAMgQAAQgPAAgLgMgAgTgYQgHAKAAAOIAAABQAAAOAHALQAHAJAMAAQAMAAAIgJQAHgLAAgOIAAgBQAAgOgHgKQgIgKgMAAQgLAAgIAKg");
	this.shape_38.setTransform(126.5,42.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_39.setTransform(120.3,40.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgJAAgFAFQgGAEgDAKIAAA4IgKAAIAAhSIAJAAIAAAPQAFgIAGgEQAHgEAIAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_40.setTransform(110.2,42.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgaAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQARAAAJAMQALAMAAASIAAABQAAATgLALQgKAMgQAAQgPAAgLgMgAgTgYQgHAKAAAOIAAABQAAAOAHALQAHAJAMAAQAMAAAIgJQAHgLAAgOIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_41.setTransform(101.4,42.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgSAJgMQAKgMAOAAQAOAAAJAIQAJAIAAANIAAABIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAJQgGAKAAAPIAAABQAAAPAGAKQAHAJALAAQAKAAAHgFQAHgGAAgIIAIAAIAAAAQAAALgJAJQgKAHgNAAQgOAAgKgMg");
	this.shape_42.setTransform(92.9,42.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAJAKAAQAJAAAGgCQAHgDADgEIAEAHQgGAFgGACQgHADgKAAQgOAAgKgMgAgPgaQgHAIgBALIAAABIAwAAIAAgCQAAgLgHgHQgGgIgLAAQgJAAgHAIg");
	this.shape_43.setTransform(80.8,42.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAPAAQAGAAAHAEQAHAEAEAGIAAgyIAJAAIAAB3IgIAAIgBgMQgEAGgHAEQgGAEgHAAQgQAAgIgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAJAAAGgEQAGgEADgHIAAgmQgDgHgGgFQgGgEgJAAQgLAAgGAKg");
	this.shape_44.setTransform(72.1,40.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_45.setTransform(66.1,40.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgCAqIgghTIAJAAIAYA9IABAKIAAAAIAZhHIAKAAIggBTg");
	this.shape_46.setTransform(60.4,42.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_47.setTransform(54.7,40.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgXAyQgJgLAAgTIAAgCQAAgTAJgLQAIgMAPAAQAHAAAGAEQAGADAFAHIAAgyIAJAAIAAB3IgIAAIgBgMQgDAGgIAEQgGAEgHAAQgQAAgHgLgAgQgGQgHAIAAAQIAAACQAAAPAGAJQAHAJAKAAQAJAAAFgEQAGgEAEgHIAAgmQgDgHgGgFQgGgEgJAAQgKAAgGAKg");
	this.shape_48.setTransform(48.3,40.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgIAAgGAFQgHAFgCAJIAAA4IgJAAIAAhSIAIAAIABAPQAEgIAGgEQAIgEAHAAQAOAAAGAIQAIAIAAASIAAAxg");
	this.shape_49.setTransform(39.6,42.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgaAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQAQAAAKAMQAKALAAATIAAABQAAATgKALQgKAMgQAAQgPAAgLgMgAgTgYQgHAJAAAPIAAABQAAAPAHAKQAHAJAMAAQAMAAAIgJQAHgLAAgOIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_50.setTransform(30.8,42.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgXAfQgJgMAAgSIAAgBQAAgSAJgMQAKgMAPAAQANAAAJAIQAJAIAAANIAAABIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAJQgHAKAAAPIAAABQAAAPAHAKQAFAJANAAQAJAAAHgFQAHgGAAgIIAIAAIAAAAQABALgKAJQgKAHgMAAQgQAAgJgMg");
	this.shape_51.setTransform(22.3,42.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgRAKgNQALgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAHAJALAAQAJAAAGgCQAHgDADgEIAEAHQgGAFgGACQgHADgKAAQgPAAgJgMgAgPgaQgHAIgBALIAAABIAvAAIAAgCQAAgMgGgGQgGgIgLAAQgJAAgHAIg");
	this.shape_52.setTransform(10.2,42.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgGARIAGgUIAAgNIAHAAIAAANIgHAUg");
	this.shape_53.setTransform(0.5,46.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAKgEAPgBIASAAIAAgKQABgJgHgFQgFgFgKAAQgJAAgFAFQgHAEAAAIIgJAAQAAgKAJgHQAJgIAMAAQANAAAJAHQAJAIgBAMIABAwIACAJIgKAAIgCgOQgEAGgIAFQgIAEgHAAQgNAAgGgHgAgPAGQgIAGAAAHQAAAIAEADQAGAFAIAAQAIAAAIgFQAGgEAEgIIAAgSIgSAAQgKABgIAFg");
	this.shape_54.setTransform(-5.2,42.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAxAqIAAgvQgBgQgFgGQgFgGgKAAQgLAAgFAGQgHAHgBALIAAAzIgHAAIAAgvQAAgPgGgHQgFgGgKAAQgLAAgEAFQgGAEgDAJIAAA5IgJAAIAAhSIAIAAIABAOQADgGAIgFQAGgEAKAAQAJAAAHAEQAFAGACAJQAEgIAHgGQAHgFAKAAQAOAAAHAJQAHAJAAASIAAAvg");
	this.shape_55.setTransform(-16.4,42.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAJAKAAQAJAAAGgCQAHgDADgEIAEAHQgGAFgGACQgHADgKAAQgOAAgKgMgAgPgaQgHAIgBALIAAABIAvAAIAAgCQAAgMgGgGQgGgIgLAAQgJAAgHAIg");
	this.shape_56.setTransform(-27.5,42.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgCAvQgFgEAAgNIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIADADQADAEAFAAIAEAAIAFgBIABAHIgFACIgHAAQgKAAgCgGg");
	this.shape_57.setTransform(-34.3,41.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgWAkQgIgHAAgLIAAAAIAJAAQAAAKAHADQAGAEAIAAQALAAAFgEQAGgEAAgHQAAgGgFgEQgFgFgMgDQgNgCgIgEQgHgGAAgJQAAgKAIgGQAJgHALAAQAOAAAIAHQAIAIAAAKIAAAAIgJAAQAAgHgFgFQgGgFgKAAQgJAAgEAEQgGAFAAAGQAAAFAFAEQAFAEAKADQAPADAIAEQAHAGAAAJQAAAMgIAFQgJAHgOAAQgMAAgKgHg");
	this.shape_58.setTransform(-41,42.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_59.setTransform(-46.8,40.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgWAkQgJgHABgLIAAAAIAJAAQABAKAGADQAGAEAIAAQALAAAFgEQAGgEAAgHQAAgGgFgEQgFgFgMgDQgNgCgIgEQgHgGAAgJQAAgKAIgGQAJgHALAAQAOAAAIAHQAIAIAAAKIAAAAIgJAAQAAgHgFgFQgGgFgKAAQgJAAgEAEQgGAFAAAGQAAAFAFAEQAFAEAKADQAPADAIAEQAHAGAAAJQAAAMgIAFQgIAHgPAAQgMAAgKgHg");
	this.shape_60.setTransform(-52.7,42.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_61.setTransform(-62.3,40.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgLAKgIQALgEAOgBIATAAIAAgKQAAgJgGgFQgFgFgLAAQgIAAgGAFQgHAEAAAIIgIAAIgBAAQABgKAIgHQAKgIAMAAQANAAAIAHQAJAIAAAMIAAAoIACARIgKAAIgBgIIAAgGQgFAGgHAFQgJAEgHAAQgNAAgGgHgAgPAGQgHAGgBAHQABAIAEADQAEAFAJAAQAIAAAHgFQAIgEAEgIIAAgSIgTAAQgKABgIAFg");
	this.shape_62.setTransform(-68.5,42.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgXAyQgJgLAAgTIAAgCQAAgTAJgLQAIgMAPAAQAGAAAHAEQAGAEAFAGIAAgyIAJAAIAAB3IgIAAIgBgMQgDAGgIAEQgGAEgHAAQgQAAgHgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAHAJAKAAQAJAAAFgEQAHgEADgHIAAgmQgDgHgGgFQgGgEgJAAQgKAAgHAKg");
	this.shape_63.setTransform(-77.3,40.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAJAAAGgCQAHgDADgEIAEAHQgGAFgGACQgHADgKAAQgOAAgKgMgAgPgaQgGAHgCAMIAAABIAwAAIAAgCQAAgLgHgHQgGgIgLAAQgIAAgIAIg");
	this.shape_64.setTransform(-89.4,42.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgCAvQgFgEAAgNIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIADADQADAEAFAAIAEAAIAFgBIABAHIgFACIgHAAQgJAAgDgGg");
	this.shape_65.setTransform(-96.3,41.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAXAqIAAgxQgBgOgFgGQgFgGgLAAQgHAAgGAFQgHAFgCAJIAAA4IgJAAIAAhSIAIAAIABAPQADgIAIgEQAGgEAIAAQANAAAHAIQAHAJABARIAAAxg");
	this.shape_66.setTransform(-103.2,42.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAJAAAGgCQAHgDADgEIAEAHQgGAFgGACQgHADgKAAQgOAAgKgMgAgPgaQgGAHgCAMIAAABIAwAAIAAgCQAAgLgHgHQgGgIgLAAQgIAAgIAIg");
	this.shape_67.setTransform(-111.7,42.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgFgHQgHgGgJAAQgKAAgHAGQgFAHgCALIAAAzIgHAAIAAgvQAAgPgFgHQgHgGgJAAQgKAAgGAFQgFAFgDAIIAAA5IgJAAIAAhSIAIAAIABAOQAEgHAHgEQAHgEAJAAQAKAAAGAEQAFAGACAJQADgIAIgGQAGgFALAAQANAAAIAJQAHAJAAASIAAAvg");
	this.shape_68.setTransform(-122.9,42.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgMAKgHQAKgEAPgBIATAAIAAgKQgBgJgGgFQgEgFgLAAQgJAAgGAFQgGAEAAAIIgIAAQgBgKAJgHQAJgIAMAAQAOAAAIAHQAJAHAAANIAAAwIACAJIgKAAIgBgOQgFAGgIAFQgIAEgIAAQgMAAgHgHgAgQAGQgHAGAAAHQAAAIAFADQAFAFAHAAQAKAAAGgFQAHgEAFgIIAAgSIgTAAQgKABgJAFg");
	this.shape_69.setTransform(-134.3,42.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgCAvQgFgEAAgNIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIADADQADAEAFAAIAEAAIAFgBIABAHIgFACIgHAAQgKAAgCgGg");
	this.shape_70.setTransform(-141.2,41.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgCAvQgFgEAAgNIAAg1IgOAAIAAgIIAOAAIAAgVIAHAAIAAAVIATAAIAAAIIgTAAIAAA1QAAAIADADQADAEAFAAIAFAAIAFgBIABAHIgGACIgGAAQgJAAgDgGg");
	this.shape_71.setTransform(-146.4,41.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAJAAARIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAJAAAGgCQAHgDADgEIAEAHQgFAFgHACQgHADgKAAQgOAAgKgMgAgOgaQgHAHgCAMIABABIAvAAIAAgCQAAgMgHgGQgGgIgLAAQgJAAgGAIg");
	this.shape_72.setTransform(-153.1,42.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQAEgIAFgEQAFgEAIAAIAGABIgBAIIgHAAQgHAAgFAFQgGAGgCAHIAAA4g");
	this.shape_73.setTransform(-159.2,42.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_74.setTransform(-164.2,40.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAPAAQAGAAAHAEQAHAEAEAGIAAgyIAJAAIAAB3IgIAAIgBgMQgEAGgHAEQgFAEgIAAQgPAAgJgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAJAAAGgEQAGgEADgHIAAgmQgDgHgGgFQgFgEgKAAQgLAAgGAKg");
	this.shape_75.setTransform(-170.7,40.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_76.setTransform(-180.6,40.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgCAvQgFgEAAgNIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIADADQADAEAFAAIAEAAIAFgBIABAHIgFACIgHAAQgKAAgCgGg");
	this.shape_77.setTransform(-185.1,41.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgLAKgIQALgEAOgBIATAAIAAgKQAAgJgGgFQgFgFgLAAQgJAAgFAFQgHAEAAAIIgIAAQgBgKAJgHQAJgIAMAAQAOAAAIAHQAJAHAAANIAAAwIACAJIgKAAIgBgOQgEAGgJAFQgIAEgHAAQgNAAgGgHgAgPAGQgIAGAAAHQAAAIAFADQAEAFAJAAQAIAAAIgFQAHgEAEgIIAAgSIgTAAQgKABgIAFg");
	this.shape_78.setTransform(-192,42.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAwAqIAAgvQAAgQgFgGQgFgGgKAAQgMAAgFAGQgGAHgBALIAAAzIgIAAIAAgvQAAgQgFgGQgFgGgKAAQgKAAgGAFQgGAGgCAHIAAA5IgJAAIAAhSIAIAAIABAOQAEgGAGgFQAHgEAJAAQALAAAGAEQAFAGACAJQAEgJAHgFQAGgFALAAQAOAAAGAJQAIAJAAASIAAAvg");
	this.shape_79.setTransform(-203.2,42.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQAEgIAFgEQAFgEAIAAIAGABIAAAIIgIAAQgHAAgFAFQgGAGgCAHIAAA4g");
	this.shape_80.setTransform(-212.4,42.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgaAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQARAAAJAMQALAMAAASIAAABQAAATgLALQgKAMgQAAQgPAAgLgMgAgTgYQgHAKAAAOIAAABQAAAOAHALQAHAJAMAAQAMAAAIgJQAHgLAAgOIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_81.setTransform(-220.1,42.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgJA9IAAhLIgOAAIAAgHIAOAAIAAgMQAAgNAGgHQAFgHALAAIALACIgBAHIgJgBQgHAAgFAFQgCAFAAAJIAAAMIASAAIAAAHIgSAAIAABLg");
	this.shape_82.setTransform(-226.8,40.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgJAAgFAFQgGAFgDAJIAAA4IgKAAIAAhSIAJAAIABAPQAEgIAGgEQAHgEAIAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_83.setTransform(-234.1,42.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_84.setTransform(-240.3,40.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgZAfQgKgMAAgSIAAgBQAAgSAKgMQAKgMAPAAQAQAAALAMQAJAMABASIAAABQgBATgJALQgLAMgQAAQgPAAgKgMgAgTgYQgIAKAAAOIAAABQAAAOAIALQAHAJAMAAQANAAAHgJQAIgLAAgOIAAgBQAAgOgIgKQgHgKgNAAQgMAAgHAKg");
	this.shape_85.setTransform(-250.4,42.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgJAAgFAFQgGAFgDAJIAAA4IgKAAIAAhSIAJAAIABAPQAEgIAGgEQAIgEAHAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_86.setTransform(-259.3,42.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgZAfQgLgLAAgTIAAgBQAAgSALgMQAKgMAPAAQARAAAJAMQALAMAAASIAAABQAAATgLALQgKAMgQAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAOAHALQAHAJAMAAQANAAAHgJQAHgLAAgOIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_87.setTransform(-268.1,42.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgLA6QgGgBgGgDIACgIIALAEIAKABQAMAAAGgHQAGgHAAgNIAAgKQgFAHgGACQgFAEgIAAQgPAAgIgLQgJgLAAgRIAAgCQAAgUAJgMQAIgMAPAAQAHAAAHAEQAGADAFAIIABgOIAHAAIAABRQAAARgIAJQgJAJgQAAIgLgBgAgQgoQgHAKAAAQIAAACQAAANAGAJQAHAJAKAAQAJAAAGgEQAGgEADgIIAAglQgDgGgGgGQgGgEgJAAQgKAAgGAKg");
	this.shape_88.setTransform(-277.2,44);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAWAqIAAgxQABgOgGgGQgFgGgLAAQgIAAgGAFQgGAFgCAJIAAA4IgKAAIAAhSIAIAAIABAPQAEgIAHgEQAIgEAGAAQAOAAAIAIQAGAJAAARIAAAxg");
	this.shape_89.setTransform(-285.8,42.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAJAAAGgCQAHgDADgEIAEAHQgGAFgGACQgHADgKAAQgOAAgKgMgAgPgaQgGAHgCAMIAAABIAwAAIAAgCQAAgLgHgHQgGgIgLAAQgIAAgIAIg");
	this.shape_90.setTransform(-294.3,42.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgCAqIgghTIAJAAIAYA9IABAKIAAAAIAahHIAJAAIggBTg");
	this.shape_91.setTransform(-302.2,42.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAHAJALAAQAJAAAGgCQAHgDADgEIAEAHQgGAFgGACQgHADgKAAQgOAAgKgMgAgPgaQgHAIgBALIAAABIAvAAIAAgCQAAgMgGgGQgGgIgLAAQgJAAgHAIg");
	this.shape_92.setTransform(-314,42.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAWA8IAAg0QAAgLgFgHQgFgFgKgBQgIABgGAEQgGAFgDAHIAAA7IgKAAIAAh3IAKAAIAAAzQADgHAIgEQAHgFAHABQANgBAHAJQAIAJAAAOIAAA0g");
	this.shape_93.setTransform(-322.5,40.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgLQAKgMAPAAQAMAAALAIQAJAIgBANIAAABIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAJQgHAKAAAPIAAABQAAAPAHAKQAGAJAMAAQAJAAAHgFQAHgFAAgJIAIAAIAAAAQABALgKAJQgJAHgNAAQgQAAgJgMg");
	this.shape_94.setTransform(-331.1,42.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgGARIAGgUIAAgNIAHAAIAAANIgHAUg");
	this.shape_95.setTransform(-340.7,46.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgLAKgIQALgEAOgBIATAAIAAgKQAAgJgGgFQgGgFgKAAQgJAAgFAFQgHAEAAAIIgIAAQgBgKAJgHQAJgIAMAAQAOAAAIAHQAJAHAAANIAAAwIACAJIgKAAIgBgOQgEAGgJAFQgIAEgHAAQgNAAgGgHgAgPAGQgIAGAAAHQAAAIAFADQAEAFAJAAQAIAAAIgFQAHgEAEgIIAAgSIgTAAQgKABgIAFg");
	this.shape_96.setTransform(-346.5,42.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_97.setTransform(-352.4,40.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AggA7IAAhzIAIAAIABANQADgGAHgFQAHgDAHAAQAQAAAIAMQAIAMAAAUIAAACQAAAQgIALQgIALgQAAQgGAAgHgCQgHgEgEgGIAAAsgAgOgtQgGAFgDAGIAAAnQADAHAGAEQAGAEAIgBQALAAAHgJQAGgIAAgNIAAgDQAAgPgGgKQgHgLgLAAQgIAAgGAFg");
	this.shape_98.setTransform(-358.5,43.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAKgEAPgBIASAAIAAgKQAAgJgFgFQgGgFgKAAQgIAAgGAFQgHAEAAAIIgJAAQAAgKAJgHQAJgIAMAAQANAAAJAHQAJAIAAAMIAAAwQAAAFACAEIgKAAIgCgOQgEAGgIAFQgIAEgHAAQgNAAgGgHgAgPAGQgIAGAAAHQAAAIAFADQAEAFAJAAQAIAAAIgFQAHgFADgHIAAgSIgSAAQgKABgIAFg");
	this.shape_99.setTransform(-367.4,42.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQAEgIAFgEQAEgEAJAAIAGABIgBAIIgHAAQgIAAgEAFQgFAFgDAIIAAA4g");
	this.shape_100.setTransform(-373.8,42.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAJAAAGgCQAHgDADgEIAEAHQgFAFgHACQgHADgKAAQgOAAgKgMgAgOgaQgHAHgCAMIABABIAvAAIAAgCQAAgMgHgGQgGgIgLAAQgJAAgGAIg");
	this.shape_101.setTransform(-381.1,42.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIADADQACAEAGAAIAEAAIAFgBIABAHIgGACIgGAAQgJAAgDgGg");
	this.shape_102.setTransform(-387.9,41.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgMAKgHQAKgEAPgBIATAAIAAgKQAAgJgHgFQgEgFgLAAQgJAAgFAFQgHAEAAAIIgIAAQgBgKAJgHQAJgIAMAAQAOAAAIAHQAJAHAAANIAAAwIACAJIgKAAIgBgOQgEAGgJAFQgIAEgIAAQgMAAgHgHgAgPAGQgIAGAAAHQAAAIAEADQAGAFAIAAQAHAAAJgFQAHgEAEgIIAAgSIgTAAQgLABgHAFg");
	this.shape_103.setTransform(-398.7,42.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_104.setTransform(-404.7,40.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_105.setTransform(-408.3,40.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgMAKgHQAKgEAPgBIATAAIAAgKQAAgJgHgFQgEgFgLAAQgJAAgFAFQgHAEAAAIIgIAAQgBgKAJgHQAJgIAMAAQAOAAAIAHQAJAHAAANIAAAwIACAJIgKAAIgBgOQgEAGgJAFQgIAEgIAAQgMAAgHgHgAgPAGQgIAGAAAHQAAAIAEADQAGAFAIAAQAIAAAIgFQAHgEAEgIIAAgSIgTAAQgLABgHAFg");
	this.shape_106.setTransform(-414.4,42.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgaAfQgKgLAAgTIAAgBQAAgTAKgLQALgMAPAAQAQAAAKAMQAKAMAAASIAAABQAAASgKAMQgKAMgQAAQgPAAgLgMgAgTgYQgHAKAAAOIAAABQAAAOAHALQAIAJALAAQAMAAAIgJQAHgLAAgOIAAgBQAAgOgHgKQgIgKgMAAQgLAAgIAKg");
	this.shape_107.setTransform(-426.9,42.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgJAAgFAFQgHAFgCAJIAAA4IgKAAIAAhSIAJAAIAAAPQAFgIAGgEQAHgEAIAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_108.setTransform(-435.7,42.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgaAfQgJgMgBgSIAAgBQABgSAJgMQALgMAPAAQARAAAJAMQALALAAATIAAABQAAATgLALQgJAMgRAAQgPAAgLgMgAgTgYQgHAKAAAOIAAABQAAAOAHALQAHAJAMAAQANAAAHgJQAIgLAAgOIAAgBQAAgOgIgKQgHgKgNAAQgMAAgHAKg");
	this.shape_109.setTransform(-444.6,42.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQAEgIAFgEQAFgEAIAAIAHABIgBAIIgIAAQgIAAgEAFQgGAGgCAHIAAA4g");
	this.shape_110.setTransform(-451,42.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgRADIAAgGIAjAAIAAAGg");
	this.shape_111.setTransform(446.7,22.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQAEgIAFgEQAFgEAIAAIAGABIgBAIIgHAAQgJAAgDAFQgFAFgDAIIAAA4g");
	this.shape_112.setTransform(442.3,23.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgZAgQgLgMABgTIAAgBQgBgSALgMQAJgMAQAAQAQAAALAMQAKANAAARIAAABQgBASgJANQgLALgQAAQgPAAgKgLgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAIAKALAAQANAAAHgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_113.setTransform(434.7,23.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgXAgQgJgMAAgTIAAgBQAAgTAJgLQAJgMAPAAQAPAAAIAIQAKAIgBAOIAAAAIgIAAQAAgKgHgGQgGgGgLAAQgLAAgHAJQgGAKAAAPIAAABQAAAPAGAJQAHAKAMAAQAJAAAHgFQAHgFAAgKIAIAAIAAABQABALgKAIQgKAIgMAAQgQAAgJgLg");
	this.shape_114.setTransform(426.1,23.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgGgFQgFgGgJAAQgJAAgFAFQgHAFgDAJIAAA4IgIAAIAAhSIAIAAIAAAPQAEgIAHgEQAHgEAHAAQAOAAAHAIQAIAJgBARIAAAxg");
	this.shape_115.setTransform(417.6,23.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgZAgQgLgNAAgSIAAgBQAAgSALgMQAKgMAPAAQAQAAALAMQAKANAAARIAAABQAAASgKANQgLALgQAAQgPAAgKgLgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAIAKALAAQANAAAHgKQAHgLAAgNIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_116.setTransform(408.7,23.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgXAgQgJgNAAgSIAAgBQAAgTAJgLQAJgMAPAAQAPAAAIAIQAJAHAAAPIAAAAIgIAAQAAgKgHgGQgGgGgLAAQgLAAgHAJQgGALAAAOIAAABQAAAOAGAKQAHAKALAAQAKAAAHgFQAHgFAAgKIAIAAIAAABQAAALgJAIQgKAIgNAAQgOAAgKgLg");
	this.shape_117.setTransform(400.2,23.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgDQAAgRALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAJQAIAKAKAAQAJAAAGgCQAHgEADgDIAEAGQgEAFgIADQgHADgKAAQgOAAgKgLgAgPgaQgGAHgCAMIABABIAvAAIAAgDQAAgLgHgHQgGgHgLAAQgIAAgIAIg");
	this.shape_118.setTransform(388.2,23.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAWA8IAAg0QAAgMgFgGQgGgFgJAAQgIAAgGAEQgHAGgDAGIAAA7IgJAAIAAh3IAJAAIAAA0QAFgIAHgFQAHgDAHAAQANgBAIAJQAGAIAAAPIAAA0g");
	this.shape_119.setTransform(379.7,21.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgXAgQgJgNAAgSIAAgBQAAgTAJgLQAKgMAOAAQAPAAAIAIQAJAIAAAOIAAAAIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAJQgGALAAAOIAAABQAAAOAGAKQAHAKALAAQAKAAAHgFQAHgFAAgKIAIAAIAAABQAAALgJAIQgKAIgNAAQgOAAgKgLg");
	this.shape_120.setTransform(371.1,23.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgPBRIgCgGQALgIAGgVQAJgUAAgaIAAAAQAAgZgJgUQgHgVgKgIIACgFIAAAAQAOAHAJAWQAKAXAAAbIAAAAQAAAdgKAWQgJAVgOAJg");
	this.shape_121.setTransform(360.1,23);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAZAGIAAgLIALAAIAAALgAgDAGIAAgLIAJAAIAAALgAgjAGIAAgLIALAAIAAALg");
	this.shape_122.setTransform(353,26.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgLAKgIQAKgEAPAAIASAAIAAgLQAAgIgFgGQgFgFgLAAQgIAAgHAFQgGAFAAAGIgIAAIAAAAQgBgJAJgIQAJgHAMAAQANAAAKAHQAIAHAAANIABAwIABAJIgJAAIgCgIIgBgGQgFAHgHAEQgIAEgIAAQgMAAgHgHgAgQAGQgHAGAAAHQAAAHAFAFQAEAEAJAAQAJAAAGgFQAIgFADgHIAAgSIgSAAQgKAAgJAGg");
	this.shape_123.setTransform(343.5,23.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADAEQADADAFAAIAJgBIABAHIgFABIgHABQgIAAgEgGg");
	this.shape_124.setTransform(336.6,22.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgWAkQgIgIAAgKIAAAAIAJAAQABAJAGAEQAGAEAIAAQAKAAAGgEQAGgFAAgGQAAgGgFgEQgFgEgMgDQgNgDgHgEQgIgFAAgKQAAgJAIgIQAIgGAMAAQAOAAAIAHQAJAHgBAKIAAABIgIAAQAAgGgGgGQgGgFgKAAQgIAAgFAFQgFADAAAHQAAAFAEAEQAFAFAKACQAQADAHAEQAHAGAAAJQAAALgIAGQgIAHgPAAQgMAAgKgHg");
	this.shape_125.setTransform(330,23.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_126.setTransform(324.2,21.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAEgHAHgDQAHgEAGAAQAQAAAIAMQAIALAAAVIAAACQAAARgIALQgIALgQAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgGAEgDAIIAAAmQADAHAGAEQAGAEAIAAQAMAAAGgJQAGgKAAgNIAAgBQAAgQgGgKQgGgKgMAAQgIAAgGAEg");
	this.shape_127.setTransform(318.1,24.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgLAKgIQAKgEAPAAIATAAIAAgLQgBgIgFgGQgGgFgKAAQgIAAgGAFQgHAFAAAGIgIAAIAAAAQgBgJAJgIQAJgHAMAAQAOAAAJAHQAIAHAAANIABAwIABAJIgKAAIgBgIIAAgGQgGAHgHAEQgHAEgIAAQgNAAgGgHgAgPAGQgIAFAAAIQAAAGAFAGQAFAEAIAAQAIAAAIgFQAHgFAEgHIAAgSIgTAAQgKAAgIAGg");
	this.shape_128.setTransform(309.2,23.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQAFgJAEgDQAFgEAIAAIAGABIAAAIIgIAAQgJAAgDAFQgGAGgCAHIAAA4g");
	this.shape_129.setTransform(302.8,23.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgXAgQgKgNAAgRIAAgDQAAgRAKgMQALgMAMAAQAQAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAJQAHAKALAAQAJAAAFgCQAIgEADgDIAEAGQgEAFgIADQgHADgKAAQgOAAgLgLgAgPgaQgHAIgBALIAAABIAvAAIAAgDQAAgLgGgHQgGgHgMAAQgIAAgHAIg");
	this.shape_130.setTransform(295.6,23.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgCAvQgFgEAAgNIAAg1IgOAAIAAgHIAOAAIAAgWIAHAAIAAAWIATAAIAAAHIgTAAIAAA1QAAAIADAEQADADAFAAIAKgBIABAHIgGABIgGABQgJAAgDgGg");
	this.shape_131.setTransform(288.7,22.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgaAgQgKgNAAgSIAAgBQAAgRAKgNQALgMAPAAQARAAAJAMQALAMAAASIAAABQAAASgLANQgKALgQAAQgPAAgLgLgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAHAKAMAAQAMAAAIgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_132.setTransform(281.7,23.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_133.setTransform(275.5,21.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAPAAQAIAAAFADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgFAHgGADQgFAEgIAAQgPAAgJgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAJAAAGgEQAFgDAEgIIAAgmQgDgHgGgFQgGgEgJAAQgKAAgHAKg");
	this.shape_134.setTransform(269.1,21.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgLAKgIQALgEAOAAIATAAIAAgLQAAgIgGgGQgGgFgKAAQgJAAgFAFQgHAFAAAGIgIAAIgBAAQAAgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAwIACAJIgKAAIgBgOQgFAHgIAEQgHAEgIAAQgNAAgGgHgAgPAGQgIAGAAAHQAAAHAFAFQAEAEAJAAQAIAAAIgFQAHgFAEgHIAAgSIgTAAQgKAAgIAGg");
	this.shape_135.setTransform(260.5,23.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIAAAOIAAABQAEgIAGgEQAFgEAIAAIAGABIgBAIIgHAAQgJAAgEAFQgEAFgEAIIAAA4g");
	this.shape_136.setTransform(254.2,23.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgGARIAGgUIAAgNIAHAAIAAANIgHAUg");
	this.shape_137.setTransform(245.4,27.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgZAgQgLgMAAgTIAAgBQAAgSALgMQAJgMAQAAQAQAAALAMQAJANABARIAAABQgBASgJANQgLALgQAAQgQAAgJgLgAgTgYQgIAKABAOIAAABQgBAOAIAKQAHAKAMAAQANAAAHgKQAIgKAAgOIAAgBQAAgOgIgKQgHgKgNAAQgMAAgHAKg");
	this.shape_138.setTransform(239.6,23.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgMA6QgFgBgHgDIADgIIAKAEIALABQALAAAHgHQAGgHAAgNIAAgKQgEAGgHADQgGAEgHAAQgQAAgIgLQgIgLAAgRIAAgCQAAgVAIgLQAJgMAPAAQAHAAAGAEQAHADAEAIIABgOIAIAAIAABRQAAAQgJAKQgJAJgPAAIgMgBgAgRgoQgGALAAAPIAAACQAAANAGAJQAGAJALAAQAJAAAGgEQAGgFADgHIAAglQgDgHgGgFQgFgEgKAAQgLAAgGAKg");
	this.shape_139.setTransform(230.6,24.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgZAgQgLgNABgSIAAgBQgBgRALgNQAKgMAPAAQAQAAAKAMQALAMgBASIAAABQABATgLAMQgKALgQAAQgPAAgKgLgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAIAKALAAQAMAAAIgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_140.setTransform(221.9,23.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_141.setTransform(215.7,21.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgZAgQgLgNAAgSIAAgBQAAgRALgNQAKgMAPAAQARAAAKAMQAJAMABASIAAABQgBATgJAMQgLALgQAAQgPAAgKgLgAgTgYQgHAJAAAPIAAABQAAAOAHAKQAHAKAMAAQANAAAHgKQAIgKAAgOIAAgBQAAgOgIgKQgHgKgNAAQgMAAgHAKg");
	this.shape_142.setTransform(209.5,23.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgXAgQgKgNAAgSIAAgBQAAgSAKgMQAKgMAOAAQAPAAAJAIQAJAIgBAOIAAAAIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAJQgGAKAAAPIAAABQAAAPAGAJQAHAKALAAQAKAAAHgFQAHgFAAgKIAIAAIAAABQABALgKAIQgJAIgOAAQgPAAgJgLg");
	this.shape_143.setTransform(201,23.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAXAqIAAgxQgBgOgFgGQgFgGgLAAQgHAAgGAFQgHAFgCAJIAAA4IgJAAIAAhSIAHAAIACAPQAEgIAHgEQAGgEAIAAQANAAAHAIQAHAJABARIAAAxg");
	this.shape_144.setTransform(192.4,23.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgZAgQgLgNABgSIAAgBQgBgRALgNQAKgMAPAAQAQAAALAMQAKANgBARIAAABQABASgKANQgLALgQAAQgPAAgKgLgAgTgYQgIAKABAOIAAABQgBAOAIAKQAIAKALAAQAMAAAIgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_145.setTransform(183.6,23.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AAQBRQgOgJgIgVQgLgVAAgeIAAAAQAAgbALgXQAIgWAOgHIAAAAIACAFQgLAJgHAUQgIASAAAbIAAAAQAAAbAIATQAHAUALAJIgCAGg");
	this.shape_146.setTransform(177.1,23);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_147.setTransform(168.5,21.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgXAgQgJgNAAgSIAAgBQAAgTAJgLQAKgMAOAAQAPAAAIAIQAJAIAAAOIAAAAIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAJQgGALAAAOIAAABQAAAPAGAJQAHAKALAAQAKAAAHgFQAHgFAAgKIAIAAIAAABQAAALgJAIQgKAIgNAAQgOAAgKgLg");
	this.shape_148.setTransform(162.6,23.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_149.setTransform(156.7,21.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAPAAQAHAAAGADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgGAEgHAAQgPAAgJgLgAgQgGQgHAIAAAQIAAACQAAAOAHAKQAFAJALAAQAJAAAFgEQAHgEADgHIAAgmQgDgHgGgFQgGgEgJAAQgLAAgFAKg");
	this.shape_150.setTransform(150.3,21.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgDQAAgRALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAJQAIAKAKAAQAJAAAGgCQAHgEADgDIAEAGQgEAFgIADQgHADgKAAQgOAAgKgLgAgOgaQgHAHgCAMIABABIAvAAIAAgDQAAgLgHgHQgGgHgLAAQgJAAgGAIg");
	this.shape_151.setTransform(142,23.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgFgHQgGgGgKAAQgLAAgGAGQgFAHgCALIAAAzIgHAAIAAgvQAAgPgFgHQgHgGgJAAQgKAAgGAFQgFAFgDAIIAAA5IgJAAIAAhSIAIAAIABAOQAFgIAGgDQAHgEAJAAQAJAAAHAEQAFAEACALQAEgJAHgFQAHgFAKAAQANAAAIAJQAHAIAAATIAAAvg");
	this.shape_152.setTransform(130.8,23.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_153.setTransform(118.1,21.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQAEgIAFgEQAFgEAIAAIAGABIgBAIIgHAAQgJAAgDAFQgGAGgCAHIAAA4g");
	this.shape_154.setTransform(114.1,23.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgCAvQgFgEAAgNIAAg1IgOAAIAAgHIAOAAIAAgWIAHAAIAAAWIATAAIAAAHIgTAAIAAA1QAAAIADAEQADADAFAAIAKgBIABAHIgGABIgGABQgJAAgDgGg");
	this.shape_155.setTransform(108.2,22.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_156.setTransform(103.8,21.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgMAKgHQAKgEAPAAIATAAIAAgLQgBgIgFgGQgGgFgKAAQgIAAgGAFQgHAFAAAGIgIAAIAAAAQgBgJAJgIQAJgHAMAAQANAAAKAHQAIAHAAANIAAAwIACAJIgKAAIgBgIIAAgGQgGAHgHAEQgIAEgHAAQgNAAgHgHgAgPAGQgIAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAIgFQAHgFAEgHIAAgSIgTAAQgLAAgHAGg");
	this.shape_157.setTransform(97.7,23.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_158.setTransform(87.8,21.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_159.setTransform(84.2,21.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgMA6QgFgBgHgDIADgIIAKAEIALABQALAAAHgHQAGgHAAgNIAAgKQgFAHgGACQgGAEgHAAQgQAAgIgLQgIgLAAgRIAAgCQAAgVAIgLQAJgMAPAAQAHAAAGAEQAHADAEAIIABgOIAIAAIAABRQAAAQgJAKQgJAJgPAAIgMgBgAgRgoQgGAKAAAQIAAACQAAANAGAJQAGAJALAAQAJAAAGgEQAGgFADgHIAAglQgDgHgGgFQgFgEgKAAQgLAAgGAKg");
	this.shape_160.setTransform(77.8,24.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgDQAAgRALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAPAIAIQAIAKAKAAQAJAAAGgCQAHgEADgDIAEAGQgFAFgHADQgHADgKAAQgOAAgKgLgAgPgaQgHAIgBALIAAABIAvAAIAAgDQAAgKgGgIQgGgHgLAAQgJAAgHAIg");
	this.shape_161.setTransform(65.7,23.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_162.setTransform(59.7,21.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_163.setTransform(56.1,21.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgMA6QgFgBgHgDIADgIIAKAEIALABQALAAAHgHQAGgHAAgNIAAgKQgFAHgGACQgGAEgHAAQgQAAgIgLQgIgLAAgRIAAgCQAAgVAIgLQAJgMAPAAQAHAAAGAEQAHADAEAIIABgOIAIAAIAABRQAAAQgJAKQgJAJgPAAIgMgBgAgRgoQgGAKAAAQIAAACQAAANAGAJQAGAJALAAQAJAAAGgEQAGgFADgHIAAglQgDgHgGgFQgFgEgKAAQgLAAgGAKg");
	this.shape_164.setTransform(49.7,24.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgDQAAgRALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAJQAIAKAKAAQAJAAAGgCQAHgEADgDIAEAGQgFAFgHADQgHADgKAAQgOAAgKgLgAgPgaQgGAHgCAMIAAABIAwAAIAAgDQAAgKgHgIQgGgHgLAAQgIAAgIAIg");
	this.shape_165.setTransform(41.4,23.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgXAgQgKgNABgSIAAgBQgBgSAKgMQAKgMAOAAQAPAAAIAIQAKAIgBAOIAAAAIgIAAQAAgKgHgGQgHgGgKAAQgMAAgGAJQgGAKAAAPIAAABQAAAPAGAJQAGAKAMAAQAKAAAHgFQAHgFAAgKIAIAAIAAABQABALgKAIQgKAIgNAAQgPAAgJgLg");
	this.shape_166.setTransform(33.2,23.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgWAkQgJgIABgKIAAAAIAJAAQABAJAGAEQAGAEAIAAQAKAAAGgEQAGgFAAgGQAAgGgFgEQgFgEgMgDQgNgDgIgEQgHgFAAgKQAAgKAIgHQAIgGAMAAQAOAAAIAHQAIAGAAALIAAABIgJAAQAAgHgFgFQgGgFgKAAQgJAAgEAFQgFADAAAHQAAAFAEAEQAFAFAKACQAQADAHAEQAHAGAAAJQAAALgIAGQgIAHgPAAQgMAAgKgHg");
	this.shape_167.setTransform(25,23.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgaAgQgJgMgBgTIAAgBQABgSAJgMQAKgMAQAAQAQAAAKAMQALANAAARIAAABQAAASgLANQgKALgQAAQgQAAgKgLgAgTgYQgIAKAAAOIAAABQAAAOAIAKQAHAKAMAAQANAAAHgKQAIgKAAgOIAAgBQAAgOgIgKQgHgKgNAAQgMAAgHAKg");
	this.shape_168.setTransform(12.7,23.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgWAkQgIgIAAgKIAAAAIAJAAQABAJAGAEQAGAEAIAAQAKAAAGgEQAGgFAAgGQAAgGgFgEQgEgEgNgDQgNgDgHgEQgIgFAAgKQAAgJAIgIQAIgGAMAAQAOAAAIAHQAJAHgBAKIAAABIgIAAQAAgGgGgGQgGgFgKAAQgIAAgFAFQgFADAAAHQAAAFAEAEQAFAFAKACQAQADAHAEQAHAGAAAJQAAALgIAGQgIAHgPAAQgMAAgKgHg");
	this.shape_169.setTransform(4.2,23.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgLAKgIQAKgEAPAAIASAAIAAgLQABgIgGgGQgGgFgKAAQgIAAgGAFQgHAFAAAGIgJAAIAAAAQAAgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAwIACAJIgKAAIgBgIIgBgGQgFAHgHAEQgHAEgIAAQgNAAgGgHgAgPAGQgIAFAAAIQAAAGAFAGQAEAEAJAAQAIAAAHgFQAJgFACgHIAAgSIgSAAQgKAAgIAGg");
	this.shape_170.setTransform(-4.2,23.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgXAgQgKgNAAgSIAAgBQAAgSAKgMQAKgMAOAAQAPAAAJAIQAIAIABAOIgBAAIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAJQgGAKAAAPIAAABQAAAPAGAJQAHAKALAAQAKAAAHgFQAHgFAAgKIAIAAIABABQAAALgKAIQgJAIgOAAQgOAAgKgLg");
	this.shape_171.setTransform(-12.4,23.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_172.setTransform(-22.2,21.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_173.setTransform(-25.8,21.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgaAgQgKgNABgSIAAgBQgBgRAKgNQALgMAPAAQARAAAJAMQALAMgBASIAAABQABATgLAMQgKALgQAAQgPAAgLgLgAgTgYQgHAKAAAOIAAABQAAANAHALQAIAKALAAQAMAAAIgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_174.setTransform(-35.9,23.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADAEQADADAFAAIAJgBIABAHIgFABIgHABQgIAAgEgGg");
	this.shape_175.setTransform(-42.9,22.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAKgEAPAAIASAAIAAgLQAAgIgFgGQgGgFgKAAQgIAAgGAFQgHAFAAAGIgJAAIAAAAQAAgJAJgIQAJgHAMAAQANAAAJAHQAJAHAAANIAAAwIACAJIgKAAIgBgIIgBgGQgFAHgHAEQgIAEgHAAQgNAAgGgHgAgPAGQgIAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAIgFQAHgFADgHIAAgSIgSAAQgKAAgIAGg");
	this.shape_176.setTransform(-49.8,23.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgDQAAgRALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQgBAOAIAJQAIAKAKAAQAJAAAFgCQAIgEADgDIAEAGQgEAFgIADQgIADgJAAQgOAAgKgLgAgOgaQgIAHgBAMIABABIAuAAIAAgDQAAgLgGgHQgGgHgLAAQgJAAgGAIg");
	this.shape_177.setTransform(-58,23.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQAEgIAFgEQAFgEAIAAIAGABIgBAIIgHAAQgJAAgDAFQgGAGgCAHIAAA4g");
	this.shape_178.setTransform(-64.2,23.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgXAgQgJgNAAgSIAAgBQAAgTAJgLQAKgMAOAAQAPAAAIAIQAJAIAAAOIAAAAIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAJQgGAKAAAPIAAABQAAAPAGAJQAHAKALAAQAKAAAHgFQAHgFAAgKIAIAAIAAABQAAALgJAIQgKAIgNAAQgOAAgKgLg");
	this.shape_179.setTransform(-71.5,23.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgLAKgIQAKgEAPAAIATAAIAAgLQAAgIgGgGQgFgFgLAAQgJAAgFAFQgHAFAAAGIgIAAIAAAAQgBgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAwIACAJIgKAAIgBgOQgFAHgIAEQgHAEgIAAQgNAAgGgHgAgPAGQgIAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAIgFQAHgFAEgHIAAgSIgTAAQgKAAgIAGg");
	this.shape_180.setTransform(-83.9,23.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AAWA8IAAg0QAAgLgFgHQgFgFgKAAQgIAAgGAEQgGAGgDAGIAAA7IgKAAIAAh3IAKAAIAAA0QADgHAIgGQAHgDAHAAQAOgBAGAJQAIAIAAAPIAAA0g");
	this.shape_181.setTransform(-92.5,21.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgDQAAgRALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAJQAIAKAKAAQAJAAAGgCQAHgEADgDIAEAGQgFAFgHADQgHADgKAAQgOAAgKgLgAgPgaQgGAHgCAMIAAABIAwAAIAAgDQAAgKgHgIQgGgHgLAAQgIAAgIAIg");
	this.shape_182.setTransform(-104.8,23.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AAWA8IAAg0QAAgMgFgGQgGgFgJAAQgIAAgGAEQgHAGgDAGIAAA7IgJAAIAAh3IAJAAIAAA0QAFgIAHgFQAHgDAHAAQANgBAIAJQAGAIABAPIAAA0g");
	this.shape_183.setTransform(-113.3,21.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgXAgQgJgNAAgSIAAgBQAAgTAJgLQAKgMAOAAQAPAAAIAIQAJAIAAAOIAAAAIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAJQgGAKAAAPIAAABQAAAPAGAJQAHAKALAAQAKAAAHgFQAHgFAAgKIAIAAIAAABQAAALgJAIQgKAIgNAAQgOAAgKgLg");
	this.shape_184.setTransform(-121.9,23.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgaAgQgKgMAAgTIAAgBQAAgSAKgMQALgMAPAAQAQAAAKAMQAKANAAARIAAABQAAASgKANQgKALgQAAQgPAAgLgLgAgTgYQgHAKgBAOIAAABQABAOAHAKQAHAKAMAAQAMAAAIgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_185.setTransform(-134.3,23.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgXAgQgJgMAAgTIAAgBQAAgTAJgLQAJgMAPAAQAPAAAIAIQAKAIgBAOIAAAAIgIAAQAAgKgHgGQgGgGgLAAQgLAAgGAJQgHAKAAAPIAAABQAAAPAGAJQAHAKAMAAQAJAAAHgFQAHgFAAgKIAIAAIAAABQABALgKAIQgKAIgMAAQgQAAgJgLg");
	this.shape_186.setTransform(-142.8,23.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_187.setTransform(-148.7,21.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAPAAQAHAAAGADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgFAHgGADQgGAEgHAAQgPAAgJgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAJAAAGgEQAFgEAEgHIAAgmQgDgHgGgFQgFgEgKAAQgLAAgGAKg");
	this.shape_188.setTransform(-155.2,21.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgDQAAgQAKgNQALgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAJQAHAKALAAQAJAAAFgCQAIgEADgDIAEAGQgEAFgIADQgHADgKAAQgOAAgKgLgAgPgaQgHAIgBALIAAABIAvAAIAAgDQAAgLgGgHQgGgHgLAAQgJAAgHAIg");
	this.shape_189.setTransform(-163.4,23.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AAxAqIAAgvQAAgQgGgGQgFgGgKAAQgLAAgGAGQgFAHgCALIAAAzIgHAAIAAgvQAAgQgGgGQgFgGgKAAQgKAAgGAFQgGAGgCAHIAAA5IgJAAIAAhSIAIAAIABAOQAEgIAHgDQAHgEAJAAQAKAAAGAEQAFAEACALQAEgJAHgFQAHgFAKAAQAOAAAHAJQAHAJAAASIAAAvg");
	this.shape_190.setTransform(-174.6,23.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_191.setTransform(-187.3,21.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_192.setTransform(-190.9,21.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgKAsIAAgUIAVAAIAAAUgAgKgXIAAgUIAVAAIAAAUg");
	this.shape_193.setTransform(-198.8,23.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgZAgQgKgNAAgRIAAgCQAAgSAKgMQAKgMAPAAQASAAAJAKQAJAKAAASIAAAKIgwAAIAAAAQAAAJAGAGQAEAEAHAAQAIABAEgCIALgFIAGAOQgGAFgHADQgJACgKAAQgPAAgMgLgAgHgUQgEAGgBAHIAAAAIAaAAIAAgCQAAgGgDgFQgEgEgHgBQgEAAgDAFg");
	this.shape_194.setTransform(-205.2,23.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AANAqIAAgyQAAgJgDgDQgDgEgHAAQgDAAgDACQgEACgDADIAAA7IgWAAIAAhSIAVAAIABAMQAFgGAFgEQAEgDAIAAQAOAAAGAIQAHAHAAASIAAAyg");
	this.shape_195.setTransform(-214,23.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgcAfQgKgMAAgTIAAAAQAAgSAKgMQALgMARAAQASAAAKAMQALAMAAASIAAAAQAAATgLAMQgKAMgSAAQgRAAgLgMgAgLgSQgFAHAAALIAAAAQAAANAFAFQADAIAIgBQAIABAFgIQADgGAAgMIAAAAQAAgKgEgIQgEgGgIgBQgHABgEAGg");
	this.shape_196.setTransform(-222.9,23.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgKA8IAAhSIAVAAIAABSgAgKgqIAAgRIAVAAIAAARg");
	this.shape_197.setTransform(-229.6,21.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgZAiQgJgHAAgMIAVAAQAAAHAEACQAFADAEAAQAGAAAEgCQADgCAAgFQAAgEgDgCQgEgCgIgDQgPgDgHgEQgIgGAAgKQAAgLAJgIQAJgHAOAAQAQAAAJAHQAKAIgBALIAAABIgWAAQAAgFgDgDQgDgDgGgBQgDAAgEADQgDADAAAEQAAAEADADQAEACAIABQAQAEAHAEQAHAGAAAKQAAALgKAIQgKAHgPAAQgPAAgKgJg");
	this.shape_198.setTransform(-235.8,23.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgKA8IAAhSIAVAAIAABSgAgKgqIAAgRIAVAAIAAARg");
	this.shape_199.setTransform(-242,21.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgJAqIgdhSIAYAAIAOAyIAAAIIAPg6IAYAAIgdBSg");
	this.shape_200.setTransform(-248.2,23.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgKA8IAAhSIAVAAIAABSgAgKgqIAAgRIAVAAIAAARg");
	this.shape_201.setTransform(-254.3,21.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgcAyQgIgNAAgRIAAgCQAAgSAIgMQAJgMAPAAQAEAAAGACQAFADAEAFIAAguIAWAAIAAB3IgTAAIgCgKQgEAGgFADQgFADgGAAQgQAAgIgLgAgKAAQgEAHAAALIAAACQAAALAEAGQAEAGAGAAQAFAAAEgCQADgBADgEIAAgkQgCgCgEgDQgEgCgFAAQgGAAgEAHg");
	this.shape_202.setTransform(-261.1,21.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AANAqIAAgyQAAgIgDgEQgEgEgGAAQgDAAgDACQgFACgBADIAAA7IgXAAIAAhSIAVAAIABAMQAGgHAEgDQAEgDAIAAQANAAAHAIQAHAIAAARIAAAyg");
	this.shape_203.setTransform(-269.9,23.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgcAfQgKgMAAgTIAAAAQAAgSAKgMQALgMARAAQASAAALAMQAKAMAAASIAAAAQAAATgKAMQgLAMgSAAQgRAAgLgMgAgLgSQgFAIAAAKIAAAAQAAAMAFAGQADAIAIgBQAJABADgIQAEgFAAgNIAAAAQAAgLgEgHQgEgGgIgBQgHABgEAGg");
	this.shape_204.setTransform(-278.9,23.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgZAfQgKgLAAgUIAAAAQAAgRAKgNQAKgMARAAQAQAAAJAJQAJAIAAAPIAAAAIgVAAQAAgGgDgEQgEgEgGgBQgHABgEAGQgEAIAAAKIAAAAQAAALAEAIQAEAGAHAAQAGAAAEgDQADgDAAgGIAVAAQAAAOgKAHQgKAJgOAAQgRAAgKgMg");
	this.shape_205.setTransform(-287.4,23.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgYAgQgLgNAAgRIAAgCQAAgSAKgMQALgMAPAAQAQAAAKAKQAJALAAARIAAAKIgwAAIAAAAQABAJAFAGQAFAEAGAAQAIABAFgCIAKgFIAHAOQgGAFgIADQgJACgJAAQgRAAgKgLgAgHgUQgEAGgBAHIABAAIAZAAIAAgCQAAgHgDgEQgDgEgHgBQgEAAgEAFg");
	this.shape_206.setTransform(-299.7,23.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AAlAqIAAgxQAAgKgEgDQgDgEgGAAQgEAAgEACQgDADgDADIAAA6IgUAAIAAgxQAAgJgDgEQgDgEgGAAIgIACIgGAFIAAA7IgXAAIAAhSIAWAAIABALQADgGAGgDQAGgDAJAAQAIAAAEADQAFAEADAHQADgGAHgEQAGgEAJAAQAMAAAHAIQAIAKAAAQIAAAxg");
	this.shape_207.setTransform(-314.7,23.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgdAkQgIgGAAgMQAAgMAKgGQAJgGASAAIALAAIAAgHQAAgGgDgDQgDgEgFAAQgEAAgEADQgDADAAAEIgWAAIAAAAQAAgKAKgJQAKgHANAAQAPAAAKAHQAJAJAAAOIABArIADALIgXAAIgCgHIgBgGQgEAGgGAEQgDAEgIAAQgOAAgGgHgAgKAIQgEADAAAGQAAAEADADQADADAEgBQAEAAAFgCQAFgEABgEIAAgLIgLAAQgGAAgEADg");
	this.shape_208.setTransform(-325.9,23.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgZAgQgKgNAAgRIAAgCQAAgTAKgLQAKgMAPAAQASAAAJAKQAJAKAAASIAAAKIgwAAIAAAAQAAAIAFAHQAFAEAHAAQAIABAEgCIALgFIAGAOQgGAFgHADQgJACgKAAQgPAAgMgLgAgIgUQgDAGgBAHIAAAAIAaAAIAAgCQAAgHgDgEQgEgEgHgBQgEAAgEAFg");
	this.shape_209.setTransform(-334.3,23.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgFAuQgGgGAAgOIAAgpIgNAAIAAgQIANAAIAAgUIAUAAIAAAUIAOAAIAAAQIgOAAIAAApQAAAFACABQACACAEABIADAAIADgBIACAQIgHACIgHABQgLAAgFgHg");
	this.shape_210.setTransform(-341.5,22.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgKA8IAAh3IAVAAIAAB3g");
	this.shape_211.setTransform(-350.2,21.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgZAgQgKgNAAgRIAAgCQAAgSAKgMQAKgMAPAAQASAAAJAKQAJAKAAASIAAAKIgwAAIAAAAQAAAIAFAHQAFAEAHAAQAIABAEgCIALgFIAGAOQgGAFgHADQgJACgKAAQgPAAgMgLgAgHgUQgEAGgBAHIAAAAIAaAAIAAgCQAAgGgDgFQgEgEgHgBQgEAAgDAFg");
	this.shape_212.setTransform(-356.4,23.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgcAyQgIgNAAgRIAAgCQAAgSAIgMQAJgMAPAAQAEAAAGACQAFADAEAFIAAguIAWAAIAAB3IgTAAIgCgKQgEAGgFADQgFADgGAAQgQAAgIgLgAgKAAQgEAHAAALIAAACQAAAJAEAIQAEAGAGAAQAFAAAEgCQADgBADgEIAAgkQgCgCgEgDQgEgCgFAAQgGAAgEAHg");
	this.shape_213.setTransform(-365.4,21.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgYAgQgLgMAAgSIAAgCQAAgSAKgMQAKgMAQAAQAQAAAKAKQAJALAAARIAAAKIgwAAIAAAAQABAJAFAGQAFAEAGAAQAIABAFgCIAKgFIAHAOQgGAFgIADQgJACgJAAQgRAAgKgLgAgHgUQgEAGgBAHIABAAIAZAAIAAgCQAAgHgDgEQgDgEgHgBQgEAAgEAFg");
	this.shape_214.setTransform(-377.8,23.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AANAqIAAgyQAAgIgDgEQgEgEgGAAQgDAAgEACQgDACgDADIAAA7IgWAAIAAhSIAVAAIABAMQAEgGAGgEQAEgDAIAAQANAAAHAIQAHAIAAARIAAAyg");
	this.shape_215.setTransform(-386.5,23.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgbAfQgLgMAAgTIAAAAQAAgSALgMQAKgMARAAQASAAAKAMQALAMAAASIAAAAQAAATgLAMQgKAMgSAAQgRAAgKgMgAgLgSQgFAIAAAKIAAAAQAAAMAFAGQADAIAIgBQAJABADgIQAFgGAAgMIAAAAQAAgKgFgIQgEgGgIgBQgHABgEAGg");
	this.shape_216.setTransform(-395.5,23.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgKA8IAAhSIAVAAIAABSgAgKgqIAAgRIAVAAIAAARg");
	this.shape_217.setTransform(-402.1,21.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgiAqIAAgOIAngzIglAAIAAgRIBBAAIAAAMIgmA0IAnAAIAAASg");
	this.shape_218.setTransform(-408.2,23.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgKA8IAAhSIAVAAIAABSgAgKgqIAAgRIAVAAIAAARg");
	this.shape_219.setTransform(-414.4,21.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AAOAqIAAgyQAAgJgEgDQgDgEgHAAQgDAAgEACQgDACgCADIAAA7IgXAAIAAhSIAVAAIABAMQAFgGAGgEQADgDAIAAQANAAAHAIQAHAHAAASIAAAyg");
	this.shape_220.setTransform(-421,23.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgKA8IAAhSIAVAAIAABSgAgKgqIAAgRIAVAAIAAARg");
	this.shape_221.setTransform(-427.6,21.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgOA9IAAhCIgNAAIAAgQIANAAIAAgKQAAgOAJgHQAGgIAOAAIANACIgDARIgHgBQgGAAgCADQgDADAAAFIAAAKIAQAAIAAAQIgQAAIAABCg");
	this.shape_222.setTransform(-432.4,21.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgYAgQgLgMAAgSIAAgCQAAgSAKgMQAKgMAQAAQARAAAJAKQAJAKAAASIAAAKIgwAAIAAAAQABAJAFAGQAEAEAHAAQAIABAFgCIAKgFIAHAOQgGAFgIADQgJACgJAAQgRAAgKgLgAgHgUQgEAGgBAHIAAAAIAaAAIAAgCQAAgHgDgEQgDgEgHgBQgEAAgEAFg");
	this.shape_223.setTransform(-439.6,23.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgqA4IAAhvIAnAAQATAAANANQAOANAAAVIAAARQAAAUgOAOQgNANgTAAgAgTAmIAPAAQAKAAAHgHQAHgIAAgOIAAgRQAAgOgHgHQgHgJgKABIgPAAg");
	this.shape_224.setTransform(-448.9,21.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#D22040").s().p("AgzBIIADgTIAxgxIAQgSQAFgHABgHQACgKgEgFQgDgGgIAAQgIAAgEAHQgGAHgBALIgcAAIAAgBQADgUAOgNQAPgNATAAQAUAAAKAMQAKAMgDASQgCANgIALQgHAIgTATIgZAbIAAABIA0AAIgDAWg");
	this.shape_225.setTransform(-403.8,-17.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#D22040").s().p("AgjAnQgLgNAEgYIAAgCQAEgZAOgOQAPgOASAAQAUAAAJAMQAJAOgDAWIgDANIg4AAQgBALAFAHQAFAHAHgBQAGAAAIgCIAOgGIAFASQgHAFgKAEQgMADgJABQgVgBgKgPgAgEgZQgFAGgCAJIAAABIAcAAIAAgDQACgIgDgGQgDgFgHgBQgGABgEAGg");
	this.shape_226.setTransform(-418.7,-15.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#D22040").s().p("AgkAsQgKgLADgNIAAgBIAaAAQgBAIAEAEQAEAEAHAAQAFAAAEgEQAEgCABgGQABgFgEgDQgEgDgIgDQgQgDgIgGQgJgIADgNQACgOAMgJQANgKAQABQARAAALAKQAKAIgCAPIgBAAIgbAAQABgGgDgEQgDgEgGABQgGAAgCACQgEAEgBAFQgBAEADAEQAFADAIADQASAFAHAEQAHAIgCANQgCAPgNAJQgMAIgSABQgTgBgKgKg");
	this.shape_227.setTransform(-428.7,-15.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#D22040").s().p("AgoAuQgIgKADgOQADgPANgHQAMgIAUAAIANAAIABgIQACgIgDgFQgCgDgHAAQgGAAgCADQgEADgBAGIgbAAIAAgBQACgOAOgJQANgKARABQARAAAJAKQAKAJgDASIgJAqIgCANIABAOIgcAAIgBgNQgHAHgEADQgHAFgJAAQgNgBgHgIgAgKALQgFAEgCAGQgBAGADADQACADAFAAQAGAAACgDQAFgCAEgEIAEgSIgNAAQgGAAgEAFg");
	this.shape_228.setTransform(-438.7,-15.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#D22040").s().p("Ag7BHIAdiNIBaAAIgFAWIg+AAIgHAoIA0AAIgEATIg1AAIgMA8g");
	this.shape_229.setTransform(-447.8,-17.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#0C5EA5").ss(6.2).p("EBHPASwMiOdAAAQhtAAhOhNQhNhNAAhtIAA9QQAAhtBNhOQBOhNBtAAMCOdAAAQBtAABOBNQBNBOAABtIAAdQQAABthNBNQhOBNhtAAg");

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("EhHOASwQhtAAhOhNQhNhNABhuIAA9QQgBhsBNhOQBOhNBtAAMCOdAAAQBtAABOBNQBMBOAABsIAAdQQAABuhMBNQhOBNhtAAg");

	this.addChild(this.shape_231,this.shape_230,this.shape_229,this.shape_228,this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223,this.shape_222,this.shape_221,this.shape_220,this.shape_219,this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-485.4,-123.1,970.8,246.3);


(lib.popB1 = function() {
	this.initialize();

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5EA5").s().p("Ag4BUQgXgaAAgnIAAgkQAAgoAXgaQAXgZAiAAQAkAAAWATQAVATgBAgIAAABIgcAAQAAgXgNgNQgNgNgYAAQgWAAgOAUQgPATAAAdIAAAkQAAAeAPATQAOATAWAAQAYAAANgMQANgNAAgXIAcAAIAAABQABAegWAUQgWAUgjAAQgiAAgXgZg");
	this.shape.setTransform(-174.9,-107.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5EA5").s().p("Ag4BUQgXgaAAgnIAAgkQAAgoAXgaQAXgZAiAAQAkAAAWATQAVATgBAgIAAABIgcAAQAAgXgNgNQgNgNgYAAQgWAAgOAUQgPATAAAdIAAAkQAAAeAPATQAOATAWAAQAYAAANgMQANgNAAgXIAcAAIAAABQABAegWAUQgWAUgjAAQgiAAgXgZg");
	this.shape_1.setTransform(-193.9,-107.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5EA5").s().p("Ag9BTQgXgZAAgnIAAgkQAAgoAXgZQAYgaAlAAQAkAAAZAaQAYAZAAAoIAAAkQAAAngYAZQgZAagkAAQglAAgYgagAgphCQgPATAAAdIAAAlQAAAdAPATQAPATAaAAQAZAAAPgTQAQgTAAgdIAAglQAAgdgQgTQgPgTgZAAQgaAAgPATg");
	this.shape_2.setTransform(-213.9,-107.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5EA5").s().p("AAzBqIhkijIgBAAIAACjIgdAAIAAjTIAdAAIBkCiIABAAIAAiiIAdAAIAADTg");
	this.shape_3.setTransform(-234.8,-107.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5EA5").s().p("Ag0BFQgNgMAAgXQAAgWASgMQATgMAdAAIAgAAIAAgQQAAgOgJgIQgIgIgQAAQgMAAgIAHQgJAHAAAKIgcAAIAAgBQgBgRARgOQARgPAaAAQAbAAAQAOQARAOAAAZIAABbIAEAQIgeAAIgDgYQgJALgMAIQgMAIgOAAQgYAAgOgNgAgaAOQgKAJAAAMQAAAKAHAGQAGAGANAAQAOAAAMgIQANgIAEgKIAAgaIghAAQgPAAgLAJg");
	this.shape_4.setTransform(-261.3,-104.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5EA5").s().p("AAjBQIAAhhQAAgVgJgJQgIgJgQAAQgKAAgLAGQgJAGgGALIAABxIgdAAIAAicIAaAAIACAXQAIgNAMgGQALgHAOAAQAaAAAOAPQAOAPAAAfIAABig");
	this.shape_5.setTransform(-278,-104.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5EA5").s().p("AgzA7QgSgXgBgjIAAgBQABgjASgXQAUgXAfAAQAgAAAUAXQASAXABAjIAAABQgBAjgSAXQgUAXggAAQgfAAgUgXgAgegqQgLARAAAZIAAABQAAAZALARQAKAQAUAAQAUAAALgQQALgRAAgZIAAgBQAAgZgLgRQgLgQgUAAQgTAAgLAQg");
	this.shape_6.setTransform(-295,-104.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5EA5").s().p("AgNByIAAidIAbAAIAACdgAgNhTIAAgeIAbAAIAAAeg");
	this.shape_7.setTransform(-307.3,-108.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C5EA5").s().p("Ag9BPIAAgVIBThxIhSAAIAAgXIB1AAIAAAUIhUByIBaAAIAAAXg");
	this.shape_8.setTransform(-318.5,-104.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0C5EA5").s().p("AAjBQIAAhhQAAgVgJgJQgIgJgRAAQgKAAgKAGQgJAGgGALIAABxIgdAAIAAicIAaAAIACAXQAIgNAMgGQALgHAOAAQAaAAAOAPQAOAPAAAfIAABig");
	this.shape_9.setTransform(-334.7,-104.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0C5EA5").s().p("AgxBAQgOgRAAgjIAAhbIAdAAIAABbQAAAaAIAJQAHAKAQAAQANAAAKgGQAKgHAGgLIAAhwIAcAAIAACcIgaAAIgBgXQgIANgMAGQgMAHgNAAQgaAAgPgQg");
	this.shape_10.setTransform(-351.8,-104.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0C5EA5").s().p("AgWBzIAAiHIgYAAIAAgVIAYAAIAAgUQAAgZANgPQAMgNAXAAIAKAAIAMADIgEAWIgGgBIgIgBQgMAAgHAIQgGAHAAAPIAAAUIAhAAIAAAVIghAAIAACHg");
	this.shape_11.setTransform(-365,-108.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0C5EA5").s().p("AgtA8QgUgXAAgjIAAgEQAAgiAUgWQAVgXAZAAQAgAAARAUQAQASAAAhIAAAQIhlAAIAAABQABAYAKANQALAPASAAQAQAAAKgEQAKgEAJgIIAMATQgJAIgOAGQgPAGgTAAQgfAAgTgWgAgWguQgKANgCASIAAAAIBHAAIAAgDQAAgRgJgMQgJgLgSAAQgMAAgLAMg");
	this.shape_12.setTransform(-385.9,-104.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0C5EA5").s().p("ABQBQIAAhdQABgYgJgJQgHgKgRAAQgNAAgKAKQgKALgBAPIAABkIgbAAIAAhdQAAgWgJgLQgIgKgPAAQgNAAgJAGQgIAFgFAKIAABzIgcAAIAAicIAZAAIACAUQAIgKAMgHQAMgGAPAAQAQAAALAHQAJAGAHAQQAHgOAMgHQANgIAQAAQAZAAAOAQQAOAQgBAiIAABdg");
	this.shape_13.setTransform(-407.1,-104.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0C5EA5").s().p("AgyA7QgUgXABgjIAAgBQgBgjAUgXQATgXAfAAQAgAAATAXQAUAXgBAjIAAABQABAjgUAXQgTAXggAAQgfAAgTgXgAgegqQgKARAAAZIAAABQAAAZAKARQAKAQAUAAQAVAAAKgQQAKgRAAgZIAAgBQAAgZgKgRQgLgQgUAAQgTAAgLAQg");
	this.shape_14.setTransform(-428.7,-104.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0C5EA5").s().p("Ag4BUQgXgaAAgnIAAgkQAAgoAXgaQAXgZAiAAQAkAAAWATQAVATgBAgIAAABIgcAAQAAgXgNgNQgNgNgYAAQgWAAgOAUQgPAUAAAcIAAAkQAAAdAPAUQAOATAWAAQAZAAAMgMQANgNAAgXIAcAAIAAABQABAegWAUQgWAUgjAAQgiAAgXgZg");
	this.shape_15.setTransform(-446.5,-107.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_16.setTransform(143.1,63.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRALgMQAKgMANAAQAPAAAJAKQAJAJAAARIAAAGIg5AAIAAACQAAAOAHAJQAIAKAKAAQAIAAAHgDQAFgBAFgGIAEAHQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgbQgGAJgCAMIAwAAIAAgDQAAgKgHgIQgGgIgLAAQgIABgIAHg");
	this.shape_17.setTransform(137.2,60.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAWA8IAAg0QAAgMgFgGQgGgGgJAAQgHAAgHAFQgHAFgDAGIAAA8IgJAAIAAh3IAJAAIAAAzQAFgHAHgEQAGgFAIAAQANAAAIAIQAGAJAAAPIAAA0g");
	this.shape_18.setTransform(128.7,58.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgCQAAgRAJgMQAJgMAPAAQAPAAAIAIQAJAJAAANIAAAAIgIAAQAAgKgHgHQgHgFgKgBQgLAAgHALQgGAJAAAOIAAACQAAAPAGAJQAHAKALAAQAJAAAIgFQAHgGAAgJIAIAAIAAAAQAAAMgJAIQgKAIgNAAQgOAAgKgMg");
	this.shape_19.setTransform(120.1,60.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_20.setTransform(114.2,58.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADADQADAEAEAAIAKgBIABAHIgFABIgHABQgJAAgDgFg");
	this.shape_21.setTransform(109.7,59.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAuQAAAQAFAHQAFAGAKAAQAJAAAFgFQAHgEACgJIAAg5IAKAAIAABSIgJAAIAAgOQgEAHgHAEQgHAEgHAAQgOAAgHgJg");
	this.shape_22.setTransform(102.7,60.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRALgMQAKgMANAAQAPAAAJAKQAJAJAAARIAAAGIg6AAIAAACQAAAOAIAJQAIAKAKAAQAHAAAIgDQAFgBAFgGIAEAHQgEAEgIAEQgHADgKAAQgOAAgKgMgAgPgbQgHAKgBALIAvAAIAAgDQAAgKgGgIQgGgIgLAAQgJABgHAHg");
	this.shape_23.setTransform(94.2,60.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAEgHAHgEQAGgDAHAAQAQAAAIAMQAIALAAAVIAAABQAAASgIAKQgJAMgPAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgGAFgDAHIAAAmQADAHAGAEQAHAEAHAAQAMAAAGgJQAGgKAAgNIAAgBQAAgQgGgKQgGgLgMAAQgIAAgGAFg");
	this.shape_24.setTransform(85.8,61.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgMAKgGQAJgGAQABIATAAIAAgLQAAgJgGgFQgHgGgJAAQgHABgIAEQgGAGAAAGIgIAAIAAAAQgBgKAJgHQAKgHALAAQAPAAAIAHQAIAHAAANIABAwIABAIIgJAAIgCgHIAAgGQgFAGgIAFQgHAEgIAAQgMAAgHgGgAgPAGQgIAFAAAIQAAAHAFAFQAFADAIAAQAIABAHgFQAIgFAEgHIAAgRIgTAAQgKgBgIAGg");
	this.shape_25.setTransform(76.9,60.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQAEgIAFgEQAGgEAHAAIAEAAIADAAIgBAJIgHAAQgKAAgDAFQgGAFgCAIIAAA4g");
	this.shape_26.setTransform(70.5,60.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgXAfQgKgMAAgRIAAgDQAAgSAKgLQALgMAMAAQAQAAAJAKQAJAJAAARIAAAGIg6AAIAAACQAAAOAIAJQAHAKALAAQAIAAAGgDQAHgBAEgGIAEAHQgEAFgIADQgHADgKAAQgOAAgLgMgAgPgbQgHAKgBALIAvAAIAAgDQAAgLgGgHQgGgIgMAAQgIABgHAHg");
	this.shape_27.setTransform(63.3,60.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAHACAEQAEAEAEAAIAKgBIABAHIgGABIgGABQgJAAgDgFg");
	this.shape_28.setTransform(56.4,59.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRALgMQAKgMANAAQAPAAAJAKQAJAJAAARIAAAGIg5AAIAAACQAAAOAHAJQAIAKAKAAQAIAAAHgDQAFgBAFgGIAEAHQgEAFgIADQgHADgKAAQgOAAgKgMgAgOgbQgHAIgCANIAwAAIAAgDQAAgLgHgHQgGgIgLAAQgIABgHAHg");
	this.shape_29.setTransform(45.9,60.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgCAwQgFgHAAgLIAAg1IgPAAIAAgHIAPAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIACADQAEAEAEAAIAKgBIABAHIgFABIgHABQgIAAgEgFg");
	this.shape_30.setTransform(39.1,59.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgWAjQgIgGAAgLIAJAAQAAAJAHAEQAHAEAHAAQAKAAAGgEQAGgFAAgGQAAgGgFgEQgEgFgNgCQgPgDgFgEQgIgGAAgKQAAgJAJgHQAHgGAMAAQAPAAAHAHQAJAHgBAKIAAABIgIAAQAAgHgGgFQgHgGgJAAQgIAAgFAFQgFAFAAAFQAAAGAEAEQAEAEAMADQANACAJAFQAHAFAAALQAAAKgIAHQgJAGgOAAQgNAAgJgIg");
	this.shape_31.setTransform(32.4,60.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgaAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQAQAAAKAMQALALAAATIAAABQAAASgLAMQgJAMgRAAQgPAAgLgMgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAHAKAMAAQAMAAAIgKQAHgKAAgOIAAgBQAAgOgHgKQgIgLgMAAQgMAAgHALg");
	this.shape_32.setTransform(24,60.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AggA6IAAhyIAHAAIACANQADgHAHgEQAHgDAHAAQAPAAAJAMQAIAMAAAUIAAABQAAARgIALQgJAMgPAAQgHAAgGgEQgGgCgFgHIAAArgAgOgtQgGAEgDAIIAAAmQACAHAHAEQAHAEAHAAQALAAAHgJQAGgKAAgNIAAgBQAAgRgHgJQgGgLgLAAQgIAAgGAFg");
	this.shape_33.setTransform(15.4,61.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgZAfQgLgLABgTIAAgBQgBgTALgLQAKgMAPAAQAQAAALAMQAKAMgBASIAAABQABASgKAMQgLAMgQAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAIAKALAAQAMAAAIgKQAHgJAAgPIAAgBQAAgPgHgJQgIgLgMAAQgLAAgIALg");
	this.shape_34.setTransform(6.4,60.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQADgHAGgFQAFgEAIAAIADAAIADAAIgBAJIgHAAQgJAAgDAFQgFAEgDAJIAAA4g");
	this.shape_35.setTransform(-0.1,60.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAEgHAHgEQAFgDAIAAQAQAAAIAMQAIALAAAVIAAABQAAASgIAKQgJAMgPAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgGAEgDAIIAAAmQADAHAGAEQAHAEAHAAQAMAAAGgJQAGgLAAgMIAAgBQAAgQgGgKQgHgLgLAAQgIAAgGAFg");
	this.shape_36.setTransform(-7.6,61.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRALgMQAKgMANAAQAQAAAIAKQAJAJAAARIAAAGIg5AAIAAACQAAAOAHAJQAIAKAKAAQAIAAAHgDQAFgBAFgGIAEAHQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgbQgGAJgCAMIAwAAIAAgDQAAgKgHgIQgGgIgLAAQgIABgIAHg");
	this.shape_37.setTransform(-20.1,60.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_38.setTransform(-26,58.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRALgMQAKgMANAAQAQAAAIAKQAJAJAAARIAAAGIg5AAIAAACQAAAOAHAJQAIAKAKAAQAIAAAHgDQAFgBAFgGIAEAHQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgbQgGAJgCAMIAwAAIAAgDQAAgKgHgIQgGgIgLAAQgIABgIAHg");
	this.shape_39.setTransform(-35.7,60.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgLA6IgMgFIACgHIAKAEIALABQAMAAAGgHQAGgIAAgMIAAgKQgEAGgHAEQgIADgFAAQgPAAgJgMQgIgLAAgQIAAgCQAAgTAIgNQAJgMAPAAQAHAAAHADQAHAGADAGIABgNIAIAAIAABQQAAARgJAJQgJAJgPAAIgLgBgAgRgoQgGAKAAAQIAAACQAAANAGAJQAGAJALAAQAIAAAHgEQAGgFADgGIAAgmQgDgHgGgFQgGgEgJgBQgKAAgHALg");
	this.shape_40.setTransform(-44.5,61.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_41.setTransform(-50.5,58.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgYAxQgIgLAAgTIAAgBQAAgSAIgMQAJgMAPAAQAHAAAGADQAHAFAEAGIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgIAEgFAAQgPAAgJgMgAgRgGQgGAIAAAQIAAABQAAAQAGAJQAGAJALAAQAIAAAHgEQAGgFADgHIAAglQgDgHgGgFQgFgFgKAAQgLAAgGALg");
	this.shape_42.setTransform(-56.9,58.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgXAfQgKgMAAgRIAAgDQAAgRAKgMQALgMAMAAQAQAAAJAKQAJAJAAARIAAAGIg6AAIAAACQAAAOAIAJQAHAKALAAQAIAAAGgDQAHgBAEgGIAEAHQgEAFgIADQgHADgKAAQgOAAgLgMgAgPgbQgHAKgBALIAvAAIAAgDQAAgLgGgHQgGgIgMAAQgIABgHAHg");
	this.shape_43.setTransform(-65.2,60.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgHAGgFQAFgEAIAAIAEAAIACAAIgBAJIgHAAQgJAAgDAFQgGAFgCAIIAAA4g");
	this.shape_44.setTransform(-71.4,60.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgXAfQgKgMAAgRIAAgDQAAgSAKgLQALgMAMAAQAQAAAJAKQAJAJAAARIAAAGIg6AAIAAACQAAAOAIAJQAHAKALAAQAIAAAGgDQAHgBAEgGIAEAHQgEAFgIADQgHADgKAAQgOAAgLgMgAgPgbQgHAKgBALIAvAAIAAgDQAAgLgGgHQgGgIgMAAQgIABgHAHg");
	this.shape_45.setTransform(-82.5,60.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_46.setTransform(-92.3,58.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgFgHgKAAQgLAAgFAHQgGAHgCALIABABIAAAyIgIAAIAAgvQAAgPgGgHQgFgHgKAAQgJAAgGAFQgGAFgCAJIAAA5IgKAAIAAhSIAJAAIAAAOQAFgIAGgDQAGgEAKAAQAKAAAGAEQAFAEADAKQAEgJAGgEQAHgFAKAAQANAAAIAIQAHAJAAATIAAAvg");
	this.shape_47.setTransform(-101.1,60.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgMAKgGQAJgGAQABIASAAIAAgLQABgJgGgFQgGgGgKAAQgHABgHAEQgHAFAAAHIgJAAIAAAAQgBgKAKgHQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAwIACAIIgKAAIgCgNQgEAGgIAFQgHAEgIAAQgMAAgHgGgAgPAGQgIAGAAAHQAAAHAFAFQAFADAIAAQAIABAHgFQAJgFACgHIAAgRIgSAAQgLgBgHAGg");
	this.shape_48.setTransform(-112.5,60.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgVAjQgJgGAAgLIAJAAQAAAJAHAEQAHAEAIAAQAKAAAFgEQAGgFAAgGQAAgGgFgEQgEgFgNgCQgPgDgFgEQgHgFAAgLQAAgJAIgHQAIgGALAAQAPAAAIAHQAIAHgBAKIAAABIgIAAQAAgHgGgFQgHgGgJAAQgIAAgFAFQgFAFAAAFQAAAGAEAEQAFAEALADQANACAJAFQAHAFAAALQAAAKgIAHQgJAGgNAAQgOAAgIgIg");
	this.shape_49.setTransform(-120.8,60.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgXAfQgKgMAAgRIAAgDQAAgRAKgMQALgMANAAQAPAAAJAKQAJAJAAARIAAAGIg6AAIAAACQAAAOAIAJQAHAKALAAQAIAAAGgDQAHgBAEgGIAEAHQgEAFgIADQgHADgKAAQgOAAgLgMgAgPgbQgHAKgBALIAvAAIAAgDQAAgLgGgHQgGgIgLAAQgJABgHAHg");
	this.shape_50.setTransform(-128.8,60.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_51.setTransform(-138.6,58.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_52.setTransform(-142.2,58.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgLA6IgMgFIACgHQAEACAHACQAFABAFAAQAMAAAGgHQAGgIAAgMIAAgKQgEAGgHAEQgIADgFAAQgPAAgJgMQgIgLAAgQIAAgCQAAgTAIgNQAJgMAPAAQAHAAAHADQAHAFADAHIACgNIAHAAIAABQQAAARgJAJQgJAJgPAAIgLgBgAgRgoQgGAKAAAQIAAACQAAANAGAJQAGAJALAAQAIAAAHgEQAGgFADgGIAAgmQgDgHgGgFQgGgEgJgBQgKAAgHALg");
	this.shape_53.setTransform(-148.7,61.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgXAfQgKgMAAgRIAAgDQAAgSAKgLQALgMAMAAQAQAAAJAKQAJAJAAARIAAAGIg6AAIAAACQAAAOAIAJQAHAKALAAQAIAAAGgDQAHgBAEgGIAEAHQgEAFgIADQgHADgKAAQgOAAgLgMgAgPgbQgHAKgBALIAvAAIAAgDQAAgLgGgHQgGgIgMAAQgIABgHAHg");
	this.shape_54.setTransform(-156.9,60.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgYAxQgIgKAAgUIAAgBQAAgTAIgLQAJgMAPAAQAHAAAGADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgGADQgJAEgFAAQgPAAgJgMgAgRgGQgGAHAAARIAAABQAAAQAGAJQAHAJAKAAQAIAAAHgEQAFgFAEgHIAAglQgDgHgGgFQgGgFgJAAQgKAAgHALg");
	this.shape_55.setTransform(-165.7,58.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgPBQIgCgFQALgIAGgUQAJgWAAgZIAAAAQAAgYgJgVQgGgVgLgIIACgFIABAAQAMAHAJAWQALAXAAAbIAAAAQAAAdgLAWQgIAWgNAHg");
	this.shape_56.setTransform(-176.8,59.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRALgMQAKgMANAAQAPAAAJAKQAJAJAAARIAAAGIg6AAIAAACQAAAOAIAJQAIAKAKAAQAHAAAIgDQAFgBAFgGIAEAHQgEAEgIAEQgHADgKAAQgOAAgKgMgAgPgbQgHAKgBALIAvAAIAAgDQAAgKgGgIQgGgIgLAAQgJABgHAHg");
	this.shape_57.setTransform(-182.9,60.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgHQgFgGgKAAQgIAAgGAGQgHAFgCAIIAAA5IgKAAIAAhSIAJAAIAAAPQAFgIAGgEQAGgEAJAAQAOAAAGAIQAIAIAAASIAAAxg");
	this.shape_58.setTransform(-191.4,60.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgZAfQgKgMAAgSIAAgBQAAgSAKgMQAKgMAPAAQAQAAALAMQAJALABATIAAABQAAATgKALQgKAMgRAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAIAKALAAQAMAAAIgKQAHgKABgOIAAgBQgBgOgHgKQgHgLgNAAQgLAAgIALg");
	this.shape_59.setTransform(-200.3,60.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_60.setTransform(-206.5,58.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgfApIAAgHIAxhCIgwAAIAAgIIA7AAIAAAGIgxBDIA0AAIAAAIg");
	this.shape_61.setTransform(-212.1,60.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_62.setTransform(-217.9,58.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgHAGgFQAFgEAIAAIAEAAIACAAIgBAJIgHAAQgJAAgDAFQgFAEgDAJIAAA4g");
	this.shape_63.setTransform(-221.9,60.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgCQAAgRAJgMQAJgMAPAAQAPAAAIAIQAJAJAAANIAAAAIgIAAQAAgLgHgGQgHgFgKgBQgLAAgHALQgGAKAAANIAAACQAAAOAGAKQAHAKALAAQAKAAAHgFQAHgGAAgJIAIAAIAAAAQAAAMgJAIQgKAIgNAAQgOAAgKgMg");
	this.shape_64.setTransform(-229.2,60.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgWAjQgIgGAAgLIAJAAQAAAJAHAEQAHAEAHAAQALAAAFgEQAGgFAAgGQAAgGgFgEQgEgFgNgCQgPgDgFgEQgIgGAAgKQAAgJAJgHQAHgGAMAAQAOAAAJAHQAIAHgBAKIAAABIgIAAQAAgHgGgFQgHgGgJAAQgIAAgFAFQgFAFAAAFQAAAGAEAEQAFAEALADQAOACAIAFQAHAFAAALQAAAKgIAHQgJAGgOAAQgNAAgJgIg");
	this.shape_65.setTransform(-237.4,60.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgXAfQgKgMAAgRIAAgDQAAgSAKgLQALgMAMAAQAQAAAJAKQAJAJAAARIAAAGIg6AAIAAACQAAAOAIAJQAHAKALAAQAIAAAGgDQAHgBAEgGIAEAHQgEAFgIADQgHADgKAAQgOAAgLgMgAgPgbQgHAKgBALIAvAAIAAgDQAAgLgGgHQgGgIgMAAQgIABgHAHg");
	this.shape_66.setTransform(-245.4,60.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgYAxQgIgKAAgUIAAgBQAAgTAIgLQAJgMAPAAQAHAAAGADQAGAEAFAHIAAgyIAJAAIAAB3IgIAAIgBgMQgDAHgIADQgHAEgGAAQgPAAgJgMgAgQgGQgHAHAAARIAAABQAAAQAHAJQAFAJALAAQAIAAAHgEQAGgFADgHIAAglQgDgHgGgFQgFgFgKAAQgKAAgGALg");
	this.shape_67.setTransform(-254.2,58.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRALgMQAKgMANAAQAQAAAIAKQAJAJAAARIAAAGIg5AAIAAACQAAAOAHAJQAIAKAKAAQAIAAAHgDQAFgBAFgGIAEAHQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgbQgHAKgBALIAwAAIAAgDQAAgKgHgIQgGgIgLAAQgIABgIAHg");
	this.shape_68.setTransform(-266.3,60.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgMA6IgMgFIADgHIAKAEQAGABAFAAQALAAAHgHQAGgIAAgMIAAgKQgEAGgHAEQgIADgFAAQgPAAgJgMQgIgKAAgRIAAgCQAAgVAIgLQAJgMAPAAQAIAAAFADQAHAFAEAHIABgNIAIAAIAABQQAAARgJAJQgJAJgPAAIgMgBgAgRgoQgGAKAAAQIAAACQAAANAGAJQAGAJALAAQAIAAAHgEQAGgFADgGIAAgmQgDgHgGgFQgGgEgJgBQgLAAgGALg");
	this.shape_69.setTransform(-278.9,61.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAWAqIAAgxQABgOgGgHQgFgGgKAAQgIAAgGAGQgHAFgCAIIAAA5IgKAAIAAhSIAJAAIAAAPQAFgIAGgEQAHgEAIAAQAOAAAHAIQAGAHAAATIAAAxg");
	this.shape_70.setTransform(-287.6,60.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_71.setTransform(-293.8,58.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgMA6IgMgFIADgHIAKAEIALABQALAAAHgHQAGgIAAgMIAAgKQgDAFgIAFQgIADgFAAQgPAAgJgMQgIgLAAgQIAAgCQAAgTAIgNQAJgMAPAAQAHAAAHADQAGAFAEAHIABgNIAIAAIAABQQAAARgJAJQgJAJgPAAIgMgBgAgRgoQgGALAAAPIAAACQAAAMAGAKQAGAJALAAQAIAAAHgEQAGgFADgGIAAgmQgDgHgGgFQgGgEgJgBQgLAAgGALg");
	this.shape_72.setTransform(-300.2,61.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgMAKgGQAJgGAQABIASAAIAAgLQAAgJgFgFQgHgGgJAAQgHABgHAEQgHAGAAAGIgJAAIAAAAQgBgKAKgHQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAwIACAIIgKAAIgBgHIgBgGQgEAGgIAFQgHAEgIAAQgMAAgHgGgAgPAGQgIAGAAAHQAAAHAFAFQAFADAIAAQAIABAIgFQAHgFADgHIAAgRIgSAAQgLgBgHAGg");
	this.shape_73.setTransform(-308.8,60.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgGgHgJAAQgLAAgFAHQgHAHgBALIAAAzIgHAAIAAgvQAAgPgGgHQgFgHgKAAQgJAAgGAFQgGAFgCAJIAAA5IgKAAIAAhSIAJAAIAAAOQAFgIAGgDQAGgEAKAAQAKAAAGAEQAFAFACAJQAFgJAGgEQAHgFAKAAQAOAAAHAIQAHAKAAASIAAAvg");
	this.shape_74.setTransform(-320,60.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_75.setTransform(-328.9,58.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAPBQQgNgHgIgWQgLgWAAgdIAAAAQAAgbALgXQAJgWAMgHIABAAIACAFQgLAJgHAUQgIAVAAAYIAAAAQAAAZAIAVQAHAVALAIIgCAFg");
	this.shape_76.setTransform(-332.7,59.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_77.setTransform(-341.3,58.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADADQADAEAFAAIAJgBIABAHIgFABIgHABQgJAAgDgFg");
	this.shape_78.setTransform(-345.8,59.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgHAGgFQAFgEAIAAIAEAAIACAAIgBAJIgHAAQgJAAgDAFQgGAFgCAIIAAA4g");
	this.shape_79.setTransform(-350.8,60.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRAKgMQALgMANAAQAPAAAJAKQAJAJAAARIAAAGIg6AAIAAACQAAAOAIAJQAHAKALAAQAHAAAIgDQAFgBAFgGIAEAHQgEAFgIADQgHADgKAAQgOAAgKgMgAgPgbQgHAKgBALIAvAAIAAgDQAAgKgGgIQgGgIgLAAQgJABgHAHg");
	this.shape_80.setTransform(-358.1,60.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgJA9IAAhLIgOAAIAAgHIAOAAIAAgMQAAgNAGgHQAFgHALAAIALABIgBAIIgEAAIgFAAQgHAAgEAEQgDAFAAAJIAAAMIASAAIAAAHIgSAAIAABLg");
	this.shape_81.setTransform(-364.3,58.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgXAfQgKgLAAgSIAAgDQAAgSAKgLQALgMAMAAQAQAAAJAKQAJAJAAARIAAAGIg6AAIAAACQAAAOAIAJQAHAKALAAQAIAAAGgDQAGgBAFgGIAEAHQgEAFgIADQgHADgKAAQgOAAgLgMgAgPgbQgHAJgBAMIAvAAIAAgDQAAgLgGgHQgGgIgMAAQgIABgHAHg");
	this.shape_82.setTransform(-371.3,60.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgHAGgFQAFgEAIAAIAEAAIACAAIgBAJIgHAAQgJAAgDAFQgGAFgCAIIAAA4g");
	this.shape_83.setTransform(-377.5,60.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_84.setTransform(-386.3,58.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRALgMQAKgMANAAQAPAAAJAKQAJAJAAARIAAAGIg5AAIAAACQAAAOAHAJQAIAKAKAAQAIAAAHgDQAFgBAFgGIAEAHQgEAFgIADQgHADgKAAQgOAAgKgMgAgPgbQgGAJgCAMIAwAAIAAgDQAAgLgHgHQgGgIgLAAQgIABgIAHg");
	this.shape_85.setTransform(-396.1,60.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgXAfQgKgMAAgSIAAgCQAAgRAKgMQAKgMAOAAQAPAAAJAIQAJAJAAANIgBAAIgIAAQAAgKgHgHQgHgFgKgBQgKAAgIALQgGAJAAAOIAAACQAAAPAGAJQAHAKALAAQAJAAAIgFQAHgGAAgJIAIAAIAAAAQABAMgKAIQgJAIgOAAQgOAAgKgMg");
	this.shape_86.setTransform(-404.3,60.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgWAjQgIgGAAgLIAJAAQAAAJAHAEQAHAEAHAAQAKAAAGgEQAGgFAAgGQAAgFgFgFQgEgFgNgCQgOgDgHgEQgHgGAAgKQAAgJAIgHQAIgGAMAAQAPAAAHAHQAJAHgBAKIAAABIgJAAQAAgHgFgFQgHgGgJAAQgIAAgFAFQgFAFAAAFQAAAGAEAEQAEAEALADQAOACAJAFQAHAFAAALQAAAJgIAIQgJAGgOAAQgNAAgJgIg");
	this.shape_87.setTransform(-412.5,60.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_88.setTransform(-418.3,58.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgHAGgFQAFgEAIAAIADAAIADAAIgBAJIgHAAQgJAAgDAFQgFAEgDAJIAAA4g");
	this.shape_89.setTransform(-422.3,60.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRALgMQAKgMANAAQAQAAAIAKQAJAJAAARIAAAGIg5AAIAAACQAAAOAHAJQAIAKAKAAQAIAAAHgDQAFgBAFgGIAEAHQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgbQgGAJgCAMIAwAAIAAgDQAAgKgHgIQgGgIgLAAQgIABgIAHg");
	this.shape_90.setTransform(-429.6,60.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgVAjQgJgGAAgLIAJAAQAAAJAHAEQAHAEAIAAQAKAAAFgEQAGgFAAgGQAAgGgFgEQgEgFgNgCQgPgDgFgEQgHgFAAgLQAAgJAIgHQAIgGALAAQAPAAAIAHQAIAHgBAKIAAABIgIAAQAAgHgGgFQgHgGgJAAQgIAAgFAFQgFAFAAAFQAAAGAEAEQAFAEALADQANACAJAFQAHAFAAALQAAAKgIAHQgJAGgNAAQgOAAgIgIg");
	this.shape_91.setTransform(-437.8,60.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgGQgGgGgJAAQgIAAgHAGQgFAFgEAIIAAA5IgJAAIAAhSIAJAAIAAAPQAFgIAGgEQAHgEAHAAQAOAAAHAIQAIAIgBASIAAAxg");
	this.shape_92.setTransform(-446.2,60.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_93.setTransform(-452.4,58.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgGARIAFgUIAAgNIAIAAIAAAOIgHATg");
	this.shape_94.setTransform(455.3,45.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgaAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQARAAAJAMQALAMAAASIAAABQAAASgLAMQgJAMgRAAQgPAAgLgMgAgTgYQgHALAAANIAAABQAAAOAHAKQAHAKAMAAQAMAAAIgKQAHgJAAgPIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_95.setTransform(449.5,41.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgXAfQgJgMAAgSIAAgBQAAgSAJgMQAKgMAOAAQAOAAAJAIQAJAJAAANIAAAAIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAKQgGAIAAAQIAAABQAAAPAGAKQAHAJALAAQAJAAAIgFQAHgGAAgJIAIAAIAAABQAAAMgJAHQgLAIgMAAQgOAAgKgMg");
	this.shape_96.setTransform(441,41.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_97.setTransform(435,39.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAWAqIAAgxQABgOgGgGQgFgGgKAAQgIAAgHAFQgGAGgCAIIAAA4IgKAAIAAhRIAJAAIAAAOQAFgIAGgEQAHgEAIAAQANAAAIAIQAGAIAAASIAAAxg");
	this.shape_98.setTransform(428.8,41.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_99.setTransform(422.6,39.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_100.setTransform(419,39.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgLQAJgMAPAAQAOAAAJAIQAJAIAAAOIAAAAIgIAAQAAgKgHgGQgGgGgLAAQgLAAgHAKQgGAKAAAOIAAABQAAAOAGALQAHAJALAAQAKAAAHgFQAHgGAAgJIAIAAIAAABQAAAMgJAHQgLAIgMAAQgPAAgJgMg");
	this.shape_101.setTransform(413.1,41.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgZAfQgLgMABgSIAAgBQgBgSALgMQAKgMAPAAQAQAAAKAMQALALgBATIAAABQABATgLALQgJAMgRAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAIAKALAAQAMAAAIgKQAHgJAAgPIAAgBQAAgOgHgKQgIgKgMAAQgLAAgIAKg");
	this.shape_102.setTransform(400.7,41.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgVAkQgJgIAAgKIAAAAIAJAAQABAJAGAEQAHAEAIAAQAKAAAFgEQAGgFAAgGQAAgGgFgEQgEgFgNgCQgPgDgFgEQgHgFAAgKQAAgKAIgGQAIgHALAAQAPAAAIAHQAIAHgBALIAAAAIgIAAQAAgHgGgFQgHgFgJAAQgIAAgFAEQgFAFAAAFQAAAHAEADQAFAEALADQAPADAHAEQAHAFAAALQAAAKgIAHQgJAGgNAAQgOAAgIgHg");
	this.shape_103.setTransform(392.1,41.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgHQAKgFAQAAIASAAIAAgLQAAgJgGgFQgHgFgJAAQgIAAgGAFQgHAFABAHIgJAAIAAgBQAAgKAIgHQAKgHALAAQAOAAAJAHQAIAHAAANIABAwIABAIIgJAAIgCgHIAAgGQgFAGgIAFQgHAEgIAAQgMAAgHgGgAgPAGQgIAGABAHQgBAHAFAFQAFAEAIAAQAIAAAHgFQAIgEAEgIIAAgRIgTAAQgLAAgHAFg");
	this.shape_104.setTransform(383.8,41.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgXAfQgJgMAAgSIAAgBQAAgTAJgLQAJgMAPAAQAOAAAJAIQAJAJAAANIAAAAIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAKQgGAKAAAOIAAABQAAAOAGALQAHAJALAAQAKAAAHgFQAHgGAAgJIAIAAIAAABQAAAMgJAHQgLAIgMAAQgOAAgKgMg");
	this.shape_105.setTransform(375.5,41.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_106.setTransform(365.7,39.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_107.setTransform(362.1,39.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSAKgMQALgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAJAKAAQAHAAAIgCQAGgDAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgPgaQgHAIgBALIAAABIAvAAIAAgCQAAgMgGgHQgGgHgLAAQgJAAgHAIg");
	this.shape_108.setTransform(352.4,41.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAWAqIAAgxQABgOgGgGQgFgGgLAAQgHAAgGAFQgHAGgCAIIAAA4IgKAAIAAhRIAJAAIAAAOQAFgIAHgEQAGgEAIAAQANAAAIAIQAGAIAAASIAAAxg");
	this.shape_109.setTransform(343.9,41.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgSALgMQAKgMAPAAQARAAAKAMQAJALABATIAAABQgBATgJALQgKAMgRAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAHAKAMAAQAMAAAIgKQAIgJAAgPIAAgBQAAgOgIgKQgIgKgMAAQgMAAgHAKg");
	this.shape_110.setTransform(335,41.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_111.setTransform(328.8,39.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgfApIAAgGIAwhEIgvAAIAAgHIA7AAIAAAGIgxBEIA0AAIAAAHg");
	this.shape_112.setTransform(323.2,41.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgMAKgGQAJgFAQAAIASAAIAAgLQABgJgHgFQgFgFgKAAQgIAAgGAFQgHAFAAAHIgJAAIAAgBQAAgJAJgIQAJgHAMAAQAOAAAIAHQAIAHAAANIABAwIACAIIgKAAIgCgNQgDAGgJAFQgHAEgIAAQgMAAgHgGgAgPAGQgIAGAAAHQAAAHAEAFQAGAEAIAAQAIAAAIgFQAGgEAEgIIAAgRIgSAAQgMAAgGAFg");
	this.shape_113.setTransform(314.9,41.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgLQAJgMAQAAQANAAAKAIQAJAJgBANIAAAAIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAKQgHAIAAAQIAAABQAAAPAHAKQAGAJAMAAQAJAAAHgFQAHgFAAgKIAIAAIAAABQABALgKAIQgKAIgMAAQgQAAgJgMg");
	this.shape_114.setTransform(306.6,41.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_115.setTransform(300.7,39.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_116.setTransform(297.1,39.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABAOQAEgIAGgEQAIgDAGAAQAOAAAKAMQAJANgBATIAAABQABARgJALQgJAMgOAAQgHAAgHgEQgGgCgFgHIAAArgAgOgtQgGAEgDAIIAAAmQAEAIAFADQAGAEAIAAQALAAAHgJQAGgJAAgOIAAgBQAAgQgGgKQgHgLgLABQgJgBgFAFg");
	this.shape_117.setTransform(291,42.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AggA6IAAhyIAHAAIACAOQADgHAHgFQAHgDAHAAQAOAAAKAMQAIANAAATIAAABQAAARgIALQgJAMgPAAQgFAAgIgEQgGgCgFgHIAAArgAgOgtQgGAEgDAIIAAAmQADAHAGAEQAHAEAHAAQALAAAHgJQAGgJAAgOIAAgBQAAgQgGgKQgHgLgLABQgIgBgGAFg");
	this.shape_118.setTransform(282.2,42.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgHQAJgFAQAAIATAAIAAgLQAAgJgGgFQgGgFgKAAQgIAAgGAFQgHAFAAAHIgIAAIAAgBQgBgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAwIACAIIgKAAIgBgNQgEAGgJAFQgHAEgIAAQgMAAgHgGgAgPAGQgIAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAIgFQAHgEAEgIIAAgRIgTAAQgLAAgHAFg");
	this.shape_119.setTransform(273.2,41.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgDASIABgjIAGAAIAAAQIgDATg");
	this.shape_120.setTransform(268,35.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_121.setTransform(264.9,39.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_122.setTransform(261.3,39.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgHQAKgFAPAAIATAAIAAgLQAAgJgGgFQgGgFgKAAQgHAAgHAFQgHAFAAAHIgIAAIgBgBQABgJAIgIQAKgHAMAAQAOAAAHAHQAJAHAAANIAAAwIACAIIgKAAIgBgHIAAgGQgFAGgHAFQgJAEgHAAQgLAAgIgGgAgPAGQgHAGgBAHQABAHAEAFQAFAEAIAAQAIAAAIgFQAHgEAEgIIAAgRIgTAAQgLAAgHAFg");
	this.shape_123.setTransform(255.1,41.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgXAxQgJgKAAgUIAAgBQAAgSAJgMQAIgMAPAAQAGAAAHADQAGAFAFAGIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgHAEgGAAQgPAAgIgMgAgQgGQgHAIAAAQIAAABQAAARAHAIQAGAJAKAAQAIAAAGgEQAGgFAEgHIAAglQgDgHgGgFQgGgFgJABQgLgBgFALg");
	this.shape_124.setTransform(246.4,39.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgaQgGAHgCAMIAAABIAwAAIAAgCQAAgLgHgIQgGgHgLAAQgIAAgIAIg");
	this.shape_125.setTransform(234.2,41.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADADQADAEAFAAIAJgBIABAGIgFADIgHAAQgIAAgEgGg");
	this.shape_126.setTransform(227.4,40.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAXAqIAAgxQgBgOgFgGQgFgGgLAAQgGAAgHAFQgHAGgCAIIAAA4IgJAAIAAhRIAIAAIABAOQADgHAIgFQAGgEAIAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_127.setTransform(220.4,41.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgaQgGAHgCAMIAAABIAwAAIAAgCQAAgLgHgIQgGgHgLAAQgIAAgIAIg");
	this.shape_128.setTransform(211.9,41.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgFgHQgHgGgJAAQgKAAgHAHQgFAHgCAKIAAAzIgHAAIAAgvQAAgPgFgHQgHgGgJAAQgJAAgHAFQgFAFgDAIIAAA5IgJAAIAAhRIAIAAIABANQAFgHAGgEQAHgEAJAAQAIAAAIAFQAFAEACAKQADgIAIgGQAHgFAKAAQAOAAAHAJQAHAJAAATIAAAug");
	this.shape_129.setTransform(200.8,41.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgGQAJgFAQAAIATAAIAAgLQgBgJgFgFQgGgFgKAAQgIAAgHAFQgGAFAAAHIgIAAIAAgBQgBgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAwIACAIIgKAAIgBgNQgFAGgIAFQgIAEgIAAQgLAAgIgGgAgQAGQgHAGAAAHQAAAHAEAFQAGAEAHAAQAJAAAHgFQAHgEAFgIIAAgRIgTAAQgLAAgIAFg");
	this.shape_130.setTransform(189.4,41.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADADQADAEAFAAIAJgBIABAGIgFADIgHAAQgJAAgDgGg");
	this.shape_131.setTransform(182.5,40.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAHAAIAAAVIATAAIAAAIIgTAAIAAA0QAAAJADADQADAEAFAAIAKgBIABAGIgGADIgGAAQgJAAgDgGg");
	this.shape_132.setTransform(177.2,40.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAJAAARIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgOgaQgHAHgCAMIABABIAvAAIAAgCQAAgMgHgHQgGgHgLAAQgIAAgHAIg");
	this.shape_133.setTransform(170.6,41.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgSAqIAAhRIAIAAIABAOIAAAAQAEgIAFgEQAFgEAJAAIAFABIgBAJIgHgBQgIAAgEAFQgGAGgCAIIAAA3g");
	this.shape_134.setTransform(164.4,41.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_135.setTransform(159.4,39.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgYAxQgIgLAAgTIAAgBQAAgSAIgMQAKgMAOAAQAGAAAHADQAHAFAEAGIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgHAEgGAAQgPAAgJgMgAgRgGQgGAIAAAQIAAABQAAAQAGAJQAGAJALAAQAIAAAHgEQAGgFADgHIAAglQgDgHgGgFQgFgFgKABQgLgBgGALg");
	this.shape_136.setTransform(153,39.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgHQAKgFAPAAIATAAIAAgLQgBgKgFgEQgHgFgJAAQgHAAgHAFQgHAFAAAHIgJAAIAAgBQABgKAIgHQAJgHAMAAQAOAAAIAHQAJAHAAANIABAwIABAIIgKAAIgBgHIAAgGQgEAGgIAFQgIAEgIAAQgLAAgIgGgAgPAGQgHAGAAAHQgBAHAFAFQAFAEAIAAQAIAAAIgFQAHgFAEgHIAAgRIgTAAQgLAAgHAFg");
	this.shape_137.setTransform(140.5,41.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSAKgMQALgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAJAKAAQAHAAAIgCQAGgDAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgPgaQgHAIgBALIAAABIAvAAIAAgCQAAgLgGgIQgGgHgLAAQgJAAgHAIg");
	this.shape_138.setTransform(132.3,41.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgSAqIAAhRIAIAAIABAOIAAAAQADgHAGgFQAEgEAJAAIAGABIgBAJIgHgBQgJAAgDAFQgGAFgCAJIAAA3g");
	this.shape_139.setTransform(126.2,41.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgLQAJgMAPAAQAOAAAJAIQAJAIAAAOIAAAAIgIAAQAAgKgHgGQgGgGgLAAQgLAAgHAKQgGAKAAAOIAAABQAAAOAGALQAHAJALAAQAKAAAHgFQAHgGAAgJIAIAAIAAABQAAAMgJAHQgLAIgMAAQgPAAgJgMg");
	this.shape_140.setTransform(118.8,41.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgSALgMQAKgMAPAAQAQAAALAMQAJALABATIAAABQgBATgJALQgKAMgRAAQgPAAgKgMgAgTgYQgIAKAAAOIAAABQAAAPAIAJQAHAKAMAAQAMAAAIgKQAIgJAAgPIAAgBQAAgOgIgKQgIgKgMAAQgMAAgHAKg");
	this.shape_141.setTransform(106.4,41.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_142.setTransform(100.2,39.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_143.setTransform(96.6,39.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgaAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQAQAAAKAMQAKALAAATIAAABQAAATgKALQgJAMgRAAQgPAAgLgMgAgTgYQgHAKgBAOIAAABQABAPAHAJQAHAKAMAAQAMAAAIgKQAIgJgBgPIAAgBQABgOgIgKQgIgKgMAAQgMAAgHAKg");
	this.shape_144.setTransform(90.4,41.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgcAsQgMgNAAgWIAAgRQAAgWAMgNQALgOARAAQARAAAMAKQAKAKACARIgBAAIgIAAQgCgOgIgHQgIgIgOAAQgNAAgJAMQgJALAAASIAAARQAAASAJALQAJAMANAAQAOAAAIgIQAIgHACgOIAIAAIABAAQgCARgLAKQgLAKgRAAQgRAAgLgOg");
	this.shape_145.setTransform(80.9,39.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgRADIAAgGIAjAAIAAAGg");
	this.shape_146.setTransform(73.5,40.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgHQAJgFAQAAIATAAIAAgLQAAgJgGgFQgGgFgKAAQgIAAgGAFQgHAFAAAHIgIAAIAAgBQgBgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAwIACAIIgKAAIgBgNQgEAGgJAFQgHAEgIAAQgMAAgHgGgAgPAGQgIAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAIgFQAHgEAEgIIAAgRIgTAAQgLAAgHAFg");
	this.shape_147.setTransform(66.8,41.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADADQADAEAFAAIAJgBIABAGIgFADIgHAAQgJAAgDgGg");
	this.shape_148.setTransform(60,40.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgWAkQgIgHAAgLIAAAAIAJAAQAAAJAHAEQAHAEAHAAQAKAAAGgEQAGgFAAgGQAAgGgFgEQgFgFgMgCQgPgDgGgEQgHgGAAgJQAAgKAIgGQAJgHALAAQAOAAAIAHQAIAHAAALIAAAAIgJAAQAAgHgGgFQgFgFgKAAQgIAAgGAEQgFAFAAAFQAAAHAFADQAEAEALADQAPADAIAEQAHAGAAAKQAAAKgIAHQgKAGgNAAQgNAAgJgHg");
	this.shape_149.setTransform(53.3,41.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgaQgHAIgBALIAAABIAwAAIAAgCQAAgLgHgIQgGgHgLAAQgIAAgIAIg");
	this.shape_150.setTransform(45.3,41.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgDA4IAAhnIgnAAIAAgIIBVAAIAAAIIgnAAIAABng");
	this.shape_151.setTransform(37.2,39.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgaAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQARAAAJAMQAKALAAATIAAABQAAATgKALQgJAMgRAAQgPAAgLgMgAgTgYQgHALAAANIAAABQAAAOAHAKQAHAKAMAAQAMAAAIgKQAIgJgBgPIAAgBQABgOgIgKQgIgKgMAAQgMAAgHAKg");
	this.shape_152.setTransform(24.2,41.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgCAvQgFgGAAgMIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADADQADAEAFAAIAJgBIABAGIgFADIgHAAQgIAAgEgGg");
	this.shape_153.setTransform(17.2,40.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADADQADAEAFAAIAJgBIABAGIgFADIgHAAQgJAAgDgGg");
	this.shape_154.setTransform(12,40.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSAKgMQALgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAJAKAAQAHAAAIgCQAGgDAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgPgaQgHAIgBALIAAABIAvAAIAAgCQAAgMgGgHQgGgHgLAAQgJAAgHAIg");
	this.shape_155.setTransform(5.4,41.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgTAqIAAhRIAIAAIABAOIAAAAQAEgHAGgFQAFgEAIAAIAHABIgCAJIgHgBQgIAAgFAFQgFAFgDAJIAAA3g");
	this.shape_156.setTransform(-0.8,41.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAHAAIAAAVIATAAIAAAIIgTAAIAAA0QAAAJADADQADAEAFAAIAKgBIABAGIgGADIgGAAQgJAAgDgGg");
	this.shape_157.setTransform(-6.7,40.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgWAkQgIgHAAgLIAAAAIAJAAQAAAJAHAEQAHAEAHAAQALAAAFgEQAGgFAAgGQAAgGgFgEQgFgFgMgCQgOgDgHgEQgHgFAAgKQAAgKAIgGQAJgHALAAQAOAAAIAHQAIAHAAALIAAAAIgJAAQAAgHgGgFQgGgFgJAAQgIAAgGAEQgFAFAAAFQAAAHAFADQAEAEALADQAPADAIAEQAHAGAAAKQAAAKgIAHQgKAGgNAAQgNAAgJgHg");
	this.shape_158.setTransform(-13.4,41.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_159.setTransform(-19.2,39.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgYAxQgIgLAAgTIAAgBQAAgSAIgMQAKgMAOAAQAHAAAGADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgHAEgGAAQgPAAgJgMgAgRgGQgGAIAAAQIAAABQAAAQAGAJQAGAJALAAQAIAAAHgEQAGgFADgHIAAglQgDgHgGgFQgGgFgJABQgKgBgHALg");
	this.shape_160.setTransform(-25.6,39.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_161.setTransform(-35.5,39.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgXAfQgKgLAAgSIAAgCQAAgSAKgMQALgMAMAAQAQAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQABAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgEAFgIADQgIADgJAAQgOAAgLgMgAgPgaQgGAHgCAMIAAABIAwAAIAAgCQAAgMgHgHQgGgHgMAAQgHAAgIAIg");
	this.shape_162.setTransform(-41.3,41.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgXAxQgJgKAAgUIAAgBQAAgSAJgMQAIgMAPAAQAGAAAHADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgDAGgIAEQgHAEgGAAQgPAAgIgMgAgQgGQgHAIAAAQIAAABQAAAQAGAJQAHAJAKAAQAIAAAGgEQAHgFADgHIAAglQgDgHgGgFQgGgFgJABQgLgBgFALg");
	this.shape_163.setTransform(-50.1,39.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAJAKAAQAHAAAIgCQAFgCAFgFIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgPgaQgHAIgBALIAAABIAvAAIAAgCQAAgLgGgIQgGgHgLAAQgJAAgHAIg");
	this.shape_164.setTransform(-62.2,41.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgTAqIAAhRIAIAAIACAOIAAAAQADgHAGgFQAFgEAIAAIAHABIgCAJIgHgBQgJAAgDAFQgGAFgCAJIAAA3g");
	this.shape_165.setTransform(-68.4,41.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgaAfQgJgLgBgTIAAgBQABgTAJgLQALgMAPAAQAQAAAKAMQAKAMAAASIAAABQAAASgKAMQgKAMgQAAQgPAAgLgMgAgTgYQgIAKAAAOIAAABQAAAPAIAJQAHAKAMAAQANAAAHgKQAIgJgBgPIAAgBQABgOgIgKQgHgKgNAAQgMAAgHAKg");
	this.shape_166.setTransform(-76,41.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AAxAqIAAgvQAAgQgGgGQgGgGgJAAQgKAAgHAHQgGAHgBAKIAAAzIgHAAIAAgvQAAgQgGgGQgGgGgJAAQgKAAgFAFQgGAEgDAJIAAA5IgJAAIAAhRIAIAAIABANQAEgHAHgEQAGgEAKAAQAIAAAIAFQAFAEACAKQAEgJAHgFQAIgFAJAAQAOAAAHAJQAHAJAAATIAAAug");
	this.shape_167.setTransform(-87.5,41.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAuQAAARAFAFQAFAHAKAAQAIAAAHgFQAGgEACgJIAAg5IAKAAIAABRIgJAAIAAgNQgEAHgHAEQgHAEgHAAQgOAAgHgJg");
	this.shape_168.setTransform(-99,41.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJACADQADAEAFAAIAKgBIABAGIgGADIgGAAQgJAAgDgGg");
	this.shape_169.setTransform(-106.1,40.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgIAAgGAFQgGAFgDAJIAAA4IgKAAIAAhRIAJAAIAAAOQAFgIAGgEQAHgEAIAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_170.setTransform(-116.9,41.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgXAhQgHgJAAgTIAAguIAJAAIAAAuQAAARAFAFQAGAHAJAAQAJAAAFgFQAHgEACgJIAAg5IAJAAIAABRIgIAAIgBgNQgDAHgHAEQgHAEgHAAQgNAAgIgJg");
	this.shape_171.setTransform(-125.8,41.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgHQAJgFAQAAIASAAIAAgLQABgKgGgEQgGgFgKAAQgHAAgIAFQgGAFAAAHIgIAAIAAgBQgBgKAJgHQAJgHAMAAQAPAAAIAHQAIAHAAANIABAwIABAIIgJAAIgCgHIgBgGQgDAGgJAFQgHAEgIAAQgMAAgHgGgAgPAGQgIAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAHgFQAJgFACgHIAAgRIgSAAQgLAAgHAFg");
	this.shape_172.setTransform(-138.4,41.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgXAfQgJgMAAgSIAAgBQAAgSAJgMQAKgMAOAAQAOAAAJAIQAJAJAAANIAAAAIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAKQgGAIAAAQIAAABQAAAPAGAKQAHAJALAAQAJAAAIgFQAHgGAAgJIAIAAIAAABQAAAMgJAHQgLAIgMAAQgOAAgKgMg");
	this.shape_173.setTransform(-146.7,41.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_174.setTransform(-152.6,39.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADADQADAEAEAAIAKgBIABAGIgFADIgHAAQgJAAgDgGg");
	this.shape_175.setTransform(-157.1,40.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgWAkQgIgHAAgLIAAAAIAJAAQAAAJAHAEQAIAEAGAAQAKAAAGgEQAGgFAAgGQAAgGgFgEQgFgFgMgCQgOgDgHgEQgHgFAAgKQAAgKAIgGQAJgHALAAQAOAAAIAHQAIAHAAALIAAAAIgJAAQAAgHgGgFQgFgFgKAAQgIAAgGAEQgFAFAAAFQAAAHAFADQAEAEALADQAPADAIAEQAHAGAAAKQAAAKgIAHQgKAGgNAAQgNAAgJgHg");
	this.shape_176.setTransform(-163.8,41.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgSALgMQAKgMAPAAQAQAAALAMQAKAMAAASIAAABQAAASgKAMQgLAMgQAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAIAKALAAQANAAAHgKQAHgKAAgOIAAgBQAAgNgHgLQgHgKgNAAQgLAAgIAKg");
	this.shape_177.setTransform(-172.2,41.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AAWAqIAAgxQABgOgGgGQgFgGgKAAQgHAAgIAFQgGAGgCAIIAAA4IgKAAIAAhRIAJAAIAAAOQAFgIAGgEQAHgEAHAAQAPAAAGAIQAIAIgBASIAAAxg");
	this.shape_178.setTransform(-181,41.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgMA6IgMgEIADgIIAKAEIALABQALAAAHgHQAGgHAAgNIAAgKQgDAFgIAFQgIADgFAAQgPAAgJgLQgIgMAAgQIAAgCQAAgTAIgNQAJgMAPAAQAHAAAHAEQAGAFAEAGIABgNIAIAAIAABQQAAARgJAJQgJAJgPAAIgMgBgAgRgoQgGALAAAPIAAACQAAANAGAJQAGAJALAAQAIAAAHgEQAGgEADgHIAAglQgDgHgGgFQgFgFgKAAQgLAAgGAKg");
	this.shape_179.setTransform(-190.1,42.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgHQAJgFAQAAIATAAIAAgLQgBgJgFgFQgHgFgJAAQgHAAgHAFQgHAFAAAHIgJAAIAAgBQAAgJAJgIQAJgHAMAAQANAAAJAHQAJAHAAANIAAAwQABAFABADIgKAAIgBgHIAAgGQgFAGgIAFQgIAEgHAAQgMAAgHgGgAgPAGQgIAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAIgFQAHgFAEgHIAAgRIgTAAQgMAAgGAFg");
	this.shape_180.setTransform(-198.7,41.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_181.setTransform(-204.6,39.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgYAxQgIgLAAgTIAAgBQAAgSAIgMQAJgMAPAAQAGAAAHADQAHAFAEAGIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgIAEgFAAQgPAAgJgMgAgRgGQgGAIAAAQIAAABQAAAQAGAJQAGAJALAAQAIAAAHgEQAGgFADgHIAAglQgDgHgGgFQgFgFgKABQgLgBgGALg");
	this.shape_182.setTransform(-211.1,39.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAJAAARIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgOgaQgHAHgCAMIABABIAvAAIAAgCQAAgMgHgHQgGgHgLAAQgIAAgHAIg");
	this.shape_183.setTransform(-223.2,41.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AAXA8IAAg0QgBgLgFgHQgFgFgKAAQgHAAgHAEQgGAHgDAFIAAA7IgJAAIAAh3IAJAAIAAA0QAEgJAHgDQAHgEAHAAQAOAAAGAIQAIAIAAAQIAAAzg");
	this.shape_184.setTransform(-231.7,39.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgXAfQgJgMAAgSIAAgBQAAgTAJgLQAJgMAPAAQAOAAAJAIQAJAIAAAOIAAAAIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAKQgGAKAAAOIAAABQAAAOAGALQAHAJALAAQAKAAAHgFQAHgGAAgJIAIAAIAAABQAAAMgJAHQgLAIgMAAQgOAAgKgMg");
	this.shape_185.setTransform(-240.3,41.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgSALgMQAKgMAPAAQAQAAALAMQAJAMABASIAAABQgBASgJAMQgKAMgRAAQgPAAgKgMgAgTgYQgIAKAAAOIAAABQAAAPAIAJQAHAKAMAAQAMAAAIgKQAIgJAAgPIAAgBQAAgOgIgKQgIgKgMAAQgMAAgHAKg");
	this.shape_186.setTransform(-252.7,41.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgLQAJgMAQAAQANAAAKAIQAJAJgBANIAAAAIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAKQgHAIAAAQIAAABQAAAPAHAKQAGAJAMAAQAJAAAHgFQAHgFAAgKIAIAAIAAABQABAMgKAHQgKAIgMAAQgQAAgJgMg");
	this.shape_187.setTransform(-261.2,41.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_188.setTransform(-267.1,39.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgYAxQgIgLAAgTIAAgBQAAgSAIgMQAKgMAOAAQAHAAAGADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgGADQgIAEgGAAQgPAAgJgMgAgRgGQgGAIAAAQIAAABQAAAQAGAJQAGAJALAAQAIAAAHgEQAGgFADgHIAAglQgDgHgGgFQgGgFgJABQgKgBgHALg");
	this.shape_189.setTransform(-273.6,39.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgaQgHAIgBALIAAABIAwAAIAAgCQAAgLgHgIQgGgHgLAAQgJAAgHAIg");
	this.shape_190.setTransform(-281.8,41.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AAwAqIAAgvQAAgPgEgHQgHgGgJAAQgKAAgHAHQgFAHgCAKIAAAzIgIAAIAAgvQABgQgGgGQgFgGgKAAQgJAAgHAFQgFAEgDAJIAAA5IgJAAIAAhRIAIAAIABANQAEgHAGgEQAIgEAJAAQAIAAAIAFQAFAFACAJQADgIAIgGQAHgFAKAAQAOAAAGAJQAIAJAAATIAAAug");
	this.shape_191.setTransform(-293,41.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_192.setTransform(-305.7,39.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_193.setTransform(-309.3,39.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgKArIAAgTIAVAAIAAATgAgKgWIAAgUIAVAAIAAAUg");
	this.shape_194.setTransform(-317.2,41);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgcAfQgKgMAAgTIAAAAQAAgSAKgMQALgMARAAQASAAALAMQAKAMAAASIAAAAQAAATgKAMQgLAMgSAAQgRAAgLgMgAgLgRQgFAHAAAKIAAAAQAAAMAEAHQAFAHAHAAQAIAAAEgHQAEgGAAgNIAAAAQAAgLgEgHQgEgHgIAAQgHAAgEAIg");
	this.shape_195.setTransform(-324,41.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgYAjQgKgKAAgKIAAAAIAVAAQAAAHAFADQAEADAEAAQAGAAAEgDQADgDAAgEQAAgDgDgDQgGgDgGgCQgPgDgHgEQgIgGAAgKQAAgLAJgHQALgIAMAAQAQAAAJAIQAKAHAAAMIgWAAQAAgFgEgDQgDgDgGAAQgEAAgDACQgDADAAAEQAAAEADACQAEADAIACQAPADAIAEQAHAGAAAKQAAAMgJAHQgKAHgQAAQgOAAgKgIg");
	this.shape_196.setTransform(-332.6,41.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgeAkQgHgHAAgLQAAgNAKgFQAKgGARAAIALAAIAAgHQAAgGgDgDQgDgDgFAAQgFAAgDACQgDADAAAFIgWAAIAAgBQAAgLAJgHQALgIANAAQAPAAAJAIQAKAHAAAOIAAAhIABALIADAKIgXAAIgCgGIgBgGQgEAGgGAEQgDAEgIAAQgNAAgIgHgAgKAIQgEAEAAAFQAAAFADACQACACAFAAQAEAAAFgDQAFgDABgDIAAgMIgLAAQgHAAgDADg");
	this.shape_197.setTransform(-340.9,41.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgZAfQgKgMAAgSIAAgBQAAgTAKgLQAKgMARAAQAPAAAKAJQAJAJAAAOIAAABIgVAAQAAgGgEgFQgDgFgGAAQgHAAgEAHQgEAHAAALIAAABQAAALAEAHQAEAHAHAAQAFAAAEgEQAEgEAAgFIAVAAIAAAAQAAAMgKAKQgKAIgOAAQgRAAgKgMg");
	this.shape_198.setTransform(-349.2,41.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgKA8IAAh3IAVAAIAAB3g");
	this.shape_199.setTransform(-359.5,39.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgYAfQgLgLAAgSIAAgCQAAgSAKgMQAKgMAQAAQARAAAJAKQAJAKAAASIAAAKIgwAAIAAABQABAJAFAEQAEAGAHAAQAIAAAFgCIAKgFIAGAOQgDAEgKADQgIADgKAAQgRAAgKgMgAgHgUQgEAFgBAIIAAAAIAaAAIAAgCQAAgHgDgEQgDgFgHAAQgEAAgEAFg");
	this.shape_200.setTransform(-365.7,41.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgcAxQgIgLAAgTIAAgBQAAgSAIgMQAKgMAPAAQAEAAAFACQAFADAEAFIAAguIAWAAIAAB3IgTAAIgCgKQgEAGgFADQgFADgGAAQgPAAgJgMgAgKAAQgEAGAAAMIAAABQAAAMAEAGQAEAHAGAAQAEAAAFgDQAEgCACgDIAAgkQgCgCgEgDQgEgCgFAAQgGAAgEAHg");
	this.shape_201.setTransform(-374.7,39.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgZAfQgKgLAAgSIAAgCQAAgSAKgMQAKgMAPAAQARAAAKAKQAJALAAARIAAAKIgwAAIAAABQAAAIAFAFQAGAGAGAAQAHAAAFgCQAGgBAFgEIAGAOQgEAEgJADQgIADgLAAQgPAAgMgMgAgIgUQgDAFgBAIIAAAAIAaAAIAAgCQAAgHgDgEQgEgFgHAAQgEAAgEAFg");
	this.shape_202.setTransform(-387,41.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AANAqIAAgyQAAgIgDgEQgEgEgGAAIgGACQgEACgCADIAAA7IgXAAIAAhRIAVAAIABAMQAFgHAFgDQAFgEAHAAQAMAAAIAIQAHAIAAARIAAAyg");
	this.shape_203.setTransform(-395.8,41.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgcAfQgKgMAAgTIAAAAQAAgSAKgMQALgMARAAQASAAALAMQAKAMAAASIAAAAQAAATgKAMQgLAMgSAAQgRAAgLgMgAgLgRQgEAGAAALIAAAAQAAANAEAGQAEAHAHAAQAIAAAEgHQAEgGAAgNIAAAAQAAgLgEgHQgEgHgIAAQgHAAgEAIg");
	this.shape_204.setTransform(-404.8,41.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgKA8IAAhSIAVAAIAABSgAgKgqIAAgRIAVAAIAAARg");
	this.shape_205.setTransform(-411.4,39.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AghApIAAgNIAmgzIglAAIAAgRIBBAAIAAAMIgmA0IAnAAIAAARg");
	this.shape_206.setTransform(-417.5,41.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgeAkQgHgHAAgLQAAgNAKgFQAKgGARAAIALAAIAAgHQAAgGgDgDQgDgDgFAAQgFAAgDACQgDADAAAFIgWAAIAAgBQAAgLAJgHQALgIANAAQAPAAAJAIQAKAHAAAOIAAAhIABALIADAKIgXAAIgEgMQgDAGgGAEQgEAEgHAAQgNAAgIgHgAgKAIQgEAEAAAFQAAAFADACQACACAFAAQAEAAAFgDQAEgDACgDIAAgMIgLAAQgHAAgDADg");
	this.shape_207.setTransform(-425.9,41.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgYAfQgLgLAAgSIAAgCQAAgSAKgMQAKgMAQAAQARAAAJAKQAJALAAARIAAAKIgwAAIAAABQABAJAFAEQAFAGAGAAQAIAAAFgCQAGgCAEgDIAHAOQgEAEgKADQgIADgKAAQgRAAgKgMgAgHgUQgEAFgBAIIABAAIAZAAIAAgCQAAgHgDgEQgDgFgHAAQgEAAgEAFg");
	this.shape_208.setTransform(-434.3,41.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgWAqIAAhRIAVAAIABAMQAAgGAGgEQAFgEAFAAIAHABIgCAUIgJAAQgFAAgDACQgEACAAAEIAAA2g");
	this.shape_209.setTransform(-440.9,41.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgeAsQgNgMAAgVIAAgVQAAgUAMgNQANgOASAAQAVAAALALQANALgBASIAAABIgWAAQAAgLgGgGQgFgGgLAAQgIAAgGAIQgGAJAAAMIAAAVQAAANAGAIQAHAIAIAAQALAAAFgGQAFgGAAgLIAWAAIAAABQAAASgLALQgMALgUAAQgSAAgNgOg");
	this.shape_210.setTransform(-449.1,39.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#D22040").s().p("AgXBHIAWhwIgdAAIAEgTIA5gJIgcCMg");
	this.shape_211.setTransform(-403.2,0.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#D22040").s().p("AgkAoQgKgQADgVIABgDQADgYAPgPQAOgOATAAQATAAAKANQAJANgEAVIgCAOIg4AAQgBALAEAHQAFAGAHAAQAJAAAGgCQAGgBAIgFIAEASQgGAFgLAEQgKADgKAAQgVAAgLgOgAgEgZQgFAGgDAKIABAAIAbAAIABgCQABgKgCgFQgDgFgIAAQgFAAgEAGg");
	this.shape_212.setTransform(-418.6,2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#D22040").s().p("AgkAsQgKgLADgOIAAAAIAaAAQgBAIADAEQAEAEAIAAQAFAAAEgDQAEgDABgGQABgFgEgDQgDgDgJgDQgRgDgHgGQgJgIACgNQACgNANgKQANgJAPAAQATAAAKAJQAKAKgCAOIgBABIgbAAQABgHgDgEQgDgEgGAAQgGAAgCAEQgFAEAAAEQgCAFAEADQAEAEAJACQARAEAIAFQAHAHgCAOQgDAPgMAJQgNAIgRAAQgTAAgKgKg");
	this.shape_213.setTransform(-428.7,2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#D22040").s().p("AgoAuQgIgJADgOQADgRANgGQANgIATAAIANAAIACgIQABgIgCgFQgDgEgHAAQgEAAgEAEQgEAEgBAFIgbAAIAAAAQADgPANgJQANgJARAAQARAAAKAJQAKAKgEASIgJApQgCAIAAAHIABAMIgcAAIgBgMQgFAGgGAEQgGAEgKAAQgNAAgHgIgAgKALQgFAEgCAHQgBAGADACQACADAFAAQAFAAADgCQAGgEADgDIAEgSIgNAAQgFAAgFAFg");
	this.shape_214.setTransform(-438.7,2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#D22040").s().p("Ag7BHIAdiMIBaAAIgFAVIg9AAIgIAoIA0AAIgEATIg1AAIgLA8g");
	this.shape_215.setTransform(-447.8,0.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_216.setTransform(-175,-48.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_217.setTransform(-178.6,-53.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgXAfQgJgMAAgSIAAgBQAAgTAJgLQAKgMAOAAQAPAAAIAIQAJAJAAANIAAAAIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAKQgGAKAAAOIAAABQAAAOAGAKQAHAKALAAQAKAAAHgFQAHgFAAgKIAIAAIAAABQAAAMgJAHQgKAIgNAAQgOAAgKgMg");
	this.shape_218.setTransform(-184.5,-51.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_219.setTransform(-190.4,-53.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AAXAqIAAgxQgBgOgFgGQgFgGgKAAQgIAAgGAFQgHAFgCAJIAAA4IgJAAIAAhSIAIAAIABAPQAFgIAFgEQAIgEAHAAQAOAAAGAIQAIAIAAASIAAAxg");
	this.shape_220.setTransform(-196.6,-51.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_221.setTransform(-202.9,-53.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_222.setTransform(-206.5,-53.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgLQAJgMAPAAQAPAAAIAIQAKAJgBANIAAAAIgIAAQAAgKgHgGQgGgGgLAAQgLAAgGAKQgHAJAAAPIAAABQAAAPAGAJQAHAKAMAAQAJAAAHgFQAHgFAAgKIAIAAIAAABQABALgKAIQgJAIgNAAQgQAAgJgMg");
	this.shape_223.setTransform(-212.4,-51.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_224.setTransform(-222.2,-53.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgWAkQgIgIAAgJIAAgBIAJAAQABAKAGADQAGAEAIAAQAKAAAGgEQAGgEAAgHQAAgGgFgEQgEgEgNgDQgNgDgHgEQgIgFAAgKQAAgJAJgIQAHgGAMAAQAOAAAIAHQAJAHgBAKIAAABIgIAAQAAgHgGgFQgGgFgKAAQgIAAgFAEQgFAEAAAGQAAAGAEAEQAFAFALACQAOADAIAEQAHAGAAAKQAAALgIAGQgIAGgPAAQgMAAgKgHg");
	this.shape_225.setTransform(-228.1,-51.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgMAKgGQALgGAOABIATAAIAAgLQAAgJgGgFQgGgFgKAAQgIAAgHAFQgFAEAAAIIgJgBIAAAAQgBgJAJgIQAJgHAMAAQAOAAAJAHQAIAHAAAOIAAAmIACARIgJAAIgCgHIAAgGQgFAHgIAEQgIAEgHAAQgNAAgGgGgAgPAGQgIAFAAAJQAAAGAFAFQAFAEAIAAQAJAAAGgFQAIgFAEgHIAAgRIgTAAQgKgBgIAGg");
	this.shape_226.setTransform(-236.4,-51.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgXAfQgJgMAAgSIAAgBQAAgTAJgLQAKgMAOAAQAPAAAIAIQAJAJAAANIAAAAIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAKQgGAJAAAPIAAABQAAAPAGAJQAHAKALAAQAKAAAHgFQAHgFAAgKIAIAAIAAABQAAAMgJAHQgKAIgNAAQgOAAgKgMg");
	this.shape_227.setTransform(-244.7,-51.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_228.setTransform(-254.5,-53.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_229.setTransform(-258.1,-53.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgSALgMQAKgMAPAAQARAAAJAMQALAMAAASIAAABQAAASgKAMQgLAMgQAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAIAKALAAQANAAAHgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgLAAgIAKg");
	this.shape_230.setTransform(-264.3,-51.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgMA6QgFgBgHgDIADgIIAKAEIALABQALAAAGgHQAHgHAAgNIAAgKQgFAHgGACQgGAEgHAAQgQAAgIgLQgIgLAAgRIAAgCQAAgVAIgLQAJgMAPAAQAHAAAGAEQAHADAEAIIABgOIAIAAIAABRQAAAQgJAKQgJAJgPAAIgMgBgAgRgoQgGAKAAAQIAAACQAAANAGAJQAGAJALAAQAJAAAFgEQAHgEADgIIAAglQgDgGgGgGQgGgEgJAAQgLAAgGAKg");
	this.shape_231.setTransform(-273.3,-50.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AAXAqIAAgxQAAgOgGgGQgFgGgLAAQgHAAgHAFQgGAFgCAJIAAA4IgKAAIAAhSIAIAAIABAPQAFgIAHgEQAHgEAGAAQAOAAAIAIQAGAIABASIAAAxg");
	this.shape_232.setTransform(-282,-51.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_233.setTransform(-288.2,-53.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgWAkQgIgIAAgJIAAgBIAJAAQABAKAGADQAGAEAIAAQAKAAAGgEQAGgEAAgHQAAgFgFgFQgFgEgMgDQgNgDgHgEQgIgFAAgKQAAgJAIgIQAIgGAMAAQAOAAAIAHQAJAHgBAKIAAABIgIAAQAAgHgGgFQgGgFgKAAQgIAAgFAEQgFAEAAAGQAAAGAEAEQAFAFAKACQAQADAHAEQAHAGAAAKQAAAKgIAHQgIAGgPAAQgMAAgKgHg");
	this.shape_234.setTransform(-294.1,-51.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgXAhQgIgIAAgUIAAguIAKAAIAAAvQAAAPAFAHQAFAGAKAAQAJAAAGgEQAGgFACgIIAAg6IAKAAIAABSIgIAAIgBgOQgEAHgHAEQgGAEgIAAQgNAAgIgJg");
	this.shape_235.setTransform(-306.4,-51.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgWAkQgIgIAAgJIAAgBIAJAAQABAKAGADQAGAEAIAAQAKAAAGgEQAGgEAAgHQAAgGgFgEQgEgEgNgDQgNgDgHgEQgIgFAAgKQAAgJAJgIQAHgGAMAAQAOAAAIAHQAJAHgBAKIAAABIgIAAQAAgHgGgFQgGgFgKAAQgIAAgFAEQgFAEAAAGQAAAGAEAEQAFAFALACQAOADAIAEQAHAGAAAKQAAALgIAGQgIAGgPAAQgMAAgKgHg");
	this.shape_236.setTransform(-314.9,-51.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgZAfQgKgMAAgSIAAgBQAAgSAKgMQAKgMAPAAQAQAAALAMQAJAMABASIAAABQgBATgJALQgLAMgQAAQgPAAgKgMgAgTgYQgHAJAAAPIAAABQAAAPAHAJQAIAKALAAQANAAAHgKQAHgKABgOIAAgBQgBgOgHgKQgHgKgNAAQgLAAgIAKg");
	this.shape_237.setTransform(-327.2,-51.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgCAwQgFgHAAgLIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADADQADAEAFAAIAEAAIAFgBIABAHIgFABIgHABQgIAAgEgFg");
	this.shape_238.setTransform(-334.2,-52.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgGQAKgGAPABIATAAIAAgLQAAgJgHgFQgEgFgLAAQgJAAgFAFQgHAEAAAIIgIgBIAAAAQgBgJAJgIQAJgHAMAAQANAAAKAHQAHAHABAOIAAAvIACAIIgKAAIgBgNQgGAHgHAEQgIAEgIAAQgMAAgHgGgAgQAGQgHAFAAAJQAAAGAEAFQAGAEAIAAQAIAAAIgFQAGgEAFgIIAAgRIgTAAQgLgBgIAGg");
	this.shape_239.setTransform(-341.1,-51.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgVAkQgJgIAAgJIAAgBIAJAAQABAKAGADQAGAEAJAAQAKAAAFgEQAGgEAAgHQAAgGgFgEQgEgEgNgDQgNgDgHgEQgIgFAAgKQAAgJAJgIQAHgGAMAAQANAAAKAHQAIAHgBAKIAAABIgIAAQAAgHgGgFQgGgFgKAAQgIAAgFAEQgFAEAAAGQAAAGAEAEQAGAFAKACQAQADAGAEQAHAGAAAKQAAALgIAGQgIAGgOAAQgOAAgIgHg");
	this.shape_240.setTransform(-349.4,-51.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgMAKgGQALgGAOABIATAAIAAgLQAAgJgGgFQgGgFgKAAQgIAAgGAFQgHAEABAIIgJgBIAAAAQAAgJAIgIQAJgHAMAAQAOAAAJAHQAIAHAAAOIAAAmIACARIgKAAIgBgHIAAgGQgGAIgHADQgIAEgHAAQgNAAgGgGgAgPAGQgIAFABAJQgBAGAFAFQAEAEAJAAQAIAAAIgFQAHgEAEgIIAAgRIgTAAQgKgBgIAGg");
	this.shape_241.setTransform(-357.7,-51.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgNA5QgGgDgEgHIgBAMIgIAAIAAh3IAJAAIAAAzQAEgIAHgDQAGgEAHAAQAQAAAIAMQAIAMAAASIAAACQAAASgIAMQgIALgQAAQgHAAgHgEgAgOgLQgGAEgDAHIAAAlQADAHAGAFQAGAEAIAAQAMAAAGgJQAGgJAAgPIAAgCQAAgQgGgIQgGgKgMAAQgJAAgFAFg");
	this.shape_242.setTransform(-366.1,-53.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgWAvQgLgMAAgRIAAgFQAAgPALgMQAKgMANAAQAPAAAJAKQAJAKAAAOIAAAIIg6AAIAAACQAAAOAIAJQAHAKALAAQAJAAAGgCQAHgEADgDIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgKQgHAIgBAJIAAABIAvAAIAAgDQAAgJgGgHQgGgHgLAAQgJAAgHAIgAAAglIgTgUIAAgBIAMAAIAOAVg");
	this.shape_243.setTransform(-378.6,-53.4);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgMAKgGQAKgGAPABIASAAIAAgLQAAgJgFgFQgGgFgKAAQgJAAgGAFQgGAEAAAIIgJgBIAAAAQAAgJAJgIQAJgHAMAAQANAAAJAHQAJAHgBAOIABAvIACAIIgKAAIgCgNQgEAHgIAEQgIAEgIAAQgMAAgGgGgAgPAGQgIAFAAAJQAAAGAFAFQAFAEAHAAQAJAAAHgFQAIgEADgIIAAgRIgTAAQgJgBgIAGg");
	this.shape_244.setTransform(-391,-51.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AAxAqIAAgvQgBgQgFgGQgFgGgKAAQgMAAgEAGQgGAHgCALIAAAzIgHAAIAAgvQgBgQgFgGQgFgGgKAAQgLAAgEAFQgHAFgCAIIAAA5IgJAAIAAhSIAIAAIABAOQAEgGAGgFQAIgEAJAAQAKAAAGAEQAFAGACAJQADgJAIgFQAHgFAKAAQAOAAAGAJQAIAJAAASIAAAvg");
	this.shape_245.setTransform(-402.2,-51.9);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRAKgMQALgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAPAIAIQAHAKALAAQAJAAAGgCQAHgEADgDIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgaQgHAIgBAMIAAAAIAvAAIAAgDQAAgLgGgHQgGgHgLAAQgJAAgHAIg");
	this.shape_246.setTransform(-413.3,-51.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADADQADAEAFAAIAEAAIAFgBIABAHIgFABIgHABQgJAAgDgFg");
	this.shape_247.setTransform(-420.1,-52.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgWAkQgIgHAAgKIAAgBIAJAAQAAAJAHAEQAGAEAIAAQAKAAAGgEQAGgEAAgHQAAgGgFgEQgFgEgMgDQgNgDgIgEQgHgGAAgJQAAgKAIgHQAIgGAMAAQAOAAAIAHQAIAHAAAKIAAABIgJAAQAAgHgGgFQgFgFgKAAQgIAAgGAEQgFAFAAAFQAAAGAFAEQAFAFAKACQAQADAHAEQAHAGAAAKQAAAKgIAHQgJAGgOAAQgNAAgJgHg");
	this.shape_248.setTransform(-426.8,-51.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_249.setTransform(-432.6,-53.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgWAkQgIgHAAgKIAAgBIAJAAQABAKAGADQAGAEAIAAQAKAAAGgEQAGgEAAgHQAAgGgFgEQgFgEgMgDQgNgDgIgEQgHgGAAgJQAAgKAIgHQAIgGAMAAQAOAAAIAHQAIAHAAAKIAAABIgJAAQAAgHgFgFQgGgFgKAAQgJAAgEAEQgGAFAAAFQAAAGAFAEQAFAFAKACQAQADAHAEQAHAGAAAKQAAAKgIAHQgIAGgPAAQgMAAgKgHg");
	this.shape_250.setTransform(-438.5,-51.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_251.setTransform(-448.1,-53.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgDA4IAAhvIAHAAIAABvg");
	this.shape_252.setTransform(-452.1,-53.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#0C5EA5").ss(6.2).p("EBGuAXyMiNbAAAQh7AAhWhXQhXhXAAh7MAAAgmRQAAh7BXhXQBWhXB7AAMCNbAAAQB7AABXBXQBWBXAAB7MAAAAmRQAAB7hWBXQhXBXh7AAg");

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("EhGtAXyQh7AAhWhXQhXhXAAh7MAAAgmRQAAh7BXhXQBWhXB7AAMCNbAAAQB7AABXBXQBWBXAAB7MAAAAmRQAAB7hWBXQhXBXh7AAg");

	this.addChild(this.shape_254,this.shape_253,this.shape_252,this.shape_251,this.shape_250,this.shape_249,this.shape_248,this.shape_247,this.shape_246,this.shape_245,this.shape_244,this.shape_243,this.shape_242,this.shape_241,this.shape_240,this.shape_239,this.shape_238,this.shape_237,this.shape_236,this.shape_235,this.shape_234,this.shape_233,this.shape_232,this.shape_231,this.shape_230,this.shape_229,this.shape_228,this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223,this.shape_222,this.shape_221,this.shape_220,this.shape_219,this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-497.6,-155.3,983,310.7);


(lib.popA = function() {
	this.initialize();

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape.setTransform(167.9,40.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAkQgHgHAAgKQAAgLAKgIQAKgEAPgBIATAAIAAgKQgBgJgFgFQgGgFgKAAQgIAAgGAFQgHAFABAHIgJAAIgBgBQABgKAIgHQAJgHAMAAQAPAAAIAHQAIAHAAANIAAAwIACAJIgKAAIgBgIIAAgHQgEAHgIAEQgIAFgIAAQgNAAgGgHgAgPAGQgHAGAAAHQgBAHAFAEQAEAFAJAAQAIgBAIgEQAHgFAEgHIAAgSIgTAAQgKABgIAFg");
	this.shape_1.setTransform(161.7,37);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCAqIgghTIAKAAIAYBHIAAAAIAahHIAJAAIggBTg");
	this.shape_2.setTransform(153.8,37);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_3.setTransform(148.1,35.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWAjQgIgGAAgLIAAAAIAJAAQAAAIAHAFQAIAEAGAAQAKAAAGgFQAGgEAAgGQAAgGgFgFQgEgDgNgEQgMgCgJgEQgHgGAAgJQAAgKAIgGQAIgHAMAAQAPAAAHAHQAIAHAAALIAAAAIgJAAQAAgGgGgGQgFgFgKAAQgJAAgFAEQgFAFAAAGQAAAFAFAEQAEAEALACQAPAEAIADQAHAGAAAKQAAALgIAGQgJAHgOAAQgNAAgJgIg");
	this.shape_4.setTransform(142.2,37);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWAjQgIgGAAgLIAAAAIAJAAQAAAIAHAFQAHAEAHAAQAKAAAGgFQAGgEAAgGQAAgGgFgFQgEgDgNgEQgNgCgIgEQgHgGAAgJQAAgKAIgGQAIgHAMAAQAPAAAHAHQAIAHAAALIAAAAIgJAAQAAgGgFgGQgGgFgKAAQgJAAgEAEQgGAEAAAHQAAAFAFAEQAEAEALACQAPAEAIADQAHAGAAAKQAAALgIAGQgIAHgPAAQgNAAgJgIg");
	this.shape_5.setTransform(134.1,37);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgTALgMQAKgLANAAQAQAAAIAJQAJALAAAPIAAAHIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgFAFgHADQgHADgKAAQgOAAgKgLgAgPgaQgGAIgCALIAwAAIAAgBQAAgLgHgIQgGgHgLAAQgIAAgIAIg");
	this.shape_6.setTransform(126,37);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgXAfQgKgMAAgSIAAgBQAAgSAKgNQAKgLAOAAQAPAAAIAIQAKAJAAAMIgBABIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAJQgGAKAAAPIAAABQAAAPAGAKQAHAJALAAQAKAAAHgFQAHgGAAgJIAIAAIAAABQABAMgKAHQgJAIgOAAQgPAAgJgMg");
	this.shape_7.setTransform(117.8,37);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgMQAJgLAPAAQAPAAAIAIQAJAJAAAMIAAABIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAJQgGALAAAOIAAABQAAAOAGALQAHAJALAAQAKAAAHgFQAHgGAAgJIAIAAIAAABQAAAMgJAHQgKAIgNAAQgOAAgKgMg");
	this.shape_8.setTransform(109.6,37);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgXAhQgHgJgBgTIAAguIAKAAIAAAvQAAAPAFAHQAFAGAKAAQAJAAAFgEQAHgFACgJIAAg5IAJAAIAABSIgIAAIgBgOQgDAIgHADQgHAEgIAAQgMAAgIgJg");
	this.shape_9.setTransform(101,37.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgWAjQgIgGAAgLIAAAAIAJAAQAAAIAHAFQAIAEAGAAQAKAAAGgFQAGgEAAgGQAAgGgFgFQgEgDgNgEQgNgCgIgEQgHgFAAgKQAAgKAIgGQAIgHAMAAQAPAAAHAHQAIAHAAALIAAAAIgJAAQAAgGgGgGQgFgFgKAAQgJAAgFAEQgFAFAAAGQAAAFAFAEQAEAEALACQAPAEAIADQAHAGAAAKQAAALgIAGQgJAHgOAAQgNAAgJgIg");
	this.shape_10.setTransform(92.5,37);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZAkQgHgHAAgKQAAgLAKgIQAKgEAPgBIATAAIAAgKQAAgIgGgGQgGgFgKAAQgHAAgIAFQgFAFAAAHIgJAAIAAgBQgBgKAJgHQAJgHAMAAQAPAAAIAHQAIAHAAANIABAwIABAJIgJAAIgCgIIAAgHQgFAHgIAEQgHAFgIAAQgNAAgGgHgAgPAGQgIAGAAAHQAAAHAFAEQAEAFAJAAQAIgBAHgEQAIgEAEgIIAAgSIgTAAQgKABgIAFg");
	this.shape_11.setTransform(80.3,37);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_12.setTransform(74.3,35.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_13.setTransform(70.7,35.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgXAgQgKgNAAgRIAAgCQAAgSAKgNQALgLAMAAQAQAAAJAJQAJALAAAPIAAAHIg6AAIAAACQAAAOAIAKQAHAJALAAQAIAAAGgCQAHgCAEgFIAEAGQgEAFgIADQgHADgKAAQgOAAgLgLgAgPgaQgHAJgBAKIAvAAIAAgBQAAgMgGgHQgGgHgMAAQgIAAgHAIg");
	this.shape_14.setTransform(64.9,37);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAvQAAAPAFAHQAFAGAKAAQAIAAAHgEQAGgGACgIIAAg5IAKAAIAABSIgIAAIgBgOQgEAHgHAEQgHAEgHAAQgOAAgHgJg");
	this.shape_15.setTransform(56.3,37.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAXA6IAAgrQgDAGgHADQgHAEgGAAQgPAAgIgMQgJgLAAgRIAAgBQAAgUAJgMQAIgMAPAAQAHAAAGADQAGAEAFAGIABgMIAIAAIAABygAgRgnQgFAKAAAQIAAABQAAAOAFAJQAGAJALAAQAIAAAHgEQAFgEADgHIAAgnQgDgHgFgEQgGgEgJAAQgLAAgGAKg");
	this.shape_16.setTransform(47.3,38.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgTALgMQAKgLANAAQAPAAAJAJQAJALAAAPIAAAHIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgEAFgIADQgHADgKAAQgOAAgKgLgAgPgaQgGAIgCALIAwAAIAAgBQAAgMgHgHQgGgHgLAAQgIAAgIAIg");
	this.shape_17.setTransform(35.1,37);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgTALgMQAKgLANAAQAPAAAJAJQAJAKAAAQIAAAHIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgEAFgIADQgHADgKAAQgOAAgKgLgAgOgaQgHAHgCAMIAwAAIAAgBQAAgMgHgHQgFgHgMAAQgIAAgHAIg");
	this.shape_18.setTransform(23.1,37);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgWAjQgIgGAAgLIAAAAIAJAAQAAAIAHAFQAHAEAHAAQAKAAAGgFQAGgEAAgGQAAgGgFgFQgEgDgNgEQgNgCgIgEQgHgGAAgJQAAgKAIgGQAIgHAMAAQAPAAAHAHQAIAHAAALIAAAAIgJAAQAAgGgFgGQgGgFgKAAQgJAAgFAEQgFAFAAAGQAAAFAFAEQAEAEALACQAPAEAIADQAHAGAAAKQAAALgIAGQgJAHgOAAQgNAAgJgIg");
	this.shape_19.setTransform(14.9,37);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAJgEAQgBIATAAIAAgKQAAgIgHgGQgFgFgKAAQgJAAgFAFQgHAEAAAIIgJAAIAAgBQgBgJAKgIQAJgHAMAAQAOAAAIAHQAIAHAAANIABAwIACAJIgKAAIgBgPQgEAHgJAEQgIAFgHAAQgNAAgGgHgAgPAGQgIAGAAAHQAAAHAEAEQAFAFAJAAQAIgBAIgEQAGgEAFgIIAAgSIgTAAQgLABgHAFg");
	this.shape_20.setTransform(6.5,37);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgJA9IAAhKIgOAAIAAgIIAOAAIAAgNQAAgNAHgGQAEgHALAAIALACIgBAIIgEgCIgFAAQgHAAgEAFQgDAFAAAIIAAANIATAAIAAAIIgTAAIAABKg");
	this.shape_21.setTransform(0,35.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgZAkQgHgHAAgKQAAgLAKgIQAKgEAPgBIATAAIAAgKQAAgIgGgGQgGgFgKAAQgIAAgGAFQgHAFAAAHIgIAAIgBgBQABgKAIgHQAJgHAMAAQAPAAAHAHQAJAHAAANIAAAwIACAJIgKAAIgBgIIAAgHQgFAHgHAEQgIAFgIAAQgNAAgGgHgAgPAGQgHAGAAAHQgBAHAFAEQAEAFAJAAQAIgBAIgEQAHgEAEgIIAAgSIgTAAQgKABgIAFg");
	this.shape_22.setTransform(-11.1,37);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgHQgGgFgJAAQgJAAgFAFQgHAFgCAIIAAA5IgJAAIAAhSIAIAAIABAPQADgHAHgFQAIgEAHAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_23.setTransform(-19.7,36.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgXAhQgIgIAAgUIAAguIAKAAIAAAvQAAAPAFAHQAFAGAKAAQAJAAAGgEQAGgGACgIIAAg5IAKAAIAABSIgIAAIgBgOQgEAHgHAEQgHAEgHAAQgNAAgIgJg");
	this.shape_24.setTransform(-28.6,37.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAJgEAQgBIATAAIAAgKQAAgIgHgGQgFgFgKAAQgJAAgFAFQgHAEAAAIIgJAAIAAgBQAAgJAJgIQAJgHAMAAQAOAAAIAHQAIAHAAANIABAwIACAJIgKAAIgBgPQgEAHgJAEQgIAFgHAAQgNAAgGgHgAgPAGQgIAGAAAHQAAAHAEAEQAFAFAJAAQAIgBAIgEQAGgEAFgIIAAgSIgTAAQgLABgHAFg");
	this.shape_25.setTransform(-41.2,37);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQACgHAHgFQAFgEAIAAIAEAAIACAAIgBAJIgHAAQgJAAgDAFQgGAEgCAJIAAA4g");
	this.shape_26.setTransform(-47.5,36.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADAEQADADAFAAIAJgBIABAHIgFACIgHAAQgJAAgDgGg");
	this.shape_27.setTransform(-53.5,36);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgZAkQgHgHAAgKQAAgLAKgIQAKgEAPgBIASAAIAAgKQABgJgGgFQgFgFgLAAQgHAAgIAFQgFAFgBAHIgJAAIAAgBQAAgKAJgHQAJgHAMAAQAPAAAHAHQAJAHAAANIAAAoIACARIgJAAIgCgIIgBgHQgDAHgIAEQgJAFgHAAQgMAAgHgHgAgPAGQgIAGAAAHQAAAHAFAEQAEAFAJAAQAIgBAHgEQAJgFACgHIAAgSIgSAAQgKABgIAFg");
	this.shape_28.setTransform(-64.3,37);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AggAqIAAgHIAxhEIgvAAIAAgIIA6AAIAAAHIgwBEIA1AAIAAAIg");
	this.shape_29.setTransform(-72.2,37);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgHQgGgFgJAAQgJAAgFAFQgGAFgDAIIAAA5IgKAAIAAhSIAJAAIABAPQAEgIAGgEQAHgEAIAAQAOAAAGAIQAIAJAAARIAAAxg");
	this.shape_30.setTransform(-80.6,36.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgXAgQgKgMAAgSIAAgCQAAgTAKgMQALgLAMAAQAQAAAJAJQAJALAAAPIAAAHIg6AAIAAACQAAAOAIAKQAHAJALAAQAIAAAGgCQAGgCAFgFIAEAGQgEAFgIADQgHADgKAAQgOAAgLgLgAgPgaQgHAJgBAKIAvAAIAAgBQAAgMgGgHQgGgHgMAAQgIAAgHAIg");
	this.shape_31.setTransform(-89.1,37);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAHAAIAAAVIATAAIAAAIIgTAAIAAA0QAAAJADAEQAEADAEAAIAKgBIABAHIgGACIgGAAQgJAAgDgGg");
	this.shape_32.setTransform(-95.9,36);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgZAkQgHgHAAgKQAAgLAKgIQAJgEAQgBIASAAIAAgKQABgJgGgFQgFgFgLAAQgIAAgHAFQgGAFAAAHIgIAAIAAgBQgBgKAJgHQAJgHAMAAQAPAAAIAHQAIAHAAANIABAwIABAJIgJAAIgCgIIgBgHQgDAHgJAEQgHAFgIAAQgNAAgGgHgAgPAGQgIAGAAAHQAAAHAFAEQAEAFAJAAQAIgBAHgEQAJgFACgHIAAgSIgSAAQgKABgIAFg");
	this.shape_33.setTransform(-102.9,37);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_34.setTransform(-108.8,35.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_35.setTransform(-116.3,35.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgYAxQgIgLAAgTIAAgBQAAgSAIgMQAJgMAPAAQAHAAAGADQAGAEAFAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgIAEgFAAQgPAAgJgMgAgRgGQgGAIAAAQIAAABQAAAQAGAJQAGAJALAAQAIAAAGgEQAHgEADgHIAAgmQgDgHgGgFQgGgEgJAAQgLAAgGAKg");
	this.shape_36.setTransform(-122.7,35.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_37.setTransform(-132.6,35.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAFgHAGgEQAFgDAIAAQAQAAAIAMQAIALAAAVIAAABQAAASgIAKQgJAMgPAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgGAEgDAIIAAAmQADAHAGAEQAHAEAHAAQAMAAAGgJQAGgKAAgNIAAgBQAAgQgGgKQgHgKgLAAQgIAAgGAEg");
	this.shape_38.setTransform(-138.7,38.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAxAqIAAgvQAAgQgGgGQgFgGgKAAQgLAAgFAGQgHAHgBALIAAAzIgHAAIAAgvQgBgQgFgGQgFgGgKAAQgLAAgEAFQgGAEgDAJIAAA5IgJAAIAAhSIAIAAIABAOQAEgHAGgEQAHgEAKAAQAKAAAGAEQAFAFACAJQAEgJAHgEQAGgFALAAQAOAAAGAJQAIAIAAATIAAAvg");
	this.shape_39.setTransform(-150.3,36.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgSAKgNQALgLANAAQAPAAAJAJQAJALAAAPIAAAHIg6AAIAAACQAAAOAIAKQAHAJALAAQAHAAAIgCQAFgCAFgFIAEAGQgEAFgIADQgHADgKAAQgOAAgKgLgAgPgaQgHAJgBAKIAvAAIAAgBQAAgLgGgIQgGgHgLAAQgJAAgHAIg");
	this.shape_40.setTransform(-161.4,37);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADAEQADADAFAAIAJgBIABAHIgFACIgHAAQgJAAgDgGg");
	this.shape_41.setTransform(-168.2,36);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_42.setTransform(-176.4,35.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgZAfQgLgNAAgSIAAAAQAAgSALgNQAKgLAPAAQAQAAALALQAJANABASIAAAAQgBASgJANQgLAMgQAAQgPAAgKgMgAgTgYQgIAKAAAOIAAAAQAAAQAIAJQAHAKAMAAQANAAAHgKQAIgJAAgQIAAAAQAAgOgIgKQgHgKgNAAQgMAAgHAKg");
	this.shape_43.setTransform(-186.5,37);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgYAxQgIgLAAgTIAAgBQAAgSAIgMQAJgMAPAAQAHAAAGADQAHAFAEAGIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgIAEgFAAQgPAAgJgMgAgRgGQgGAIAAAQIAAABQAAAQAGAJQAGAJALAAQAIAAAHgEQAFgEAEgHIAAgmQgDgHgGgFQgFgEgKAAQgLAAgGAKg");
	this.shape_44.setTransform(-195.6,35.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgGgGQgFgFgJAAQgJAAgFAFQgHAFgCAIIAAA5IgJAAIAAhSIAIAAIABAPQAEgIAGgEQAIgEAHAAQANAAAHAIQAIAJgBARIAAAxg");
	this.shape_45.setTransform(-204.2,36.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgZAkQgHgHAAgKQAAgLAKgIQAKgEAQgBIASAAIAAgKQAAgIgGgGQgGgFgKAAQgIAAgGAFQgHAEABAIIgJAAIAAgBQAAgJAJgIQAIgHAMAAQAPAAAIAHQAIAHAAANIABAwIABAJIgJAAIgCgIIAAgHQgFAHgIAEQgIAFgHAAQgNAAgGgHgAgPAGQgIAGAAAHQAAAHAFAEQAEAFAJAAQAIgBAHgEQAIgEAEgIIAAgSIgTAAQgKABgIAFg");
	this.shape_46.setTransform(-213,37);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgHAGgFQAFgEAIAAIAEAAIACAAIgBAJIgHAAQgJAAgDAFQgFAEgDAJIAAA4g");
	this.shape_47.setTransform(-219.4,36.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgTALgMQAKgLANAAQAQAAAIAJQAJALAAAPIAAAHIg6AAIAAACQAAANAIALQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgFAFgHADQgHADgKAAQgOAAgKgLgAgPgaQgHAJgBAKIAwAAIAAgBQAAgLgHgIQgGgHgLAAQgJAAgHAIg");
	this.shape_48.setTransform(-226.6,37);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AggAqIAAgHIAxhEIgvAAIAAgIIA6AAIAAAHIgwBEIA1AAIAAAIg");
	this.shape_49.setTransform(-234.4,37);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgfAqIAAgHIAwhEIgvAAIAAgIIA7AAIAAAHIgxBEIA1AAIAAAIg");
	this.shape_50.setTransform(-242.2,37);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgMAKgHQAJgEAQgBIATAAIAAgKQAAgIgHgGQgEgFgLAAQgIAAgGAFQgHAEAAAIIgIAAIAAgBQgBgJAJgIQAJgHAMAAQAPAAAHAHQAJAHAAANIAAAwIACAJIgKAAIgBgPQgEAHgJAEQgIAFgHAAQgNAAgHgHgAgPAGQgIAGAAAHQAAAHAEAEQAFAFAJAAQAHgBAJgEQAHgEAEgIIAAgSIgTAAQgLABgHAFg");
	this.shape_51.setTransform(-250.5,37);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgTALgMQAKgLANAAQAQAAAIAJQAJALAAAPIAAAHIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgFAFgHADQgHADgKAAQgOAAgKgLgAgPgaQgGAIgCALIAwAAIAAgBQAAgLgHgIQgGgHgLAAQgIAAgIAIg");
	this.shape_52.setTransform(-262.6,37);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgCAqIgghTIAJAAIAYA9IABAKIAAAAIAZhHIAKAAIggBTg");
	this.shape_53.setTransform(-270.5,37);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_54.setTransform(-276.2,35.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAHAAIAAAVIATAAIAAAIIgTAAIAAA0QAAAJADAEQAEADAEAAIAKgBIABAHIgGACIgGAAQgJAAgDgGg");
	this.shape_55.setTransform(-280.7,36);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgLAKgIQAJgEAQgBIASAAIAAgKQAAgIgFgGQgGgFgKAAQgIAAgGAFQgHAFAAAHIgJAAIAAgBQgBgJAKgIQAJgHAMAAQAPAAAHAHQAJAHAAANIAAAwIACAJIgKAAIgBgIIgBgHQgEAHgIAEQgHAFgIAAQgMAAgHgHgAgPAGQgIAFAAAIQAAAHAFAEQAEAFAJAAQAIgBAIgEQAHgFADgHIAAgSIgSAAQgKABgIAFg");
	this.shape_56.setTransform(-287.7,37);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQAEgIAFgEQAFgEAJAAIADAAIACAAIgBAJIgHAAQgIAAgEAFQgGAFgCAIIAAA4g");
	this.shape_57.setTransform(-294,36.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgXAgQgKgMAAgSIAAgCQAAgTAKgMQALgLAMAAQAQAAAJAJQAJALAAAPIAAAHIg6AAIAAACQAAAOAIAKQAHAJALAAQAIAAAGgCQAHgCAEgFIAEAGQgEAFgIADQgHADgKAAQgOAAgLgLgAgPgaQgHAJgBAKIAvAAIAAgBQAAgMgGgHQgGgHgMAAQgIAAgHAIg");
	this.shape_58.setTransform(-301.3,37);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AggA6IAAhyIAHAAIACANQAEgHAGgEQAHgDAHAAQAQAAAIAMQAIAMAAAUIAAABQAAARgIALQgJAMgPAAQgHAAgGgEQgGgCgFgHIAAArgAgOgtQgGAEgDAIIAAAmQADAHAGAEQAHAEAHAAQALAAAHgJQAGgJAAgOIAAgBQAAgQgGgKQgHgKgLAAQgIAAgGAEg");
	this.shape_59.setTransform(-309.7,38.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgaAfQgKgNAAgSIAAAAQAAgSAKgNQALgLAPAAQAQAAAKALQAKANAAASIAAAAQAAASgKANQgKAMgQAAQgPAAgLgMgAgTgYQgHAKgBAOIAAAAQABAQAHAJQAHAKAMAAQAMAAAIgKQAIgJgBgQIAAAAQABgOgIgKQgHgKgNAAQgMAAgHAKg");
	this.shape_60.setTransform(-318.7,37);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_61.setTransform(-328.8,35.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAXAqIAAgxQAAgOgGgHQgGgFgKAAQgHAAgGAFQgHAFgCAIIAAA5IgJAAIAAhSIAHAAIACAPQAEgIAHgEQAGgEAIAAQAOAAAHAIQAGAIABASIAAAxg");
	this.shape_62.setTransform(-335,36.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgZAfQgKgNAAgSIAAAAQAAgSAKgNQAKgLAPAAQAQAAALALQAKANAAASIAAAAQAAAUgKALQgKAMgRAAQgPAAgKgMgAgTgYQgIAKABAOIAAAAQgBAQAIAJQAIAKALAAQANAAAHgKQAHgJABgQIAAAAQgBgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_63.setTransform(-343.8,37);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_64.setTransform(-350.1,35.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgWAjQgIgHAAgKIAAAAIAJAAQAAAIAHAFQAHAEAHAAQAKAAAGgFQAGgEAAgGQAAgGgFgFQgEgDgNgEQgNgCgHgEQgIgFAAgKQAAgKAJgGQAHgHAMAAQAPAAAHAHQAJAHgBALIAAAAIgIAAQAAgGgGgGQgGgFgKAAQgJAAgEAEQgFAEAAAHQAAAFAEAEQAEAEAMACQAPAEAHADQAHAGAAAKQAAALgIAGQgIAHgPAAQgNAAgJgIg");
	this.shape_65.setTransform(-356,37);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_66.setTransform(-361.7,35.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgMQAKgLAPAAQANAAAKAIQAJAJgBAMIAAABIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAJQgHAKAAAPIAAABQAAAPAHAKQAGAJAMAAQAJAAAHgFQAHgFAAgKIAIAAIAAABQABAMgKAHQgJAIgNAAQgQAAgJgMg");
	this.shape_67.setTransform(-367.7,37);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgTALgMQAKgLANAAQAPAAAJAJQAJALAAAPIAAAHIg6AAIAAACQAAAOAIAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgFAFgHADQgHADgKAAQgOAAgKgLgAgPgaQgHAJgBAKIAvAAIAAgBQAAgLgGgIQgGgHgLAAQgJAAgHAIg");
	this.shape_68.setTransform(-375.8,37);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgYAxQgIgLAAgTIAAgBQAAgSAIgMQAJgMAPAAQAHAAAGADQAGAEAFAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgIAEgFAAQgPAAgJgMgAgRgGQgGAIAAAQIAAABQAAAQAGAJQAGAJALAAQAIAAAGgEQAHgEADgHIAAgmQgDgHgGgFQgGgEgJAAQgLAAgGAKg");
	this.shape_69.setTransform(-384.6,35.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgTALgMQAKgLANAAQAPAAAJAJQAJALAAAPIAAAHIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgEAFgIADQgHADgKAAQgOAAgKgLgAgPgaQgGAIgCALIAwAAIAAgBQAAgMgHgHQgGgHgLAAQgIAAgIAIg");
	this.shape_70.setTransform(-396.7,37);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQADgIAGgEQAGgEAHAAIAEAAIADAAIgBAJIgHAAQgKAAgDAFQgGAEgCAJIAAA4g");
	this.shape_71.setTransform(-402.9,36.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgXAgQgKgNAAgRIAAgCQAAgTAKgMQALgLAMAAQAQAAAJAJQAJALAAAPIAAAHIg6AAIAAACQAAAOAIAKQAHAJALAAQAIAAAHgCQAFgCAFgFIAEAGQgEAFgIADQgHADgKAAQgOAAgLgLgAgPgaQgGAHgCAMIAwAAIAAgBQgBgMgGgHQgGgHgMAAQgIAAgHAIg");
	this.shape_72.setTransform(-410.1,37);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgYAxQgIgKAAgUIAAgBQAAgTAIgLQAJgMAPAAQAHAAAGADQAGAEAFAHIAAgyIAJAAIAAB3IgIAAIgBgMQgDAGgIAEQgHAEgGAAQgPAAgJgMgAgQgGQgHAHAAARIAAABQAAAQAGAJQAGAJALAAQAIAAAHgEQAFgDAEgIIAAgmQgEgHgFgFQgGgEgJAAQgLAAgFAKg");
	this.shape_73.setTransform(-418.9,35.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAWAqIAAgxQABgOgGgHQgFgFgLAAQgHAAgHAFQgGAFgCAIIAAA5IgKAAIAAhSIAJAAIAAAPQAFgIAGgEQAIgEAGAAQAPAAAHAIQAGAIAAASIAAAxg");
	this.shape_74.setTransform(-427.5,36.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgTALgMQAKgLANAAQAPAAAJAJQAJALAAAPIAAAHIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgEAFgIADQgHADgKAAQgOAAgKgLgAgOgaQgHAHgCAMIAwAAIAAgBQAAgMgHgHQgGgHgLAAQgIAAgHAIg");
	this.shape_75.setTransform(-436,37);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQAEgIAFgEQAFgEAJAAIADAAIACAAIgBAJIgHAAQgJAAgDAFQgFAEgDAJIAAA4g");
	this.shape_76.setTransform(-442.2,36.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AghA6IAAhyIAIAAIABANQAFgHAHgEQAGgDAHAAQAPAAAJAMQAIAMABAUIAAABQgBARgIALQgJAMgPAAQgHAAgGgEQgGgCgFgHIAAArgAgOgtQgGAEgDAIIAAAmQADAHAGAEQAGAEAIAAQAMAAAFgJQAHgJAAgOIAAgBQAAgRgHgJQgFgKgMAAQgJAAgFAEg");
	this.shape_77.setTransform(-449.6,38.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRALgMQAKgMANAAQAPAAAJAKQAJAIAAARIAAAHIg5AAIAAACQAAAOAHAJQAIAKAKAAQAIAAAHgDQAFgBAFgGIAEAHQgEAFgIADQgHADgKAAQgOAAgKgMgAgOgbQgHAIgCAMIABAAIAvAAIAAgCQAAgLgHgHQgGgIgLAAQgIABgHAHg");
	this.shape_78.setTransform(433.9,18);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgGARIAGgUIAAgNIAHAAIAAAOIgHATg");
	this.shape_79.setTransform(424.3,22.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_80.setTransform(421.1,16.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgGQgGgFgJgBQgIAAgGAGQgHAGgCAHIAAA5IgJAAIAAhRIAIAAIABAOQADgIAIgEQAFgEAJAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_81.setTransform(414.9,17.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgZAfQgLgMAAgTIAAAAQAAgTALgLQAJgMAQAAQARAAAKAMQAKAMAAASIAAAAQAAATgKAMQgLAMgQAAQgPAAgKgMgAgTgZQgHALAAAOIAAAAQAAAQAHAJQAIAKALAAQANAAAHgKQAHgKAAgPIAAAAQAAgNgHgMQgHgJgNgBQgLABgIAJg");
	this.shape_82.setTransform(406,18);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_83.setTransform(399.8,16.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AggApIAAgGIAxhEIgvAAIAAgHIA6AAIAAAGIgwBEIA1AAIAAAHg");
	this.shape_84.setTransform(394.3,17.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAKgEAPAAIASAAIAAgLQAAgKgFgEQgHgGgJAAQgHABgHAFQgHAFAAAGIgIAAIgBAAQAAgKAJgHQAJgHAMAAQAPAAAHAHQAJAHAAANIAAAwIACAIIgKAAIgBgHIgBgHQgEAHgHAFQgJAEgHAAQgLAAgIgHgAgPAGQgHAFAAAIQAAAHAEAFQAFADAIAAQAIABAIgFQAHgFADgHIAAgSIgSAAQgLAAgHAGg");
	this.shape_85.setTransform(385.9,18);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgFgHgKAAQgLABgGAGQgGAIgBAKIAAAzIgHAAIAAgvQAAgPgGgHQgGgGgJgBQgJABgHAFQgFAEgDAJIAAA5IgJAAIAAhRIAIAAIABANQAEgHAHgEQAGgEAKAAQAKAAAGAEQAFAEACALQAEgKAHgEQAHgFAKAAQANAAAIAIQAHAJAAAUIAAAug");
	this.shape_86.setTransform(374.7,17.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgSAqIAAhRIAIAAIABANIAAABQAEgIAFgEQAEgEAJAAIAEAAIACABIgBAJIgHgBQgJAAgDAFQgFAEgDAKIAAA3g");
	this.shape_87.setTransform(365.5,17.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgZAfQgLgMABgTIAAAAQgBgSALgMQAKgMAPAAQAQAAALAMQAKALAAATIAAAAQAAAUgKALQgKAMgRAAQgPAAgKgMgAgTgZQgHALAAAOIAAAAQAAAQAHAJQAIAKALAAQAMAAAIgKQAHgJAAgQIAAAAQAAgOgHgLQgIgJgMgBQgLABgIAJg");
	this.shape_88.setTransform(357.8,18);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgJA9IAAhKIgOAAIAAgIIAOAAIAAgMQAAgMAGgIQAEgHAMAAIALACIgCAIIgDgBIgFAAQgIAAgEAEQgCAGAAAIIAAAMIASAAIAAAIIgSAAIAABKg");
	this.shape_89.setTransform(351.1,16);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAWAqIAAgxQABgOgGgHQgFgFgKgBQgIAAgHAGQgGAGgCAHIAAA5IgKAAIAAhRIAJAAIAAAOQAFgIAGgEQAHgEAIAAQAOAAAHAIQAGAHAAATIAAAxg");
	this.shape_90.setTransform(343.8,17.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_91.setTransform(337.5,16.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_92.setTransform(330.1,16.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgWAjQgIgGAAgLIAAgBIAJAAQAAAKAHAEQAHAEAHAAQAKAAAGgEQAGgFAAgGQAAgGgFgFQgFgEgMgCQgOgDgHgEQgHgGAAgKQAAgJAIgHQAIgGAMAAQAPAAAHAHQAIAGAAALIAAABIgJAAQAAgHgFgFQgHgGgJAAQgJAAgEAFQgGAFAAAFQAAAGAFAEQAEAEALADQAOACAJAFQAHAFAAALQAAAJgIAHQgJAHgOAAQgNAAgJgIg");
	this.shape_93.setTransform(324.2,18);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgTAqIAAhRIAIAAIABANIAAABQAEgHAGgFQAEgEAJAAIAEAAIADABIgCAJIgHgBQgJAAgEAFQgEAEgEAKIAAA3g");
	this.shape_94.setTransform(318,17.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgMAKgHQAJgEAQAAIATAAIAAgLQgBgJgFgFQgGgGgKAAQgIABgHAFQgGAEAAAHIgIAAIAAAAQgBgKAJgHQAKgHALAAQAPAAAHAHQAJAGAAAOIAAAwIACAIIgKAAIgBgOQgFAGgIAGQgIAEgIAAQgLAAgIgHgAgQAGQgHAFAAAIQAAAHAEAFQAGADAHAAQAJABAHgFQAHgFAFgHIAAgSIgTAAQgLAAgIAGg");
	this.shape_95.setTransform(310.4,18);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_96.setTransform(304.4,16.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgMA5QgIgEgDgHIgBANIgIAAIAAh3IAJAAIAAAyQAEgHAHgEQAGgDAHAAQAQAAAIAMQAIALAAATIAAABQAAAUgIAKQgJAMgPAAQgHAAgGgEgAgOgMQgGAFgDAHIAAAlQADAIAGADQAGAFAIAAQAMAAAGgJQAGgJAAgQIAAgBQAAgQgGgIQgGgLgMAAQgIAAgGAFg");
	this.shape_97.setTransform(298.4,16.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAxAqIAAgvQAAgQgGgGQgGgHgJAAQgLABgFAGQgGAIgCAKIAAAzIgHAAIAAgvQAAgPgGgHQgGgGgJgBQgKABgFAFQgGAEgDAJIAAA5IgJAAIAAhRIAIAAIABANQAEgHAHgEQAGgEAKAAQAKAAAGAEQAFAFACAKQADgJAIgFQAHgFAKAAQAOAAAGAIQAIAJAAAUIAAAug");
	this.shape_98.setTransform(286.8,17.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAKgEAPAAIATAAIAAgLQAAgJgGgFQgHgGgJAAQgIABgGAFQgHAEAAAHIgIAAIAAAAQgBgKAJgHQAKgHALAAQAPAAAHAHQAJAGAAAOIAAAwIACAIIgKAAIgBgOQgEAGgJAGQgHAEgIAAQgMAAgHgHgAgPAGQgIAFAAAIQAAAHAFAFQAFADAIAAQAIABAIgFQAHgFAEgHIAAgSIgTAAQgLAAgHAGg");
	this.shape_99.setTransform(275.3,18);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgCQAAgSAJgLQAJgMAPAAQAPAAAIAIQAKAJgBANIAAAAIgIAAQAAgKgHgHQgGgFgLgBQgLABgHAJQgGAKAAAOIAAACQAAAPAGAJQAHAKAMAAQAJAAAHgFQAHgGAAgJIAIAAIAAAAQABAMgKAIQgKAIgMAAQgQAAgJgMg");
	this.shape_100.setTransform(267.1,18);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgWAjQgIgGAAgLIAAgBIAJAAQAAAKAHAEQAHAEAHAAQALAAAFgEQAGgFAAgGQAAgGgFgFQgFgEgMgCQgOgDgHgEQgHgFAAgLQAAgJAIgHQAIgGAMAAQAPAAAHAHQAIAGAAALIAAABIgJAAQAAgHgGgFQgGgGgJAAQgIAAgGAFQgFAFAAAFQAAAGAFAEQAEAEALADQAOACAJAFQAHAFAAALQAAAJgIAHQgKAHgNAAQgNAAgJgIg");
	this.shape_101.setTransform(258.9,18);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgGARIAGgUIAAgNIAHAAIAAAOIgHATg");
	this.shape_102.setTransform(249.3,22.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRAKgMQAKgMAOAAQAPAAAJAKQAJAJAAAQIAAAHIg6AAIAAACQAAAOAIAJQAHAKALAAQAHAAAIgDQAGgCAEgFIAEAHQgEAFgIADQgHADgKAAQgOAAgKgMgAgPgbQgHAJgBALIAAAAIAvAAIAAgCQAAgLgGgHQgGgIgLAAQgJABgHAHg");
	this.shape_103.setTransform(243.9,18);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgSAqIAAhRIAIAAIABANIAAABQADgHAGgFQAEgEAJAAIAEAAIACABIgBAJIgHgBQgJAAgDAFQgGAEgCAKIAAA3g");
	this.shape_104.setTransform(237.8,17.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAJgEAQAAIASAAIAAgLQABgJgHgFQgFgGgKAAQgIABgGAFQgHAEAAAHIgJAAIAAAAQAAgKAJgHQAJgHAMAAQAOAAAIAHQAIAGABAOIAAAwIACAIIgKAAIgCgOQgDAGgJAGQgIAEgHAAQgMAAgHgHgAgPAGQgIAFAAAIQAAAHAEAFQAGADAIAAQAIABAIgFQAGgFAEgHIAAgSIgSAAQgMAAgGAGg");
	this.shape_105.setTransform(230.2,18);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgSAqIAAhRIAIAAIABANIAAABQADgHAGgFQAEgEAJAAIAEAAIACABIgBAJIgHgBQgJAAgDAFQgFAEgDAKIAAA3g");
	this.shape_106.setTransform(223.8,17.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgZAfQgLgMABgTIAAAAQgBgSALgMQAKgMAPAAQAQAAAKAMQALAMgBASIAAAAQABATgLAMQgJAMgRAAQgPAAgKgMgAgTgZQgHALAAAOIAAAAQAAAQAHAJQAIAKALAAQAMAAAIgKQAHgJAAgQIAAAAQAAgOgHgLQgIgJgMgBQgLABgIAJg");
	this.shape_107.setTransform(216.2,18);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgNA5QgGgEgFgHIgBANIgIAAIAAh3IAKAAIAAAyQAEgHAGgEQAHgDAHAAQAPAAAJAMQAJAMAAASIAAABQAAATgJALQgJAMgPAAQgHAAgHgEgAgPgMQgFAFgDAHIAAAlQADAIAGADQAHAFAHAAQAMAAAGgJQAGgJAAgQIAAgBQAAgRgGgHQgHgLgLAAQgIAAgHAFg");
	this.shape_108.setTransform(207.5,16.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAKgEAPAAIASAAIAAgLQABgKgGgEQgGgGgKAAQgHABgIAFQgFAFgBAGIgIAAIgBAAQAAgKAJgHQAKgHALAAQAPAAAHAHQAJAHAAANIAAAwIACAIIgJAAIgCgHIgBgHQgDAHgIAFQgJAEgHAAQgLAAgIgHgAgPAGQgIAFAAAIQAAAHAFAFQAFADAIAAQAIABAHgFQAJgFACgHIAAgSIgSAAQgLAAgHAGg");
	this.shape_109.setTransform(198.5,18);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_110.setTransform(192.6,16.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_111.setTransform(189,16.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgZAfQgLgMAAgTIAAAAQAAgTALgLQAJgMAQAAQARAAAJAMQALALAAATIAAAAQAAATgLAMQgJAMgRAAQgPAAgKgMgAgTgZQgHALAAAOIAAAAQAAAQAHAJQAHAKAMAAQANAAAHgKQAHgJAAgQIAAAAQAAgOgHgLQgIgJgMgBQgMABgHAJg");
	this.shape_112.setTransform(182.7,18);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgCQAAgRAJgMQAJgMAPAAQAPAAAIAIQAJAJAAANIAAAAIgIAAQAAgKgHgHQgHgFgKgBQgLABgHAJQgGALAAANIAAACQAAAOAGAKQAHAKALAAQAJAAAIgFQAHgGAAgJIAIAAIAAAAQAAAMgJAIQgKAIgNAAQgOAAgKgMg");
	this.shape_113.setTransform(174.2,18);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_114.setTransform(164.4,16.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgYAxQgIgKAAgUIAAgBQAAgTAIgLQAJgMAPAAQAHAAAGADQAGAEAFAHIAAgyIAJAAIAAB3IgIAAIgBgMQgDAHgIADQgHAEgGAAQgPAAgJgMgAgQgGQgHAHAAARIAAABQAAAQAGAJQAHAJAKAAQAIAAAHgEQAGgFADgHIAAglQgCgHgHgFQgGgFgJAAQgLAAgFALg");
	this.shape_115.setTransform(158,16.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgaAfQgKgLABgUIAAAAQgBgTAKgLQAKgMAQAAQAQAAALAMQAKAMgBASIAAAAQABATgKAMQgLAMgQAAQgPAAgLgMgAgTgZQgHALAAAOIAAAAQAAAQAHAJQAIAKALAAQAMAAAIgKQAHgJAAgQIAAAAQAAgOgHgLQgIgJgMgBQgLABgIAJg");
	this.shape_116.setTransform(145.5,18);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_117.setTransform(139.3,16.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_118.setTransform(135.7,16.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgZAfQgKgLAAgUIAAAAQAAgTAKgLQAJgMAQAAQAQAAALAMQAJAMABASIAAAAQgBATgJAMQgLAMgQAAQgQAAgJgMgAgTgZQgIALABAOIAAAAQgBAQAIAJQAHAKAMAAQANAAAHgKQAIgJAAgQIAAAAQAAgOgIgLQgHgJgNgBQgMABgHAJg");
	this.shape_119.setTransform(129.5,18);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgcAsQgMgOAAgVIAAgRQAAgVAMgOQAMgOAQAAQASAAALAKQAKAKACARIAAAAIgJAAQgCgOgIgHQgHgIgPAAQgMAAgJAMQgJALAAASIAAARQAAASAJALQAJAMAMAAQAPAAAHgIQAIgGACgPIAJAAIAAAAQgCARgKAKQgLAKgSAAQgQAAgMgOg");
	this.shape_120.setTransform(120,16.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgRAEIAAgGIAjAAIAAAGg");
	this.shape_121.setTransform(112.6,17.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAKgEAPAAIASAAIAAgLQABgKgGgEQgHgGgJAAQgHABgIAFQgFAFAAAGIgJAAIAAAAQgBgKAJgHQAKgHALAAQAPAAAIAHQAIAHAAANIABAwIABAIIgJAAIgCgHIgBgHQgDAHgJAFQgIAEgHAAQgMAAgHgHgAgPAGQgIAFAAAIQAAAHAFAFQAFADAIAAQAIABAHgFQAJgFACgHIAAgSIgSAAQgLAAgHAGg");
	this.shape_122.setTransform(105.9,18);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgCAwQgFgHAAgLIAAg1IgOAAIAAgHIAOAAIAAgWIAHAAIAAAWIATAAIAAAHIgTAAIAAA1QAAAIADAEQADACAFAAIAKAAIABAHIgGABIgGABQgJAAgDgFg");
	this.shape_123.setTransform(99.1,17);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgVAjQgJgHAAgKIAAgBIAJAAQAAAKAHAEQAHAEAIAAQAKAAAFgEQAGgFAAgGQAAgGgFgFQgEgEgNgCQgPgDgFgEQgHgFAAgLQAAgJAIgHQAIgGALAAQAPAAAIAHQAIAHgBAKIAAABIgIAAQAAgHgGgFQgHgGgJAAQgIAAgFAFQgFAFAAAFQAAAGAEAEQAFAEALADQANACAJAFQAHAFAAALQAAAKgIAGQgJAHgNAAQgOAAgIgIg");
	this.shape_124.setTransform(92.4,18);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgXAfQgKgLAAgSIAAgDQAAgRAKgMQAKgMANAAQAQAAAJAKQAJAJAAAQIAAAHIg6AAIAAACQAAAOAIAJQAHAKALAAQAIAAAGgDQAHgBAEgGIAEAHQgEAFgIADQgHADgKAAQgOAAgLgMgAgPgbQgHAJgBALIAAAAIAvAAIAAgCQAAgLgGgHQgGgIgMAAQgIABgHAHg");
	this.shape_125.setTransform(84.4,18);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgDA4IAAhnIgnAAIAAgIIBVAAIAAAIIgnAAIAABng");
	this.shape_126.setTransform(76.3,16.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgZAfQgKgLAAgUIAAAAQAAgTAKgLQAJgMAQAAQAQAAALAMQAJAMABASIAAAAQgBATgJAMQgLAMgQAAQgPAAgKgMgAgTgZQgIALABAOIAAAAQgBAQAIAJQAHAKAMAAQANAAAHgKQAIgJAAgQIAAAAQAAgOgIgLQgHgJgNgBQgMABgHAJg");
	this.shape_127.setTransform(63.3,18);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADAEQADACAFAAIAJAAIABAHIgFABIgHABQgIAAgEgFg");
	this.shape_128.setTransform(56.3,17);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAHAAIAAAWIATAAIAAAHIgTAAIAAA1QAAAIADAEQADACAFAAIAKAAIABAHIgGABIgGABQgJAAgDgFg");
	this.shape_129.setTransform(51.1,17);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRALgMQAJgMANAAQAQAAAJAKQAJAJAAAQIAAAHIg6AAIAAACQAAAOAIAJQAHAKALAAQAIAAAGgDQAGgBAFgGIAEAHQgEAFgIADQgIADgJAAQgOAAgKgMgAgPgbQgGAIgCAMIABAAIAvAAIAAgCQgBgLgGgHQgGgIgMAAQgHABgIAHg");
	this.shape_130.setTransform(44.5,18);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgSAqIAAhRIAIAAIABANIAAABQAEgIAFgEQAEgEAJAAIAEAAIACABIgBAJIgHgBQgJAAgDAFQgGAFgCAJIAAA3g");
	this.shape_131.setTransform(38.3,17.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgCAwQgFgHAAgLIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADAEQADACAFAAIAJAAIABAHIgFABIgHABQgIAAgEgFg");
	this.shape_132.setTransform(32.3,17);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgWAjQgIgHAAgKIAAgBIAJAAQAAAKAHAEQAHAEAHAAQAKAAAGgEQAGgFAAgGQAAgGgFgFQgEgEgNgCQgPgDgFgEQgIgGAAgKQAAgJAJgHQAHgGAMAAQAPAAAHAHQAJAHgBAKIAAABIgIAAQAAgHgGgFQgHgGgJAAQgIAAgFAFQgFAFAAAFQAAAGAEAEQAEAEAMADQANACAJAFQAHAFAAALQAAAKgIAGQgJAHgOAAQgNAAgJgIg");
	this.shape_133.setTransform(25.7,18);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_134.setTransform(19.9,16.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgYAxQgIgLAAgTIAAgBQAAgSAIgMQAJgMAPAAQAHAAAGADQAHAFAEAGIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgIAEgFAAQgPAAgJgMgAgRgGQgGAIAAAQIAAABQAAAQAGAJQAGAJALAAQAIAAAHgEQAGgFADgHIAAglQgDgHgGgFQgFgFgKAAQgLAAgGALg");
	this.shape_135.setTransform(13.5,16.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_136.setTransform(3.6,16.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRALgMQAKgMANAAQAPAAAJAKQAJAJAAAQIAAAHIg5AAIAAACQAAAOAHAJQAIAKAKAAQAIAAAHgDQAFgBAFgGIAEAHQgEAFgIADQgHADgKAAQgOAAgKgMgAgPgbQgGAJgCALIAAAAIAwAAIAAgCQAAgLgHgHQgGgIgLAAQgIABgIAHg");
	this.shape_137.setTransform(-2.3,18);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgYAxQgIgLAAgTIAAgBQAAgSAIgMQAJgMAPAAQAIAAAFADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgHAEgGAAQgPAAgJgMgAgRgGQgGAIAAAQIAAABQAAAQAGAJQAGAJALAAQAIAAAHgEQAGgFADgHIAAglQgDgHgGgFQgFgFgKAAQgLAAgGALg");
	this.shape_138.setTransform(-11,16.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_139.setTransform(-20.9,16.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgTAqIAAhRIAIAAIACANIAAABQAEgIAFgEQAEgEAJAAIAEAAIADABIgCAJIgHgBQgJAAgDAFQgGAEgCAKIAAA3g");
	this.shape_140.setTransform(-24.9,17.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgZAfQgKgMAAgTIAAAAQAAgSAKgMQAJgMAQAAQARAAAKAMQAJALABATIAAAAQgBAUgJALQgKAMgRAAQgPAAgKgMgAgTgZQgHAMAAANIAAAAQAAAPAHAKQAHAKAMAAQANAAAHgKQAIgJAAgQIAAAAQAAgOgIgLQgHgJgNgBQgMABgHAJg");
	this.shape_141.setTransform(-32.5,18);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgGgHgJAAQgLABgFAGQgGAIgCAKIAAABIABACIAAAwIgIAAIAAgvQAAgPgGgHQgFgGgKgBQgJABgGAFQgGAEgDAJIAAA5IgJAAIAAhRIAJAAIAAANQAFgHAGgEQAGgEAKAAQAKAAAGAEQAFAFACAKQAFgKAGgEQAHgFAKAAQANAAAIAIQAHAKAAATIAAAug");
	this.shape_142.setTransform(-44,17.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgXAhQgIgIAAgUIAAguIAKAAIAAAuQAAAQAFAHQAGAGAJAAQAJAAAGgFQAGgEACgJIAAg5IAKAAIAABRIgIAAIgBgNQgDAGgIAFQgHAEgHAAQgNAAgIgJg");
	this.shape_143.setTransform(-55.5,18);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADAEQADACAFAAIAJAAIABAHIgFABIgHABQgJAAgDgFg");
	this.shape_144.setTransform(-62.6,17);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_145.setTransform(-70.8,16.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgXAfQgKgLAAgSIAAgDQAAgRAKgMQALgMANAAQAPAAAJAKQAJAJAAAQIAAAHIg5AAIAAACQAAAOAHAJQAIAKAKAAQAIAAAHgDQAFgBAFgGIAEAHQgEAFgIADQgHADgKAAQgOAAgLgMgAgOgbQgHAIgCAMIAAAAIAvAAIAAgCQABgLgHgHQgGgIgLAAQgJABgGAHg");
	this.shape_146.setTransform(-76.6,18);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgXAxQgJgKAAgUIAAgBQAAgTAJgLQAIgMAPAAQAHAAAGADQAGAEAFAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAGgHAEQgIAEgFAAQgPAAgIgMgAgRgGQgGAHAAARIAAABQAAAQAGAJQAGAJALAAQAIAAAGgEQAGgFAEgHIAAglQgDgGgGgGQgGgFgJAAQgKAAgHALg");
	this.shape_147.setTransform(-85.4,16.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAKgEAPAAIATAAIAAgLQAAgJgGgFQgHgGgJAAQgIABgGAFQgHAEAAAHIgIAAIgBAAQAAgKAJgHQAKgHALAAQAPAAAHAHQAJAGAAAOIAAAwIACAIIgKAAIgBgHIAAgHQgFAHgIAFQgHAEgIAAQgMAAgHgHgAgPAGQgIAFAAAIQAAAHAFAFQAFADAIAAQAIABAIgFQAHgFAEgHIAAgSIgTAAQgLAAgHAGg");
	this.shape_148.setTransform(-97.9,18);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgSAqIAAhRIAIAAIABANIAAABQADgHAGgFQAEgEAJAAIAEAAIACABIgBAJIgHgBQgJAAgDAFQgFAEgDAKIAAA3g");
	this.shape_149.setTransform(-104.2,17.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAuQAAAQAFAHQAFAGAKAAQAIAAAHgFQAGgEACgJIAAg5IAKAAIAABRIgJAAIAAgNQgDAGgIAFQgHAEgHAAQgOAAgHgJg");
	this.shape_150.setTransform(-111.9,18);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgCQAAgSAJgLQAJgMAPAAQAPAAAIAIQAKAJgBANIAAAAIgIAAQAAgKgHgHQgGgFgLgBQgLABgGAJQgHAKAAAOIAAACQAAAPAGAJQAHAKAMAAQAJAAAHgFQAHgGAAgJIAIAAIAAAAQABAMgKAIQgJAIgNAAQgQAAgJgMg");
	this.shape_151.setTransform(-120.4,18);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgMAKgHQAJgEAQAAIATAAIAAgLQgBgJgFgFQgHgGgJAAQgHABgHAFQgHAFAAAGIgIAAIAAAAQgBgKAJgHQAKgHALAAQAPAAAIAHQAIAHAAANIABAwIABAIIgKAAIgBgHIAAgHQgFAHgIAFQgIAEgHAAQgLAAgJgHgAgQAGQgHAFAAAIQAAAHAFAFQAFADAIAAQAIABAIgFQAIgFADgHIAAgSIgTAAQgLAAgIAGg");
	this.shape_152.setTransform(-132.7,18);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_153.setTransform(-138.7,16.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_154.setTransform(-142.3,16.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRALgMQAKgMANAAQAPAAAJAKQAJAIAAARIAAAHIg5AAIAAACQAAAOAHAJQAIAKAKAAQAIAAAHgDQAFgBAFgGIAEAHQgEAFgIADQgHADgKAAQgOAAgKgMgAgOgbQgHAIgCAMIABAAIAvAAIAAgCQAAgLgHgHQgGgIgLAAQgIABgHAHg");
	this.shape_155.setTransform(-148.2,18);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgGQgGgFgKgBQgHAAgGAGQgHAGgCAHIAAA5IgJAAIAAhRIAIAAIABAOQADgHAIgFQAFgEAJAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_156.setTransform(-156.7,17.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgZAfQgLgMAAgTIAAAAQAAgTALgLQAJgMAQAAQARAAAJAMQALALAAATIAAAAQAAATgKAMQgLAMgQAAQgPAAgKgMgAgTgZQgHALAAAOIAAAAQAAAQAHAJQAIAKALAAQANAAAHgKQAHgKAAgPIAAAAQAAgOgHgLQgHgJgNgBQgLABgIAJg");
	this.shape_157.setTransform(-169.4,18);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAWAqIAAgxQABgOgGgHQgFgFgLgBQgGAAgIAGQgGAGgCAHIAAA5IgKAAIAAhRIAIAAIABAOQAEgHAHgFQAGgEAIAAQAOAAAIAIQAGAJAAARIAAAxg");
	this.shape_158.setTransform(-178.2,17.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgaAfQgJgMgBgTIAAAAQABgSAJgMQAKgMAQAAQARAAAJAMQALAMAAASIAAAAQAAATgLAMQgKAMgQAAQgPAAgLgMgAgTgZQgIALAAAOIAAAAQAAAQAIAJQAHAKAMAAQANAAAHgKQAIgJAAgQIAAAAQAAgOgIgLQgHgJgNgBQgMABgHAJg");
	this.shape_159.setTransform(-187.1,18);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgSAqIAAhRIAHAAIACANIAAABQAEgIAFgEQAEgEAJAAIAEAAIACABIgBAJIgHgBQgJAAgDAFQgFAEgDAKIAAA3g");
	this.shape_160.setTransform(-193.5,17.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgSAqIAAhRIAHAAIACANIAAABQAEgIAFgEQAEgEAJAAIAEAAIACABIgBAJIgHgBQgJAAgDAFQgFAEgDAKIAAA3g");
	this.shape_161.setTransform(-198.9,17.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgZAfQgKgMAAgTIAAAAQAAgSAKgMQAKgMAPAAQAQAAALAMQAKALAAATIAAAAQAAAUgKALQgKAMgRAAQgPAAgKgMgAgTgZQgHALAAAOIAAAAQAAAQAHAJQAIAKALAAQANAAAHgKQAHgJABgQIAAAAQgBgOgHgLQgHgJgNgBQgLABgIAJg");
	this.shape_162.setTransform(-206.6,18);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgXAfQgKgMABgSIAAgCQgBgRAKgMQAJgMAQAAQAOAAAIAIQAKAJgBANIAAAAIgIAAQAAgKgHgHQgHgFgJgBQgNABgGAJQgGAKAAAOIAAACQAAAPAGAJQAGAKANAAQAIAAAHgFQAIgGAAgJIAIAAIAAAAQABAMgKAIQgJAIgNAAQgQAAgJgMg");
	this.shape_163.setTransform(-215.1,18);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AAXAqIAAgxQgBgOgFgHQgFgFgKgBQgIAAgGAGQgHAGgCAHIAAA5IgJAAIAAhRIAIAAIABAOQADgHAHgFQAGgEAJAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_164.setTransform(-223.6,17.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgaAfQgKgMABgTIAAAAQgBgSAKgMQALgMAPAAQAQAAAKAMQALAMgBASIAAAAQABATgLAMQgKAMgQAAQgPAAgLgMgAgTgZQgHALAAAOIAAAAQAAAQAHAJQAIAKALAAQAMAAAIgKQAHgJAAgQIAAAAQAAgOgHgLQgIgJgMgBQgLABgIAJg");
	this.shape_165.setTransform(-232.5,18);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgCQAAgSAJgLQAJgMAQAAQANAAAKAIQAJAJgBANIAAAAIgIAAQAAgKgHgHQgGgFgKgBQgMABgGAJQgHAKAAAOIAAACQAAAPAHAJQAGAKAMAAQAJAAAHgFQAHgGAAgJIAIAAIAAAAQABAMgKAIQgJAIgNAAQgQAAgJgMg");
	this.shape_166.setTransform(-241,18);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgXAfQgKgKAAgTIAAgDQAAgSAKgLQAKgMANAAQAQAAAJAKQAJAJAAAQIAAAHIg6AAIAAACQAAAOAIAJQAHAKALAAQAIAAAGgDQAGgBAFgGIAEAHQgEAFgIADQgHADgKAAQgOAAgLgMgAgPgbQgHAJgBALIAAAAIAvAAIAAgCQAAgLgGgHQgGgIgMAAQgIABgHAHg");
	this.shape_167.setTransform(-253,18);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AAWA8IAAg0QABgLgGgHQgFgGgKAAQgGAAgIAFQgGAGgDAGIAAA7IgKAAIAAh3IAKAAIAAAzQADgGAIgFQAGgEAIAAQAOAAAGAIQAIAHgBAQIAAA0g");
	this.shape_168.setTransform(-261.6,16.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgCQAAgSAJgLQAJgMAPAAQAPAAAIAIQAKAJgBANIAAAAIgIAAQAAgKgHgHQgGgFgLgBQgLABgHAJQgGAKAAAOIAAACQAAAPAGAJQAHAKAMAAQAJAAAHgFQAHgGAAgJIAIAAIAAAAQABAMgKAIQgKAIgMAAQgQAAgJgMg");
	this.shape_169.setTransform(-270.1,18);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_170.setTransform(-279.9,16.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgCQAAgSAJgLQAJgMAQAAQANAAAKAIQAJAJgBANIAAAAIgIAAQAAgKgHgHQgGgFgKgBQgMABgGAJQgHAKAAAOIAAACQAAAPAHAJQAGAKAMAAQAJAAAHgFQAHgGAAgJIAIAAIAAAAQABAMgKAIQgJAIgNAAQgQAAgJgMg");
	this.shape_171.setTransform(-285.8,18);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_172.setTransform(-291.7,16.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgYAxQgIgLAAgTIAAgBQAAgSAIgMQAJgMAPAAQAHAAAGADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgHAEgGAAQgPAAgJgMgAgRgGQgGAIAAAQIAAABQAAAQAGAJQAGAJALAAQAIAAAHgEQAGgFADgHIAAglQgDgHgGgFQgFgFgKAAQgLAAgGALg");
	this.shape_173.setTransform(-298.2,16.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRAKgMQAKgMAOAAQAPAAAJAKQAJAJAAAQIAAAHIg6AAIAAACQAAAOAIAJQAHAKALAAQAHAAAIgDQAGgCAEgFIAEAHQgEAFgIADQgHADgKAAQgOAAgKgMgAgPgbQgHAJgBALIAAAAIAvAAIAAgCQAAgLgGgHQgGgIgLAAQgJABgHAHg");
	this.shape_174.setTransform(-306.4,18);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AAxAqIAAgvQgBgQgFgGQgGgHgJAAQgLABgFAGQgGAIgCAKIAAAzIgHAAIAAgvQgBgQgFgGQgGgGgJgBQgKABgFAFQgHAFgCAIIAAA5IgJAAIAAhRIAIAAIABANQAEgHAGgEQAHgEAKAAQAKAAAGAEQAFAFACAKQAEgKAHgEQAHgFAKAAQAOAAAGAIQAIAJAAAUIAAAug");
	this.shape_175.setTransform(-317.6,17.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_176.setTransform(-330.3,16.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgMAKgHQAJgEAQAAIATAAIAAgLQgBgJgFgFQgHgGgJAAQgHABgHAFQgHAFAAAGIgJAAIAAAAQAAgKAJgHQAJgHAMAAQAOAAAJAHQAIAHAAANIAAAwQABAEABAEIgKAAIgBgHIAAgHQgFAHgIAFQgIAEgHAAQgMAAgIgHgAgPAGQgIAFAAAIQAAAHAFAFQAFADAIAAQAIABAIgFQAHgFAEgHIAAgSIgTAAQgMAAgGAGg");
	this.shape_177.setTransform(-336.5,18);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRALgMQAKgMANAAQAPAAAJAKQAJAJAAAQIAAAHIg5AAIAAACQAAAOAHAJQAIAKAKAAQAIAAAHgDQAFgBAFgGIAEAHQgEAFgIADQgHADgKAAQgOAAgKgMgAgOgbQgHAIgCAMIABAAIAvAAIAAgCQAAgLgHgHQgGgIgLAAQgIABgHAHg");
	this.shape_178.setTransform(-348.6,18);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgCAwQgFgHAAgLIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADAEQADACAFAAIAJAAIABAHIgFABIgHABQgIAAgEgFg");
	this.shape_179.setTransform(-355.4,17);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADAEQADACAFAAIAJAAIABAHIgFABIgHABQgJAAgDgFg");
	this.shape_180.setTransform(-360.7,17);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRAKgMQAKgMAOAAQAPAAAJAKQAJAJAAAQIAAAHIg6AAIAAACQAAAOAIAJQAHAKALAAQAHAAAIgDQAFgBAFgGIAEAHQgEAFgIADQgHADgKAAQgOAAgKgMgAgPgbQgHAJgBALIAAAAIAvAAIAAgCQAAgLgGgHQgGgIgLAAQgJABgHAHg");
	this.shape_181.setTransform(-367.3,18);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AAxAqIAAgvQgBgQgFgGQgGgHgJAAQgLABgFAGQgHAIgBAKIAAAzIgHAAIAAgvQgBgQgFgGQgGgGgJgBQgKABgFAFQgHAFgCAIIAAA5IgJAAIAAhRIAIAAIABANQAEgHAGgEQAGgEALAAQAKAAAGAEQAFAFACAKQAEgKAHgEQAGgFALAAQANAAAHAIQAIAJAAAUIAAAug");
	this.shape_182.setTransform(-378.4,17.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgTAqIAAhRIAJAAIABANIAAABQAEgIAFgEQAEgEAJAAIAEAAIADABIgBAJIgHgBQgKAAgDAFQgGAFgCAJIAAA3g");
	this.shape_183.setTransform(-387.7,17.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgXAfQgKgLAAgSIAAgDQAAgSAKgLQAKgMANAAQAQAAAJAKQAJAJAAAQIAAAHIg6AAIAAACQAAAOAIAJQAHAKALAAQAIAAAGgDQAHgBAEgGIAEAHQgEAFgIADQgHADgKAAQgOAAgLgMgAgPgbQgHAJgBALIAAAAIAvAAIAAgCQAAgLgGgHQgGgIgMAAQgIABgHAHg");
	this.shape_184.setTransform(-394.9,18);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQADgGAHgFQAHgDAHAAQAQAAAIAMQAIAMAAAUIAAABQAAARgIALQgJAMgPAAQgHAAgGgEQgGgCgFgHIAAArgAgOgtQgGAEgDAIIAAAmQAEAIAFADQAHAEAHAAQALAAAHgJQAGgKAAgNIAAgBQAAgQgGgKQgHgLgLAAQgIAAgGAFg");
	this.shape_185.setTransform(-403.3,19.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgfAtQgNgNAAgVIAAgVQAAgVANgNQANgNASAAQAUAAAMALQALAKACAVIAAAAIgaAAQAAgLgFgFQgEgFgKAAQgHAAgGAHQgFAHAAAMIAAAVQAAALAGAIQAFAHAIAAQAJAAAFgFQADgEABgMIAaAAIAAABQgBATgLALQgLALgVAAQgTAAgNgNg");
	this.shape_186.setTransform(-416.8,16.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgeAtQgOgNAAgVIAAgVQAAgVANgNQANgNASAAQAVAAAMALQALAKABAVIAAAAIgZAAQgBgLgFgFQgEgFgKAAQgHAAgFAHQgGAHAAAMIAAAVQABALAFAIQAGAHAIAAQAIAAAFgFQADgEACgMIAZAAIAAABQgBAUgLAKQgLALgUAAQgTAAgNgNg");
	this.shape_187.setTransform(-427,16.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AghAsQgNgNAAgVIAAgTQAAgVANgNQANgOAUAAQAVAAANAOQANAOAAAUIAAATQAAAVgNANQgNAOgVAAQgUAAgNgOgAgPgdQgFAIAAAMIAAATQAAAMAFAIQAGAHAJAAQAKAAAGgHQAFgIAAgMIAAgTQAAgLgFgJQgGgHgKAAQgJAAgGAHg");
	this.shape_188.setTransform(-437.6,16.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AAVA4IgohGIgBAAIAABGIgaAAIAAhvIAaAAIAoBGIABAAIAAhGIAaAAIAABvg");
	this.shape_189.setTransform(-448.6,16.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_190.setTransform(441.6,-16.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgZAlQgHgGAAgLQAAgMAKgHQAKgGAPABIATAAIAAgKQAAgKgGgFQgGgFgKAAQgIAAgHAFQgGAFAAAHIgIAAIAAgBQgBgJAJgIQAJgHAMAAQAOAAAJAHQAIAHAAAOIABAvIABAIIgJAAIgCgHIAAgGQgFAHgIAEQgGAEgJAAQgNAAgGgGgAgPAGQgIAGAAAIQAAAGAFAFQAFAEAIAAQAIAAAHgEQAIgGAEgGIAAgSIgTAAQgLAAgHAFg");
	this.shape_191.setTransform(435.4,-20.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgXAfQgKgMABgRIAAgCQgBgSAKgMQAKgMAPAAQANAAAJAJQAKAHgBAOIAAAAIgIAAQAAgKgHgGQgHgGgJAAQgLAAgIAKQgGAJAAAPIAAABQAAAQAGAIQAHAKAMAAQAIABAIgGQAHgFAAgKIAIAAIAAABQAAAMgJAHQgJAIgNAAQgQAAgJgMg");
	this.shape_192.setTransform(427.2,-20.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_193.setTransform(421.2,-22);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_194.setTransform(417.6,-22);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgZAlQgHgGAAgLQAAgMAKgHQALgGAOABIATAAIAAgKQAAgKgGgFQgGgFgKAAQgJAAgFAFQgHAEAAAIIgIAAIAAgBQgBgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAAOIAAAvIACAIIgKAAIgBgNQgEAGgJAFQgGAEgJAAQgNAAgGgGgAgPAGQgIAGAAAIQAAAHAFAEQAEAEAJAAQAIAAAIgEQAHgFAEgHIAAgSIgTAAQgLAAgHAFg");
	this.shape_195.setTransform(411.4,-20.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgJA9IAAhKIgOAAIAAgIIAOAAIAAgMQAAgNAHgHQAEgHALAAIALACIgBAHIgJgBQgIAAgDAFQgDAEAAAKIAAAMIATAAIAAAIIgTAAIAABKg");
	this.shape_196.setTransform(405,-22.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSAKgMQALgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAKAKgBQAHAAAIgCQAGgDAEgEIAEAGQgGAGgGACQgIADgJAAQgPAAgJgMgAgPgaQgHAIgBAMIAAAAIAvAAIAAgDQAAgKgGgIQgGgHgLAAQgJAAgHAIg");
	this.shape_197.setTransform(398,-20.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgcAsQgMgOAAgVIAAgRQAAgUAMgPQAMgNAQAAQATAAAKAJQAKAKACARIAAAAIgJAAQgCgOgIgHQgHgHgPAAQgMAAgJALQgJALAAASIAAARQAAASAJAMQAJALAMAAQAPAAAHgIQAIgGACgPIAJAAIAAABQgCARgKAJQgKAKgTAAQgQAAgMgOg");
	this.shape_198.setTransform(388.8,-21.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgaAfQgJgMgBgSIAAgBQABgSAJgMQALgMAPAAQAQAAAKAMQALALAAATIAAABQAAATgLALQgJAMgRAAQgQAAgKgMgAgTgYQgHAJAAAPIAAABQAAAQAHAIQAHAKAMAAQANAAAHgKQAIgJAAgPIAAgBQAAgOgIgKQgHgKgNAAQgMAAgHAKg");
	this.shape_199.setTransform(375.4,-20.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgXAfQgKgMAAgRIAAgCQAAgSAKgMQAKgMAOAAQAOAAAKAJQAIAHABAOIgBAAIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAKQgGAJAAAPIAAABQAAAQAGAIQAGAKAMAAQAJABAIgGQAHgFAAgKIAIAAIAAABQABAMgKAHQgJAIgOAAQgQAAgIgMg");
	this.shape_200.setTransform(366.9,-20.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_201.setTransform(361,-22);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgCApIgghRIAJAAIAYA9IABAKIAAAAIAZhHIAKAAIggBRg");
	this.shape_202.setTransform(355.3,-20.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQAEgIAFgEQAFgEAIAAIAHABIgBAIIgHAAQgJAAgEAFQgGAGgCAHIAAA4g");
	this.shape_203.setTransform(349.1,-20.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgXAfQgKgKAAgTIAAgCQAAgTAKgLQALgMAMAAQAQAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAKAKgBQAIAAAGgCQAGgCAFgFIAEAGQgGAGgGACQgIADgJAAQgPAAgKgMgAgPgaQgHAIgBAMIAAAAIAvAAIAAgDQAAgKgGgIQgGgHgMAAQgIAAgHAIg");
	this.shape_204.setTransform(341.8,-20.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgcAsQgMgOAAgVIAAgRQAAgUAMgPQAMgNAQAAQATAAAKAJQAKAKACARIAAAAIgJAAQgCgNgIgIQgHgHgPAAQgNAAgJALQgIALAAASIAAARQAAASAIAMQAJALANAAQAPAAAHgIQAIgHACgOIAJAAIAAABQgCARgKAJQgKAKgTAAQgQAAgMgOg");
	this.shape_205.setTransform(332.6,-21.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgZAlQgHgGAAgLQAAgNAKgGQAKgGAPABIATAAIAAgKQAAgKgHgFQgGgFgJAAQgJAAgFAFQgHAEAAAIIgJAAIAAgBQAAgJAJgIQAJgHAMAAQANAAAJAHQAJAHgBAOIABAvIACAIIgKAAIgBgNQgFAHgIAEQgHAEgIAAQgNAAgGgGgAgPAGQgIAGAAAIQAAAHAEAEQAGAEAIAAQAIAAAIgEQAGgFAFgHIAAgSIgTAAQgMAAgGAFg");
	this.shape_206.setTransform(319.3,-20.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_207.setTransform(313.3,-22);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgMA6QgFgBgHgDIADgIIAKAEIALABQALAAAHgHQAGgHAAgNIAAgKQgEAFgHAFQgGADgHAAQgQAAgIgLQgIgMAAgQIAAgCQAAgUAIgMQAJgMAPAAQAHAAAGAEQAGADAFAIIABgOIAIAAIAABRQAAARgJAJQgJAJgPAAIgMgBgAgRgoQgGALAAAPIAAACQAAAMAGAKQAGAJALAAQAJAAAGgEQAGgEADgIIAAgkQgDgHgGgGQgGgEgJAAQgLAAgGAKg");
	this.shape_208.setTransform(306.9,-18.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgZAfQgKgMAAgSIAAgBQAAgSAKgMQAKgMAPAAQAQAAALAMQAJALABATIAAABQgBATgJALQgKAMgRAAQgQAAgJgMgAgTgYQgHAJAAAPIAAABQAAAQAHAIQAHAKAMAAQANAAAHgKQAIgJAAgPIAAgBQAAgOgIgKQgHgKgNAAQgMAAgHAKg");
	this.shape_209.setTransform(298.2,-20.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_210.setTransform(292,-22);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgaAfQgJgMgBgSIAAgBQABgSAJgMQALgMAPAAQARAAAJAMQAKALAAATIAAABQAAATgKALQgJAMgRAAQgPAAgLgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAHAKAMAAQANAAAHgKQAIgJgBgPIAAgBQABgOgIgKQgHgKgNAAQgMAAgHAKg");
	this.shape_211.setTransform(285.8,-20.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgXAfQgKgMAAgRIAAgCQAAgSAKgMQAKgMAOAAQAOAAAKAJQAIAHABAOIgBAAIgIAAQAAgKgHgGQgGgGgLAAQgLAAgGAKQgHAJAAAPIAAABQAAAQAHAIQAFAKAMAAQAJABAIgGQAHgFAAgKIAIAAIAAABQABAMgKAHQgKAIgNAAQgPAAgJgMg");
	this.shape_212.setTransform(277.3,-20.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AAWAqIAAgxQABgOgGgGQgFgGgLAAQgGAAgIAFQgGAFgCAJIAAA4IgKAAIAAhSIAIAAIABAPQAFgIAHgEQAHgEAGAAQAOAAAIAIQAGAIAAASIAAAxg");
	this.shape_213.setTransform(268.7,-20.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgeAsQgMgOAAgVIAAgRQAAgVAMgOQALgNATAAQATAAAMANQAMAOAAAVIAAARQAAAVgMAOQgMAOgTAAQgTAAgLgOgAgYglQgJALAAASIAAARQAAASAJAMQAJALAPAAQAQAAAJgLQAJgMAAgSIAAgRQAAgSgJgLQgJgLgQAAQgPAAgJALg");
	this.shape_214.setTransform(258.9,-21.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgDASIABgjIAGAAIAAAPIgDAUg");
	this.shape_215.setTransform(252.2,-26.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_216.setTransform(249.1,-22);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_217.setTransform(245.5,-22);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAKAKgBQAIAAAHgCQAFgCAFgFIAEAGQgFAGgHACQgIADgJAAQgOAAgKgMgAgOgaQgHAHgCANIABAAIAvAAIAAgDQAAgKgHgIQgGgHgLAAQgJAAgGAIg");
	this.shape_218.setTransform(239.6,-20.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAPAAQAHAAAGAEQAHADAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgGADQgHAEgHAAQgPAAgJgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAIAAAHgEQAGgEADgHIAAgmQgDgHgGgFQgGgEgJAAQgKAAgHAKg");
	this.shape_219.setTransform(230.9,-22);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgSALgMQAKgMAPAAQARAAAJAMQALAMAAASIAAABQAAASgLAMQgJAMgRAAQgQAAgJgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAHAKAMAAQANAAAHgKQAHgJAAgPIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_220.setTransform(218.4,-20.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg0IgOAAIAAgIIAOAAIAAgWIAIAAIAAAWIASAAIAAAIIgSAAIAAA0QAAAIACADQADAEAFAAIAFAAIAFgBIABAHQgCABgEAAIgGABQgKAAgCgFg");
	this.shape_221.setTransform(211.4,-21.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_222.setTransform(207.1,-22);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgNA5QgGgDgEgHIgBAMIgIAAIAAh3IAJAAIAAAzQADgHAHgEQAIgEAGAAQAPAAAJAMQAJAMgBASIAAACQABASgJAMQgJALgOAAQgIAAgHgEgAgOgLQgGAEgDAHIAAAlQADAHAGAFQAHAEAHAAQAMAAAGgJQAGgJAAgPIAAgCQAAgQgGgIQgHgKgLAAQgJAAgFAFg");
	this.shape_223.setTransform(201,-22);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgEgGgLAAQgLAAgFAHQgHAHgBAKIABABIAAAyIgIAAIAAgvQAAgPgGgHQgFgGgKAAQgKAAgFAFQgGAFgCAIIAAA5IgKAAIAAhSIAJAAIAAAOQAEgHAHgEQAHgEAJAAQAJAAAHAFQAFAEADAKQADgJAHgFQAIgFAJAAQAOAAAHAJQAHAIAAATIAAAvg");
	this.shape_224.setTransform(189.4,-20.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgZAlQgHgGAAgLQAAgNAKgGQAKgGAPABIASAAIAAgKQAAgKgFgFQgHgFgJAAQgIAAgGAFQgHAEAAAIIgJAAIAAgBQAAgJAJgIQAJgHAMAAQANAAAJAHQAJAHAAAOIAAAvQABAFABADIgKAAIgCgNQgEAHgIAEQgHAEgIAAQgNAAgGgGgAgPAGQgIAGAAAIQAAAHAFAEQAFAEAIAAQAIAAAIgEQAHgGADgGIAAgSIgSAAQgMAAgGAFg");
	this.shape_225.setTransform(178,-20.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgDASIABgjIAGAAIAAAPIgDAUg");
	this.shape_226.setTransform(172.8,-26.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_227.setTransform(169.7,-22);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_228.setTransform(166.1,-22);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAKAKgBQAIAAAHgCQAFgCAFgFIAEAGQgGAGgGACQgIADgJAAQgOAAgKgMgAgPgaQgGAHgCANIAAAAIAwAAIAAgDQAAgJgHgJQgGgHgLAAQgIAAgIAIg");
	this.shape_229.setTransform(160.2,-20.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgIAAgGAFQgGAFgDAJIAAA4IgKAAIAAhSIAJAAIABAPQAEgIAGgEQAHgEAIAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_230.setTransform(151.7,-20.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_231.setTransform(141.6,-22);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgXAfQgJgLAAgSIAAgCQAAgTAJgLQAJgMAQAAQANAAAKAJQAJAHgBAOIAAAAIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAKQgHAJAAAPIAAABQAAAQAHAIQAGAKAMAAQAJABAHgGQAHgFAAgKIAIAAIAAABQABALgKAIQgJAIgNAAQgQAAgJgMg");
	this.shape_232.setTransform(135.7,-20.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_233.setTransform(129.8,-22);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgFgGgLAAQgHAAgGAFQgHAFgCAJIAAA4IgJAAIAAhSIAHAAIACAPQADgIAIgEQAGgEAIAAQANAAAIAIQAGAJABARIAAAxg");
	this.shape_234.setTransform(123.6,-20.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_235.setTransform(117.3,-22);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_236.setTransform(113.7,-22);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgXAfQgKgMAAgRIAAgCQAAgSAKgMQAKgMAOAAQAOAAAKAJQAJAHAAAOIgBAAIgIAAQAAgKgHgGQgHgGgKAAQgKAAgIAKQgGAJAAAPIAAABQAAAQAGAIQAHAKALAAQAJABAIgGQAHgFAAgKIAIAAIAAABQABAMgKAHQgJAIgOAAQgOAAgKgMg");
	this.shape_237.setTransform(107.8,-20.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_238.setTransform(98,-22);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgWAkQgIgHAAgKIAAgBIAJAAQAAAJAHAEQAHAFAHgBQAKABAGgFQAGgEAAgHQAAgGgFgEQgFgEgMgDQgNgDgIgEQgHgGAAgJQAAgKAIgGQAJgHALAAQAOAAAIAHQAIAIAAAJIAAABIgJAAQAAgHgGgFQgGgFgJAAQgIAAgGAEQgFAFAAAFQAAAGAFAEQAFAEAKADQAPADAIAEQAHAGAAAKQAAALgIAGQgJAGgOAAQgOAAgIgHg");
	this.shape_239.setTransform(92.1,-20.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgZAlQgHgGAAgLQAAgMAKgHQAKgGAPABIATAAIAAgKQAAgKgGgFQgGgFgKAAQgJAAgFAFQgHAEAAAIIgIAAIAAgBQgBgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAAOIAAAvIACAIIgKAAIgBgNQgEAGgJAFQgGAEgJAAQgNAAgGgGgAgPAGQgIAGAAAIQAAAHAFAEQAFAEAIAAQAIAAAIgEQAHgFAEgHIAAgSIgTAAQgLAAgHAFg");
	this.shape_240.setTransform(83.7,-20.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgXAfQgJgLAAgSIAAgCQAAgTAJgLQAJgMAPAAQAOAAAJAJQAKAHgBAOIAAAAIgIAAQAAgKgHgGQgGgGgLAAQgLAAgGAKQgHAJAAAPIAAABQAAAQAGAIQAHAKAMAAQAJABAHgGQAHgFAAgKIAIAAIAAABQABALgKAIQgJAIgNAAQgQAAgJgMg");
	this.shape_241.setTransform(75.5,-20.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_242.setTransform(65.7,-22);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg0IgOAAIAAgIIAOAAIAAgWIAIAAIAAAWIASAAIAAAIIgSAAIAAA0QAAAJADACQADAEAFAAIAEAAIAFgBIABAHQgCABgDAAIgHABQgKAAgCgFg");
	this.shape_243.setTransform(61.2,-21.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgIAAgHAFQgFAFgEAJIAAA4IgJAAIAAhSIAJAAIAAAPQAEgIAHgEQAHgEAHAAQAOAAAHAIQAIAJgBARIAAAxg");
	this.shape_244.setTransform(54.2,-20.3);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgZAlQgHgGAAgLQAAgNAKgGQAKgGAPABIASAAIAAgKQAAgKgFgFQgHgFgJAAQgJAAgGAFQgGAEAAAIIgJAAIAAgBQAAgJAJgIQAJgHAMAAQANAAAJAHQAJAHgBAOIABAvIACAIIgKAAIgCgNQgDAGgJAFQgGAEgJAAQgNAAgGgGgAgPAGQgIAGAAAIQAAAHAFAEQAFAEAIAAQAIAAAIgEQAHgFADgHIAAgSIgSAAQgMAAgGAFg");
	this.shape_245.setTransform(45.4,-20.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAPAAQAGAAAHAEQAHAEAEAGIAAgyIAJAAIAAB3IgIAAIgBgMQgFAIgGACQgGAEgHAAQgQAAgIgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAIAAAHgEQAGgEADgHIAAgmQgDgHgGgFQgGgEgJAAQgLAAgGAKg");
	this.shape_246.setTransform(36.6,-22);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgTAqIAAhSIAIAAIACAOIAAABQAEgIAFgEQAGgEAHAAIAHABIgCAIIgGAAQgJAAgEAFQgGAFgCAIIAAA4g");
	this.shape_247.setTransform(30.4,-20.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgaAlQgGgGAAgLQAAgMAKgHQAKgGAPABIATAAIAAgKQAAgKgGgFQgGgFgKAAQgIAAgHAFQgGAFAAAHIgIAAIAAgBQgBgJAJgIQAJgHAMAAQAOAAAJAHQAIAHAAAOIABAvIABAIIgJAAIgCgHIAAgGQgFAHgIAEQgGAEgJAAQgMAAgIgGgAgQAGQgHAGAAAIQAAAHAFAEQAFAEAIAAQAIAAAHgEQAIgGAEgGIAAgSIgTAAQgKAAgJAFg");
	this.shape_248.setTransform(22.8,-20.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgXAhQgIgJAAgSIAAgvIAKAAIAAAvQAAAPAFAHQAFAHAKAAQAIAAAGgFQAHgFACgIIAAg6IAKAAIAABSIgJAAIAAgOQgFAIgGADQgGAEgIAAQgOAAgHgJg");
	this.shape_249.setTransform(14.2,-20.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgLA6QgGgBgGgDIACgIIALAEIAKABQAMAAAGgHQAGgHAAgNIAAgKQgFAGgGAEQgGADgHAAQgPAAgIgLQgJgLAAgRIAAgCQAAgUAJgMQAIgMAPAAQAHAAAHAEQAGADAFAIIABgOIAHAAIAABRQAAARgIAJQgJAJgQAAIgLgBgAgQgoQgHAKAAAQIAAACQAAANAGAJQAHAJAKAAQAJAAAGgEQAGgEADgIIAAgkQgDgHgGgGQgGgEgJAAQgKAAgGAKg");
	this.shape_250.setTransform(5.1,-18.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_251.setTransform(-0.9,-22);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQAEgIAFgEQAFgEAIAAIAGABIgBAIIgHAAQgHAAgFAFQgGAGgCAHIAAA4g");
	this.shape_252.setTransform(-4.9,-20.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_253.setTransform(-13.8,-22);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgIAAgGAFQgGAEgDAKIAAA4IgKAAIAAhSIAJAAIAAAPQAFgIAGgEQAHgEAIAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_254.setTransform(-20,-20.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgaAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQARAAAJAMQALAMAAASIAAABQAAASgLAMQgJAMgRAAQgQAAgKgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAHAKAMAAQAMAAAIgKQAHgJAAgPIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_255.setTransform(-28.8,-20.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_256.setTransform(-35,-22);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AggApIAAgHIAyhCIgwAAIAAgIIA7AAIAAAHIgxBCIA0AAIAAAIg");
	this.shape_257.setTransform(-40.6,-20.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgZAlQgHgGAAgLQAAgNAKgGQAKgGAPABIASAAIAAgKQABgKgGgFQgGgFgKAAQgIAAgHAFQgGAEAAAIIgJAAIAAgBQAAgJAJgIQAJgHAMAAQANAAAJAHQAJAHAAAOIAAAvQAAAFACADIgKAAIgCgNQgEAHgIAEQgGAEgJAAQgNAAgGgGgAgQAGQgHAGAAAIQAAAHAFAEQAFAEAIAAQAIAAAHgEQAJgGACgGIAAgSIgSAAQgMAAgHAFg");
	this.shape_258.setTransform(-49,-20.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgFgGgKAAQgLAAgFAHQgGAHgCAKIAAAzIgHAAIAAgvQAAgPgGgHQgFgGgKAAQgKAAgFAFQgGAFgDAIIAAA5IgJAAIAAhSIAIAAIABAOQAEgHAHgEQAHgEAJAAQAKAAAGAFQAFAFACAJQADgIAIgGQAIgFAJAAQANAAAIAJQAHAJAAASIAAAvg");
	this.shape_259.setTransform(-60.2,-20.3);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgHAGgFQAFgEAIAAIAGABIgBAIIgHAAQgIAAgEAFQgGAGgCAHIAAA4g");
	this.shape_260.setTransform(-69.4,-20.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgSALgMQAKgMAPAAQAQAAALAMQAKAMAAASIAAABQAAASgKAMQgKAMgRAAQgQAAgJgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAIAKALAAQANAAAHgKQAHgIAAgQIAAgBQAAgOgHgKQgHgKgNAAQgLAAgIAKg");
	this.shape_261.setTransform(-77.1,-20.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgJA9IAAhKIgOAAIAAgIIAOAAIAAgMQAAgNAHgHQAEgHALAAIALACIgBAHIgJgBQgIAAgDAFQgDAEAAAKIAAAMIATAAIAAAIIgTAAIAABKg");
	this.shape_262.setTransform(-83.8,-22.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgGgGgKAAQgHAAgGAFQgHAFgCAJIAAA4IgJAAIAAhSIAHAAIACAPQADgIAIgEQAGgEAIAAQANAAAIAIQAGAJABARIAAAxg");
	this.shape_263.setTransform(-91.1,-20.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_264.setTransform(-97.3,-22);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgXAfQgKgKAAgTIAAgCQAAgSAKgMQALgMAMAAQAQAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQABAOAHAKQAIAKAKgBQAIAAAHgCQAFgCAFgFIAEAGQgGAGgGACQgIADgJAAQgPAAgKgMgAgPgaQgGAHgCANIAAAAIAwAAIAAgDQAAgKgHgIQgGgHgMAAQgIAAgHAIg");
	this.shape_265.setTransform(-107,-20.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_266.setTransform(-113,-22);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_267.setTransform(-116.6,-22);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSAKgMQALgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAKAKgBQAIAAAGgCQAHgCAEgFIAEAGQgGAGgGACQgIADgJAAQgPAAgJgMgAgPgaQgHAIgBAMIAAAAIAvAAIAAgDQAAgKgGgIQgGgHgLAAQgJAAgHAIg");
	this.shape_268.setTransform(-122.4,-20.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgXAyQgJgLAAgTIAAgCQAAgTAJgLQAIgMAPAAQAHAAAGAEQAGAEAFAGIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgGAEgHAAQgQAAgHgLgAgQgGQgHAJAAAPIAAACQAAAQAHAIQAGAJAKAAQAIAAAGgEQAIgFACgGIAAgmQgDgHgGgFQgGgEgJAAQgLAAgFAKg");
	this.shape_269.setTransform(-131.2,-22);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAKAKgBQAIAAAHgCQAFgCAFgFIAEAGQgGAGgGACQgIADgJAAQgOAAgKgMgAgPgaQgGAHgCANIAAAAIAwAAIAAgDQAAgJgHgJQgGgHgLAAQgIAAgIAIg");
	this.shape_270.setTransform(-143.3,-20.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgIAAgGAFQgGAFgDAJIAAA4IgKAAIAAhSIAJAAIABAPQAEgIAGgEQAIgEAHAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_271.setTransform(-151.9,-20.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgSALgMQAKgMAPAAQARAAAJAMQALAMAAASIAAABQAAASgLAMQgJAMgRAAQgQAAgJgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAHAKAMAAQANAAAHgKQAHgJAAgPIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_272.setTransform(-160.7,-20.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_273.setTransform(-166.9,-22);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgWAkQgIgHAAgKIAAgBIAJAAQAAAJAHAEQAHAFAHgBQAKABAGgFQAGgEAAgHQAAgGgFgEQgFgEgMgDQgNgDgIgEQgHgGAAgJQAAgKAIgGQAJgHALAAQAOAAAIAHQAIAIAAAJIAAABIgJAAQAAgHgGgFQgGgFgJAAQgIAAgGAEQgFAFAAAFQAAAGAFAEQAFAEAKADQAPADAIAEQAHAGAAAKQAAALgIAGQgJAGgOAAQgOAAgIgHg");
	this.shape_274.setTransform(-172.8,-20.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_275.setTransform(-178.6,-22);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgDApIgfhRIAKAAIAWA9IACAKIAAAAIAZhHIAKAAIggBRg");
	this.shape_276.setTransform(-184.3,-20.2);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_277.setTransform(-190,-22);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAPAAQAGAAAHAEQAHAEAEAGIAAgyIAJAAIAAB3IgIAAIgBgMQgFAIgGACQgGAEgHAAQgQAAgIgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAIAAAHgEQAGgEADgHIAAgmQgDgHgGgFQgGgEgJAAQgLAAgGAKg");
	this.shape_278.setTransform(-196.4,-22);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgGgGgKAAQgHAAgHAFQgFAFgEAJIAAA4IgJAAIAAhSIAIAAIABAPQAFgIAGgEQAIgEAGAAQAOAAAIAIQAGAJABARIAAAxg");
	this.shape_279.setTransform(-205,-20.3);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgSALgMQAKgMAPAAQARAAAJAMQALAMAAASIAAABQAAASgKAMQgKAMgRAAQgQAAgJgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAIAKALAAQANAAAHgKQAHgJAAgPIAAgBQAAgOgHgKQgIgKgMAAQgLAAgIAKg");
	this.shape_280.setTransform(-213.9,-20.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgXAfQgJgMAAgRIAAgCQAAgSAJgMQAKgMAOAAQAOAAAJAJQAJAHAAAOIAAAAIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAKQgGAKAAAOIAAABQAAAPAGAJQAHAKALAAQAKABAHgGQAHgFAAgKIAIAAIAAABQAAAMgJAHQgKAIgNAAQgPAAgJgMg");
	this.shape_281.setTransform(-222.4,-20.2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgaAlQgGgGAAgLQAAgNAKgGQAKgGAPABIATAAIAAgKQAAgKgHgFQgFgFgKAAQgJAAgFAFQgHAEAAAIIgIAAIAAgBQgBgJAJgIQAJgHAMAAQANAAAJAHQAJAHAAAOIAAAvIACAIIgKAAIgBgNQgFAHgIAEQgHAEgIAAQgNAAgHgGgAgPAGQgIAGAAAIQAAAHAFAEQAEAEAJAAQAIAAAIgEQAHgFAEgHIAAgSIgTAAQgMAAgGAFg");
	this.shape_282.setTransform(-234.8,-20.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_283.setTransform(-240.8,-22);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgHAGgFQAFgEAIAAIAGABIgBAIIgHAAQgIAAgEAFQgFAFgDAIIAAA4g");
	this.shape_284.setTransform(-248.6,-20.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAKAKgBQAIAAAHgCQAFgCAFgFIAEAGQgGAGgGACQgIADgJAAQgOAAgKgMgAgPgaQgHAIgBAMIAAAAIAwAAIAAgDQAAgJgHgJQgGgHgLAAQgJAAgHAIg");
	this.shape_285.setTransform(-255.9,-20.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAEgHAHgDQAHgFAGAAQAQABAIALQAIAMAAAVIAAABQAAASgIALQgIAKgQABQgGAAgHgEQgIgEgDgFIAAArgAgOgtQgGAEgDAIIAAAmQADAGAGAFQAHAEAHAAQAMAAAGgJQAGgJAAgOIAAgCQAAgPgGgLQgGgKgMAAQgIABgGAEg");
	this.shape_286.setTransform(-264.3,-18.6);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAKAKgBQAIAAAHgCQAFgCAFgFIAEAGQgFAGgHACQgIADgJAAQgOAAgKgMgAgOgaQgHAHgCANIABAAIAvAAIAAgDQAAgKgHgIQgGgHgLAAQgJAAgGAIg");
	this.shape_287.setTransform(-276.8,-20.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgGgGgJAAQgIAAgGAFQgHAFgCAJIAAA4IgJAAIAAhSIAIAAIABAPQADgIAIgEQAHgEAHAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_288.setTransform(-285.3,-20.3);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_289.setTransform(-291.5,-22);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_290.setTransform(-295.1,-22);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgGgGgKAAQgHAAgHAFQgFAFgEAJIAAA4IgJAAIAAhSIAIAAIABAPQAFgIAHgEQAHgEAGAAQAOAAAIAIQAGAJABARIAAAxg");
	this.shape_291.setTransform(-301.3,-20.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgSALgMQAKgMAPAAQAQAAALAMQAKAMAAASIAAABQAAASgKAMQgKAMgRAAQgQAAgJgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAIAKALAAQANAAAHgKQAHgJAAgPIAAgBQAAgOgHgKQgHgKgNAAQgLAAgIAKg");
	this.shape_292.setTransform(-310.2,-20.2);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgZAlQgHgGAAgLQAAgMAKgHQALgGAPABIASAAIAAgKQAAgKgGgFQgHgFgJAAQgIAAgGAFQgGAEgBAIIgIAAIgBgBQAAgJAJgIQAKgHAMAAQANAAAIAHQAJAHAAAOIAAAvIACAIIgKAAIgBgHIAAgGQgFAHgHAEQgHAEgJAAQgMAAgHgGgAgPAGQgHAGAAAIQAAAHAEAEQAFAEAIAAQAIAAAIgEQAHgFAEgHIAAgSIgTAAQgLAAgHAFg");
	this.shape_293.setTransform(-322.9,-20.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AAxAqIAAgvQAAgQgGgGQgFgGgKAAQgLAAgGAHQgFAHgCAKIAAAzIgHAAIAAgvQAAgQgGgGQgFgGgKAAQgKAAgGAFQgGAGgCAHIAAA5IgJAAIAAhSIAIAAIABAOQAEgGAHgFQAHgEAJAAQAKAAAGAFQAFAEACAKQAEgJAHgFQAIgFAJAAQANAAAIAJQAHAJAAASIAAAvg");
	this.shape_294.setTransform(-334.1,-20.3);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgXAfQgKgKAAgTIAAgCQAAgTAKgLQALgMAMAAQAQAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAKAKgBQAIAAAGgCQAHgCAEgFIAEAGQgGAGgGACQgIADgJAAQgPAAgKgMgAgPgaQgHAIgBAMIAAAAIAvAAIAAgDQAAgKgGgIQgGgHgMAAQgIAAgHAIg");
	this.shape_295.setTransform(-345.1,-20.2);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg0IgOAAIAAgIIAOAAIAAgWIAHAAIAAAWIATAAIAAAIIgTAAIAAA0QAAAJADACQADAEAFAAIAFAAIAFgBIABAHQgCABgEAAIgGABQgKAAgCgFg");
	this.shape_296.setTransform(-352,-21.2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgWAkQgJgIABgJIAAgBIAIAAQABAKAHADQAHAFAHgBQALABAFgFQAGgEAAgHQAAgGgFgEQgFgEgMgDQgNgDgIgEQgHgFAAgKQAAgKAIgGQAJgHALAAQAOAAAIAHQAIAIAAAJIAAABIgJAAQAAgHgGgFQgGgFgJAAQgIAAgGAEQgFAFAAAFQAAAGAFAEQAFAEAKADQAPADAIAEQAHAGAAAKQAAALgIAGQgJAGgOAAQgOAAgIgHg");
	this.shape_297.setTransform(-358.6,-20.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_298.setTransform(-364.4,-22);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgWAkQgIgHAAgKIAAgBIAJAAQAAAJAHAEQAHAFAHgBQAKABAGgFQAGgEAAgHQAAgGgFgEQgFgEgMgDQgMgDgJgEQgHgGAAgJQAAgKAIgGQAJgHALAAQAOAAAIAHQAIAIAAAJIAAABIgJAAQAAgHgGgFQgGgFgJAAQgIAAgGAEQgFAFAAAFQAAAGAFAEQAFAEAKADQAPADAIAEQAHAGAAAKQAAALgIAGQgJAGgOAAQgOAAgIgHg");
	this.shape_299.setTransform(-370.3,-20.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgGgGgKAAQgHAAgGAFQgHAFgCAJIAAA4IgJAAIAAhSIAIAAIABAPQADgIAIgEQAGgEAIAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_300.setTransform(-382.6,-20.3);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgXAhQgIgJAAgSIAAgvIAKAAIAAAvQAAAPAFAHQAFAHAKAAQAHAAAIgFQAGgFACgIIAAg6IAKAAIAABSIgJAAIAAgOQgFAIgGADQgGAEgIAAQgOAAgHgJg");
	this.shape_301.setTransform(-391.5,-20.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgWAvQgLgLAAgSIAAgEQAAgQAKgMQALgMANAAQAPAAAJAKQAJAKAAAOIAAAIIg6AAIAAACQAAAOAIAKQAIAJAKAAQAHAAAIgCQAFgCAFgFIAEAGQgGAGgGACQgIADgJAAQgOAAgKgMgAgPgKQgHAIgBAJIAAABIAvAAIAAgDQAAgIgGgIQgGgHgLAAQgJAAgHAIgAAAglIgTgUIAAgBIAMAAIAOAVg");
	this.shape_302.setTransform(-403.8,-21.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgfAtQgNgNAAgUIAAgWQAAgVANgNQANgNASABQAVgBALALQALALACAUIAAABIgaAAQgBgMgEgFQgEgFgKgBQgHABgGAHQgFAHAAALIAAAXQAAALAGAIQAGAGAHABQAJgBAFgFQAEgFAAgLIAaAAIAAABQgBAUgLALQgLAJgVABQgTAAgNgNg");
	this.shape_303.setTransform(-416.8,-21.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgeAtQgOgNAAgUIAAgWQAAgVANgNQANgNASABQAVgBAMALQALALABAUIAAABIgZAAQgCgMgEgFQgEgFgKgBQgHABgFAHQgGAHAAALIAAAXQABALAFAIQAGAGAIABQAIgBAFgFQAEgFABgLIAZAAIAAABQgBAUgLALQgLAJgUABQgUAAgMgNg");
	this.shape_304.setTransform(-427,-21.6);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AghAsQgNgNAAgVIAAgTQAAgVANgNQANgNAUAAQAVAAANANQANAOAAAUIAAATQAAAVgNANQgNAOgVAAQgUAAgNgOgAgPgdQgFAJAAALIAAATQAAAMAFAIQAGAIAJAAQAKAAAGgIQAFgIAAgMIAAgTQAAgLgFgJQgHgIgJAAQgIAAgHAIg");
	this.shape_305.setTransform(-437.6,-21.6);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AAVA4IgohGIgBABIAABFIgaAAIAAhvIAaAAIAoBGIABAAIAAhGIAaAAIAABvg");
	this.shape_306.setTransform(-448.6,-21.6);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#0C5EA5").s().p("Ag3BTQgXgaAAgnIAAgjQAAgnAXgaQAWgZAiAAQAkAAAVATQAVATgBAgIAAAAIgbAAQAAgVgNgOQgNgMgYAAQgWAAgOATQgOATAAAcIAAAkQAAAdAOATQAOATAWAAQAYAAANgMQANgNAAgXIAbAAIAAABQABAegWAUQgUAUgkAAQgiAAgWgZg");
	this.shape_307.setTransform(-307.6,-75.9);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#0C5EA5").s().p("Ag3BTQgXgaAAgnIAAgjQAAgnAXgaQAWgZAiAAQAkAAAVATQAVATgBAgIAAAAIgbAAQAAgWgNgNQgNgMgYAAQgWAAgOATQgOAUAAAbIAAAkQAAAcAOAUQAOATAWAAQAYAAANgMQANgNAAgXIAbAAIAAABQABAegVAUQgWAUgjAAQgiAAgWgZg");
	this.shape_308.setTransform(-326.4,-75.9);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#0C5EA5").s().p("Ag8BSQgXgZAAgnIAAgjQAAgnAXgZQAYgaAkAAQAkAAAYAaQAYAZAAAnIAAAjQAAAngYAZQgYAagkAAQgkAAgYgagAgohBQgPASAAAeIAAAjQAAAeAPASQAPATAZAAQAYAAAQgTQAPgSAAgeIAAgjQAAgegPgSQgPgSgZAAQgZAAgPASg");
	this.shape_309.setTransform(-346.1,-75.9);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#0C5EA5").s().p("AAzBpIhkihIgBAAIAAChIgcAAIAAjRIAcAAIBkChIABAAIAAihIAcAAIAADRg");
	this.shape_310.setTransform(-366.8,-75.9);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#0C5EA5").s().p("AgtBYQgTgWAAgiIAAgHQAAggAUgVQAUgXAZAAQAgAAAQATQAQAUAAAdIAAASIhjAAIgBABQABAXALAOQAJAOATAAQAQAAAJgEQALgDAIgIIAMATQgJAIgOAFQgMAGgVAAQgfAAgTgWgAgWgQQgJALgDARIABABIBGAAIAAgEQAAgOgJgMQgJgLgSAAQgNAAgKAMgAgIhGIgkgmIAAgBIAhAAIAXAng");
	this.shape_311.setTransform(-392.4,-76.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#0C5EA5").s().p("AgNAkIABhHIAaAAIAAAgIgOAng");
	this.shape_312.setTransform(-402.2,-84.3);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#0C5EA5").s().p("AgtBCQgQgPAAgVIAAgBIAcAAQABAQAKAGQAKAHANAAQAPAAAIgGQAJgGAAgKQAAgJgHgGQgHgGgTgFQgdgHgNgIQgPgKAAgTQAAgTARgNQAQgOAYAAQAbAAAQAOQARAOgBAVIAAAAIgcAAQAAgKgIgIQgJgIgOAAQgNAAgIAGQgHAHAAAKQAAAJAHAFQAFAFATAFQAcAFAQAKQAPALAAASQAAAUgRAOQgQANgcAAQgcAAgSgPg");
	this.shape_313.setTransform(-412.5,-73.2);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#0C5EA5").s().p("AgyA7QgTgXAAgjIAAgBQAAgiATgXQATgXAfAAQAgAAATAXQATAXAAAiIAAABQAAAjgTAXQgTAWggAAQgfAAgTgWgAgegpQgKARAAAYIAAABQAAAZAKAQQAKAQAUAAQAVAAAKgQQAKgQAAgZIAAgBQAAgYgKgRQgLgQgUAAQgTAAgLAQg");
	this.shape_314.setTransform(-428.7,-73.2);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#0C5EA5").s().p("Ag3BTQgXgaAAgnIAAgjQAAgnAXgaQAWgZAiAAQAkAAAVATQAVATgBAgIAAAAIgbAAQAAgVgNgOQgNgMgYAAQgWAAgOATQgOATAAAcIAAAkQAAAdAOATQAOATAWAAQAYAAANgMQANgNAAgXIAbAAIAAABQABAegVAUQgWAUgjAAQgiAAgWgZg");
	this.shape_315.setTransform(-446.3,-75.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#0C5EA5").ss(6.2).p("EBHOAS2MiObAAAQhuAAhNhNQhNhOAAhtIAA9aQAAhuBNhNQBNhOBuAAMCObAAAQBuAABNBOQBNBNAABuIAAdaQAABthNBOQhNBNhuAAg");

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("EhHNAS2QhuAAhNhNQhNhOAAhtIAA9aQAAhuBNhNQBNhOBuAAMCObAAAQBuAABNBOQBNBNAABuIAAdaQAABthNBOQhNBNhuAAg");

	this.addChild(this.shape_317,this.shape_316,this.shape_315,this.shape_314,this.shape_313,this.shape_312,this.shape_311,this.shape_310,this.shape_309,this.shape_308,this.shape_307,this.shape_306,this.shape_305,this.shape_304,this.shape_303,this.shape_302,this.shape_301,this.shape_300,this.shape_299,this.shape_298,this.shape_297,this.shape_296,this.shape_295,this.shape_294,this.shape_293,this.shape_292,this.shape_291,this.shape_290,this.shape_289,this.shape_288,this.shape_287,this.shape_286,this.shape_285,this.shape_284,this.shape_283,this.shape_282,this.shape_281,this.shape_280,this.shape_279,this.shape_278,this.shape_277,this.shape_276,this.shape_275,this.shape_274,this.shape_273,this.shape_272,this.shape_271,this.shape_270,this.shape_269,this.shape_268,this.shape_267,this.shape_266,this.shape_265,this.shape_264,this.shape_263,this.shape_262,this.shape_261,this.shape_260,this.shape_259,this.shape_258,this.shape_257,this.shape_256,this.shape_255,this.shape_254,this.shape_253,this.shape_252,this.shape_251,this.shape_250,this.shape_249,this.shape_248,this.shape_247,this.shape_246,this.shape_245,this.shape_244,this.shape_243,this.shape_242,this.shape_241,this.shape_240,this.shape_239,this.shape_238,this.shape_237,this.shape_236,this.shape_235,this.shape_234,this.shape_233,this.shape_232,this.shape_231,this.shape_230,this.shape_229,this.shape_228,this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223,this.shape_222,this.shape_221,this.shape_220,this.shape_219,this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-498.5,-123.7,984,247.5);


(lib.btnmerckpiccolo = function() {
	this.initialize();

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AngBFIAAiJIPBAAIAACJg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.1,-6.9,96.4,13.8);


(lib.btnmerckhome = function() {
	this.initialize();

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC00").s().p("ALdHAIAAt/IS7AAIAAN/gA+XFjIAAoZIfhAAIAAIZg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-194.4,-44.8,388.9,89.7);


(lib.btnmail = function() {
	this.initialize();

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AoJBhIAAjBIQTAAIAADBg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.2,-9.7,104.6,19.5);


(lib.btnlinkotto = function() {
	this.initialize();

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AkGBEIAAiHIINAAIAACHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.3,-6.8,52.7,13.8);


(lib.btnaiocc = function() {
	this.initialize();

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC00").s().p("AjpBDIAAiFIHTAAIAACFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.4,-6.7,46.8,13.6);


(lib.btn_next = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D22040").s().p("AgXCyICWiYIljAAIAAgzIFjAAIiWiYIAkglIDYDWIjYDXg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzDiIAAnDIHnAAIAAHDg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXCyICWiYIljAAIAAgzIFjAAIiWiYIAkglIDYDWIjYDXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.4,-22.6,48.8,45.3);


(lib.btn_entra = function() {
	this.initialize();

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDBfQgSgQAAgdQAAgeAagSQAagQAqAAIAwAAIAAgbQAAgXgPgNQgQgNgaAAQgWAAgRAMQgRANAAASIgWAAIAAgBQgCgYAYgTQAXgUAiAAQAjAAAXATQAVASAAAiIAABoQAAALACALQAAAKAEALIgZAAIgDgSIgBgRQgMARgUALQgVAMgWAAQggAAgRgRgAgqAQQgTAPAAAUQAAASAMAKQANAMAUAAQAXAAAVgNQAUgMAJgSIAAguIgxAAQgeAAgUAOg");
	this.shape.setTransform(34.8,2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyBuIAAjXIAVAAIADAlIAAACQAJgUARgLQAOgMAVABIAQACIgEAWIgRgBQgWAAgNANQgOALgHAXIAACUg");
	this.shape_1.setTransform(18.5,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHB7QgNgOAAggIAAiKIglAAIAAgUIAlAAIAAg3IAXAAIAAA3IAvAAIAAAUIgvAAIAACKQAAAVAHAJQAJAJAMAAIAYgCIADASQgEACgLACIgRABQgWAAgLgOg");
	this.shape_2.setTransform(3.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA6BuIAAiCQAAgmgOgOQgOgQgZAAQgYAAgQANQgPANgHAWIAACWIgYAAIAAjXIAVAAIACAmQAKgSASgMQATgLAVAAQAjAAASAVQATAVAAAuIAACCg");
	this.shape_3.setTransform(-14.7,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag8BSQgbgeAAguIAAgJQAAguAbgfQAbgfAjAAQAoAAAXAaQAXAYAAArIAAASIiXAAIAAAGQAAAkAUAZQASAYAeAAQAXAAAQgGQARgHAKgLIAKARQgMANgTAHQgTAIgaAAQgmAAgbgegAgohGQgSAUgDAfIAAABIB9AAIAAgGQAAgcgRgTQgQgTgdAAQgYAAgSAUg");
	this.shape_4.setTransform(-36.6,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D22040").s().p("AosDtQg5AAgqgpQgpgpAAg6IAAjBQAAg6ApgpQAqgpA5AAIRZAAQA6AAApApQApApAAA6IAADBQAAA6gpApQgpApg6AAg");

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.7,-23.7,139.5,47.6);


(lib.btn_D = function() {
	this.initialize();

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5EA5").s().p("AgvBGQgTgRABgVIAAgBIAdAAQABAQAMAIQALAIANAAQAQgBAKgGQAJgHAAgLQAAgKgIgGQgHgGgVgFQgegIgPgIQgPgLAAgVQAAgUARgOQARgOAaAAQAeAAARAPQARAPgBAVIAAABIgdAAQAAgLgJgJQgKgJgPABQgPAAgHAGQgIAHAAAKQAAALAHAFQAHAGAUAEQAeAHARAKQAPAMAAAUQAAAWgSAOQgSANgdAAQgeAAgSgQg");
	this.shape.setTransform(54.3,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5EA5").s().p("AgGBeQgLgMAAgXIAAhkIgbAAIAAgXIAbAAIAAgoIAcAAIAAAoIAgAAIAAAXIggAAIAABkQAAAKAFAGQAGAFAHAAIAGgBIAGgBIAEAVQgEADgGABIgOACQgSAAgJgLg");
	this.shape_1.setTransform(40,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5EA5").s().p("AgOB4IAAilIAdAAIAAClgAgOhYIAAgfIAdAAIAAAfg");
	this.shape_2.setTransform(31,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5EA5").s().p("Ag0BjQgRgVgBglIAAgDQABgnARgZQARgYAgAAQANAAALAFQALAGAIAKIAAhcIAeAAIAADvIgZAAIgDgUQgIAMgMAGQgMAGgOAAQgfAAgRgXgAgdgHQgKAQAAAdIAAADQAAAaAKAPQALAPAUAAQANAAAJgGQALgHAFgLIAAhLQgGgLgKgGQgJgHgNAAQgUAAgLATg");
	this.shape_3.setTransform(17.6,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5EA5").s().p("AgwA/QgVgYAAgkIAAgGQAAgjAWgYQAVgYAbABQAigBARAVQASAUAAAiIAAARIhrAAIgBABQABAZAMAPQALAQAUAAQAPAAAMgFQALgFAJgHIAMATQgKAKgOAGQgPAFgUAAQghAAgVgXgAgXgxQgLANgDAUIABABIBLAAIAAgFQAAgRgKgNQgJgLgTAAQgOAAgKAMg");
	this.shape_4.setTransform(0.7,3.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5EA5").s().p("AgoBVIAAimIAbAAIADAZQAHgNAJgIQAKgHAOAAIAGABIAFABIgEAcIgQgBQgLAAgJAGQgGAFgFALIAAB2g");
	this.shape_5.setTransform(-12,3.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5EA5").s().p("Ag7BYQgYgbAAgpIAAgmQAAgqAYgbQAZgcAjAAQAmAAAXAVQAXAUgBAiIAAABIgdAAQAAgYgOgOQgOgNgaAAQgYAAgOAUQgQAUAAAfIAAAnQAAAfAQAUQAPAVAXAAQAaAAAOgOQAOgOAAgYIAdAAIAAABQABAggXAVQgXAWgmAAQgkAAgYgcg");
	this.shape_6.setTransform(-28.2,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7AC40").s().p("AhBAnIBbgkIANgDIAAAAIgNgCIhbgkIAAgfICDA7IAAAVIiDA7g");
	this.shape_7.setTransform(-54.3,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ApsCKIAAkUITZAAIAAEUg");
	this.shape_8.setTransform(0.1,0.1);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.1,-13.8,124.3,27.8);


(lib.btn_close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005CA7").s().p("AAABUIiqCsIhVhVICsirIisiqIBVhVICqCsICrirIBVBUIisCqICsCrIhVBVg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkMENIAAoZIIZAAIAAIZg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAABUIiqCsIhVhVICsirIisiqIBVhVICqCsICrirIBVBUIisCqICsCrIhVBVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.9,-27,54,54);


(lib.btn_C = function() {
	this.initialize();

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5EA5").s().p("Ag7BYQgYgcAAgpIAAgmQAAgpAYgcQAYgbAkAAQAnAAAWAVQAXAUgBAiIAAABIgdAAQAAgYgOgOQgOgOgaAAQgYAAgOAVQgQAVAAAeIAAAmQAAAfAQAVQAPAUAXAAQAaAAAOgNQAOgNAAgZIAdAAIAAABQABAfgXAWQgYAWglgBQgkAAgYgbg");
	this.shape.setTransform(171.1,-2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5EA5").s().p("Ag7BYQgYgbAAgqIAAgmQAAgqAYgbQAYgbAkAAQAnAAAWAVQAXAUgBAiIAAABIgeAAQAAgYgOgOQgNgOgaAAQgYAAgPAVQgPAUAAAfIAAAmQAAAfAPAVQAPAUAYAAQAaAAANgNQAOgNAAgZIAeAAIAAABQAAAfgWAWQgYAWglgBQgkAAgYgbg");
	this.shape_1.setTransform(151,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5EA5").s().p("AhABYQgZgcAAgpIAAgmQAAgpAZgcQAZgbAnAAQAnAAAZAbQAaAcAAApIAAAmQAAArgaAaQgZAcgngBQgoABgYgcgAgrhGQgQAUAAAfIAAAmQAAAgAQATQAQAVAbgBQAaABARgVQARgTAAggIAAgmQAAgegRgVQgRgUgaAAQgbAAgQAUg");
	this.shape_2.setTransform(129.9,-2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5EA5").s().p("AA2BwIhqisIgBAAIAACsIgfAAIAAjfIAfAAIBrCsIAAAAIAAisIAfAAIAADfg");
	this.shape_3.setTransform(107.8,-2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5EA5").s().p("AgwA/QgVgXAAglIAAgGQAAgkAWgXQAVgYAbABQAigBARAVQASAVAAAhIAAARIhrAAIgBABQABAZAMAPQALAPAUAAQAQABALgFQALgEAJgIIAMAUQgKAJgOAFQgPAHgUgBQghABgVgYgAgXgwQgLANgDASIABACIBLAAIAAgFQAAgRgJgMQgKgNgTAAQgNAAgLAOg");
	this.shape_4.setTransform(80.3,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5EA5").s().p("AgoBVIAAimIAbAAIADAZQAIgNAIgIQALgHANAAIAGABIAFABIgEAcIgQgBQgLAAgJAGQgGAGgFAKIAAB2g");
	this.shape_5.setTransform(67.6,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5EA5").s().p("Ag3BJQgOgNAAgYQAAgYAUgMQATgNAfAAIAiAAIAAgRQgBgPgIgIQgKgJgQAAQgMAAgKAIQgJAHAAALIgdAAIAAgBQgBgSASgQQASgPAbABQAeAAAQAOQARAOAAAbIABBhIAEAQIggAAIgDgZQgJAMgOAIQgMAIgPAAQgaAAgOgNgAgbAPQgLAJAAANQAAALAHAGQAGAGAPAAQAPAAANgIQANgJAEgLIAAgbIgjAAQgQAAgLAKg");
	this.shape_6.setTransform(52.4,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5EA5").s().p("AhBBTIAAgVIBYh4IhXAAIAAgYIB9AAIAAAUIhaB5IBfAAIAAAYg");
	this.shape_7.setTransform(35.9,0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C5EA5").s().p("AhBBTIAAgVIBYh4IhXAAIAAgYIB9AAIAAAUIhaB5IBfAAIAAAYg");
	this.shape_8.setTransform(20,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0C5EA5").s().p("AgOB4IAAilIAdAAIAAClgAgOhYIAAgfIAdAAIAAAfg");
	this.shape_9.setTransform(7.8,-3.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0C5EA5").s().p("AgOB4IAAjvIAdAAIAADvg");
	this.shape_10.setTransform(-0.2,-3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0C5EA5").s().p("AgOB4IAAilIAdAAIAAClgAgOhYIAAgfIAdAAIAAAfg");
	this.shape_11.setTransform(-8.2,-3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0C5EA5").s().p("AgGBeQgLgMAAgXIAAhkIgbAAIAAgXIAbAAIAAgoIAcAAIAAAoIAgAAIAAAXIggAAIAABkQAAALAFAFQAGAFAHAAIAMgCIAEAVQgEADgGABQgGACgIAAQgSAAgJgLg");
	this.shape_12.setTransform(-18.1,-1.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0C5EA5").s().p("Ag0BEQgPgTAAgkIAAhhIAfAAIAABhQAAAcAIAJQAHAKARAAQAPAAAKgHQALgHAFgLIAAh3IAfAAIAAClIgcAAIgCgYQgIANgMAIQgMAHgPAAQgbAAgQgRg");
	this.shape_13.setTransform(-32.2,0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0C5EA5").s().p("Ag1BeQgVgZAAglIAAgDQAAgjAVgYQATgYAiAAQAiAAAUAYQAVAYAAAjIAAADQAAAlgVAZQgUAYgiAAQghAAgUgYgAgggNQgLAQAAAaIAAADQAAAbALARQAMASAUAAQAVAAAMgSQALgRAAgbIAAgDQAAgagLgQQgLgRgWAAQgVAAgLARgAgKhLIgngpIABgBIAjAAIAZAqg");
	this.shape_14.setTransform(-58.1,-2.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0C5EA5").s().p("Ag0BEQgPgTAAgkIAAhhIAfAAIAABhQAAAcAIAJQAHAKARAAQAOAAALgHQAKgGAGgMIAAh3IAfAAIAAClIgcAAIgCgYQgIANgMAIQgMAHgPAAQgbAAgQgRg");
	this.shape_15.setTransform(-76.1,0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0C5EA5").s().p("AhGB1IAAjmIAXAAIAGAVQAIgLAMgHQAMgGAOAAQAfAAARAYQASAaAAAoIAAADQAAAigSAWQgRAXgfAAQgMAAgNgGQgMgEgHgLIAABSgAgYhVQgKAFgFALIAABPQAFAJAKAHQAJAGANAAQAUAAAMgQQALgQAAgXIAAgDQgBgcgLgTQgMgTgTAAQgNAAgJAHg");
	this.shape_16.setTransform(-93.8,3.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0C5EA5").s().p("AgOB4IAAilIAdAAIAAClgAgOhYIAAgfIAdAAIAAAfg");
	this.shape_17.setTransform(-115,-3.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0C5EA5").s().p("AAlB4IAAhpQAAgTgJgKQgJgKgRAAQgLAAgKAGQgKAGgHALIAAB5IgfAAIAAjvIAfAAIAABgQAJgMAMgHQAMgGAOAAQAbAAAPAQQAPAQAAAfIAABpg");
	this.shape_18.setTransform(-128,-3.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0C5EA5").s().p("Ag7BYQgYgbAAgqIAAgmQAAgqAYgbQAZgbAjAAQAnAAAWAVQAXAUgBAiIAAABIgdAAQAAgXgOgPQgOgOgaAAQgYAAgOAVQgQAUAAAfIAAAmQAAAgAQAUQAPAUAXAAQAaAAAOgNQAOgOAAgYIAdAAIAAABQABAggXAVQgXAWgmgBQgjAAgZgbg");
	this.shape_19.setTransform(-146.9,-2.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7AC40").s().p("AhBAoIBbglIANgDIAAAAIgNgDIhbgkIAAgdICDA6IAAAVIiDA6g");
	this.shape_20.setTransform(-172.9,0.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("A8fC6IAAlzMA4/AAAIAAFzg");
	this.shape_21.setTransform(-0.1,-0.6);

	this.addChild(this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-182.5,-19.3,364.9,37.3);


(lib.btn_B = function() {
	this.initialize();

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5EA5").s().p("Ag7BZQgYgcAAgqIAAglQAAgqAYgcQAYgbAkAAQAnABAWATQAXAWgBAgIAAABIgeAAQAAgXgOgOQgNgNgaAAQgYgBgPAVQgPAUAAAfIAAAmQAAAfAPAVQAPAVAYgBQAaABANgOQAOgNAAgZIAeAAIAAABQAAAfgWAWQgXAWgmAAQgkAAgYgbg");
	this.shape.setTransform(155.8,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5EA5").s().p("Ag7BZQgYgcAAgqIAAglQAAgqAYgcQAYgbAkAAQAnABAWATQAXAVgBAhIAAABIgeAAQAAgXgOgOQgNgNgaAAQgYgBgPAVQgPAUAAAfIAAAmQAAAfAPAVQAPAVAYgBQAaABANgOQAOgNAAgZIAeAAIAAABQAAAfgWAWQgXAWgmAAQgkAAgYgbg");
	this.shape_1.setTransform(135.7,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5EA5").s().p("AhABYQgZgbAAgqIAAglQAAgqAZgcQAYgbAoAAQAnAAAZAbQAaAdAAApIAAAlQAAAqgaAbQgZAbgnABQgogBgYgbgAgrhGQgQAUAAAfIAAAmQAAAgAQAUQARATAaAAQAaAAARgTQARgUAAggIAAgmQAAgfgRgUQgRgUgaABQgagBgRAUg");
	this.shape_2.setTransform(114.6,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5EA5").s().p("AA2BwIhqisIgBAAIAACsIgfAAIAAjfIAfAAIBqCsIABAAIAAisIAfAAIAADfg");
	this.shape_3.setTransform(92.4,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5EA5").s().p("Ag3BJQgNgOAAgXQgBgYAUgMQATgNAgAAIAhAAIAAgQQAAgPgJgJQgKgJgPAAQgNAAgKAIQgJAHAAALIgdAAIAAgBQgBgTASgPQATgOAaAAQAeAAAQAOQARAPAAAbIAABPIABARIADAQIgfAAIgCgNIgBgMQgKANgNAIQgMAIgPAAQgaAAgOgOgAgbAPQgLAJAAAMQAAAMAHAGQAGAGAOAAQAQAAANgIQANgIAEgLIAAgbIgiAAQgRAAgLAJg");
	this.shape_4.setTransform(64.4,3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5EA5").s().p("AAlBVIAAhnQAAgXgJgJQgIgJgSAAQgKAAgMAGQgLAIgFAKIAAB4IgfAAIAAimIAcAAIACAZQAIgOANgGQANgIAOAAQAbAAAOAQQAQAQgBAhIAABog");
	this.shape_5.setTransform(46.8,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5EA5").s().p("Ag1A+QgVgXABgmIAAgBQgBgmAVgYQAUgYAhABQAjgBATAYQAVAYgBAmIAAABQABAmgVAXQgTAZgjAAQghAAgUgZgAgggsQgLARAAAbIAAABQAAAbALARQALARAVAAQAVAAAMgRQALgQAAgcIAAgBQAAgbgLgRQgMgSgVAAQgVAAgLASg");
	this.shape_6.setTransform(28.7,3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5EA5").s().p("AgOB4IAAilIAdAAIAAClgAgOhYIAAgfIAdAAIAAAfg");
	this.shape_7.setTransform(15.7,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C5EA5").s().p("AhBBTIAAgVIBZh4IhYAAIAAgYIB9AAIAAAUIhZB5IBeAAIAAAYg");
	this.shape_8.setTransform(3.9,3.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0C5EA5").s().p("AAlBVIAAhnQAAgXgIgJQgKgJgRAAQgLAAgLAGQgLAHgFALIAAB4IgeAAIAAimIAbAAIACAZQAIgOANgGQANgIAOAAQAcAAAOAQQAPAPAAAiIAABog");
	this.shape_9.setTransform(-13.3,3.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0C5EA5").s().p("AgzBDQgQgSAAgkIAAhhIAfAAIAABhQAAAaAIALQAIAKARAAQAOAAAKgGQALgIAFgLIAAh3IAfAAIAAClIgbAAIgCgYQgJANgMAIQgMAHgOAAQgbAAgQgSg");
	this.shape_10.setTransform(-31.4,3.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0C5EA5").s().p("AgXB6IAAiPIgaAAIAAgWIAaAAIAAgVQAAgcAOgOQAMgPAZAAIALABIALADIgDAWIgPgBQgNAAgHAIQgHAIAAAQIAAAVIAjAAIAAAWIgjAAIAACPg");
	this.shape_11.setTransform(-45.3,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0C5EA5").s().p("AgwA/QgUgXgBglIAAgFQAAgkAWgYQAVgXAbAAQAiAAARAUQARAUAAAjIAAAQIhqAAIAAABQAAAYALAQQANAPATAAQAPABAMgFQAMgFAIgHIAMAUQgJAIgOAGQgQAHgUAAQghAAgVgYgAgXgwQgMANgCASIABABIBLAAIAAgDQAAgTgJgLQgKgMgTgBQgOABgKANg");
	this.shape_12.setTransform(-67.4,3.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0C5EA5").s().p("ABWBVIAAhjQAAgYgJgLQgJgKgRAAQgPAAgKALQgJAKgDARIAABqIgcAAIAAhjQAAgXgJgLQgIgLgRAAQgOAAgJAGQgKAGgDAKIAAB6IgfAAIAAimIAbAAIACAWQAIgLANgHQAMgHARAAQARAAAMAIQAKAIAGAPQAJgOAMgIQANgJARAAQAaAAAPASQAPARAAAkIAABig");
	this.shape_13.setTransform(-89.8,3.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0C5EA5").s().p("Ag1A+QgVgXABgmIAAgBQgBgmAVgYQAUgYAhABQAjgBATAYQAVAZgBAlIAAABQAAAmgTAXQgVAZgiAAQghAAgUgZgAgggsQgLARAAAbIAAABQAAAbALARQAMARAUAAQAVAAAMgRQALgSAAgaIAAgBQAAgbgLgRQgMgSgVAAQgUAAgMASg");
	this.shape_14.setTransform(-112.7,3.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0C5EA5").s().p("Ag7BZQgYgcAAgqIAAglQAAgqAYgcQAZgbAjAAQAnABAWATQAXAWgBAgIAAABIgdAAQAAgWgOgPQgOgNgaAAQgYgBgOAVQgQAUAAAfIAAAmQAAAgAQAUQAPAVAXgBQAaABAOgOQAOgOAAgYIAdAAIAAABQABAfgXAWQgWAWgnAAQgjAAgZgbg");
	this.shape_15.setTransform(-131.5,0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F7AC40").s().p("AhBAoIBbglIANgDIAAAAIgNgCIhbgkIAAgfICDA7IAAAVIiDA6g");
	this.shape_16.setTransform(-157.6,3.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("A6FCbIAAk1MA0LAAAIAAE1g");
	this.shape_17.setTransform(0.7,0.5);

	this.addChild(this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-166.3,-15.1,334,31.1);


(lib.btn_A = function() {
	this.initialize();

	// Livello 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5EA5").s().p("Ag7BZQgYgbAAgrIAAglQAAgrAYgaQAZgbAjAAQAnAAAWATQAXAWgBAgIAAABIgdAAQAAgWgOgPQgOgNgaAAQgYAAgOAUQgQAUAAAfIAAAmQAAAgAQAUQAPAVAXgBQAaAAAOgOQAOgNAAgYIAdAAIAAABQABAfgXAWQgWAVgnABQgjAAgZgbg");
	this.shape.setTransform(86.3,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5EA5").s().p("Ag7BZQgYgbAAgrIAAglQAAgrAYgaQAZgbAjAAQAnAAAWATQAXAWgBAgIAAABIgdAAQAAgXgOgOQgOgNgaAAQgYAAgOAUQgQAUAAAfIAAAmQAAAgAQAUQAPAVAXgBQAaAAAOgOQAOgMAAgZIAdAAIAAABQABAfgXAWQgWAVgnABQgjAAgZgbg");
	this.shape_1.setTransform(66.2,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5EA5").s().p("AhABYQgZgcAAgpIAAglQAAgpAZgcQAZgcAnABQAnAAAaAbQAZAcAAApIAAAlQAAAqgZAbQgaAcgnAAQgnAAgZgcgAgqhFQgRATABAfIAAAmQgBAfARAVQAPATAbABQAbgBAQgTQAQgUAAggIAAgmQAAgfgQgTQgQgVgbABQgbgBgPAVg");
	this.shape_2.setTransform(45.1,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5EA5").s().p("AA2BwIhqisIgBAAIAACsIgfAAIAAjfIAfAAIBqCsIABAAIAAisIAfAAIAADfg");
	this.shape_3.setTransform(23,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5EA5").s().p("AgwBeQgVgXAAglIAAgHQAAgiAVgYQAWgXAbAAQAiAAARAUQASAVAAAgIAAATIhrAAIgBABQABAYAMAPQALAQAUAAQAPAAAMgFQALgEAJgIIAMAUQgJAJgPAGQgPAGgUAAQghAAgVgYgAgXgRQgLAMgDASIABABIBLAAIAAgEQAAgQgKgMQgJgMgTAAQgOAAgKANgAgJhMIgngoIAAgBIAkAAIAZApg");
	this.shape_4.setTransform(-4.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5EA5").s().p("AgOAmIAAhMIAdAAIAAAjIgPApg");
	this.shape_5.setTransform(-14.9,-8.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5EA5").s().p("AgwBGQgSgQABgWIAAAAIAdAAQABAPALAIQAMAHANAAQAQAAAJgGQAKgHAAgLQAAgJgIgHQgHgGgVgGQgdgGgQgKQgQgLAAgTQAAgUASgPQAQgPAbAAQAeAAARAPQARAPgBAWIAAABIgdAAQAAgLgKgJQgJgIgPgBQgOAAgIAIQgIAIAAAJQAAAKAHAFQAGAGAUAFQAfAGARAKQAPANAAASQAAAXgSANQgSAPgdAAQgeAAgTgRg");
	this.shape_6.setTransform(-25.9,3.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5EA5").s().p("Ag1A+QgVgXABgmIAAgBQgBgmAVgYQAUgYAhAAQAjAAATAYQAVAZgBAlIAAABQAAAmgTAXQgVAZgiAAQghAAgUgZgAgggsQgLARAAAbIAAABQAAAbALARQAMASAUgBQAVABAMgSQALgSAAgaIAAgBQAAgagLgSQgMgSgVAAQgUAAgMASg");
	this.shape_7.setTransform(-43.2,3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C5EA5").s().p("Ag7BZQgYgbAAgrIAAglQAAgrAYgaQAZgbAjAAQAnAAAWATQAXAWgBAgIAAABIgdAAQAAgWgOgPQgOgNgaAAQgYAAgOAUQgQAUAAAfIAAAmQAAAgAQAUQAPAVAXgBQAaAAAOgOQAOgNAAgYIAdAAIAAABQABAfgXAWQgWAVgnABQgjAAgZgbg");
	this.shape_8.setTransform(-62.1,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7AC40").s().p("AhBAnIBbglIANgCIAAAAIgNgCIhbgkIAAgfICDA7IAAAVIiDA7g");
	this.shape_9.setTransform(-88.1,3.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AvaCsIAAlXIe1AAIAAFXg");
	this.shape_10.setTransform(1.4,0.6);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.3,-16.7,197.5,34.5);


// stage content:
(lib.NOCC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{popA:104,popB1:119,B2:129,B3:134,B4:139,B5:144,popC:149,popD:159});

	// timeline functions:
	this.frame_95 = function() {
		/* Ferma a questo fotogramma
		La linea temporale si fermerà/effettuerà una pausa in corrispondenza del fotogramma in cui inserite questo codice.
		Può essere utilizzato anche per fermare/mettere in pausa la linea temporale dei clip filmato.
		*/
		
		this.stop();
		
		/* Clic per andare al fotogramma specificato e avviare la riproduzione
		Quando si fa clic sull'istanza di simbolo specificata, la testina di riproduzione si sposta sul fotogramma della linea temporale specificato e la riproduzione riprende da quel punto.
		Può essere utilizzato sulla linea temporale principale o sulle linee temporali dei clip filmato.
		
		Istruzioni:
		1. Sostituite il numero 5 nel codice sottostante con il numero del fotogramma sul quale volete che si sposti la testina di riproduzione quando si fa clic sull'istanza del simbolo.
		2. I numeri di fotogramma in EaselJS iniziano da 0 anziché da 1
		*/
		
		this.btn_A.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_11.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_11()
		{
			this.gotoAndPlay(105);
		}
		
		
		/* Clic per andare al fotogramma specificato e avviare la riproduzione
		Quando si fa clic sull'istanza di simbolo specificata, la testina di riproduzione si sposta sul fotogramma della linea temporale specificato e la riproduzione riprende da quel punto.
		Può essere utilizzato sulla linea temporale principale o sulle linee temporali dei clip filmato.
		
		Istruzioni:
		1. Sostituite il numero 5 nel codice sottostante con il numero del fotogramma sul quale volete che si sposti la testina di riproduzione quando si fa clic sull'istanza del simbolo.
		2. I numeri di fotogramma in EaselJS iniziano da 0 anziché da 1
		*/
		
		this.btn_B.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_12.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_12()
		{
			this.gotoAndPlay(120);
		}
		
		
		/* Clic per andare alla pagina Web
		Quando si fa clic sull'istanza di simbolo specificata, l'URL viene caricato in una nuova finestra del browser.
		
		Istruzioni:
		1. Sostituite http://www.adobe.com con l'indirizzo URL desiderato.
		   Mantenete le virgolette ("").
		*/
		
		this.btn_entra.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			top.location = top.location.href.replace('home', 'login');
		}
		/* Clic per andare al fotogramma specificato e avviare la riproduzione
		Quando si fa clic sull'istanza di simbolo specificata, la testina di riproduzione si sposta sul fotogramma della linea temporale specificato e la riproduzione riprende da quel punto.
		Può essere utilizzato sulla linea temporale principale o sulle linee temporali dei clip filmato.
		
		Istruzioni:
		1. Sostituite il numero 5 nel codice sottostante con il numero del fotogramma sul quale volete che si sposti la testina di riproduzione quando si fa clic sull'istanza del simbolo.
		2. I numeri di fotogramma in EaselJS iniziano da 0 anziché da 1
		*/
		
		this.btn_C.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_23.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_23()
		{
			this.gotoAndPlay(150);
		}
		
		
		/* Clic per andare al fotogramma specificato e avviare la riproduzione
		Quando si fa clic sull'istanza di simbolo specificata, la testina di riproduzione si sposta sul fotogramma della linea temporale specificato e la riproduzione riprende da quel punto.
		Può essere utilizzato sulla linea temporale principale o sulle linee temporali dei clip filmato.
		
		Istruzioni:
		1. Sostituite il numero 5 nel codice sottostante con il numero del fotogramma sul quale volete che si sposti la testina di riproduzione quando si fa clic sull'istanza del simbolo.
		2. I numeri di fotogramma in EaselJS iniziano da 0 anziché da 1
		*/
		
		this.btn_D.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_24.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_24()
		{
			this.gotoAndPlay(160);
		}
		
		
		/* Clic per andare alla pagina Web
		Quando si fa clic sull'istanza di simbolo specificata, l'URL viene caricato in una nuova finestra del browser.
		
		Istruzioni:
		1. Sostituite http://www.adobe.com con l'indirizzo URL desiderato.
		   Mantenete le virgolette ("").
		*/
		
		this.btn_merck_home.addEventListener("click", fl_ClickToGoToWebPage_7);
		
		function fl_ClickToGoToWebPage_7() {
			window.open("http://www.merckserono.it/it/index.html", "_myTab");
		}
	}
	this.frame_109 = function() {
		/* Ferma a questo fotogramma
		La linea temporale si fermerà/effettuerà una pausa in corrispondenza del fotogramma in cui inserite questo codice.
		Può essere utilizzato anche per fermare/mettere in pausa la linea temporale dei clip filmato.
		*/
		
		this.stop();
		/* Clic per andare al fotogramma specificato e avviare la riproduzione
		Quando si fa clic sull'istanza di simbolo specificata, la testina di riproduzione si sposta sul fotogramma della linea temporale specificato e la riproduzione riprende da quel punto.
		Può essere utilizzato sulla linea temporale principale o sulle linee temporali dei clip filmato.
		
		Istruzioni:
		1. Sostituite il numero 5 nel codice sottostante con il numero del fotogramma sul quale volete che si sposti la testina di riproduzione quando si fa clic sull'istanza del simbolo.
		2. I numeri di fotogramma in EaselJS iniziano da 0 anziché da 1
		*/
		
		this.btn_close.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay(93);
		}
	}
	this.frame_124 = function() {
		/* Ferma a questo fotogramma
		La linea temporale si fermerà/effettuerà una pausa in corrispondenza del fotogramma in cui inserite questo codice.
		Può essere utilizzato anche per fermare/mettere in pausa la linea temporale dei clip filmato.
		*/
		
		this.stop();
		
		/* Clic per andare al fotogramma specificato e avviare la riproduzione
		Quando si fa clic sull'istanza di simbolo specificata, la testina di riproduzione si sposta sul fotogramma della linea temporale specificato e la riproduzione riprende da quel punto.
		Può essere utilizzato sulla linea temporale principale o sulle linee temporali dei clip filmato.
		
		Istruzioni:
		1. Sostituite il numero 5 nel codice sottostante con il numero del fotogramma sul quale volete che si sposti la testina di riproduzione quando si fa clic sull'istanza del simbolo.
		2. I numeri di fotogramma in EaselJS iniziano da 0 anziché da 1
		*/
		
		this.btn_close.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_13.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_13()
		{
			this.gotoAndPlay(93);
		}
		
		
		
		
		
		/* Clic per andare al fotogramma specificato e avviare la riproduzione
		Quando si fa clic sull'istanza di simbolo specificata, la testina di riproduzione si sposta sul fotogramma della linea temporale specificato e la riproduzione riprende da quel punto.
		Può essere utilizzato sulla linea temporale principale o sulle linee temporali dei clip filmato.
		
		Istruzioni:
		1. Sostituite il numero 5 nel codice sottostante con il numero del fotogramma sul quale volete che si sposti la testina di riproduzione quando si fa clic sull'istanza del simbolo.
		2. I numeri di fotogramma in EaselJS iniziano da 0 anziché da 1
		*/
		
		this.btn_next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_18.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_18()
		{
			this.gotoAndPlay(129);
		}
	}
	this.frame_129 = function() {
		/* Ferma a questo fotogramma
		La linea temporale si fermerà/effettuerà una pausa in corrispondenza del fotogramma in cui inserite questo codice.
		Può essere utilizzato anche per fermare/mettere in pausa la linea temporale dei clip filmato.
		*/
		
		this.stop();
		
		/* Clic per andare al fotogramma specificato e avviare la riproduzione
		Quando si fa clic sull'istanza di simbolo specificata, la testina di riproduzione si sposta sul fotogramma della linea temporale specificato e la riproduzione riprende da quel punto.
		Può essere utilizzato sulla linea temporale principale o sulle linee temporali dei clip filmato.
		
		Istruzioni:
		1. Sostituite il numero 5 nel codice sottostante con il numero del fotogramma sul quale volete che si sposti la testina di riproduzione quando si fa clic sull'istanza del simbolo.
		2. I numeri di fotogramma in EaselJS iniziano da 0 anziché da 1
		*/
		
		this.btn_close.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_14.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_14()
		{
			this.gotoAndPlay(93);
		}
		
		
		/* Clic per andare al fotogramma specificato e avviare la riproduzione
		Quando si fa clic sull'istanza di simbolo specificata, la testina di riproduzione si sposta sul fotogramma della linea temporale specificato e la riproduzione riprende da quel punto.
		Può essere utilizzato sulla linea temporale principale o sulle linee temporali dei clip filmato.
		
		Istruzioni:
		1. Sostituite il numero 5 nel codice sottostante con il numero del fotogramma sul quale volete che si sposti la testina di riproduzione quando si fa clic sull'istanza del simbolo.
		2. I numeri di fotogramma in EaselJS iniziano da 0 anziché da 1
		*/
		
		this.btn_next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_19.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_19()
		{
			this.gotoAndPlay(134);
		}
	}
	this.frame_134 = function() {
		/* Ferma a questo fotogramma
		La linea temporale si fermerà/effettuerà una pausa in corrispondenza del fotogramma in cui inserite questo codice.
		Può essere utilizzato anche per fermare/mettere in pausa la linea temporale dei clip filmato.
		*/
		
		this.stop();
		
		/* Clic per andare al fotogramma specificato e avviare la riproduzione
		Quando si fa clic sull'istanza di simbolo specificata, la testina di riproduzione si sposta sul fotogramma della linea temporale specificato e la riproduzione riprende da quel punto.
		Può essere utilizzato sulla linea temporale principale o sulle linee temporali dei clip filmato.
		
		Istruzioni:
		1. Sostituite il numero 5 nel codice sottostante con il numero del fotogramma sul quale volete che si sposti la testina di riproduzione quando si fa clic sull'istanza del simbolo.
		2. I numeri di fotogramma in EaselJS iniziano da 0 anziché da 1
		*/
		
		this.btn_close.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_15.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_15()
		{
			this.gotoAndPlay(93);
		}
		
		
		/* Clic per andare al fotogramma specificato e avviare la riproduzione
		Quando si fa clic sull'istanza di simbolo specificata, la testina di riproduzione si sposta sul fotogramma della linea temporale specificato e la riproduzione riprende da quel punto.
		Può essere utilizzato sulla linea temporale principale o sulle linee temporali dei clip filmato.
		
		Istruzioni:
		1. Sostituite il numero 5 nel codice sottostante con il numero del fotogramma sul quale volete che si sposti la testina di riproduzione quando si fa clic sull'istanza del simbolo.
		2. I numeri di fotogramma in EaselJS iniziano da 0 anziché da 1
		*/
		
		this.btn_next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_20.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_20()
		{
			this.gotoAndPlay(139);
		}
	}
	this.frame_139 = function() {
		/* Ferma a questo fotogramma
		La linea temporale si fermerà/effettuerà una pausa in corrispondenza del fotogramma in cui inserite questo codice.
		Può essere utilizzato anche per fermare/mettere in pausa la linea temporale dei clip filmato.
		*/
		
		this.stop();
		
		/* Clic per andare al fotogramma specificato e avviare la riproduzione
		Quando si fa clic sull'istanza di simbolo specificata, la testina di riproduzione si sposta sul fotogramma della linea temporale specificato e la riproduzione riprende da quel punto.
		Può essere utilizzato sulla linea temporale principale o sulle linee temporali dei clip filmato.
		
		Istruzioni:
		1. Sostituite il numero 5 nel codice sottostante con il numero del fotogramma sul quale volete che si sposti la testina di riproduzione quando si fa clic sull'istanza del simbolo.
		2. I numeri di fotogramma in EaselJS iniziano da 0 anziché da 1
		*/
		
		this.btn_close.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_16.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_16()
		{
			this.gotoAndPlay(93);
		}
		
		
		/* Clic per andare al fotogramma specificato e avviare la riproduzione
		Quando si fa clic sull'istanza di simbolo specificata, la testina di riproduzione si sposta sul fotogramma della linea temporale specificato e la riproduzione riprende da quel punto.
		Può essere utilizzato sulla linea temporale principale o sulle linee temporali dei clip filmato.
		
		Istruzioni:
		1. Sostituite il numero 5 nel codice sottostante con il numero del fotogramma sul quale volete che si sposti la testina di riproduzione quando si fa clic sull'istanza del simbolo.
		2. I numeri di fotogramma in EaselJS iniziano da 0 anziché da 1
		*/
		
		this.btn_next.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_21.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_21()
		{
			this.gotoAndPlay(143);
		}
	}
	this.frame_144 = function() {
		/* Ferma a questo fotogramma
		La linea temporale si fermerà/effettuerà una pausa in corrispondenza del fotogramma in cui inserite questo codice.
		Può essere utilizzato anche per fermare/mettere in pausa la linea temporale dei clip filmato.
		*/
		
		this.stop();
		
		/* Clic per andare al fotogramma specificato e avviare la riproduzione
		Quando si fa clic sull'istanza di simbolo specificata, la testina di riproduzione si sposta sul fotogramma della linea temporale specificato e la riproduzione riprende da quel punto.
		Può essere utilizzato sulla linea temporale principale o sulle linee temporali dei clip filmato.
		
		Istruzioni:
		1. Sostituite il numero 5 nel codice sottostante con il numero del fotogramma sul quale volete che si sposti la testina di riproduzione quando si fa clic sull'istanza del simbolo.
		2. I numeri di fotogramma in EaselJS iniziano da 0 anziché da 1
		*/
		
		this.btn_close.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_17.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_17()
		{
			this.gotoAndPlay(93);
		}
	}
	this.frame_154 = function() {
		/* Ferma a questo fotogramma
		La linea temporale si fermerà/effettuerà una pausa in corrispondenza del fotogramma in cui inserite questo codice.
		Può essere utilizzato anche per fermare/mettere in pausa la linea temporale dei clip filmato.
		*/
		
		this.stop();
		
		/* Clic per andare al fotogramma specificato e avviare la riproduzione
		Quando si fa clic sull'istanza di simbolo specificata, la testina di riproduzione si sposta sul fotogramma della linea temporale specificato e la riproduzione riprende da quel punto.
		Può essere utilizzato sulla linea temporale principale o sulle linee temporali dei clip filmato.
		
		Istruzioni:
		1. Sostituite il numero 5 nel codice sottostante con il numero del fotogramma sul quale volete che si sposti la testina di riproduzione quando si fa clic sull'istanza del simbolo.
		2. I numeri di fotogramma in EaselJS iniziano da 0 anziché da 1
		*/
		
		this.btn_close.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_22.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_22()
		{
			this.gotoAndPlay(93);
		}
		
		
		/* Clic per andare alla pagina Web
		Quando si fa clic sull'istanza di simbolo specificata, l'URL viene caricato in una nuova finestra del browser.
		
		Istruzioni:
		1. Sostituite http://www.adobe.com con l'indirizzo URL desiderato.
		   Mantenete le virgolette ("").
		*/
		
		this.btn_aiocc.addEventListener("click", fl_ClickToGoToWebPage_6);
		
		function fl_ClickToGoToWebPage_6() {
			window.open("http://www.aiocc.it", "_myTab");
		}
	}
	this.frame_164 = function() {
		/* Ferma a questo fotogramma
		La linea temporale si fermerà/effettuerà una pausa in corrispondenza del fotogramma in cui inserite questo codice.
		Può essere utilizzato anche per fermare/mettere in pausa la linea temporale dei clip filmato.
		*/
		
		this.stop();
		
		/* Clic per andare alla pagina Web
		Quando si fa clic sull'istanza di simbolo specificata, l'URL viene caricato in una nuova finestra del browser.
		
		Istruzioni:
		1. Sostituite http://www.adobe.com con l'indirizzo URL desiderato.
		   Mantenete le virgolette ("").
		*/
		
		this.btn_link_otto.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			top.location = top.location.href.replace('home', 'login');
		}
		
		/* Clic per andare al fotogramma specificato e avviare la riproduzione
		Quando si fa clic sull'istanza di simbolo specificata, la testina di riproduzione si sposta sul fotogramma della linea temporale specificato e la riproduzione riprende da quel punto.
		Può essere utilizzato sulla linea temporale principale o sulle linee temporali dei clip filmato.
		
		Istruzioni:
		1. Sostituite il numero 5 nel codice sottostante con il numero del fotogramma sul quale volete che si sposti la testina di riproduzione quando si fa clic sull'istanza del simbolo.
		2. I numeri di fotogramma in EaselJS iniziano da 0 anziché da 1
		*/
		
		this.btn_close.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_25.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_25()
		{
			this.gotoAndPlay(93);
		}
		
		
		/* Clic per andare alla pagina Web
		Quando si fa clic sull'istanza di simbolo specificata, l'URL viene caricato in una nuova finestra del browser.
		
		Istruzioni:
		1. Sostituite http://www.adobe.com con l'indirizzo URL desiderato.
		   Mantenete le virgolette ("").
		*/
		
		this.btn_merck_piccolo.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("http://www.merckserono.it/it/index.html", "_myTab");
		}
		
		/* Clic per andare alla pagina Web
		Quando si fa clic sull'istanza di simbolo specificata, l'URL viene caricato in una nuova finestra del browser.
		
		Istruzioni:
		1. Sostituite http://www.adobe.com con l'indirizzo URL desiderato.
		   Mantenete le virgolette ("").
		*/
		
		this.btn_mail.addEventListener("click", fl_ClickToGoToWebPage_5);
		
		function fl_ClickToGoToWebPage_5() {
			window.open("mailto:mail@otto.to.it", "_myTab");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(95).call(this.frame_95).wait(14).call(this.frame_109).wait(15).call(this.frame_124).wait(5).call(this.frame_129).wait(5).call(this.frame_134).wait(5).call(this.frame_139).wait(5).call(this.frame_144).wait(10).call(this.frame_154).wait(10).call(this.frame_164).wait(16));

	// btn next
	this.btn_next = new lib.btn_next();
	this.btn_next.setTransform(954.7,525);
	this.btn_next._off = true;
	new cjs.ButtonHelper(this.btn_next, 0, 1, 2, false, new lib.btn_next(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_next).wait(124).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,x:955.7,y:496},0).to({_off:true},1).wait(4).to({_off:false,y:509},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(40));

	// btn close
	this.btn_close = new lib.btn_close();
	this.btn_close.setTransform(961.9,303.9,0.61,0.61);
	this.btn_close._off = true;
	new cjs.ButtonHelper(this.btn_close, 0, 1, 2, false, new lib.btn_close(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_close).wait(109).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false,x:962,y:291.5},0).to({_off:true},1).wait(4).to({_off:false,x:963,y:324},0).to({_off:true},1).wait(4).to({_off:false,y:308},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false,y:277},0).to({_off:true},1).wait(9).to({_off:false,y:356},0).to({_off:true},1).wait(9).to({_off:false,y:350},0).to({_off:true},1).wait(15));

	// btns pag credits
	this.btn_aiocc = new lib.btnaiocc();
	this.btn_aiocc.setTransform(507.3,442.5);
	this.btn_aiocc.alpha = 0.012;
	new cjs.ButtonHelper(this.btn_aiocc, 0, 1, 1);

	this.btn_mail = new lib.btnmail();
	this.btn_mail.setTransform(109.4,515.4);
	this.btn_mail.alpha = 0.012;
	new cjs.ButtonHelper(this.btn_mail, 0, 1, 1);

	this.btn_merck_piccolo = new lib.btnmerckpiccolo();
	this.btn_merck_piccolo.setTransform(588.3,437.4);
	this.btn_merck_piccolo.alpha = 0.012;
	new cjs.ButtonHelper(this.btn_merck_piccolo, 0, 1, 1);

	this.btn_link_otto = new lib.btnlinkotto();
	this.btn_link_otto.setTransform(388.3,418);
	this.btn_link_otto.alpha = 0.012;
	new cjs.ButtonHelper(this.btn_link_otto, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_aiocc}]},154).to({state:[]},1).to({state:[{t:this.btn_link_otto},{t:this.btn_merck_piccolo},{t:this.btn_mail}]},9).to({state:[]},1).wait(15));

	// pop up
	this.popA = new lib.popA();
	this.popA.setTransform(512,391);
	this.popA.alpha = 0;
	this.popA._off = true;

	this.popB1 = new lib.popB1();
	this.popB1.setTransform(505.9,409.5,1,1,0,0,0,-6.1,0);
	this.popB1.alpha = 0;
	this.popB1._off = true;

	this.popB2 = new lib.popB2();
	this.popB2.setTransform(512,410);

	this.popB3 = new lib.popB3();
	this.popB3.setTransform(512,410);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5EA5").s().p("Ag4BTQgXgZAAgoIAAgkQAAgoAXgZQAXgZAiAAQAkAAAWATQAVATAAAgIgBABIgbAAQAAgWgOgOQgNgNgYAAQgWAAgOAUQgPAUAAAcIAAAkQAAAdAPAUQAOATAWAAQAZAAAMgNQAOgMAAgXIAbAAIABAAQAAAfgWAUQgWAUgjAAQgiAAgXgag");
	this.shape.setTransform(337.1,320.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5EA5").s().p("Ag4BTQgXgaAAgnIAAgkQAAgnAXgaQAXgZAiAAQAkAAAWATQAVATAAAgIgBABIgbAAQAAgWgOgOQgNgNgYAAQgWAAgOAUQgPAUAAAcIAAAkQAAAdAPAUQAOATAWAAQAZAAAMgNQAOgMAAgXIAbAAIABAAQAAAfgWAUQgWAUgjAAQgiAAgXgag");
	this.shape_1.setTransform(318.1,320.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5EA5").s().p("Ag9BTQgXgZAAgoIAAgkQAAgnAXgZQAXgaAmAAQAlAAAYAZQAYAbAAAmIAAAkQAAAogYAZQgZAagkAAQglAAgYgagAgohCQgPATAAAdIAAAkQAAAeAPATQAPASAZAAQAZAAAPgSQAQgTAAgeIAAgkQAAgdgQgTQgQgTgYAAQgZAAgPATg");
	this.shape_2.setTransform(298.1,320.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5EA5").s().p("AAzBqIhkiiIgBAAIAACiIgdAAIAAjTIAdAAIBlCjIAAAAIAAijIAdAAIAADTg");
	this.shape_3.setTransform(277.2,320.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5EA5").s().p("Ag0BFQgNgNAAgWQAAgXATgLQARgMAeAAIAgAAIAAgQQAAgOgJgIQgIgIgQAAQgMAAgIAHQgJAHAAAKIgcAAIAAgBQgBgRARgPQARgOAaAAQAbAAAQAOQARANAAAaIAABbIAEAPIgeAAIgDgXQgJALgMAIQgMAIgOAAQgZAAgNgNgAgaAOQgKAJAAALQAAALAHAGQAGAGANAAQAOAAAMgIQANgIAEgKIAAgaIghAAQgPAAgLAJg");
	this.shape_4.setTransform(250.7,323);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5EA5").s().p("AAjBQIAAhhQAAgVgIgJQgIgIgSgBQgKAAgKAHQgKAGgFAKIAABxIgdAAIAAidIAaAAIACAZQAIgOAMgGQALgHAOAAQAaAAAOAPQAOAQAAAeIAABig");
	this.shape_5.setTransform(234,322.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5EA5").s().p("AgyA7QgUgXAAgjIAAgBQAAgjAUgXQATgXAfAAQAgAAATAXQAUAXAAAjIAAABQAAAjgUAXQgSAXghAAQgfAAgTgXgAgegqQgKARgBAZIAAABQABAaAKAPQALARATAAQAUAAALgRQAKgPAAgaIAAgBQAAgZgKgRQgLgQgUAAQgTAAgLAQg");
	this.shape_6.setTransform(217,323);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5EA5").s().p("AgNByIAAidIAbAAIAACdgAgNhTIAAgeIAbAAIAAAeg");
	this.shape_7.setTransform(204.7,319.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C5EA5").s().p("Ag+BPIAAgUIBUhyIhSAAIAAgXIB1AAIAAAUIhUByIBZAAIAAAXg");
	this.shape_8.setTransform(193.5,322.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0C5EA5").s().p("AAjBQIAAhhQAAgWgIgIQgIgIgSAAQgKAAgKAFQgKAHgFAKIAABxIgdAAIAAidIAaAAIACAZQAIgOAMgGQALgHAOAAQAaAAAOAPQAOAQAAAeIAABig");
	this.shape_9.setTransform(177.3,322.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0C5EA5").s().p("AgxBAQgOgSAAgiIAAhcIAdAAIAABcQAAAaAHAJQAIAKAQAAQANAAAKgGQAKgHAFgLIAAhxIAdAAIAACdIgaAAIgCgXQgHANgMAGQgMAHgNAAQgaAAgPgQg");
	this.shape_10.setTransform(160.2,323.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0C5EA5").s().p("AgWBzIAAiHIgZAAIAAgVIAZAAIAAgUQAAgaANgNQAMgOAYAAIAUADIgDAWIgOgCQgMAAgGAIQgHAHAAAPIAAAUIAhAAIAAAVIghAAIAACHg");
	this.shape_11.setTransform(147,319.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0C5EA5").s().p("AguA8QgTgXAAgjIAAgEQAAghAUgXQAUgXAaAAQAgAAAQATQARAUAAAgIAAAQIhlAAIgBABQABAXALAOQAMAPARAAQAOAAAMgEQAMgFAHgHIAMATQgJAIgOAGQgOAGgUAAQgfAAgUgWgAgWguQgLANgBASIAAAAIBHAAIAAgEQAAgQgJgMQgJgLgSAAQgNAAgKAMg");
	this.shape_12.setTransform(126.1,323);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0C5EA5").s().p("ABRBQIAAhdQAAgXgJgKQgHgJgQAAQgPAAgJAKQgKAJgBARIAABjIgbAAIAAhdQAAgWgJgKQgHgKgQAAQgOAAgIAEQgJAHgEAJIAABzIgdAAIAAidIAaAAIACAWQAIgMAMgGQAMgGAPAAQAPAAANAHQAJAHAGAPQAIgNALgIQANgIARAAQAXAAAPARQANAQAAAhIAABdg");
	this.shape_13.setTransform(104.9,322.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0C5EA5").s().p("AgyA7QgUgXABgjIAAgBQgBgjAUgXQATgXAfAAQAgAAATAXQATAXAAAjIAAABQAAAjgTAXQgSAXghAAQgfAAgTgXgAgegqQgKARgBAZIAAABQABAaAKAPQAKARAUAAQAUAAALgRQAKgPAAgaIAAgBQAAgZgKgRQgLgQgUAAQgUAAgKAQg");
	this.shape_14.setTransform(83.3,323);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0C5EA5").s().p("Ag4BTQgXgaAAgnIAAgkQAAgnAXgaQAXgZAiAAQAkAAAWATQAVATAAAgIgBABIgbAAQAAgWgOgOQgNgNgYAAQgWAAgOAUQgPAUAAAcIAAAkQAAAdAPAUQAOATAWAAQAZAAAMgNQAOgMAAgXIAbAAIABAAQAAAfgWAUQgWAUgjAAQgiAAgXgag");
	this.shape_15.setTransform(65.5,320.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_16.setTransform(258.8,460.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgSALgNQAJgLAQAAQARAAAKALQAKANAAASIAAABQAAARgKANQgLAMgQAAQgPAAgKgMgAgTgZQgHALAAAOIAAABQAAAPAHAJQAIAKALAAQANAAAHgKQAHgKAAgOIAAgBQAAgNgHgMQgHgKgNAAQgLAAgIAKg");
	this.shape_17.setTransform(252.5,457);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_18.setTransform(246.3,455.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_19.setTransform(242.7,455.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgSALgMQAJgMAQAAQARAAAKAMQAKAMAAASIAAABQAAARgKANQgLAMgQAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAIAKALAAQANAAAHgKQAHgKAAgOIAAgBQAAgOgHgKQgHgLgNAAQgLAAgIALg");
	this.shape_20.setTransform(236.5,457);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgTAqIAAhSIAIAAIABAPIAAAAQAEgHAGgFQAEgEAJAAIADAAIADAAIgBAKIgHgBQgJAAgDAFQgGAEgDAKIAAA3g");
	this.shape_21.setTransform(230.1,456.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgCAwQgFgGAAgNIAAg0IgOAAIAAgHIAOAAIAAgWIAHAAIAAAWIATAAIAAAHIgTAAIAAA0QAAAJADADQADADAFAAIAKAAIABAHIgGACIgGAAQgJAAgDgFg");
	this.shape_22.setTransform(224.1,456);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgGgGQgFgGgKAAQgHAAgGAGQgHAGgDAIIAAA4IgJAAIAAhSIAIAAIABAPQAEgIAHgEQAHgEAHAAQAOAAAHAIQAIAIAAASIAAAxg");
	this.shape_23.setTransform(217.2,456.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgZAfQgLgMAAgTIAAAAQAAgTALgMQAJgLAQAAQARAAAJALQALAMAAATIAAAAQAAASgKANQgLAMgQAAQgPAAgKgMgAgTgYQgHAKAAAOIAAAAQAAAQAHAJQAIAKALAAQANAAAHgKQAHgKAAgPIAAAAQAAgOgHgKQgHgLgNAAQgLAAgIALg");
	this.shape_24.setTransform(208.3,457);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgMQAJgLAPAAQAPAAAIAIQAJAIAAAOIAAAAIgIAAQAAgLgHgGQgHgFgKAAQgLAAgHAJQgGALAAAOIAAABQAAAOAGALQAHAJALAAQAKAAAHgFQAHgGAAgJIAIAAIAAAAQAAANgJAHQgLAIgMAAQgOAAgKgMg");
	this.shape_25.setTransform(199.8,457);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_26.setTransform(190,455.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgYAxQgIgKAAgUIAAgBQAAgTAIgLQAJgMAPAAQAHAAAHADQAFAEAFAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgGADQgJAEgFAAQgPAAgJgMgAgRgGQgGAHAAARIAAABQAAAQAGAJQAGAJALAAQAIAAAHgEQAGgFADgHIAAglQgCgHgHgFQgGgFgJAAQgLAAgGALg");
	this.shape_27.setTransform(183.6,455.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgaAfQgKgMAAgSIAAgBQAAgTAKgMQAKgLAQAAQAQAAALALQAJANAAASIAAABQAAARgJANQgLAMgQAAQgQAAgKgMgAgTgZQgIALABAOIAAABQgBAOAIAKQAIAKALAAQAMAAAIgKQAHgKAAgOIAAgBQAAgOgHgLQgIgJgMAAQgLAAgIAJg");
	this.shape_28.setTransform(171.1,457);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgSALgMQAJgLAOAAQAQAAAIAKQAJAKAAAPIAAAHIg5AAIAAACQAAAOAHAJQAIAKAKAAQAIAAAHgDQAFgBAFgGIAEAHQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgbQgHAJgBALIAAAAIAwAAIAAgBQAAgLgHgIQgGgIgLAAQgIAAgIAIg");
	this.shape_29.setTransform(158.7,457);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgIgBgGAGQgGAFgDAIIAAA5IgKAAIAAhRIAJAAIABAOQAEgHAGgFQAGgEAJAAQAOAAAGAIQAIAJAAARIAAAxg");
	this.shape_30.setTransform(150.2,456.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgaAfQgKgMAAgTIAAAAQAAgSAKgNQAKgLAQAAQARAAAJALQALAMAAATIAAAAQAAATgLAMQgJAMgRAAQgPAAgLgMgAgTgYQgHAKAAAOIAAAAQAAAQAHAJQAHAKAMAAQAMAAAIgKQAHgJAAgQIAAAAQAAgOgHgKQgIgKgMgBQgMABgHAKg");
	this.shape_31.setTransform(141.3,457);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_32.setTransform(135.1,455.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AggApIAAgGIAyhEIgvAAIAAgHIA6AAIAAAGIgxBEIA0AAIAAAHg");
	this.shape_33.setTransform(129.5,456.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgMAKgHQAJgFAQABIASAAIAAgLQABgJgGgFQgGgFgKAAQgHgBgHAFQgHAGAAAHIgJAAIAAgBQAAgJAJgIQAIgHANAAQAOAAAIAHQAJAHAAANIAAAwQAAAEACAEIgKAAIgBgHIgBgHQgEAHgIAEQgIAFgIAAQgLAAgHgGgAgPAGQgIAGAAAHQAAAHAFAEQAFAFAIAAQAIgBAHgEQAIgFADgHIAAgSIgSAAQgMAAgGAGg");
	this.shape_34.setTransform(121.2,457);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgCAwQgFgHAAgLIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADADQADADAFAAIAJAAIABAHIgFABIgHABQgIAAgEgFg");
	this.shape_35.setTransform(114.3,456);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAuQAAAPAFAIQAFAGAKAAQAIAAAHgFQAGgEACgJIAAg5IAKAAIAABRIgIAAIgBgNQgDAGgIAFQgHAEgHAAQgOAAgHgJg");
	this.shape_36.setTransform(107.3,457);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_37.setTransform(101.1,455.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgGQAJgGAQABIASAAIAAgLQAAgJgFgFQgGgGgKABQgIAAgHAEQgGAGAAAGIgIAAIAAAAQgBgJAJgIQAJgHAMAAQAOAAAJAHQAHAGABAOIAAAwIACAIIgKAAIgCgNQgEAGgIAFQgHAEgJAAQgLAAgIgGgAgQAGQgHAGAAAHQAAAHAEAEQAGAEAHAAQAJABAHgFQAIgEADgIIAAgRIgSAAQgLgBgIAGg");
	this.shape_38.setTransform(94.9,457);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgCApIgghRIAKAAIAXA8IABAKIAAAAIAahGIAJAAIggBRg");
	this.shape_39.setTransform(87,456.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_40.setTransform(81.3,455.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgTAqIAAhRIAIAAIABANIAAABQAEgHAGgFQAEgEAJAAIADAAIAEABIgCAJIgHgBQgJAAgDAFQgGAEgDAKIAAA3g");
	this.shape_41.setTransform(77.3,456.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_42.setTransform(68.4,455.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgYAxQgIgLAAgTIAAgBQAAgSAIgMQAJgMAPAAQAIAAAFADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgGADQgIAEgGAAQgPAAgJgMgAgRgGQgGAIAAAQIAAABQAAAQAGAJQAGAJALAAQAIAAAHgEQAGgFADgHIAAglQgDgGgGgGQgGgFgJAAQgKAAgHALg");
	this.shape_43.setTransform(62,455.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgIQALgFAPAAIASAAIAAgKQAAgJgGgFQgHgFgJAAQgJAAgFAFQgGAFgBAHIgIAAIgBgBQAAgJAJgIQAKgHALAAQAOAAAJAHQAIAHAAANIAAAwIACAIIgKAAIgBgHIAAgGQgFAGgHAFQgJAEgHAAQgLAAgIgGgAgPAGQgHAGgBAHQAAAHAFAFQAFAEAIAAQAIAAAHgFQAIgFAEgHIAAgRIgTAAQgLAAgHAFg");
	this.shape_44.setTransform(963.7,437.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIACADQADAEAFAAIAKgBIABAHQgCABgEAAIgGABQgJAAgDgGg");
	this.shape_45.setTransform(956.8,436.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgDA8IAAhRIAHAAIAABRgAgDguIAAgNIAHAAIAAANg");
	this.shape_46.setTransform(952.5,436);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgVAkQgJgIAAgKIAAAAIAJAAQABAJAGAEQAHAEAIAAQAKAAAFgEQAGgFAAgGQAAgGgFgEQgEgFgNgCQgPgDgFgEQgHgFAAgKQAAgKAIgGQAIgHALAAQAOAAAJAHQAIAHgBALIgIAAQAAgHgGgFQgHgFgJAAQgIAAgFAEQgFAFAAAFQAAAGAEAEQAFAEALADQAPADAHAEQAHAGAAAKQAAAKgIAHQgJAGgNAAQgOAAgIgHg");
	this.shape_47.setTransform(946.5,437.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_48.setTransform(940.8,436);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgCApIgghRIAKAAIAXA8IABAKIAAAAIAahGIAJAAIggBRg");
	this.shape_49.setTransform(935.1,437.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgHQAKgFAPAAIATAAIAAgKQgBgJgFgFQgHgFgJAAQgJAAgGAFQgGAFAAAHIgJAAIAAgBQAAgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAwIACAIIgKAAIgBgNQgFAGgIAFQgIAEgHAAQgMAAgIgGgAgQAGQgHAGAAAHQAAAHAFAFQAFAEAHAAQAJAAAHgFQAIgFAEgHIAAgRIgUAAQgLAAgHAFg");
	this.shape_50.setTransform(923,437.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgLAAQgGAAgHAFQgGAFgDAJIAAA4IgKAAIAAhRIAJAAIABAOQAEgIAGgEQAIgEAHAAQANAAAIAIQAGAIABASIAAAxg");
	this.shape_51.setTransform(914.4,437.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgXAhQgHgJAAgTIAAguIAIAAIAAAuQAAAPAGAHQAFAHAKAAQAJAAAFgFQAGgDADgKIAAg5IAJAAIAABRIgHAAIgCgNQgDAHgHAEQgHAEgIAAQgNAAgHgJg");
	this.shape_52.setTransform(905.5,438);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgIQAKgFAPAAIATAAIAAgKQgBgJgFgFQgHgFgJAAQgIAAgHAFQgGAFAAAHIgJAAIAAgBQAAgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIABAwIABAIIgKAAIgBgHIAAgGQgFAGgIAFQgIAEgHAAQgMAAgHgGgAgPAGQgIAFAAAIQAAAHAFAFQAFAEAIAAQAIAAAHgFQAJgGADgGIAAgRIgTAAQgLAAgHAFg");
	this.shape_53.setTransform(892.9,437.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgCAvQgFgGAAgMIAAg0IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA0QAAAJADADQADADAFAAIAJAAIABAHQgCABgDAAIgHABQgIAAgEgGg");
	this.shape_54.setTransform(886,436.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgHQAKgFAPAAIASAAIAAgKQAAgJgFgFQgGgFgKAAQgIAAgHAFQgGAFAAAHIgJAAIAAgBQAAgJAJgIQAJgHAMAAQANAAAJAHQAJAHAAANIAAAwQAAAFACADIgKAAIgBgHIgBgGQgEAGgIAFQgIAEgIAAQgLAAgIgGgAgQAGQgHAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAIgFQAIgGACgGIAAgRIgSAAQgLAAgIAFg");
	this.shape_55.setTransform(879.1,437.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgFgGgKAAQgLAAgGAHQgFAHgCAKIAAAzIgHAAIAAgvQAAgPgGgHQgGgGgJAAQgJAAgHAFQgFAFgDAIIAAA5IgJAAIAAhRIAIAAIABANQAEgHAHgEQAHgEAJAAQAIAAAIAFQAFAFACAJQAEgIAHgGQAIgFAJAAQANAAAIAJQAHAJAAASIAAAvg");
	this.shape_56.setTransform(867.9,437.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgFgGgKAAQgLAAgGAHQgFAGgCALIAAAzIgHAAIAAgvQAAgPgGgHQgFgGgKAAQgJAAgHAFQgGAGgCAHIAAA5IgJAAIAAhRIAIAAIABANQAEgGAHgFQAHgEAJAAQAJAAAHAFQAFAEACAKQAEgJAHgFQAIgFAJAAQANAAAIAJQAHAJAAASIAAAvg");
	this.shape_57.setTransform(853.8,437.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgIQALgFAOAAIASAAIAAgKQAAgJgFgFQgHgFgJAAQgIAAgHAFQgGAFAAAHIgJAAIAAgBQABgKAIgHQAJgHAMAAQAOAAAJAHQAIAHAAANIAAAwIACAIIgKAAIgBgHIgBgGQgEAGgIAFQgIAEgHAAQgMAAgHgGgAgPAGQgIAGABAHQgBAHAFAFQAFAEAIAAQAIAAAHgFQAJgGACgGIAAgRIgSAAQgLAAgHAFg");
	this.shape_58.setTransform(842.4,437.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgTAqIAAhRIAJAAIABANIAAABQAEgIAFgEQAFgEAJAAIAFABIgBAIIgHAAQgIAAgEAFQgGAGgCAHIAAA4g");
	this.shape_59.setTransform(836,437.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgLA6QgGgBgGgDIACgIIALAEIAKABQAMAAAGgHQAGgHAAgNIAAgKQgEAGgHAEQgIADgFAAQgPAAgJgLQgIgMAAgQIAAgCQAAgTAIgNQAJgMAPAAQAHAAAHAEQAGADAEAIIACgNIAHAAIAABQQAAARgJAJQgJAJgPAAIgLgBgAgRgoQgGAKAAAQIAAACQAAANAGAJQAHAJAKAAQAJAAAGgEQAFgDAEgIIAAglQgDgIgGgEQgFgFgKAAQgKAAgHAKg");
	this.shape_60.setTransform(828.2,439.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgSALgMQAKgMAPAAQARAAAJAMQALAMAAASIAAABQAAASgKAMQgLAMgQAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAIAKALAAQANAAAHgKQAHgJAAgPIAAgBQAAgOgHgKQgIgKgMAAQgLAAgIAKg");
	this.shape_61.setTransform(819.5,437.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgSAqIAAhRIAIAAIABANIAAABQADgHAGgFQAFgEAIAAIAGABIgBAIIgHAAQgIAAgEAFQgFAFgDAIIAAA4g");
	this.shape_62.setTransform(813.1,437.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AggA7IAAhzIAHAAIACANQADgGAHgEQAHgFAHAAQAQAAAIANQAIANAAATIAAABQAAARgIAMQgJALgPAAQgFAAgIgEQgHgDgEgGIAAAsgAgOgtQgGAFgDAHIAAAmQAEAIAFADQAHAEAHAAQALAAAHgKQAGgIAAgOIAAgBQAAgQgGgKQgHgLgLAAQgIAAgGAFg");
	this.shape_63.setTransform(805.6,439.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgZA1QgHgIAAgKQAAgMAKgHQAKgHAPAAIATAAIAAgJQAAgIgGgFQgGgGgKABQgJgBgFAGQgHAEAAAHIgIAAIAAAAQgBgJAJgIQAJgHAMgBQAOABAIAHQAJAHAAAMIAAAxIACAIIgKAAIgBgNQgEAFgJAFQgHAFgIAAQgMAAgHgGgAgPAWQgIAFAAAIQAAAHAFAFQAFAEAIAAQAIAAAIgFQAHgFAEgHIAAgRIgTAAQgLgBgHAGgAgCglIgSgUIAAgBIAMAAIAOAVg");
	this.shape_64.setTransform(792.8,436.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgTAqIAAhRIAIAAIACANIAAABQADgHAGgFQAEgEAJAAIAGABIgBAIIgHAAQgJAAgDAFQgGAFgCAIIAAA4g");
	this.shape_65.setTransform(786.5,437.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgHQAKgFAPAAIASAAIAAgKQAAgJgFgFQgHgFgJAAQgJAAgGAFQgGAFAAAHIgJAAIAAgBQAAgJAJgIQAJgHAMAAQAOAAAIAHQAIAHAAANIABAwIACAIIgKAAIgCgNQgEAGgIAFQgHAEgJAAQgLAAgIgGgAgPAGQgIAGAAAHQAAAHAEAFQAGAEAIAAQAIAAAHgFQAIgFADgHIAAgRIgSAAQgLAAgHAFg");
	this.shape_66.setTransform(778.9,437.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgWAkQgIgIAAgKIAAAAIAJAAQABAJAGAEQAHAEAHAAQALAAAFgEQAGgFAAgGQAAgGgFgEQgEgFgNgCQgPgDgFgEQgIgFAAgKQAAgKAJgGQAIgHALAAQANAAAKAHQAIAHgBALIgIAAQAAgHgGgFQgHgFgJAAQgIAAgFAEQgFAFAAAFQAAAGAEAEQAFAEALADQAPADAHAEQAHAGAAAKQAAAKgIAHQgJAGgOAAQgNAAgJgHg");
	this.shape_67.setTransform(770.6,437.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAJAAARIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgOgaQgHAHgCAMIABABIAvAAIAAgDQAAgLgHgHQgGgHgLAAQgJAAgGAIg");
	this.shape_68.setTransform(758.7,437.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgGgGgKAAQgHAAgHAFQgFAEgDAKIAAA4IgKAAIAAhRIAIAAIACAOQADgIAIgEQAGgEAHAAQAOAAAHAIQAHAJAAARIAAAxg");
	this.shape_69.setTransform(750.2,437.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_70.setTransform(743.9,436);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgFgGgKAAQgLAAgGAHQgFAGgCALIAAAzIgHAAIAAgvQAAgPgGgHQgFgGgKAAQgJAAgHAFQgGAGgCAHIAAA5IgJAAIAAhRIAIAAIABANQAEgGAHgFQAHgEAJAAQAJAAAHAFQAFAEACAKQAEgJAHgFQAIgFAJAAQANAAAIAJQAHAJAAASIAAAvg");
	this.shape_71.setTransform(735.1,437.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgTAqIAAhRIAIAAIACANIAAABQAEgIAFgEQAEgEAJAAIAHABIgCAIIgHAAQgJAAgDAFQgFAFgDAIIAAA4g");
	this.shape_72.setTransform(725.9,437.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgOgaQgHAHgCAMIABABIAvAAIAAgDQAAgLgHgHQgGgHgLAAQgJAAgGAIg");
	this.shape_73.setTransform(718.6,437.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgCAvQgFgGAAgLIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADADQADADAFABIAJgBIABAGQgCACgDAAIgHABQgIAAgEgGg");
	this.shape_74.setTransform(711.7,436.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_75.setTransform(703.5,436);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAlA4IgMggIgxAAIgMAgIgKAAIArhvIAHAAIAqBvgAgWARIAsAAIgWg7IAAAAg");
	this.shape_76.setTransform(696.8,436.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_77.setTransform(686,441.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgIQAKgFAPAAIATAAIAAgKQgBgJgFgFQgHgFgJAAQgIAAgGAFQgHAFAAAHIgJAAIAAgBQAAgJAJgIQAJgHAMAAQAOAAAJAHQAIAHAAANIABAwIABAIIgKAAIgBgHIAAgGQgFAGgIAFQgIAEgHAAQgMAAgHgGgAgPAGQgIAFAAAIQAAAHAFAFQAFAEAIAAQAIAAAHgFQAJgGADgGIAAgRIgTAAQgLAAgHAFg");
	this.shape_78.setTransform(679.8,437.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgFgGgKAAQgKAAgHAHQgGAHgBAKIABABIAAAyIgIAAIAAgvQAAgPgFgHQgHgGgJAAQgJAAgHAFQgFAFgCAIIAAA5IgKAAIAAhRIAJAAIAAANQAEgHAHgEQAHgEAJAAQAIAAAIAFQAFAEACAKQAEgJAHgFQAIgFAJAAQANAAAIAJQAHAIAAATIAAAvg");
	this.shape_79.setTransform(668.6,437.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgPgaQgGAHgCAMIABABIAvAAIAAgDQAAgLgHgHQgGgHgLAAQgIAAgIAIg");
	this.shape_80.setTransform(657.5,437.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgCAvQgFgGAAgMIAAg0IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA0QAAAJADADQADAEAFgBIAJAAIABAHQgCABgDAAIgHABQgIAAgEgGg");
	this.shape_81.setTransform(650.6,436.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgWAkQgIgIAAgKIAAAAIAJAAQABAJAGAEQAHAEAHAAQAKAAAGgEQAGgFAAgGQAAgFgFgFQgEgFgNgCQgPgDgFgEQgIgFAAgKQAAgKAIgGQAJgHALAAQAOAAAIAHQAJAIgBAKIgIAAQAAgHgGgFQgHgFgJAAQgIAAgFAEQgFAFAAAFQAAAFAEAFQAEAEALADQAPADAIAEQAHAGAAAKQAAAKgIAHQgJAGgOAAQgNAAgJgHg");
	this.shape_82.setTransform(644,437.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgDA8IAAhRIAHAAIAABRgAgDguIAAgNIAHAAIAAANg");
	this.shape_83.setTransform(638.2,436);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgWAkQgIgIAAgKIAAAAIAJAAQABAJAGAEQAHAEAHAAQAKAAAGgEQAGgFAAgGQAAgGgFgEQgEgFgNgCQgPgDgFgEQgIgFAAgKQAAgKAJgGQAIgHALAAQAOAAAIAHQAJAHgBALIgIAAQAAgHgGgFQgHgFgJAAQgIAAgFAEQgFAFAAAFQAAAGAEAEQAEAEAMADQAOADAIAEQAHAGAAAKQAAAKgIAHQgJAGgOAAQgNAAgJgHg");
	this.shape_84.setTransform(632.3,437.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgIQAKgFAPAAIASAAIAAgKQAAgJgFgFQgHgFgJAAQgIAAgGAFQgHAFAAAHIgJAAIAAgBQAAgJAJgIQAJgHAMAAQAOAAAJAHQAIAHAAANIAAAwQAAAFACADIgKAAIgBgHIgBgGQgEAGgIAFQgIAEgIAAQgLAAgHgGgAgQAGQgHAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAHgFQAJgGACgGIAAgRIgSAAQgLAAgIAFg");
	this.shape_85.setTransform(620.1,437.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAJAAARIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgOgaQgHAHgCAMIABABIAvAAIAAgDQAAgLgHgHQgGgHgLAAQgJAAgGAIg");
	this.shape_86.setTransform(608,437.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgCAvQgFgGAAgMIAAg0IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA0QAAAJACADQAEADAEAAIAKAAIABAGIgGACIgGABQgIAAgEgGg");
	this.shape_87.setTransform(601.2,436.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_88.setTransform(596.8,436);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgSAqIAAhRIAHAAIABANIAAABQAEgHAGgFQAEgEAJAAIAGABIgBAIIgHAAQgJAAgDAFQgGAEgDAJIAAA4g");
	this.shape_89.setTransform(592.8,437.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgaQgGAHgCAMIAAABIAwAAIAAgDQAAgKgHgIQgGgHgLAAQgIAAgIAIg");
	this.shape_90.setTransform(585.5,437.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgVAkQgJgIAAgKIAAAAIAJAAQABAJAGAEQAHAEAIAAQAKAAAFgEQAGgFAAgGQAAgGgFgEQgEgFgNgCQgPgDgFgEQgHgFAAgKQAAgKAIgGQAIgHALAAQAOAAAJAHQAIAHgBALIgIAAQAAgHgGgFQgHgFgJAAQgIAAgFAEQgFAFAAAFQAAAGAEAEQAFAEALADQAPADAHAEQAHAFAAALQAAAKgIAHQgJAGgNAAQgOAAgIgHg");
	this.shape_91.setTransform(577.3,437.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgGgGgJAAQgIAAgGAFQgGAEgEAKIAAA4IgIAAIAAhRIAIAAIAAAOQAEgIAHgEQAHgEAHAAQAOAAAHAIQAHAJAAARIAAAxg");
	this.shape_92.setTransform(568.9,437.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgDA8IAAhRIAHAAIAABRgAgDguIAAgNIAHAAIAAANg");
	this.shape_93.setTransform(562.7,436);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgZA1QgHgHAAgLQAAgLAKgIQALgHAOAAIATAAIAAgJQgBgJgFgEQgHgFgJAAQgIAAgHAFQgGAFAAAGIgIAAIgBAAQAAgKAJgHQAJgHAMAAQAOAAAJAHQAIAHAAAMIABAxIABAIIgJAAIgCgHIAAgGQgEAGgJAFQgHAEgIAAQgLAAgIgGgAgPAWQgIAGAAAHQABAHAEAFQAFAEAIAAQAIgBAIgEQAIgGADgGIAAgSIgTAAQgLAAgHAGgAgCglIgSgVIAAAAIAMAAIAOAVg");
	this.shape_94.setTransform(552.6,436.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAHAAIAAAVIATAAIAAAIIgTAAIAAA0QAAAJADADQADAEAFgBIAKAAIABAHQgCABgEAAIgGABQgJAAgDgGg");
	this.shape_95.setTransform(545.8,436.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_96.setTransform(541.4,436);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_97.setTransform(537.8,436);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_98.setTransform(534.2,436);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgNA5QgHgFgDgFIgBAMIgIAAIAAh3IAJAAIAAAyQAEgGAHgFQAHgDAGAAQAQAAAIAMQAIALAAATIAAABQAAAUgIALQgJALgPAAQgHAAgHgEgAgOgLQgGAEgDAHIAAAlQADAHAGAEQAGAFAIAAQAMAAAGgJQAGgKAAgPIAAgBQAAgPgGgJQgGgKgMAAQgJAAgFAFg");
	this.shape_99.setTransform(528.1,436.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_100.setTransform(521.7,436);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAXAqIAAgxQAAgOgGgGQgFgGgLAAQgHAAgGAFQgHAFgCAJIAAA4IgKAAIAAhRIAJAAIABAOQAEgIAHgEQAGgEAIAAQANAAAIAIQAGAIAAASIAAAxg");
	this.shape_101.setTransform(515.5,437.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgaAfQgKgMABgSIAAgBQgBgSAKgMQALgMAPAAQARAAAJAMQALALAAATIAAABQAAATgLALQgJAMgRAAQgPAAgLgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAHAKAMAAQAMAAAIgKQAHgJAAgPIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_102.setTransform(506.7,437.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AghA7IAAhzIAIAAIACAOQAEgIAHgDQAGgFAHAAQAPABAJAMQAJAMgBAUIAAACQABAQgJAMQgJALgPAAQgGAAgHgDQgHgEgEgGIAAAsgAgOgtQgGAFgDAGIAAAnQADAHAGAEQAGAEAIAAQALAAAHgJQAGgJAAgNIAAgCQAAgRgGgKQgHgKgLAAQgJAAgFAFg");
	this.shape_103.setTransform(498,439.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgWAkQgIgHAAgLIAAAAIAJAAQAAAJAHAEQAHAEAHAAQAKAAAGgEQAGgFAAgGQAAgGgFgEQgFgFgMgCQgPgDgGgEQgHgGAAgJQAAgKAIgGQAJgHALAAQAOAAAIAHQAIAHAAALIgJAAQAAgHgFgFQgHgFgJAAQgIAAgGAEQgFAFAAAFQAAAGAFAEQAEAEALADQAPADAIAEQAHAGAAAKQAAAKgIAHQgKAGgNAAQgNAAgJgHg");
	this.shape_104.setTransform(489.3,437.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_105.setTransform(483.5,436);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgYAxQgIgKAAgUIAAgBQAAgTAIgLQAJgNAPAAQAHAAAGAEQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAGgGAEQgHAEgHAAQgPAAgJgMgAgQgGQgHAHAAARIAAABQAAAQAGAJQAGAJALAAQAIAAAHgEQAFgFAEgHIAAglQgDgHgGgFQgGgEgJAAQgLAAgFAKg");
	this.shape_106.setTransform(477.1,436.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSAKgMQALgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAJAKAAQAHAAAIgCQAFgCAFgFIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgPgaQgHAIgBALIAAABIAvAAIAAgDQAAgKgGgIQgGgHgLAAQgJAAgHAIg");
	this.shape_107.setTransform(465,437.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_108.setTransform(459,436);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_109.setTransform(455.4,436);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgHQAKgFAPAAIASAAIAAgKQABgJgHgFQgFgFgKAAQgJAAgGAFQgGAFAAAHIgJAAIAAgBQAAgJAJgIQAJgHAMAAQAOAAAIAHQAIAHAAANIABAwIACAIIgKAAIgCgNQgEAGgIAFQgIAEgIAAQgLAAgIgGgAgPAGQgIAGAAAHQAAAHAFAFQAFAEAIAAQAHAAAIgFQAIgFADgHIAAgRIgTAAQgLAAgGAFg");
	this.shape_110.setTransform(449.3,437.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgaQgGAHgCAMIAAABIAwAAIAAgDQAAgKgHgIQgGgHgLAAQgIAAgIAIg");
	this.shape_111.setTransform(437.2,437.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgWAkQgIgIAAgKIAAAAIAJAAQABAJAGAEQAHAEAHAAQALAAAFgEQAGgFAAgGQAAgGgFgEQgEgFgNgCQgPgDgFgEQgIgFAAgKQAAgKAJgGQAIgHALAAQANAAAKAHQAIAHgBALIgIAAQAAgHgGgFQgHgFgJAAQgIAAgFAEQgFAFAAAFQAAAGAEAEQAFAEALADQAPADAHAEQAHAGAAAKQAAAKgIAHQgJAGgOAAQgNAAgJgHg");
	this.shape_112.setTransform(428.9,437.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgIQALgFAOAAIASAAIAAgKQAAgJgFgFQgGgFgKAAQgIAAgHAFQgFAFgBAHIgIAAIAAgBQAAgKAIgHQAJgHAMAAQAOAAAJAHQAIAHAAANIAAAwIACAIIgKAAIgBgHIgBgGQgDAGgJAFQgIAEgHAAQgMAAgHgGgAgPAGQgIAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAHgFQAJgFACgHIAAgRIgSAAQgLAAgHAFg");
	this.shape_113.setTransform(420.6,437.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgNA5QgGgDgEgIIgBANIgIAAIAAh3IAJAAIAAAzQAEgIAHgEQAGgDAHAAQAQgBAIANQAIAMAAASIAAABQAAATgIALQgJAMgPAAQgHAAgHgEgAgOgLQgGAEgDAHIAAAlQACAGAHAFQAGAFAIAAQAMAAAGgJQAGgJAAgQIAAgBQAAgQgGgIQgGgKgMAAQgJAAgFAFg");
	this.shape_114.setTransform(412.2,436.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgFgGgLAAQgHAAgHAFQgFAEgDAKIAAA4IgKAAIAAhRIAIAAIACAOQADgIAHgEQAHgEAHAAQAOAAAIAIQAGAJAAARIAAAxg");
	this.shape_115.setTransform(399.3,437.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_116.setTransform(393.1,436);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgXAfQgKgLAAgSIAAgCQAAgSAKgMQALgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAJAKAAQAIAAAGgCQAHgCAEgFIAEAGQgEAFgIADQgHADgKAAQgOAAgLgMgAgPgaQgHAIgBALIAAABIAvAAIAAgDQAAgLgGgHQgGgHgLAAQgJAAgHAIg");
	this.shape_117.setTransform(383.4,437.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIADADQADAEAEAAIAKgBIABAGQgCACgDAAIgHABQgJAAgDgGg");
	this.shape_118.setTransform(376.5,436.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgGgFQgFgGgKAAQgHAAgHAFQgFAEgDAKIAAA4IgKAAIAAhRIAIAAIACAOQADgIAIgEQAGgEAIAAQANAAAHAIQAHAJAAARIAAAxg");
	this.shape_119.setTransform(369.6,437.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSAKgMQALgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAJAKAAQAHAAAIgCQAFgCAFgFIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgPgaQgHAIgBALIAAABIAvAAIAAgDQAAgKgGgIQgGgHgLAAQgJAAgHAIg");
	this.shape_120.setTransform(361.1,437.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAwAqIAAgvQAAgQgFgGQgFgGgKAAQgLAAgGAHQgGAHgBAKIAAAzIgHAAIAAgvQAAgQgGgGQgGgGgJAAQgKAAgFAFQgHAFgCAIIAAA5IgJAAIAAhRIAIAAIABANQAEgGAGgFQAHgEAJAAQAJAAAIAFQAFAEACAKQADgJAIgFQAHgFAKAAQAOAAAHAJQAHAJAAASIAAAvg");
	this.shape_121.setTransform(349.9,437.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgIQALgFAOAAIATAAIAAgKQAAgJgGgFQgHgFgJAAQgJAAgFAFQgHAFABAHIgJAAIgBgBQAAgKAJgHQAKgHALAAQAOAAAJAHQAIAHAAANIAAAwIACAIIgKAAIgBgHIAAgGQgFAGgIAFQgIAEgHAAQgMAAgHgGgAgPAGQgHAGAAAHQgBAHAFAFQAFAEAIAAQAIAAAHgFQAIgFAEgHIAAgRIgTAAQgLAAgHAFg");
	this.shape_122.setTransform(338.5,437.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgXAfQgJgMAAgSIAAgBQAAgTAJgLQAJgMAPAAQAOAAAJAIQAJAJAAAMIAAABIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAKQgGAKAAAOIAAABQAAAOAGALQAHAJALAAQAKAAAHgFQAHgGAAgJIAIAAIAAABQAAALgJAIQgLAIgMAAQgOAAgKgMg");
	this.shape_123.setTransform(330.2,437.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_124.setTransform(324.3,436);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA0QAAAJADADQADADAFAAIAJAAIABAHQgCABgDAAIgHABQgJAAgDgGg");
	this.shape_125.setTransform(319.8,436.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgIQALgFAOAAIATAAIAAgKQAAgJgGgFQgHgFgJAAQgJAAgFAFQgHAFAAAHIgIAAIgBgBQAAgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAwIACAIIgKAAIgBgHIAAgGQgEAGgJAFQgHAEgIAAQgMAAgHgGgAgPAGQgIAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAIgFQAHgFAEgHIAAgRIgTAAQgLAAgHAFg");
	this.shape_126.setTransform(312.8,437.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAxAqIAAgvQAAgQgGgGQgFgGgKAAQgLAAgGAHQgFAHgCAKIAAAzIgHAAIAAgvQAAgQgGgGQgFgGgKAAQgJAAgHAFQgGAGgCAHIAAA5IgJAAIAAhRIAIAAIABANQAEgGAHgFQAHgEAJAAQAJAAAHAFQAFAEACAKQAEgJAHgFQAIgFAJAAQAOAAAHAJQAHAJAAASIAAAvg");
	this.shape_127.setTransform(301.6,437.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgSALgMQAKgMAPAAQARAAAJAMQALAMAAASIAAABQAAASgLAMQgJAMgRAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAHAKAMAAQAMAAAIgKQAHgJAAgPIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_128.setTransform(290.2,437.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAHAAIAAAVIATAAIAAAIIgTAAIAAA0QAAAJADADQADAEAFAAIAKgBIABAGQgCACgEAAIgGABQgJAAgDgGg");
	this.shape_129.setTransform(283.2,436.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAJAAIAAAuQAAAPAGAHQAFAHAKAAQAJAAAFgFQAGgDADgKIAAg5IAJAAIAABRIgIAAIgBgNQgDAHgHAEQgHAEgIAAQgNAAgHgJg");
	this.shape_130.setTransform(276.2,438);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgIQALgFAOAAIATAAIAAgKQAAgJgGgFQgHgFgJAAQgIAAgHAFQgFAFAAAHIgJAAIAAgBQAAgKAIgHQAJgHAMAAQAPAAAHAHQAJAHAAANIAAAwIACAIIgJAAIgCgHIAAgGQgFAGgIAFQgHAEgIAAQgMAAgHgGgAgPAGQgIAGABAHQgBAHAFAFQAFAEAIAAQAIAAAHgFQAIgFAEgHIAAgRIgTAAQgLAAgHAFg");
	this.shape_131.setTransform(267.4,437.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgIQALgFAOAAIATAAIAAgKQAAgJgGgFQgHgFgJAAQgIAAgGAFQgHAFAAAHIgIAAIAAgBQAAgKAIgHQAJgHAMAAQAOAAAJAHQAIAHAAANIAAAwIACAIIgKAAIgBgHIAAgGQgFAGgHAFQgJAEgHAAQgMAAgHgGgAgPAGQgIAGAAAHQABAHAEAFQAFAEAIAAQAIAAAHgFQAJgFADgHIAAgRIgTAAQgLAAgHAFg");
	this.shape_132.setTransform(255,437.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAHAAIAAAWIATAAIAAAHIgTAAIAAA1QAAAIADADQADADAFAAIAKAAIABAGQgCACgEAAIgGABQgJAAgDgGg");
	this.shape_133.setTransform(248.2,436.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgDA8IAAhRIAHAAIAABRgAgDguIAAgNIAHAAIAAANg");
	this.shape_134.setTransform(243.8,436);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADADQADADAFABIAJgBIABAGQgCACgDAAIgHABQgJAAgDgGg");
	this.shape_135.setTransform(239.3,436.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgWAkQgIgHAAgLIAAAAIAJAAQABAJAGAEQAHAEAHAAQAKAAAGgEQAGgEAAgHQAAgGgFgEQgFgFgMgCQgPgDgGgEQgHgGAAgJQAAgKAIgGQAJgHALAAQAOAAAIAHQAIAHAAALIgJAAQAAgHgFgFQgHgFgJAAQgJAAgEAEQgGAFAAAFQAAAGAFAEQAEAEALADQAPADAIAEQAHAGAAAKQAAAKgIAHQgJAGgOAAQgNAAgJgHg");
	this.shape_136.setTransform(232.6,437.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgaQgGAHgCAMIAAABIAwAAIAAgDQAAgKgHgIQgGgHgLAAQgIAAgIAIg");
	this.shape_137.setTransform(224.6,437.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgLA6QgGgBgGgDIACgIIAKAEIALABQAMAAAGgHQAGgIAAgMIAAgKQgEAGgHAEQgIADgFAAQgPAAgJgLQgIgMAAgQIAAgCQAAgTAIgNQAJgMAPAAQAHAAAHAEQAGAEAEAHIABgNIAIAAIAABQQAAARgJAJQgJAJgPAAIgLgBgAgRgoQgGAKAAAQIAAACQAAANAGAJQAGAJALAAQAJAAAGgEQAFgDAEgIIAAglQgEgJgFgDQgFgFgKAAQgKAAgHAKg");
	this.shape_138.setTransform(215.8,439.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgZA1QgHgHAAgLQAAgMAKgHQAKgHAPAAIATAAIAAgJQAAgIgGgFQgHgGgJABQgIgBgHAGQgGAFAAAHIgJAAIAAgBQAAgJAJgIQAJgIAMAAQANAAAJAIQAJAHAAAMIABAxQAAAEABAEIgKAAIgBgHIAAgGQgFAGgIAFQgHAEgIAAQgMAAgHgGgAgQAWQgHAFAAAIQAAAHAFAEQAFAEAIABQAIgBAHgEQAJgGADgGIAAgSIgTAAQgLAAgIAGgAgBglIgUgVIABAAIAMAAIAOAVg");
	this.shape_139.setTransform(203.4,436.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgSAqIAAhRIAIAAIABANIAAABQAEgIAFgEQAFgEAIAAIAHABIgCAIIgHAAQgJAAgDAFQgFAFgDAIIAAA4g");
	this.shape_140.setTransform(197,437.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgIQAKgFAPAAIATAAIAAgKQAAgJgGgFQgHgFgJAAQgIAAgGAFQgHAFAAAHIgJAAIAAgBQAAgJAJgIQAJgHAMAAQAPAAAHAHQAJAHAAANIAAAwIACAIIgKAAIgBgHIAAgGQgFAGgHAFQgJAEgHAAQgLAAgIgGgAgPAGQgIAFAAAIQAAAHAFAFQAFAEAIAAQAIAAAHgFQAJgGADgGIAAgRIgTAAQgLAAgHAFg");
	this.shape_141.setTransform(189.4,437.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgWAkQgIgHAAgLIAAAAIAJAAQAAAJAHAEQAIAEAGAAQAKAAAGgEQAGgFAAgGQAAgGgFgEQgFgFgMgCQgPgDgGgEQgHgGAAgJQAAgKAIgGQAJgHALAAQAOAAAIAHQAIAHAAALIgJAAQAAgHgGgFQgGgFgJAAQgIAAgGAEQgFAFAAAFQAAAGAFAEQAEAEALADQAPADAIAEQAHAGAAAKQAAAKgIAHQgKAGgNAAQgNAAgJgHg");
	this.shape_142.setTransform(181.2,437.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSAKgMQALgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAJAKAAQAIAAAGgCQAHgCAEgFIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgPgaQgHAIgBALIAAABIAvAAIAAgDQAAgLgGgHQgGgHgLAAQgJAAgHAIg");
	this.shape_143.setTransform(169.3,437.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgIAAgGAFQgGAFgDAJIAAA4IgJAAIAAhRIAIAAIAAAOQAFgIAHgEQAGgEAIAAQANAAAIAIQAHAIAAASIAAAxg");
	this.shape_144.setTransform(160.7,437.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgaAfQgJgMAAgSIAAgBQAAgSAJgMQALgMAPAAQAQAAALAMQAJALAAATIAAABQAAATgJALQgKAMgRAAQgPAAgLgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAIAKALAAQAMAAAIgKQAIgJAAgPIAAgBQAAgOgIgKQgIgKgMAAQgLAAgIAKg");
	this.shape_145.setTransform(151.9,437.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_146.setTransform(145.7,436);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgfApIAAgGIAwhEIgvAAIAAgHIA7AAIAAAGIgxBDIA0AAIAAAIg");
	this.shape_147.setTransform(140.1,437.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgHQAKgFAPAAIATAAIAAgKQgBgJgGgFQgFgFgKAAQgJAAgGAFQgGAFAAAHIgIAAIAAgBQgBgJAJgIQAJgHAMAAQAOAAAIAHQAIAHABANIAAAwIACAIIgKAAIgBgNQgEAGgJAFQgIAEgIAAQgLAAgIgGgAgQAGQgHAGAAAHQAAAHAEAFQAGAEAIAAQAHAAAIgFQAIgFAEgHIAAgRIgTAAQgMAAgHAFg");
	this.shape_148.setTransform(131.7,437.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADADQADAEAFgBIAJAAIABAGQgCACgDAAIgHABQgJAAgDgGg");
	this.shape_149.setTransform(124.8,436.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgSALgMQAKgMAPAAQARAAAJAMQALAMAAASIAAABQAAASgKAMQgLAMgQAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAIAKALAAQANAAAHgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgLAAgIAKg");
	this.shape_150.setTransform(117.8,437.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AAWAqIAAgxQABgOgGgGQgFgGgLAAQgGAAgIAFQgFAFgDAJIAAA4IgKAAIAAhRIAIAAIABAOQAFgIAGgEQAIgEAGAAQAOAAAIAIQAGAJAAARIAAAxg");
	this.shape_151.setTransform(109,437.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgFAGgHACQgHADgKAAQgOAAgKgMgAgPgaQgGAHgCAMIAAABIAwAAIAAgDQAAgKgHgIQgGgHgLAAQgIAAgIAIg");
	this.shape_152.setTransform(100.5,437.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgSAqIAAhRIAIAAIABANIAAABQAEgIAFgEQAFgEAJAAIAFABIgBAIIgHAAQgJAAgDAFQgGAFgCAIIAAA4g");
	this.shape_153.setTransform(94.4,437.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABAOQAEgIAHgEQAHgEAGAAQAQAAAIANQAIAMAAAUIAAABQAAASgIAKQgJAMgPAAQgGAAgHgEQgHgEgEgFIAAArgAgOgtQgGAEgDAIIAAAmQAEAHAFAEQAHAEAHAAQAMAAAGgJQAGgJAAgOIAAgBQAAgQgGgLQgGgKgMABQgIAAgGAEg");
	this.shape_154.setTransform(86.9,439.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_155.setTransform(76.6,436);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAJAAIAAAuQAAAPAGAHQAGAHAIAAQAKAAAFgFQAHgEACgJIAAg5IAJAAIAABRIgHAAIgCgNQgDAHgHAEQgIAEgHAAQgNAAgHgJg");
	this.shape_156.setTransform(70.4,438);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgSAJgMQAKgMAPAAQANAAAKAIQAJAJgBAMIAAABIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAKQgHAIAAAQIAAABQAAAPAHAKQAGAJAMAAQAJAAAHgFQAHgFAAgKIAIAAIAAABQABALgKAIQgKAIgMAAQgQAAgJgMg");
	this.shape_157.setTransform(61.9,437.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgZAlQgHgGAAgMQAAgLAKgIQALgEAOAAIATAAIAAgKQAAgKgGgFQgGgFgKAAQgIAAgHAFQgFAFgBAHIgIAAIgBgBQABgJAIgHQAJgIAMAAQAOAAAIAHQAJAHAAAOIABAwIABAHIgKAAIgBgHIAAgGQgFAHgHAEQgIAEgIAAQgNAAgGgGgAgPAGQgIAGAAAHQAAAIAFADQAEAFAJAAQAIAAAIgFQAHgFAEgHIAAgRIgTAAQgLAAgHAFg");
	this.shape_158.setTransform(960.7,418.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_159.setTransform(954.8,417);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgGARIAGgUIAAgNIAHAAIAAANIgHAUg");
	this.shape_160.setTransform(947.4,423.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgXAgQgKgMAAgSIAAgCQAAgSAKgMQALgMAMAAQAQAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAJAKAAQAIABAGgDQAHgCAEgFIAEAGQgGAGgGACQgIADgJAAQgPAAgKgLgAgPgaQgHAIgBAMIAAAAIAvAAIAAgDQAAgKgGgIQgGgHgMAAQgIAAgHAIg");
	this.shape_161.setTransform(942,418.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgHAGgFQAFgEAIAAIAGABIgBAIIgHAAQgIAAgEAFQgFAFgDAIIAAA4g");
	this.shape_162.setTransform(935.8,418.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAPAIAJQAIAKAKgBQAIAAAHgCQAFgCAFgFIAEAHQgGAFgGACQgIADgJAAQgOAAgKgMgAgPgaQgHAIgBAMIAAAAIAvAAIAAgCQAAgLgGgHQgGgIgLAAQgJAAgHAIg");
	this.shape_163.setTransform(928.6,418.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgIAAgGAFQgGAEgDAKIAAA4IgKAAIAAhSIAJAAIAAAPQAFgIAGgEQAHgEAIAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_164.setTransform(920,418.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_165.setTransform(913.8,417);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAJADACQADAEAFAAIAEAAIAFgBIABAHQgCACgDgBIgHABQgJAAgDgGg");
	this.shape_166.setTransform(909.3,417.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_167.setTransform(904.9,417);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgGgFQgFgGgJAAQgIAAgHAFQgGAFgDAJIAAA4IgJAAIAAhSIAJAAIAAAPQAFgIAGgEQAIgEAGAAQAOAAAHAIQAHAJAAARIAAAxg");
	this.shape_168.setTransform(894.9,418.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_169.setTransform(888.6,417);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AghA6IAAhyIAIAAIABANQAFgHAGgDQAIgEAGgBQAPAAAIANQAJALAAAVIAAACQAAARgJAKQgIAMgPAAQgHgBgGgDQgHgEgEgFIAAArgAgOgtQgGAEgDAIIAAAmQADAHAGAEQAHAEAHAAQALAAAGgJQAHgJAAgNIAAgDQAAgQgHgKQgGgKgLAAQgIABgGAEg");
	this.shape_170.setTransform(878.7,420.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgcAvQgLgJAAgTIAAhLIAJAAIAABLQAAAOAJAIQAJAIAMAAQANAAAJgIQAJgHAAgPIAAhLIAJAAIAABLQAAATgLAJQgLAKgSAAQgRAAgLgKg");
	this.shape_171.setTransform(868.8,417.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgRAEIAAgGIAjAAIAAAGg");
	this.shape_172.setTransform(861.2,418.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AAWApIgWhFIAAAAIgVBFIgIAAIgYhRIAJAAIATBFIABAAIAVhFIAGAAIAWBFIABAAIAShFIAKAAIgYBRg");
	this.shape_173.setTransform(852.9,418.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgaAgQgJgNgBgSIAAgBQABgRAJgNQALgMAPAAQAQAAALAMQAKALAAATIAAABQAAATgKAMQgKALgRAAQgQAAgKgLgAgTgYQgHAJAAAPIAAABQAAAPAHAKQAIAKALgBQANABAHgKQAHgKAAgPIAAgBQAAgOgHgKQgHgKgNAAQgLAAgIAKg");
	this.shape_174.setTransform(842.5,418.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_175.setTransform(836.3,417);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_176.setTransform(832.6,417);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgZAgQgLgNABgSIAAgBQgBgSALgMQAKgMAPAAQAQAAAKAMQAKALAAATIAAABQABATgLAMQgJALgRAAQgQAAgJgLgAgTgYQgHAJAAAPIAAABQAAAQAHAJQAIAKALAAQAMAAAIgKQAHgKAAgPIAAgBQAAgOgHgKQgIgKgMAAQgLAAgIAKg");
	this.shape_177.setTransform(826.4,418.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgjA4IAAhvIBHAAIAAAIIg+AAIAAAsIA2AAIAAAGIg2AAIAAA1g");
	this.shape_178.setTransform(818.1,417.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_179.setTransform(807.3,417);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAPAAQAGAAAHAEQAGAEAFAGIAAgyIAJAAIAAB3IgIAAIgBgMQgFAIgGACQgGAEgHAAQgQAAgIgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAIAAAGgEQAHgFADgGIAAgmQgDgHgGgFQgGgEgJAAQgLAAgGAKg");
	this.shape_180.setTransform(800.9,417);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAHQgFAFgHADQgIACgJAAQgOAAgKgMgAgPgaQgGAHgCAMIABABIAvAAIAAgDQAAgLgHgGQgGgIgLAAQgIAAgIAIg");
	this.shape_181.setTransform(788.8,418.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgCAvQgFgGAAgLIAAg0IgOAAIAAgJIAOAAIAAgVIAIAAIAAAVIASAAIAAAJIgSAAIAAA0QAAAJADACQADAEAFAAIAEAAIAFgBIABAHQgCACgDAAIgHAAQgJAAgDgGg");
	this.shape_182.setTransform(781.9,417.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_183.setTransform(777.6,417);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgWAkQgIgIAAgJIAAgBIAJAAQABAKAGADQAHAEAHAAQAKAAAGgEQAGgEAAgHQAAgFgFgFQgFgFgMgDQgNgCgIgEQgHgGAAgJQAAgKAIgGQAJgHALAAQAOAAAIAHQAJAIgBAJIAAABIgIAAQAAgHgGgFQgGgFgKAAQgIAAgFAFQgFAEAAAGQAAAFAEAEQAFAEAKADQAPADAIAEQAHAGAAAKQAAAKgIAGQgIAHgPAAQgNAAgJgHg");
	this.shape_184.setTransform(771.7,418.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_185.setTransform(765.9,417);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgCAqIgghTIAJAAIAZBHIAAAAIAZhHIAKAAIggBTg");
	this.shape_186.setTransform(760.2,418.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgXAfQgKgKAAgTIAAgCQAAgTAKgLQALgMAMAAQAQAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAKAKAAQAIgBAGgCQAGgCAFgFIAEAHQgGAFgGADQgIACgJAAQgPAAgKgMgAgPgaQgHAIgBALIAAABIAvAAIAAgCQAAgLgGgIQgGgHgMAAQgIAAgHAIg");
	this.shape_187.setTransform(748.4,418.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_188.setTransform(742.5,417);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_189.setTransform(738.9,417);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSAKgMQALgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAPAIAJQAIAJAKAAQAHAAAIgCQAGgDAEgEIAEAHQgGAFgGADQgIACgJAAQgPAAgJgMgAgPgaQgHAIgBALIAAABIAvAAIAAgCQAAgMgGgHQgGgHgLAAQgJAAgHAIg");
	this.shape_190.setTransform(733,418.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAPAAQAGAAAHAEQAGAEAFAGIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgGAEgHAAQgPAAgJgLgAgQgGQgHAJAAAPIAAACQAAAOAHAKQAGAJAKAAQAIAAAGgEQAIgFACgGIAAgmQgDgHgGgFQgGgEgJAAQgLAAgFAKg");
	this.shape_191.setTransform(724.3,417);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAHQgGAFgGADQgIACgJAAQgOAAgKgMgAgPgaQgGAHgCANIAAAAIAwAAIAAgDQAAgJgHgJQgGgHgLAAQgIAAgIAIg");
	this.shape_192.setTransform(712.1,418.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgTAqIAAhSIAIAAIACAOIAAABQAEgIAFgEQAEgEAJAAIAHABIgCAIIgHAAQgIAAgEAFQgGAFgCAIIAAA4g");
	this.shape_193.setTransform(706,418.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAJAAARIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAHQgFAFgHACQgIADgJAAQgOAAgKgMgAgOgaQgHAHgCANIABAAIAvAAIAAgDQAAgKgHgHQgGgIgLAAQgJAAgGAIg");
	this.shape_194.setTransform(698.7,418.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAPAAQAHAAAGAEQAHADAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgDAHgHADQgHAEgHAAQgPAAgJgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAIAAAHgEQAGgEADgHIAAgmQgDgHgGgFQgGgEgJAAQgKAAgHAKg");
	this.shape_195.setTransform(689.9,417);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAKAKAAQAIAAAHgDQAFgCAFgFIAEAGQgGAGgGACQgIADgJAAQgOAAgKgMgAgPgaQgHAIgBAMIAAAAIAwAAIAAgCQAAgKgHgIQgGgIgLAAQgJAAgHAIg");
	this.shape_196.setTransform(681.7,418.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_197.setTransform(675.7,417);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AAWA8IAAg0QAAgLgFgHQgFgGgKABQgIgBgGAGQgGAFgDAGIAAA7IgKAAIAAh3IAKAAIAAA0QADgIAIgEQAHgFAHAAQANABAHAIQAIAIAAAQIAAAzg");
	this.shape_198.setTransform(669.5,417);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgXAgQgJgMAAgTIAAgBQAAgSAJgMQAJgMAQAAQANAAAKAJQAJAHgBANIAAABIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAJQgHAKAAAPIAAABQAAAQAHAIQAGAKAMAAQAJAAAHgFQAHgFAAgJIAIAAIAAAAQABALgKAIQgJAIgNAAQgQAAgJgLg");
	this.shape_199.setTransform(661,418.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgZAfQgLgLAAgTIAAgBQAAgSALgMQAKgMAPAAQARAAAJAMQALAMAAASIAAABQAAATgLALQgJAMgRAAQgQAAgJgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAHALAMgBQANABAHgLQAHgJAAgPIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_200.setTransform(648.6,418.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgFgGgLAAQgHAAgHAFQgFAFgEAJIAAA4IgIAAIAAhSIAHAAIABAPQAEgIAHgEQAIgEAGAAQAOAAAHAIQAHAJAAARIAAAxg");
	this.shape_201.setTransform(639.8,418.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AAXAqIAAgxQAAgOgGgGQgFgGgLAAQgGAAgIAFQgGAFgCAJIAAA4IgJAAIAAhSIAHAAIABAPQAFgIAGgEQAHgEAHAAQAPAAAHAIQAGAIAAASIAAAxg");
	this.shape_202.setTransform(630.9,418.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgaAlQgGgGAAgMQAAgMAKgGQAKgFAPAAIASAAIAAgLQAAgIgFgGQgFgFgLAAQgIAAgGAFQgHAFAAAHIgIAAIAAgBQgBgJAJgHQAJgIAMAAQANAAAJAHQAJAIAAAMIABAxQAAAEABAEIgJAAIgCgIIgBgGQgEAGgIAFQgGAEgKAAQgMAAgHgGgAgQAGQgHAGAAAHQAAAIAFAEQAFAEAIAAQAIAAAHgEQAJgGACgGIAAgSIgSAAQgLAAgIAFg");
	this.shape_203.setTransform(622.1,418.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQAEgIAFgEQAFgEAIAAIAHABIgCAIIgHAAQgIAAgEAFQgFAFgDAIIAAA4g");
	this.shape_204.setTransform(615.8,418.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg0IgOAAIAAgIIAOAAIAAgWIAIAAIAAAWIASAAIAAAIIgSAAIAAA0QAAAJADADQADADAFAAIAEAAIAFgBIABAHQgCABgDAAIgHABQgJAAgDgFg");
	this.shape_205.setTransform(609.8,417.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgaAfQgKgLAAgTIAAgBQAAgSAKgMQALgMAPAAQAQAAAKAMQAKANAAARIAAABQAAASgKAMQgJAMgRAAQgQAAgKgMgAgTgYQgIAKAAAOIAAABQAAAPAIAKQAIAJALAAQANAAAHgJQAHgKAAgPIAAgBQAAgOgHgKQgHgKgNAAQgLAAgIAKg");
	this.shape_206.setTransform(602.9,418.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAEgHAHgEQAGgDAHgBQAQAAAIAMQAIAMAAAVIAAABQAAASgIAKQgIALgQAAQgGAAgHgDQgHgDgEgGIAAArgAgOgtQgFAEgEAHIAAAnQADAGAGAFQAHAEAHAAQALAAAHgKQAGgJAAgNIAAgCQAAgOgGgMQgHgJgLgBQgIAAgGAFg");
	this.shape_207.setTransform(594.2,420.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_208.setTransform(583.9,417);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgSAJgMQAJgMAPAAQAOAAAJAJQAJAHAAANIAAABIgIAAQAAgKgHgGQgGgGgLAAQgLAAgHAJQgGALAAAOIAAABQAAAPAGAKQAHAKALAAQAKAAAHgGQAHgFAAgJIAIAAIAAAAQAAALgJAJQgKAHgNAAQgPAAgJgMg");
	this.shape_209.setTransform(578,418.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_210.setTransform(572.1,417);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAPAAQAGAAAHAEQAHAEAEAGIAAgyIAJAAIAAB3IgIAAIgBgMQgFAIgGACQgGAEgHAAQgQAAgIgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAIAAAHgEQAGgEADgHIAAgmQgDgHgGgFQgFgEgKAAQgLAAgGAKg");
	this.shape_211.setTransform(565.7,417);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgXAgQgKgLAAgTIAAgCQAAgTAKgLQALgMAMAAQAQAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAPAIAJQAIAJAKABQAIAAAGgDQAHgCAEgFIAEAHQgGAFgGACQgIADgJAAQgPAAgKgLgAgPgaQgHAIgBALIAAABIAvAAIAAgDQAAgKgGgIQgGgHgMAAQgIAAgHAIg");
	this.shape_212.setTransform(557.4,418.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgFgGgKAAQgLAAgGAHQgFAGgCALIAAAzIgHAAIAAgvQAAgPgGgHQgFgGgKAAQgKAAgGAFQgGAGgCAHIAAA5IgJAAIAAhSIAIAAIABAOQAEgGAHgFQAHgEAJAAQAKAAAGAFQAFAEACAKQAEgJAHgFQAIgFAJAAQANAAAIAJQAHAJAAASIAAAvg");
	this.shape_213.setTransform(546.2,418.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_214.setTransform(533.5,417);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgLAKgHQAKgGAPABIATAAIAAgLQAAgIgGgGQgFgFgLAAQgJAAgFAFQgHAEAAAIIgIAAIAAgBQgBgJAJgHQAJgIAMAAQAOAAAIAHQAJAHAAANIAAAwIACAJIgKAAIgBgOQgEAGgJAFQgGAEgJAAQgNAAgGgHgAgPAGQgIAGAAAIQAAAHAFAEQAFAEAIAAQAIAAAIgEQAHgGAEgGIAAgSIgTAAQgLAAgHAFg");
	this.shape_215.setTransform(523.5,418.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_216.setTransform(517.5,417);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AggA7IAAhzIAIAAIABANQADgHAIgEQAGgDAHgBQAQAAAIANQAIAMAAAUIAAACQAAAQgIALQgIAMgQgBQgGAAgHgDQgHgDgEgGIAAAsgAgOgtQgGAEgDAHIAAAnQADAGAGAFQAHAEAHAAQALAAAHgJQAGgKAAgMIAAgCQAAgPgGgLQgHgKgLAAQgIAAgGAEg");
	this.shape_217.setTransform(511.5,420.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgLAKgHQAKgFAPAAIATAAIAAgLQAAgIgGgGQgGgFgKAAQgIAAgGAFQgHAFAAAHIgIAAIAAAAQgBgKAJgIQAJgHAMAAQANAAAJAHQAJAHAAANIAAAwQABAFABAEIgKAAIgBgIIAAgGQgFAGgIAFQgHAEgJAAQgMAAgGgHgAgPAGQgIAGAAAIQAAAHAFAEQAFAEAIAAQAIAAAIgEQAHgGAEgGIAAgSIgTAAQgMAAgGAFg");
	this.shape_218.setTransform(502.5,418.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQAEgIAFgEQAFgEAIAAIAHABIgCAIIgHAAQgIAAgEAFQgGAFgCAIIAAA4g");
	this.shape_219.setTransform(496.2,418.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgWAgQgLgLAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAJAAARIAAAGIg5AAIAAACQAAAOAHAKQAIAKAKgBQAIAAAHgCQAFgCAFgFIAEAGQgFAGgHACQgIADgJAAQgOAAgKgLgAgOgaQgHAHgCANIABAAIAvAAIAAgDQAAgKgHgIQgGgHgLAAQgJAAgGAIg");
	this.shape_220.setTransform(488.9,418.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgCAwQgFgFAAgNIAAg0IgOAAIAAgJIAOAAIAAgVIAHAAIAAAVIATAAIAAAJIgTAAIAAA0QAAAIADADQADAEAFAAIAFAAIAFgBIABAHIgGACIgGAAQgJAAgDgFg");
	this.shape_221.setTransform(482.1,417.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgZAkQgHgFAAgMQAAgLAKgIQAKgEAPAAIASAAIAAgLQAAgJgGgFQgFgFgKAAQgJAAgGAFQgGAEAAAIIgJAAIAAgBQAAgJAJgIQAJgHAMAAQANAAAKAHQAHAHAAANIABAwIACAJIgKAAIgCgOQgDAGgJAFQgHAEgIAAQgNAAgGgHgAgQAGQgHAGAAAHQAAAIAEAEQAGAEAIAAQAIAAAIgEQAGgFAEgIIAAgRIgSAAQgMAAgHAFg");
	this.shape_222.setTransform(471.3,418.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_223.setTransform(465.3,417);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_224.setTransform(461.7,417);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAPAHAJQAIAKAKAAQAIgBAHgCQAFgCAFgFIAEAHQgGAFgGACQgIADgJAAQgOAAgKgMgAgPgaQgGAHgCAMIAAABIAwAAIAAgDQAAgJgHgJQgGgHgLAAQgIAAgIAIg");
	this.shape_225.setTransform(455.8,418.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAPAAQAGAAAHAEQAHAEAEAGIAAgyIAJAAIAAB3IgIAAIgBgMQgFAIgGACQgGAEgHAAQgPAAgJgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAIAAAHgEQAGgEADgHIAAgmQgDgHgGgFQgFgEgKAAQgLAAgGAKg");
	this.shape_226.setTransform(447.1,417);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgWAgQgLgMAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAKAKAAQAIAAAHgDQAFgCAFgFIAEAHQgGAFgGADQgIACgJAAQgOAAgKgLgAgOgaQgHAHgCAMIABABIAvAAIAAgDQAAgLgHgHQgGgHgLAAQgJAAgGAIg");
	this.shape_227.setTransform(435,418.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgIAAgHAFQgFAFgEAJIAAA4IgJAAIAAhSIAJAAIAAAPQAEgIAIgEQAGgEAHAAQAOAAAIAIQAGAJAAARIAAAxg");
	this.shape_228.setTransform(426.4,418.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgaAfQgKgLABgTIAAgBQgBgSAKgMQALgMAPAAQAQAAAKAMQALAMAAASIAAABQAAASgLAMQgKAMgQAAQgQAAgKgMgAgTgYQgHAKAAAOIAAABQAAAPAHAKQAHAKAMgBQANABAHgKQAHgKAAgPIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_229.setTransform(417.6,418.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_230.setTransform(411.3,417);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgfApIAAgGIAwhDIgvAAIAAgIIA7AAIAAAGIgxBEIA0AAIAAAHg");
	this.shape_231.setTransform(405.8,418.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgZAlQgHgGAAgMQAAgLAKgIQALgFAPAAIASAAIAAgKQAAgIgGgGQgGgFgKAAQgJAAgFAFQgHAFAAAHIgIAAIgBgBQAAgJAJgHQAJgIAMAAQAOAAAIAHQAJAIAAAMIAAAxIACAIIgKAAIgBgIIAAgGQgFAHgIAEQgHAEgIAAQgNAAgGgGgAgPAGQgIAGAAAIQAAAHAFAEQAFAEAIAAQAIAAAIgEQAHgFAEgHIAAgSIgTAAQgLAAgHAFg");
	this.shape_232.setTransform(397.4,418.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgMA6QgFgBgHgDIADgIIAKAEIALABQALAAAHgHQAGgHAAgNIAAgKQgFAGgGAEQgGADgHAAQgQAAgIgLQgIgLAAgRIAAgCQAAgVAIgLQAJgMAPAAQAHAAAGAEQAGADAFAIIABgOIAIAAIAABRQAAARgJAJQgJAJgPAAIgMgBgAgRgoQgGAKAAAQIAAACQAAANAGAJQAGAJALAAQAIAAAGgEQAHgEADgIIAAgkQgDgHgGgGQgGgEgJAAQgLAAgGAKg");
	this.shape_233.setTransform(388.6,420.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgaAgQgKgMABgTIAAgBQgBgTAKgLQALgMAPAAQAQAAAKAMQAKAMAAASIAAABQAAASgKANQgKALgQAAQgPAAgLgLgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAHALAMAAQAMAAAIgLQAHgJAAgPIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_234.setTransform(380,418.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgSAqIAAhSIAHAAIACAOIAAABQAEgIAFgEQAFgEAIAAIAGABIgBAIIgHAAQgIAAgEAFQgGAFgCAIIAAA4g");
	this.shape_235.setTransform(373.5,418.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAPAHAJQAIAKAKAAQAIAAAHgDQAFgCAFgFIAEAGQgFAGgHADQgIACgJAAQgOAAgKgMgAgPgaQgGAHgCAMIABABIAvAAIAAgCQAAgMgHgHQgGgHgLAAQgIAAgIAIg");
	this.shape_236.setTransform(366.2,418.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_237.setTransform(356.4,417);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAPAAQAGAAAHAEQAGAEAFAGIAAgyIAJAAIAAB3IgIAAIgBgMQgFAIgGACQgGAEgHAAQgQAAgIgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAIAAAGgEQAHgFADgGIAAgmQgDgHgGgFQgGgEgJAAQgLAAgGAKg");
	this.shape_238.setTransform(350,417);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAPAHAJQAIAKAKAAQAIAAAHgDQAFgCAFgFIAEAGQgFAGgHADQgIACgJAAQgOAAgKgMgAgPgaQgGAHgCANIAAAAIAwAAIAAgDQAAgLgHgGQgGgIgLAAQgIAAgIAIg");
	this.shape_239.setTransform(337.9,418.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgWAkQgIgHAAgLIAAAAIAJAAQAAAJAHAEQAHAFAHgBQAKABAGgFQAGgEAAgHQAAgFgFgFQgFgEgMgDQgMgDgJgEQgHgFAAgKQAAgKAIgGQAJgHALAAQAOAAAIAHQAIAHAAALIAAAAIgJAAQAAgGgGgGQgFgFgKAAQgIAAgGAFQgFAEAAAFQAAAGAFAEQAFAEAKADQAPADAIAEQAHAGAAAKQAAALgIAFQgJAHgOAAQgOAAgIgHg");
	this.shape_240.setTransform(329.7,418.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgZAlQgHgGAAgMQAAgLAKgHQALgFAOAAIATAAIAAgLQAAgIgGgGQgGgFgKAAQgJAAgFAFQgHAEAAAIIgIAAIAAAAQgBgKAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAxIACAHIgKAAIgBgNQgEAGgJAFQgGAEgJAAQgNAAgGgGgAgPAGQgIAGAAAIQAAAHAFAEQAEAEAJAAQAIAAAIgEQAHgGAEgGIAAgSIgTAAQgLAAgHAFg");
	this.shape_241.setTransform(321.3,418.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgJA9IAAhKIgOAAIAAgIIAOAAIAAgMQAAgNAHgHQAEgHALAAIALACIgBAHIgJgBQgIAAgDAFQgDAEAAAKIAAAMIATAAIAAAIIgTAAIAABKg");
	this.shape_242.setTransform(314.8,416.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgZAlQgHgGAAgMQAAgLAKgIQAKgEAPAAIASAAIAAgLQAAgJgFgFQgGgFgKAAQgIAAgGAFQgGAFAAAHIgJAAIAAgBQAAgJAIgIQAJgHAMAAQAOAAAJAHQAIAHAAANIAAAwIACAJIgJAAIgCgIIgBgGQgDAGgJAFQgHAEgIAAQgNAAgGgGgAgPAGQgIAGAAAIQAAAGAFAFQAEAEAJAAQAIAAAIgEQAHgGADgHIAAgRIgSAAQgLAAgHAFg");
	this.shape_243.setTransform(303.7,418.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_244.setTransform(297.7,417);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgWAgQgLgMAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAJAAARIAAAGIg5AAIAAACQAAAPAHAJQAIAJAKABQAIgBAHgCQAFgCAFgFIAEAHQgFAFgHADQgIACgJAAQgOAAgKgLgAgOgaQgHAHgCANIABAAIAvAAIAAgCQAAgMgHgGQgGgIgLAAQgJAAgGAIg");
	this.shape_245.setTransform(288,418.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgCAwQgFgFAAgNIAAg0IgOAAIAAgJIAOAAIAAgVIAHAAIAAAVIATAAIAAAJIgTAAIAAA0QAAAJADACQADAEAFAAIAFAAIAFgBIABAHIgGACIgGAAQgJAAgDgFg");
	this.shape_246.setTransform(281.2,417.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgIAAgGAFQgGAEgDAKIAAA4IgKAAIAAhSIAJAAIAAAPQAFgIAGgEQAHgEAIAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_247.setTransform(274.2,418.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgZAkQgHgFAAgMQAAgLAKgHQALgGAOAAIASAAIAAgJQABgKgGgFQgGgFgKAAQgIAAgHAFQgGAFAAAHIgIAAIAAgBQAAgKAIgHQAJgHAMAAQAOAAAJAHQAIAHAAAOIAAAvIACAIIgKAAIgBgHIgBgGQgDAHgJAEQgHAEgIAAQgMAAgHgHgAgPAGQgIAGAAAHQAAAIAFADQAFAFAIAAQAIAAAHgFQAJgFACgGIAAgSIgSAAQgLAAgHAFg");
	this.shape_248.setTransform(265.4,418.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQAEgIAFgEQAFgEAIAAIAGABIgBAIIgHAAQgHAAgFAFQgGAGgCAHIAAA4g");
	this.shape_249.setTransform(259,418.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgXAhQgIgJAAgSIAAgvIAKAAIAAAvQAAAPAFAHQAFAHAKAAQAIAAAGgFQAHgFACgIIAAg6IAKAAIAABSIgJAAIAAgOQgFAIgGADQgGAEgIAAQgOAAgHgJg");
	this.shape_250.setTransform(251.4,418.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgYAyQgIgLAAgTIAAgCQAAgTAIgLQAJgMAPAAQAGAAAHAEQAHADAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgDAHgIADQgGAEgHAAQgQAAgIgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAHAJAKAAQAIAAAHgEQAGgEADgHIAAgmQgDgHgGgFQgGgEgJAAQgLAAgGAKg");
	this.shape_251.setTransform(242.4,417);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgKArIAAgUIAVAAIAAAUgAgKgXIAAgTIAVAAIAAATg");
	this.shape_252.setTransform(231.9,418.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgeAlQgHgIAAgLQAAgNAKgFQAKgGARAAIALAAIAAgGQAAgHgDgDQgEgEgEABQgFgBgDADQgDADAAAEIgWAAIAAAAQAAgKAJgIQAKgIAOAAQAQAAAIAIQAKAIAAAOIAAAgIABAMIADAJIgXAAIgEgMQgDAHgGADQgDAEgIAAQgOAAgHgGgAgKAIQgEAFAAAEQAAAEADADQACACAFAAQAEAAAFgCQAFgEABgEIAAgLIgLAAQgHAAgDADg");
	this.shape_253.setTransform(225.4,418.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgKA8IAAhSIAVAAIAABSgAgKgqIAAgRIAVAAIAAARg");
	this.shape_254.setTransform(219,417);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgkA7IAAhzIAUAAIABAKQAEgFAFgEQAGgDAEAAQAQABAJAMQAIAMAAAUIAAABQAAARgIAMQgJALgPgBQgGAAgEgBIgJgIIAAApgAgIgmQgDACgDAEIAAAjQACADAEADQAFACADAAQAHAAAEgHQAEgFAAgLIAAgCQAAgLgEgHQgEgIgHAAQgDAAgFACg");
	this.shape_255.setTransform(212.6,420.4);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgdAlQgIgHAAgMQAAgMAKgGQAKgGARAAIALAAIAAgHQAAgGgDgDQgEgDgEgBQgFABgDACQgDADAAAEIgWAAIAAAAQAAgLAJgHQAKgIAOAAQAPAAAKAIQAJAIAAANIAAAhIABAMIADAKIgXAAIgCgGIgBgHQgEAHgGADQgCAEgJAAQgOAAgGgGgAgKAJQgEAEAAAEQAAAEADADQADADAEAAQAEAAAFgDQAFgEABgDIAAgMIgLAAQgHAAgDAEg");
	this.shape_256.setTransform(203.6,418.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgWAqIAAhSIAVAAIABANQABgGAFgEQAFgEAGAAIAGABIgDAUIgIAAQgGAAgCACQgEADAAADIAAA2g");
	this.shape_257.setTransform(197,418.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgZAfQgLgLAAgSIAAgCQAAgSALgMQAKgMAPAAQARAAAKAKQAKALAAARIAAAKIgxAAIAAABQABAIAFAFQAFAGAGAAQAHAAAFgBIALgFIAHANQgFAEgJAEQgHACgLAAQgRAAgLgMgAgIgUQgDAFgBAIIABABIAZAAIAAgDQAAgHgEgEQgCgFgIAAQgEAAgEAFg");
	this.shape_258.setTransform(189.7,418.8);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgFAuQgHgHAAgNIAAgpIgMAAIAAgQIAMAAIAAgUIAVAAIAAAUIAOAAIAAAQIgOAAIAAApQAAAFACACQACACAEAAIAGgBIACARIgHABIgHABQgLAAgFgHg");
	this.shape_259.setTransform(182.5,417.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgdAkQgIgGAAgMQAAgMAKgGQAKgGARAAIALAAIAAgHQAAgGgDgDQgEgEgEAAQgFABgDACQgDADAAAEIgWAAIAAAAQAAgKAKgIQAJgIAOAAQAPAAAKAIQAJAIAAANIABAsIADALIgXAAIgCgGIgBgHQgEAGgGAEQgCAEgJAAQgOAAgGgHgAgKAIQgEAFAAAEQAAAEADADQADACAEABQAEgBAFgCQAFgDABgFIAAgLIgLAAQgHAAgDADg");
	this.shape_260.setTransform(171.6,418.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgKA8IAAh3IAVAAIAAB3g");
	this.shape_261.setTransform(165.3,417);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgKA8IAAh3IAVAAIAAB3g");
	this.shape_262.setTransform(161,417);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgYAfQgLgKAAgTIAAgCQAAgSAKgMQAKgMAQAAQARAAAJAKQAJAKAAASIAAALIgwAAIAAAAQAAAIAGAGQAEAFAHAAQAIAAAEgCIALgEIAGANQgDAEgKADQgHADgLAAQgRAAgKgMgAgHgUQgEAFgBAIIAAABIAaAAIAAgCQAAgIgDgEQgDgEgHgBQgFAAgDAFg");
	this.shape_263.setTransform(154.8,418.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgcAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAQAAQAEAAAFADQAFACAEAFIAAguIAWAAIAAB3IgTAAIgCgKQgFAGgEADQgFADgGAAQgPAAgJgLgAgKAAQgEAHAAALIAAACQAAAKAEAHQAEAHAGAAQAEAAAFgCQAEgCACgEIAAgkQgCgCgEgCQgEgDgFAAQgGAAgEAHg");
	this.shape_264.setTransform(145.8,417);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgZAgQgKgMgBgSIAAgCQAAgSALgMQAKgMAQAAQAQAAAKAKQAJALAAARIAAALIgwAAIAAAAQABAIAEAFQAGAGAGAAQAHAAAGgCIAKgEIAGAOQgDADgKADQgHADgLAAQgRAAgLgLgAgHgTQgEAEgBAIIABAAIAZAAIAAgCQAAgHgDgEQgEgEgGAAQgFgBgDAGg");
	this.shape_265.setTransform(133.5,418.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AANAqIAAgyQABgIgEgEQgFgEgFAAQgDAAgDACQgDACgEADIAAA7IgWAAIAAhSIAVAAIABAMQAFgGAGgEQAEgDAHAAQAMAAAIAIQAHAIAAARIAAAyg");
	this.shape_266.setTransform(124.7,418.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgcAgQgKgMAAgTIAAgBQAAgSAKgMQALgMARAAQASAAALAMQAKAMAAASIAAABQAAATgKAMQgLALgSAAQgRAAgLgLgAgLgRQgEAGAAALIAAABQAAALAEAHQAEAHAHAAQAIAAAEgHQAEgHAAgLIAAgBQAAgLgEgGQgEgHgIAAQgHAAgEAHg");
	this.shape_267.setTransform(115.7,418.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgKA8IAAhSIAVAAIAABSgAgKgqIAAgRIAVAAIAAARg");
	this.shape_268.setTransform(109.1,417);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AghApIAAgNIAlgzIgkAAIAAgSIBBAAIAAANIgmA0IAnAAIAAARg");
	this.shape_269.setTransform(103,418.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgeAlQgHgIAAgLQAAgMAKgGQAKgGARAAIALAAIAAgHQAAgGgDgDQgEgEgEABQgFAAgDACQgDADAAAFIgWAAIAAgBQAAgLAJgHQAKgIAOAAQAQAAAIAIQAKAIAAANIAAAhIABALIADAKIgXAAIgEgMQgDAGgGAEQgDAEgIAAQgOAAgHgGgAgLAJQgDAEAAAEQAAAEADADQACADAFAAQAEAAAFgEQAEgDACgDIAAgMIgLAAQgHAAgEAEg");
	this.shape_270.setTransform(94.6,418.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgPA5QgHgBgGgDIAEgRIALAEIALABQAJAAADgEQAFgEAAgIIAAgIQgEAFgFACQgEADgGAAQgQAAgHgLQgJgLAAgRIAAgCQAAgUAJgMQAHgMAQAAQAGAAAFADQAGADADAGIACgLIATAAIAABSQAAAQgKAJQgLAJgRAAQgIAAgGgCgAgKghQgEAHAAAMIAAACQAAALAEAEQAEAHAGAAQAEAAAFgCQAEgCACgEIAAgjQgCgDgEgDQgFgCgEAAQgGAAgEAIg");
	this.shape_271.setTransform(85.7,420.4);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgcAfQgKgMAAgSIAAgBQAAgSAKgMQALgMARAAQASAAAKAMQALANAAARIAAABQAAASgKAMQgLAMgSAAQgRAAgLgMgAgMgRQgEAHAAAKIAAABQAAAKAEAIQAFAHAHAAQAIAAAEgHQAEgGAAgMIAAgBQAAgLgEgGQgEgIgIABQgHgBgFAIg");
	this.shape_272.setTransform(76.9,418.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgWAqIAAhSIAVAAIABANQABgGAFgEQAFgEAGAAIAGABIgDAUIgIAAQgGAAgCACQgEADAAADIAAA2g");
	this.shape_273.setTransform(70.1,418.7);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AglA4IAAhvIBLAAIAAARIg0AAIAAAdIAsAAIAAAPIgsAAIAAAhIA0AAIAAARg");
	this.shape_274.setTransform(62.7,417.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#D22040").s().p("AgDBGIAEgeIgzAAIACgRIBHhdIAcAAIgRBXIAOAAIgEAXIgPAAIgGAegAgVARIAbAAIAKgvIgBgBg");
	this.shape_275.setTransform(108.4,377.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#D22040").s().p("AgkAnQgKgOADgXIABgCQAEgYAOgPQAOgOATAAQATAAAKANQAJANgEAVIgCAOIg4AAQgBALAEAHQAFAGAHAAQAJAAAGgCQAGgBAIgFIAEASQgFAFgMAEQgKADgKAAQgUAAgMgPgAgEgZQgFAGgDAKIABAAIAcAAIAAgDQABgIgCgGQgDgFgIAAQgFAAgEAGg");
	this.shape_276.setTransform(93.4,379.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#D22040").s().p("AgkArQgKgKACgOIABAAIAZAAQAAAIADAEQAEAEAIAAQAFAAADgDQAFgEABgFQAAgFgDgDQgDgDgJgDQgSgEgHgFQgHgHABgOQACgNANgKQANgJAPAAQATAAAKAJQAKAJgDAPIAAABIgbAAQABgHgDgEQgDgEgHAAQgFAAgCAEQgEADgBAFQgBAFADADQADADAJADQARADAJAGQAHAHgCAOQgDAPgMAJQgNAIgRAAQgTAAgKgLg");
	this.shape_277.setTransform(83.3,379.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#D22040").s().p("AgoAtQgIgIADgPQADgQANgGQAMgIAUAAIANAAIACgJQABgIgCgEQgDgEgHAAQgEAAgEAEQgDADgCAGIgbAAIAAgBQADgOANgJQANgJARAAQARAAAKAJQAJAKgDASIgJApIgCAOIABANIgcAAIgBgMQgFAGgGAEQgHAEgJAAQgNAAgHgJgAgKAKQgFAFgCAGQAAAGACADQACADAFAAQAGAAADgDQAEgCAEgEIAEgSIgNAAQgFAAgFAEg");
	this.shape_278.setTransform(73.3,379.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#D22040").s().p("Ag7BGIAdiMIBaAAIgFAWIg9AAIgIAnIA0AAIgEAUIg1AAIgLA7g");
	this.shape_279.setTransform(64.2,377.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#0C5EA5").ss(6.2).p("EBHAAVBMiN/AAAQhzAAhShSQhRhRAAh0MAAAghTQAAhzBRhSQBShSBzAAMCN/AAAQBzAABSBSQBRBSAABzMAAAAhTQAAB0hRBRQhSBShzAAg");
	this.shape_280.setTransform(512,410);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("EhG/AVBQhzgBhShRQhRhRAAh0MAAAghTQAAhzBRhRQBShTBzABMCN/AAAQBzgBBSBTQBRBRAABzMAAAAhTQAAB0hRBRQhSBRhzABg");
	this.shape_281.setTransform(512,410);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#0C5EA5").s().p("Ag4BUQgXgZAAgoIAAgkQAAgoAXgZQAXgaAiAAQAkAAAWATQAVAUAAAfIgBABIgbAAQAAgWgOgNQgMgNgZAAQgWAAgOATQgPAUAAAcIAAAlQAAAcAPAUQAOAUAWAAQAYAAANgNQAOgNAAgXIAbAAIABABQAAAegWAUQgVAUgkAAQgiAAgXgZg");
	this.shape_282.setTransform(337.1,286.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#0C5EA5").s().p("Ag4BUQgXgaAAgnIAAgkQAAgnAXgaQAXgaAiAAQAkAAAWATQAVAUAAAfIgBABIgbAAQAAgWgOgNQgMgNgZAAQgWAAgOATQgPAUAAAcIAAAlQAAAcAPAUQAOAUAWAAQAYAAANgNQAOgNAAgXIAbAAIABABQAAAegWAUQgVAUgkAAQgiAAgXgZg");
	this.shape_283.setTransform(318.1,286.8);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#0C5EA5").s().p("Ag8BUQgYgaAAgnIAAgkQAAgoAYgZQAXgaAlAAQAkAAAZAaQAYAaAAAnIAAAkQAAAngYAaQgYAZglAAQglAAgXgZgAgohCQgPATAAAdIAAAlQAAAeAPASQAPATAZAAQAZAAAQgTQAQgTAAgdIAAglQAAgdgQgTQgQgSgZAAQgZAAgPASg");
	this.shape_284.setTransform(298.1,286.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#0C5EA5").s().p("AAzBqIhkijIgBABIAACiIgdAAIAAjTIAdAAIBlCjIAAgBIAAiiIAdAAIAADTg");
	this.shape_285.setTransform(277.2,286.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#0C5EA5").s().p("Ag0BFQgNgMAAgXQAAgXATgLQASgMAdAAIAgAAIAAgQQAAgNgJgJQgIgIgQAAQgNAAgHAHQgJAHAAAKIgcAAIAAgBQgBgRARgOQASgPAZAAQAbAAAQAOQARAOAAAaIAABaIAEAQIgeAAIgDgYQgJAMgMAHQgMAIgOAAQgZAAgNgNgAgaAOQgKAJAAAMQAAAKAHAGQAGAHANAAQANAAANgIQANgJAEgKIAAgaIghAAQgPAAgLAJg");
	this.shape_286.setTransform(250.7,289.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#0C5EA5").s().p("AAjBQIAAhhQAAgWgIgIQgIgJgSAAQgKAAgKAGQgJAGgGALIAABxIgdAAIAAicIAaAAIACAXQAIgNAMgGQAMgHANAAQAaAAAOAPQAOAPAAAfIAABig");
	this.shape_287.setTransform(234,289.4);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#0C5EA5").s().p("AgzA7QgSgXAAgjIAAgBQAAgjASgXQAUgXAfAAQAgAAAUAXQASAXAAAjIAAABQAAAjgSAXQgTAXghAAQgfAAgUgXgAgegpQgLAQAAAZIAAABQAAAZALARQAKAQAUAAQAVAAAKgQQAKgRAAgZIAAgBQAAgZgKgQQgLgRgUAAQgUAAgKARg");
	this.shape_288.setTransform(217,289.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#0C5EA5").s().p("Ag9BPIAAgVIBThxIhSAAIAAgXIB1AAIAAAUIhUByIBZAAIAAAXg");
	this.shape_289.setTransform(193.5,289.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#0C5EA5").s().p("AAjBQIAAhhQAAgWgIgIQgIgJgSAAQgKAAgKAGQgJAGgGALIAABxIgdAAIAAicIAaAAIACAXQAIgNAMgGQAMgHANAAQAaAAAOAPQAOAPAAAfIAABig");
	this.shape_290.setTransform(177.3,289.4);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#0C5EA5").s().p("AgxBAQgOgRAAgjIAAhbIAdAAIAABcQAAAZAHAJQAIAKAQAAQANAAAKgGQAKgGAFgMIAAhwIAdAAIAACcIgaAAIgCgXQgHAMgMAHQgLAHgOAAQgaAAgPgQg");
	this.shape_291.setTransform(160.2,289.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#0C5EA5").s().p("AgVBzIAAiHIgaAAIAAgVIAaAAIAAgUQAAgaAMgNQAMgOAXAAIALAAIALADIgEAWIgGgBIgIgBQgNAAgFAIQgHAHAAAPIAAAUIAhAAIAAAVIghAAIAACHg");
	this.shape_292.setTransform(147,285.9);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#0C5EA5").s().p("AguA8QgTgWAAgjIAAgFQAAghAUgXQAUgXAaAAQAgAAAQAUQARATAAAgIAAAQIhlAAIgBABQACAYAKANQAMAPASAAQAOAAALgEQAMgEAHgIIALATQgJAJgNAFQgPAGgSAAQghAAgTgWgAgWguQgLANgCASIABABIBHAAIAAgEQAAgRgJgMQgJgLgSAAQgNAAgKAMg");
	this.shape_293.setTransform(126.1,289.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#0C5EA5").s().p("ABRBQIAAhdQAAgXgIgKQgIgKgRAAQgOAAgJALQgKAJgBAQIAABkIgbAAIAAhdQAAgVgJgLQgIgLgPAAQgMAAgKAGQgJAFgEAKIAABzIgdAAIAAicIAaAAIACAVQAIgMAMgGQAMgGAPAAQAQAAAMAHQAJAIAGAOQAHgNANgIQAMgIARAAQAXAAAOAQQAPARAAAiIAABcg");
	this.shape_294.setTransform(104.9,289.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#0C5EA5").s().p("AgyA7QgTgXgBgjIAAgBQABgjATgXQATgXAfAAQAgAAATAXQATAXAAAjIAAABQAAAjgTAXQgSAXghAAQgfAAgTgXgAgegpQgLAQAAAZIAAABQAAAZALARQALAQATAAQAUAAALgQQALgRAAgZIAAgBQAAgZgLgQQgLgRgUAAQgTAAgLARg");
	this.shape_295.setTransform(83.3,289.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#0C5EA5").s().p("Ag4BUQgXgaAAgnIAAgkQAAgnAXgaQAXgaAiAAQAkAAAWATQAVAUAAAfIgBABIgbAAQAAgWgOgNQgMgNgZAAQgWAAgOATQgPAUAAAcIAAAlQAAAcAPAUQAOAUAWAAQAYAAANgNQAOgNAAgXIAbAAIABABQAAAegWAUQgVAUgkAAQgiAAgXgZg");
	this.shape_296.setTransform(65.5,286.8);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgWAkQgIgIAAgKIAAAAIAJAAQABAJAGAEQAGAEAIAAQALAAAFgFQAGgDAAgHQAAgGgFgEQgEgEgNgDQgNgDgHgEQgIgFAAgKQAAgJAJgIQAHgGAMAAQANAAAKAHQAIAHgBAKIAAABIgIAAQAAgHgGgFQgGgFgKAAQgIAAgFAFQgFADAAAGQAAAHAEADQAFAFALABQAQAEAGAEQAHAFAAALQAAAKgIAGQgIAHgPAAQgMAAgKgHg");
	this.shape_297.setTransform(269.1,537.9);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgWAkQgIgHAAgKIAAgBIAJAAQAAAJAHAEQAGAEAIAAQALAAAFgEQAGgEAAgHQAAgHgFgDQgFgEgMgDQgNgDgIgEQgHgFAAgKQAAgKAIgHQAIgGAMAAQAOAAAIAHQAIAGAAAMIAAAAIgJAAQAAgHgGgFQgFgFgKAAQgIAAgGAFQgFADAAAHQAAAGAFADQAFAFAKABQAQAEAHAEQAHAGAAAKQAAAJgIAHQgJAHgOAAQgNAAgJgHg");
	this.shape_298.setTransform(261.1,537.9);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgWAfQgLgMAAgRIAAgCQAAgSAKgMQALgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAPAIAJQAHAJALAAQAJAAAGgDQAGgCAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgPgbQgHAKgBALIAAAAIAvAAIAAgDQAAgLgGgHQgHgHgKAAQgJAAgHAHg");
	this.shape_299.setTransform(253,537.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIAAAOIAAABQAEgIAGgEQAEgEAJAAIAGABIgBAIIgHAAQgJAAgEAFQgFAFgDAIIAAA4g");
	this.shape_300.setTransform(243.1,537.8);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgDQAAgRALgMQAKgMANAAQAQAAAIAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAKAAAFgDQAGgCAEgEIAEAGQgFAFgHADQgHADgKAAQgOAAgKgLgAgPgbQgHAJgBALIAAABIAwAAIAAgDQAAgKgHgIQgHgHgKAAQgIAAgIAHg");
	this.shape_301.setTransform(235.8,537.9);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAEgHAHgDQAHgEAGAAQAQAAAIAMQAIALAAAVIAAACQAAARgIALQgIALgQAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgGAFgDAHIAAAmQADAHAGAEQAGAEAIAAQAMAAAGgJQAGgJAAgOIAAgBQAAgRgGgJQgGgKgMAAQgIAAgGAEg");
	this.shape_302.setTransform(227.4,539.4);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgLAKgHQALgGAOABIATAAIAAgLQAAgJgGgFQgGgFgKAAQgIAAgHAFQgGAFAAAGIgIAAIgBAAQAAgJAJgHQAJgIAMAAQAOAAAIAHQAJAHAAAOIAAAnIACAQIgKAAIgBgHIAAgGQgGAHgGADQgJAFgHAAQgNAAgGgHgAgPAGQgHAGAAAIQAAAGAEAFQAEAEAJAAQAIAAAIgFQAHgEAEgIIAAgRIgTAAQgKgBgIAGg");
	this.shape_303.setTransform(218.5,537.9);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AggA6IAAhyIAHAAIACANQAEgGAGgEQAHgEAHAAQAPAAAJAMQAIAMAAAUIAAACQAAAQgIAMQgJALgPAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgHAFgCAHIAAAmQAEAHAFAEQAGAEAIAAQALAAAHgJQAGgJAAgOIAAgBQAAgQgGgKQgHgKgLAAQgIAAgGAEg");
	this.shape_304.setTransform(210.1,539.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgZA0QgHgHAAgKQAAgMAKgHQALgHAOAAIATAAIAAgJQAAgIgGgFQgGgFgKAAQgIAAgGAFQgHAEABAHIgJAAIgBAAQAAgJAKgIQAIgHANAAQANAAAIAHQAJAHAAAMIAAAoIACARIgJAAIgCgHIAAgGQgGAHgHADQgHAFgIAAQgNAAgGgHgAgPAWQgIAFAAAIQAAAHAFAEQAEAFAJAAQAIAAAHgFQAIgEAEgIIAAgSIgTAAQgKAAgIAGgAgCglIgSgUIAAgBIAMAAIAOAVg");
	this.shape_305.setTransform(197.2,536.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgCAvQgFgEAAgNIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADADQACAEAFAAIAKgBIABAHIgGACIgGAAQgJAAgDgGg");
	this.shape_306.setTransform(190.4,536.9);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgFgGgKAAQgJAAgFAFQgGAFgDAJIAAA4IgKAAIAAhSIAJAAIABAPQAEgIAGgEQAIgEAHAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_307.setTransform(179.8,537.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgZAkQgHgHAAgKQAAgLAKgHQALgGAOAAIATAAIAAgKQAAgIgGgGQgGgFgKAAQgIAAgHAFQgGAFAAAGIgIAAIgBAAQAAgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAAOIAAAnIACAQIgKAAIgBgHIAAgGQgHAIgGACQgIAFgHAAQgNAAgGgHgAgPAGQgIAFABAJQgBAGAFAEQAEAFAJAAQAJAAAHgFQAHgEAEgIIAAgRIgTAAQgKAAgIAFg");
	this.shape_308.setTransform(171,537.9);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgWAkQgJgHABgLIAAAAIAJAAQABAKAGADQAGAEAIAAQAKAAAGgFQAGgDAAgHQAAgGgFgEQgFgFgMgCQgNgDgIgEQgHgGAAgJQAAgKAIgGQAIgHAMAAQAOAAAIAHQAIAGAAAMIAAAAIgJAAQAAgHgFgFQgGgFgKAAQgJAAgEAEQgGAFAAAFQAAAGAFAEQAFAEAKADQAQADAHAEQAHAGAAAKQAAAJgIAHQgIAHgPAAQgMAAgKgHg");
	this.shape_309.setTransform(162.7,537.9);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgMAKgHQAKgFAPAAIATAAIAAgKQAAgJgGgFQgFgFgLAAQgJAAgFAFQgHAEAAAHIgIAAIAAAAQgBgJAJgHQAJgIAMAAQAOAAAIAHQAJAGAAAOIAAAwIACAJIgKAAIgBgOQgFAHgIAEQgHAEgIAAQgNAAgGgGgAgPAGQgIAFAAAIQAAAHAFAFQAFAEAIAAQAIAAAIgFQAHgEAEgIIAAgSIgTAAQgKAAgIAGg");
	this.shape_310.setTransform(150.5,537.9);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgLAAQgHAAgGAFQgHAFgCAJIAAA4IgKAAIAAhSIAJAAIAAAPQAFgIAGgEQAHgEAIAAQANAAAIAIQAGAIABASIAAAxg");
	this.shape_311.setTransform(141.9,537.8);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAJAAIAAAvQAAAPAGAHQAFAGAKAAQAIAAAGgEQAGgEADgJIAAg6IAJAAIAABSIgIAAIgBgOQgEAIgGADQgHAEgIAAQgNAAgHgJg");
	this.shape_312.setTransform(133.1,537.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAPAAQAHAAAGADQAHAFAEAGIAAgyIAJAAIAAB3IgIAAIgBgMQgFAHgGADQgGAEgHAAQgQAAgIgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAJAAAGgEQAFgEAEgHIAAgmQgDgHgGgFQgGgEgJAAQgLAAgGAKg");
	this.shape_313.setTransform(120.2,536.1);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgLAKgIQALgEAOAAIASAAIAAgLQAAgJgFgFQgFgFgLAAQgIAAgHAFQgGAFAAAHIgJAAIAAgBQAAgKAJgHQAJgHAMAAQAOAAAIAHQAJAHAAAOIAAAnIACARIgKAAIgBgIIgBgGQgFAHgHADQgHAFgIAAQgNAAgGgHgAgPAGQgHAGgBAHQAAAHAFAFQAEAEAJAAQAJAAAGgFQAIgFADgHIAAgSIgSAAQgKABgIAFg");
	this.shape_314.setTransform(111.6,537.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgXAgQgKgMAAgSIAAgDQAAgSAKgLQALgMAMAAQAQAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAPAIAIQAHAKALAAQAJAAAFgCQAHgDAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgLgLgAgPgaQgHAIgBAMIAAAAIAvAAIAAgCQAAgMgGgHQgGgHgMAAQgIAAgHAIg");
	this.shape_315.setTransform(99.5,537.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgXAfQgJgMAAgSIAAgBQAAgTAJgLQAJgMAPAAQAPAAAIAIQAJAIAAANIAAABIgIAAQAAgLgHgFQgHgGgKAAQgLAAgHAJQgGALAAAOIAAABQAAAOAGAKQAHAKALAAQAKAAAHgFQAHgGAAgIIAIAAIAAAAQAAAMgJAHQgKAIgNAAQgOAAgKgMg");
	this.shape_316.setTransform(91.3,537.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgVAkQgJgIAAgKIAAAAIAJAAQABAJAGAEQAGAEAJAAQAKAAAFgFQAGgDAAgHQAAgGgFgEQgEgFgNgCQgNgDgHgEQgIgFAAgKQAAgKAJgGQAHgHAMAAQANAAAKAHQAIAHgBAKIAAABIgIAAQAAgGgGgGQgGgFgKAAQgIAAgFAFQgFADAAAHQAAAFAEAEQAGAFAKABQAQAEAGAEQAHAFAAAKQAAALgIAHQgIAGgOAAQgOAAgIgHg");
	this.shape_317.setTransform(83,537.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgXAhQgIgJABgTIAAguIAJAAIAAAvQAAAPAFAHQAFAGAKAAQAIAAAGgEQAHgFADgIIAAg6IAIAAIAABSIgIAAIAAgOQgFAIgGADQgHAEgHAAQgNAAgIgJg");
	this.shape_318.setTransform(71,537.9);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgNA5QgGgDgEgHIgBAMIgIAAIAAh3IAJAAIAAAyQAEgHAHgDQAGgEAHAAQAQAAAIAMQAIAMAAASIAAACQAAASgIAMQgIALgQAAQgHAAgHgEgAgOgMQgGAGgDAGIAAAlQADAHAGAFQAHAEAHAAQAMAAAGgJQAGgJAAgPIAAgCQAAgQgGgIQgGgKgMAAQgIAAgGAEg");
	this.shape_319.setTransform(62.4,536.1);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgRADIAAgFIAjAAIAAAFg");
	this.shape_320.setTransform(960.7,518.2);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIAAAOIAAABQAEgIAGgEQAEgEAJAAIADAAIADABIgBAIIgHAAQgJAAgEAFQgEAEgEAJIAAA4g");
	this.shape_321.setTransform(952.7,518.7);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAHAAIAAAWIATAAIAAAHIgTAAIAAA1QAAAIADAEQAEADAEAAIAKgBIABAHIgGABIgGABQgJAAgDgFg");
	this.shape_322.setTransform(946.7,517.8);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgGgFQgFgGgKAAQgIAAgGAFQgFAFgEAIIAAA5IgIAAIAAhSIAHAAIABAPQAFgIAGgEQAIgEAGAAQAOAAAHAIQAHAJAAARIAAAxg");
	this.shape_323.setTransform(939.8,518.7);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgZAfQgLgLAAgUIAAAAQAAgSALgMQAKgMAPAAQARAAAJAMQALAMAAASIAAAAQAAATgKAMQgLAMgQAAQgPAAgKgMgAgTgYQgHAKAAAOIAAAAQAAAQAHAJQAHAKAMAAQANAAAHgKQAHgKAAgPIAAAAQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_324.setTransform(930.9,518.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgLQAJgMAPAAQAPAAAIAIQAJAIAAANIAAABIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAJQgGALAAAOIAAABQAAAOAGALQAHAJALAAQAKAAAHgFQAHgFAAgKIAIAAIAAAAQAAANgJAHQgKAIgNAAQgOAAgKgMg");
	this.shape_325.setTransform(922.4,518.8);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgDQAAgRALgMQAKgMANAAQAPAAAJAKQAJAJAAARIAAAGIg5AAIAAACQAAAOAHAJQAIAKAKAAQAKAAAFgDQAGgCAEgEIAEAGQgFAFgHADQgHADgKAAQgOAAgKgLgAgPgbQgGAJgCAMIAwAAIAAgDQAAgKgHgIQgHgHgKAAQgIAAgIAHg");
	this.shape_326.setTransform(910.3,518.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgCAwQgFgGAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADADQADAEAFAAIAJgBIABAHIgFACIgHAAQgJAAgDgFg");
	this.shape_327.setTransform(896,517.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgZAkQgHgHAAgKQAAgMAKgHQALgFAOAAIATAAIAAgKQAAgIgGgGQgGgFgKAAQgIAAgGAFQgHAEAAAIIgIAAIgBgBQAAgJAJgIQAJgHANAAQANAAAIAHQAJAHAAANIAAAnIACASIgKAAIgBgIIAAgHQgGAIgGAEQgJAEgHAAQgNAAgGgHgAgPAGQgIAFABAJQAAAGAEAEQAEAFAJAAQAHAAAIgFQAIgEAEgIIAAgSIgTAAQgKAAgIAGg");
	this.shape_328.setTransform(889.1,518.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAEgHAGgEQAHgDAHAAQAQAAAIAMQAIAMAAAUIAAABQAAARgIAMQgIALgQAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgHAFgCAHIAAAmQAEAHAFAEQAGAEAIAAQALAAAHgJQAGgKAAgNIAAgBQAAgQgGgKQgHgKgLAAQgIAAgGAEg");
	this.shape_329.setTransform(880.7,520.3);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AAwAqIAAgvQAAgQgFgGQgFgGgKAAQgMAAgFAGQgFAHgCALIAAAzIgHAAIAAgvQgBgQgFgGQgFgGgKAAQgKAAgGAFQgGAEgCAJIAAA5IgJAAIAAhSIAIAAIABAOQAEgIAGgDQAHgEAJAAQAKAAAHAEQAFAFACAKQAEgKAHgEQAGgFALAAQAOAAAHAJQAHAJAAASIAAAvg");
	this.shape_330.setTransform(869.1,518.7);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgMAKgHQALgFAOAAIATAAIAAgKQAAgIgGgGQgGgFgKAAQgIAAgGAEQgGAGAAAGIgJAAIgBAAQAAgJAKgHQAJgIAMAAQANAAAJAHQAIAHAAANIAAAnIACARIgKAAIgBgHIAAgGQgGAIgHADQgIAEgHAAQgNAAgGgGgAgPAGQgIAFAAAJQAAAGAFAFQAFAEAIAAQAHAAAJgFQAHgEAEgIIAAgSIgTAAQgKAAgIAGg");
	this.shape_331.setTransform(857.6,518.8);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgCAwQgFgGAAgNIAAg0IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA0QAAAKACADQAEADAEAAIAKgBIABAHIgGACIgGAAQgJAAgDgFg");
	this.shape_332.setTransform(850.8,517.8);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgWAjQgIgGAAgLIAAAAIAJAAQAAAJAHAEQAHAEAHAAQALAAAFgEQAGgFAAgGQAAgGgFgEQgFgEgMgDQgNgDgIgEQgHgFAAgKQAAgKAIgGQAIgHAMAAQAPAAAHAHQAIAGAAAMIAAAAIgJAAQAAgGgGgGQgFgFgKAAQgIAAgGAEQgFAFAAAFQAAAGAFAEQAEADALAEQAPADAIADQAHAGAAALQAAAJgIAHQgJAHgOAAQgNAAgJgIg");
	this.shape_333.setTransform(844.1,518.8);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgYAyQgIgMAAgTIAAgBQAAgSAIgMQAJgMAPAAQAHAAAGADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgGAEgHAAQgQAAgIgLgAgRgGQgGAIAAAQIAAABQAAAQAGAJQAGAJALAAQAIAAAHgEQAFgEAEgHIAAgmQgDgHgGgFQgFgEgKAAQgLAAgGAKg");
	this.shape_334.setTransform(828,517);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAJAAARIAAAGIg5AAIAAACQAAAOAHAJQAIAKAKAAQAKAAAFgCQAGgDAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgOgaQgHAHgCANIAwAAIAAgCQAAgMgHgHQgGgHgLAAQgIAAgHAIg");
	this.shape_335.setTransform(815.9,518.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgFgGgKAAQgJAAgGAFQgGAFgCAIIAAA5IgJAAIAAhSIAIAAIABAPQADgHAHgFQAHgEAHAAQAOAAAHAIQAHAJAAARIAAAxg");
	this.shape_336.setTransform(807.4,518.7);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgZAfQgLgKABgVIAAAAQgBgUALgKQAJgMAQAAQAQAAALAMQAJALAAATIAAAAQAAAUgJALQgLAMgQAAQgQAAgJgMgAgTgYQgIAKABAOIAAAAQgBAQAIAJQAHAKAMAAQANAAAHgKQAIgJAAgQIAAAAQAAgOgIgKQgHgKgNAAQgMAAgHAKg");
	this.shape_337.setTransform(798.5,518.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgfApIAAgGIAwhDIgvAAIAAgJIA7AAIAAAIIgxBDIA1AAIAAAHg");
	this.shape_338.setTransform(786.7,518.8);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAvQAAAPAFAHQAFAGAKAAQAIAAAHgEQAGgGACgHIAAg6IAKAAIAABSIgJAAIAAgOQgFAIgGADQgHAEgHAAQgOAAgHgJg");
	this.shape_339.setTransform(778.3,518.9);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgYAyQgIgLAAgUIAAgBQAAgTAIgLQAJgMAPAAQAHAAAGADQAGAEAFAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgGADQgHAEgHAAQgQAAgIgLgAgRgGQgGAHAAARIAAABQAAAQAGAJQAHAJAKAAQAIAAAGgEQAFgDAFgIIAAgmQgDgHgGgFQgGgEgJAAQgLAAgGAKg");
	this.shape_340.setTransform(769.3,517);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgaAfQgJgLAAgUIAAAAQAAgTAJgLQALgMAPAAQAQAAAKAMQAKALABATIAAAAQgBAUgKALQgKAMgQAAQgPAAgLgMgAgTgYQgHAKAAAOIAAAAQAAAQAHAJQAHAKAMAAQANAAAHgKQAIgJAAgQIAAAAQAAgOgIgKQgHgKgNAAQgMAAgHAKg");
	this.shape_341.setTransform(760.6,518.8);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQAEgIAFgEQAEgEAJAAIADAAIAEABIgCAIIgHAAQgJAAgDAFQgGAEgCAJIAAA4g");
	this.shape_342.setTransform(754.2,518.7);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAFgHAGgEQAGgDAHAAQAQAAAIAMQAIALAAAVIAAABQAAASgIALQgIALgQAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgGAFgDAHIAAAmQADAHAGAEQAGAEAIAAQAMAAAGgJQAGgJAAgOIAAgBQAAgRgGgJQgGgKgMAAQgIAAgGAEg");
	this.shape_343.setTransform(746.7,520.3);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgMAKgHQAKgEAPAAIATAAIAAgLQgBgJgFgFQgFgFgLAAQgIAAgHAFQgGAFAAAGIgJAAIAAAAQAAgJAJgHQAJgIAMAAQANAAAJAHQAJAHAAANIAAAwIACAJIgKAAIgBgIIAAgHQgGAIgHADQgIAFgHAAQgNAAgGgGgAgPAGQgIAGAAAHQAAAHAFAFQAEAEAJAAQAHAAAJgFQAIgFADgHIAAgSIgTAAQgKAAgIAGg");
	this.shape_344.setTransform(733.9,518.8);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgWAgQgLgMAAgSIAAgDQAAgRALgMQAKgMANAAQAPAAAJAKQAJAJAAAQIAAAHIg5AAIAAACQAAAOAHAKQAIAJAKAAQAKAAAFgCQAGgDAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgLgAgPgbQgGAIgCAMIAwAAIAAgCQAAgLgHgHQgHgHgKAAQgIAAgIAHg");
	this.shape_345.setTransform(718.2,518.8);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgXAfQgKgMABgSIAAgBQgBgSAKgMQAKgMAOAAQAPAAAIAIQAJAIAAANIAAABIgIAAQAAgKgHgGQgHgGgKAAQgLAAgGAJQgHAKAAAPIAAABQAAAPAHAJQAFAKAMAAQAKAAAHgFQAHgFAAgKIAIAAIAAABQABALgKAIQgKAIgNAAQgOAAgKgMg");
	this.shape_346.setTransform(710,518.8);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AgXAhQgIgIAAgUIAAguIAKAAIAAAvQAAAPAFAHQAFAGAKAAQAJAAAGgEQAGgGACgHIAAg6IAKAAIAABSIgIAAIgBgOQgEAHgHAEQgHAEgHAAQgNAAgIgJg");
	this.shape_347.setTransform(701.4,518.9);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AgYAyQgIgMAAgTIAAgBQAAgSAIgMQAJgMAPAAQAHAAAGADQAGAEAFAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgGAEgHAAQgQAAgIgLgAgRgGQgGAIAAAQIAAABQAAAQAGAJQAGAJALAAQAIAAAGgEQAHgEADgHIAAgmQgDgHgGgFQgGgEgJAAQgLAAgGAKg");
	this.shape_348.setTransform(692.4,517);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgTAqIAAhSIAIAAIACAOIAAABQAEgIAFgEQAEgEAJAAIADAAIAEABIgCAIIgHAAQgJAAgDAFQgGAEgCAJIAAA4g");
	this.shape_349.setTransform(682.4,518.7);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AgGA0IAGgXIAAgMIAHAAIAAANIgHAWgAgCgmIAAgMIAJAAIAAAMg");
	this.shape_350.setTransform(673.4,519.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgDQAAgRALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAKAAAFgCQAGgDAEgEIAEAGQgFAFgHADQgHADgKAAQgOAAgKgLgAgPgbQgGAJgCAMIAwAAIAAgDQAAgKgHgIQgHgHgKAAQgIAAgIAHg");
	this.shape_351.setTransform(667.8,518.8);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgMAKgHQAKgEAPAAIATAAIAAgLQgBgJgFgFQgGgFgKAAQgIAAgHAEQgGAGAAAGIgJAAIAAAAQAAgJAJgHQAJgIAMAAQAOAAAIAHQAJAHAAANIABAwIABAIIgKAAIgBgHIAAgGQgGAHgHAEQgIAEgHAAQgNAAgGgGgAgPAGQgIAFAAAIQAAAGAFAFQAEAFAJAAQAHAAAIgFQAJgFADgHIAAgSIgTAAQgKAAgIAGg");
	this.shape_352.setTransform(655.7,518.8);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgXAgQgKgNAAgRIAAgCQAAgTAKgLQALgMAMAAQAQAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAJQAHAKALAAQAJAAAFgCQAHgDAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgLgLgAgPgbQgHAJgBAMIAvAAIAAgCQAAgMgGgHQgGgHgMAAQgIAAgHAHg");
	this.shape_353.setTransform(647.5,518.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgIAGgEQAFgEAIAAIAEAAIACABIgBAIIgHAAQgJAAgDAFQgFAEgDAJIAAA4g");
	this.shape_354.setTransform(641.3,518.7);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgZAfQgLgLAAgTIAAgBQAAgTALgLQAKgMAPAAQARAAAJAMQALALAAATIAAABQAAATgLALQgJAMgRAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAHAKAMAAQANAAAHgKQAHgJAAgPIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_355.setTransform(629.8,518.8);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AggA6IAAhyIAHAAIACANQAEgHAGgEQAHgDAHAAQAQAAAIAMQAIAMAAAUIAAABQAAARgIAMQgIALgQAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgHAFgCAHIAAAmQAEAHAFAEQAGAEAIAAQALAAAHgJQAGgJAAgOIAAgBQAAgQgGgKQgHgKgLAAQgIAAgGAEg");
	this.shape_356.setTransform(621.2,520.3);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AAxAqIAAgvQAAgQgGgGQgFgGgKAAQgLAAgGAGQgFAHgCALIAAAzIgHAAIAAgvQAAgQgGgGQgFgGgKAAQgKAAgGAFQgGAFgCAIIAAA5IgJAAIAAhSIAIAAIABAOQAEgIAHgDQAHgEAJAAQAKAAAGAEQAFAEACALQAEgKAHgEQAHgFAKAAQAOAAAHAJQAHAJAAASIAAAvg");
	this.shape_357.setTransform(609.5,518.7);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgXAgQgKgNAAgRIAAgCQAAgTAKgLQALgMAMAAQAQAAAJAKQAJAKAAAPIAAAHIg6AAIAAACQAAAOAIAJQAHAKALAAQAJAAAFgCQAHgDAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgLgLgAgPgbQgHAJgBALIAvAAIAAgBQAAgMgGgHQgGgHgMAAQgIAAgHAHg");
	this.shape_358.setTransform(598.5,518.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgCAwQgFgGAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAHAAIAAAVIATAAIAAAIIgTAAIAAA0QAAAJADAEQAEADAEAAIAKgBIABAHIgGABIgGABQgJAAgDgFg");
	this.shape_359.setTransform(591.6,517.8);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgJAAgFAFQgGAEgDAJIAAA5IgKAAIAAhSIAJAAIAAAPQAFgIAGgEQAHgEAIAAQAOAAAGAIQAIAJAAARIAAAxg");
	this.shape_360.setTransform(580.8,518.7);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgaAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQAQAAAKAMQALAMAAASIAAABQAAASgLAMQgKAMgQAAQgPAAgLgMgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAHAKAMAAQANAAAHgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_361.setTransform(564.5,518.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgVAkQgKgHABgLIAAAAIAJAAQABAJAGAEQAHAEAIAAQAKAAAFgEQAGgFAAgGQAAgGgFgFQgFgDgMgEQgNgCgHgEQgIgFAAgKQAAgKAJgHQAIgGALAAQAOAAAJAHQAIAHgBAKIAAABIgIAAQAAgHgGgFQgGgFgKAAQgIAAgFAEQgFAFAAAFQAAAHAEADQAFAEALACQAPAEAHAEQAHAFAAALQAAAKgIAGQgIAHgOAAQgOAAgIgHg");
	this.shape_362.setTransform(555.9,518.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgMAKgGQALgGAOAAIATAAIAAgKQAAgIgGgGQgGgFgKAAQgHAAgIAFQgFAFgBAHIgIAAIgBgBQAAgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAoIACAQIgKAAIgBgHIAAgHQgGAJgGADQgJAEgHAAQgNAAgGgGgAgPAGQgHAFAAAIQAAAHAEAFQAFAEAIAAQAHAAAJgFQAHgEAEgIIAAgRIgTAAQgKAAgIAFg");
	this.shape_363.setTransform(547.6,518.8);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgSAJgNQAKgLAOAAQAPAAAIAIQAJAIAAAOIAAAAIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAJQgGALAAAOIAAABQAAAOAGALQAHAJALAAQAKAAAHgFQAHgGAAgJIAIAAIAAAAQAAAMgJAIQgKAIgNAAQgOAAgKgMg");
	this.shape_364.setTransform(539.3,518.8);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AgZAfQgKgKAAgVIAAAAQAAgUAKgKQAKgMAPAAQAQAAAKAMQAKALAAATIAAAAQAAATgKAMQgKAMgQAAQgPAAgKgMgAgTgYQgIAKAAAOIAAAAQAAAQAIAJQAHAKAMAAQANAAAHgKQAHgJAAgQIAAAAQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_365.setTransform(526.9,518.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQADgIAGgEQAEgEAJAAIAEAAIACABIgBAIIgHAAQgJAAgDAFQgGAEgCAJIAAA4g");
	this.shape_366.setTransform(516.7,518.7);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAFgHAGgEQAFgDAIAAQAQAAAIAMQAIAMAAAUIAAABQAAARgIAMQgIALgQAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgHAFgCAHIAAAmQADAHAGAEQAGAEAIAAQALAAAHgJQAGgKAAgNIAAgBQAAgQgGgKQgHgKgLAAQgIAAgGAEg");
	this.shape_367.setTransform(509.2,520.3);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AgaAfQgJgLgBgTIAAgBQABgSAJgMQALgMAPAAQAQAAAKAMQALAKgBAUIAAABQABAUgLAKQgJAMgRAAQgPAAgLgMgAgTgYQgHAJAAAPIAAABQAAAPAHAJQAHAKAMAAQANAAAHgKQAIgJgBgPIAAgBQABgOgIgKQgHgKgNAAQgMAAgHAKg");
	this.shape_368.setTransform(500.2,518.8);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQAEgIAFgEQAFgEAJAAIADAAIADABIgBAIIgIAAQgJAAgDAFQgFAEgDAJIAAA4g");
	this.shape_369.setTransform(493.8,518.7);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AggA6IAAhyIAHAAIACANQAEgHAHgEQAGgDAHAAQAPAAAJAMQAIAMAAAUIAAABQAAARgIAMQgJALgPAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgGAFgDAHIAAAmQADAHAGAEQAFAEAJAAQAMAAAFgJQAHgJAAgOIAAgBQAAgRgHgJQgFgKgMAAQgJAAgFAEg");
	this.shape_370.setTransform(486.3,520.3);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAJAAIAAAvQAAAPAGAHQAFAGAKAAQAJAAAFgEQAHgFACgIIAAg6IAJAAIAABSIgIAAIgBgOQgEAIgGADQgHAEgHAAQgNAAgIgJg");
	this.shape_371.setTransform(469.8,518.9);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AgWAkQgIgHAAgKIAAgBIAJAAQAAAJAHAEQAHAEAHAAQALAAAFgEQAGgFAAgGQAAgGgFgFQgFgDgMgEQgNgCgIgEQgHgFAAgKQAAgKAIgHQAIgGAMAAQAPAAAHAHQAIAGAAALIAAABIgJAAQAAgGgGgGQgFgFgKAAQgIAAgGAEQgFAEAAAHQAAAFAFAEQAEADALAEQAPADAIADQAHAHAAAJQAAALgIAHQgJAGgOAAQgNAAgJgHg");
	this.shape_372.setTransform(461.3,518.8);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgJAAgFAFQgGAFgDAIIAAA5IgKAAIAAhSIAJAAIABAPQAEgIAGgEQAIgEAHAAQAOAAAGAIQAIAJAAARIAAAxg");
	this.shape_373.setTransform(445.4,518.7);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AgZAfQgLgLAAgUIAAAAQAAgTALgLQAKgMAPAAQARAAAJAMQALALAAATIAAAAQAAAUgLALQgJAMgRAAQgPAAgKgMgAgTgYQgHAKAAAOIAAAAQAAAPAHAKQAHAKAMAAQANAAAHgKQAHgKAAgPIAAAAQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_374.setTransform(436.6,518.8);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AggAqIAAgIIAxhCIgvAAIAAgJIA6AAIAAAHIgwBEIA0AAIAAAIg");
	this.shape_375.setTransform(424.8,518.8);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgLAKgHQAKgGAPAAIASAAIAAgKQAAgJgFgFQgGgFgKAAQgIAAgGAFQgHAFAAAGIgIAAIAAAAQgBgJAJgIQAJgHAMAAQANAAAJAHQAJAHAAANIAAAwIACAJIgKAAIgBgIIgBgHQgFAIgHADQgIAFgIAAQgMAAgHgHgAgQAGQgHAGAAAHQAAAHAFAFQAFAEAIAAQAHAAAIgFQAIgFADgHIAAgRIgSAAQgKAAgJAFg");
	this.shape_376.setTransform(416.4,518.8);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgGgGgJAAQgLAAgFAGQgGAHgCALIAAABIABACIAAAwIgIAAIAAgvQAAgPgGgHQgGgGgJAAQgKAAgGAFQgFAEgCAJIAAA5IgKAAIAAhSIAIAAIABAOQAFgIAGgDQAHgEAJAAQAJAAAHAEQAFAFACAKQAFgKAGgEQAGgFALAAQANAAAIAJQAHAJAAASIAAAvg");
	this.shape_377.setTransform(405.2,518.7);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQADgIAGgEQAFgEAIAAIADAAIADABIgBAIIgHAAQgJAAgEAFQgFAEgCAJIAAA4g");
	this.shape_378.setTransform(396,518.7);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgaAfQgJgKAAgVIAAAAQAAgTAJgLQAKgMAQAAQAQAAALAMQAJALABATIAAAAQgBATgJAMQgLAMgQAAQgQAAgKgMgAgTgYQgIAKAAAOIAAAAQAAAPAIAKQAHAKAMAAQANAAAHgKQAHgKABgPIAAAAQgBgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_379.setTransform(388.4,518.8);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AgJA9IAAhLIgOAAIAAgHIAOAAIAAgNQAAgMAHgHQAEgHALAAIAGAAIAFABIgBAIIgEgBIgFAAQgHAAgEAFQgDAEAAAJIAAANIATAAIAAAHIgTAAIAABLg");
	this.shape_380.setTransform(381.6,516.9);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgFgGgLAAQgIAAgGAFQgGAFgDAIIAAA5IgJAAIAAhSIAIAAIABAPQAEgHAHgFQAIgEAGAAQAOAAAHAIQAIAJAAARIAAAxg");
	this.shape_381.setTransform(374.3,518.7);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AgXAgQgKgNAAgRIAAgCQAAgTAKgLQALgMANAAQAPAAAJAJQAJAKAAAQIAAAHIg6AAIAAACQAAAOAIAKQAHAJALAAQAJAAAFgDQAHgCAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgLgLgAgPgaQgHAJgBAKIAvAAIAAgCQAAgLgGgHQgGgHgLAAQgJAAgHAIg");
	this.shape_382.setTransform(358.4,518.8);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgSAKgLQALgMANAAQAPAAAJAJQAJAKAAARIAAAGIg6AAIAAACQAAAOAIAJQAHAKALAAQAJAAAFgDQAHgCAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgPgbQgHAKgBALIAvAAIAAgDQAAgLgGgHQgGgHgLAAQgJAAgHAHg");
	this.shape_383.setTransform(342.7,518.8);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIADAEQADADAEAAIAKgBIABAHIgFABIgHABQgJAAgDgFg");
	this.shape_384.setTransform(335.9,517.8);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AgCAwQgFgHAAgLIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADADQADAEAFAAIAJgBIABAHIgFABIgHABQgIAAgEgFg");
	this.shape_385.setTransform(330.6,517.8);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AgXAhQgHgJgBgTIAAguIAKAAIAAAvQAAAPAFAHQAFAGAJAAQAKAAAFgEQAHgGACgHIAAg6IAKAAIAABSIgJAAIgBgOQgEAIgGADQgIAEgHAAQgNAAgHgJg");
	this.shape_386.setTransform(323.6,518.9);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA0QAAAJADADQADAEAFAAIAJgBIABAHIgFABIgHABQgIAAgEgGg");
	this.shape_387.setTransform(316.5,517.8);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AgXAfQgKgMAAgRIAAgCQAAgSAKgMQALgMANAAQAPAAAJAJQAJAKAAARIAAAGIg6AAIAAACQAAAOAIAKQAHAJALAAQAJAAAFgCQAHgDAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgLgMgAgPgbQgHAJgBAMIAvAAIAAgCQAAgMgGgHQgGgHgLAAQgJAAgHAHg");
	this.shape_388.setTransform(306,518.8);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgIAGgEQAFgEAIAAIAEAAIACABIgBAIIgHAAQgJAAgDAFQgFAEgDAJIAAA4g");
	this.shape_389.setTransform(299.8,518.7);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AggA6IAAhyIAHAAIACANQAEgHAGgEQAHgDAHAAQAQAAAIAMQAIAMAAAUIAAABQAAARgIAMQgIALgQAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgHAFgCAHIAAAmQAEAHAFAEQAGAEAIAAQALAAAHgJQAGgJAAgOIAAgBQAAgQgGgKQgHgKgLAAQgIAAgGAEg");
	this.shape_390.setTransform(292.4,520.3);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AAxAqIAAgvQAAgQgGgGQgFgGgKAAQgMAAgEAGQgGAHgCALIAAAzIgIAAIAAgvQAAgQgFgGQgFgGgKAAQgKAAgGAFQgGAFgCAIIAAA5IgJAAIAAhSIAIAAIABAOQAEgIAHgDQAGgEAKAAQAJAAAHAEQAFAFACAKQAEgKAHgEQAGgFALAAQAOAAAGAJQAIAJAAASIAAAvg");
	this.shape_391.setTransform(280.8,518.7);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AgXAfQgKgMAAgRIAAgCQAAgSAKgMQALgMAMAAQAQAAAJAJQAJAKAAAQIAAAHIg6AAIAAACQAAAOAIAKQAHAJALAAQAJAAAFgDQAHgCAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgLgMgAgPgaQgHAIgBALIAvAAIAAgCQAAgLgGgHQgGgHgMAAQgIAAgHAIg");
	this.shape_392.setTransform(269.7,518.8);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgWAjQgIgHAAgJIAAgBIAJAAQABAKAGADQAHAEAHAAQAKAAAGgEQAGgFAAgGQAAgFgFgGQgGgEgLgCQgNgDgIgEQgHgFAAgKQAAgJAIgHQAIgHAMAAQAPAAAHAHQAJAHgBALIAAAAIgJAAQAAgHgFgFQgGgFgKAAQgIAAgFAEQgFAFAAAGQAAAFAEAEQAEADALADQAPAEAIAEQAHAGAAAKQAAAJgIAHQgIAHgPAAQgNAAgJgIg");
	this.shape_393.setTransform(261.4,518.8);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AgWAfQgLgMAAgRIAAgDQAAgRALgMQAKgMANAAQAQAAAIAJQAJALAAAPIAAAHIg5AAIAAACQAAAOAHAKQAIAJAKAAQAKAAAFgCQAGgDAEgEIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgbQgGAIgCAMIAwAAIAAgBQAAgLgHgIQgHgHgKAAQgIAAgIAHg");
	this.shape_394.setTransform(249.5,518.8);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AgTAqIAAhSIAIAAIACAOIAAABQAEgIAFgEQAEgEAJAAIAEAAIACABIgBAIIgHAAQgJAAgDAFQgGAEgCAJIAAA4g");
	this.shape_395.setTransform(243.4,518.7);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgWAgQgLgMAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAKAAAFgDQAGgCAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgLgAgOgaQgHAHgCANIAwAAIAAgCQAAgMgHgHQgHgHgKAAQgIAAgHAIg");
	this.shape_396.setTransform(236.1,518.8);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AgCApIgghSIAKAAIAXA+IABAJIAAAAIAahHIAJAAIggBSg");
	this.shape_397.setTransform(228.2,518.8);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AgZAkQgHgHAAgKQAAgLAKgIQALgEAOAAIATAAIAAgLQgBgJgFgFQgGgFgKAAQgIAAgGAFQgHAFABAHIgJAAIAAgBQgBgKAJgGQAJgIAMAAQAOAAAJAHQAIAHAAANIAAAnIACARIgJAAIgCgHIAAgHQgFAIgIAEQgIAEgHAAQgNAAgGgHgAgPAGQgIAGAAAHQAAAHAFAFQAFAEAIAAQAHAAAIgFQAIgEAEgIIAAgSIgTAAQgKAAgIAGg");
	this.shape_398.setTransform(220,518.8);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgYAyQgIgMAAgTIAAgBQAAgSAIgMQAJgMAPAAQAHAAAGADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgGAEgHAAQgPAAgJgLgAgRgGQgGAIAAAQIAAABQAAAQAGAJQAGAJALAAQAIAAAHgEQAFgEAEgHIAAgmQgDgHgGgFQgFgEgKAAQgLAAgGAKg");
	this.shape_399.setTransform(203.8,517);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADADQADAEAFAAIAJgBIABAHIgFACIgHAAQgJAAgDgGg");
	this.shape_400.setTransform(189.4,517.8);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AAXAqIAAgxQgBgOgFgGQgFgGgLAAQgIAAgGAFQgGAFgDAIIAAA5IgJAAIAAhSIAJAAIAAAPQAEgHAIgFQAGgEAIAAQANAAAIAIQAGAJAAARIAAAxg");
	this.shape_401.setTransform(182.4,518.7);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAQAAAIAJQAJALAAAPIAAAHIg5AAIAAACQAAAOAHAKQAIAJAKAAQAKAAAFgCQAGgDAEgEIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgaQgGAIgCALIAwAAIAAgCQAAgKgHgIQgHgHgKAAQgIAAgIAIg");
	this.shape_402.setTransform(173.9,518.8);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AggAqIAAgIIAxhCIgvAAIAAgJIA7AAIAAAIIgxBDIA0AAIAAAIg");
	this.shape_403.setTransform(162.4,518.8);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAKgFAPABIATAAIAAgLQAAgIgGgGQgFgFgLAAQgIAAgGAEQgHAFAAAIIgIAAIAAgBQgBgJAJgHQAJgIAMAAQAOAAAIAHQAJAHAAANIAAAwIACAIIgKAAIgBgOQgFAIgIADQgHAFgIAAQgNAAgGgHgAgPAGQgIAFAAAJQAAAGAFAFQAFAEAIAAQAHAAAJgFQAHgFAEgHIAAgSIgTAAQgKAAgIAGg");
	this.shape_404.setTransform(154,518.8);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAFgHAGgEQAGgDAHAAQAQAAAIAMQAIALAAAVIAAABQAAASgIALQgIALgQAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgGAEgDAIIAAAmQADAHAGAEQAGAEAIAAQAMAAAGgJQAGgKAAgNIAAgBQAAgQgGgKQgHgKgLAAQgIAAgGAEg");
	this.shape_405.setTransform(145.6,520.3);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgMAKgGQAKgGAPAAIASAAIAAgKQAAgJgFgFQgFgFgLAAQgJAAgGAFQgGAFAAAGIgJAAIAAAAQAAgJAJgIQAJgHAMAAQANAAAJAHQAJAHgBANIABAwIACAJIgKAAIgCgOQgEAGgIAFQgHAEgJAAQgMAAgHgHgAgPAGQgIAFAAAJQAAAGAEAFQAGAEAHAAQAIAAAIgFQAIgFADgHIAAgRIgSAAQgLgBgHAGg");
	this.shape_406.setTransform(129.2,518.8);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgTALgLQAKgMANAAQAQAAAIAJQAJALAAAPIAAAHIg5AAIAAACQAAAOAHAJQAIAKAKAAQAKAAAFgDQAGgCAEgEIAEAGQgFAFgHADQgHADgKAAQgOAAgKgLgAgPgaQgGAIgCALIAwAAIAAgCQAAgKgHgIQgHgHgKAAQgIAAgIAIg");
	this.shape_407.setTransform(117.1,518.8);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADAEQADADAFAAIAJgBIABAHIgFACIgHAAQgIAAgEgGg");
	this.shape_408.setTransform(110.3,517.8);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAHAAIAAAWIATAAIAAAHIgTAAIAAA1QAAAIADAEQAEADAEAAIAKgBIABAHIgGACIgGAAQgJAAgDgGg");
	this.shape_409.setTransform(105,517.8);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgDQAAgSALgLQAKgMAMAAQAQAAAJAJQAJAKAAARIAAAGIg5AAIAAACQgBAOAIAJQAHAKALAAQAKAAAEgCQAHgDAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgLgAgPgaQgHAHgBANIAvAAIAAgDQAAgLgGgHQgGgHgMAAQgHAAgIAIg");
	this.shape_410.setTransform(98.4,518.8);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgFgGgKAAQgLAAgGAGQgFAGgCAMIAAAzIgHAAIAAgvQAAgPgGgHQgFgGgKAAQgKAAgGAFQgGAFgCAIIAAA5IgJAAIAAhSIAIAAIABAOQAEgIAHgDQAHgEAJAAQAKAAAGAEQAFAEACALQAEgKAHgEQAHgFAKAAQANAAAIAJQAHAJAAASIAAAvg");
	this.shape_411.setTransform(87.2,518.7);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQAEgIAFgEQAFgEAIAAIADAAIAEABIgCAIIgHAAQgJAAgDAFQgGAEgCAJIAAA4g");
	this.shape_412.setTransform(78,518.7);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAJQAJALAAAPIAAAHIg5AAIAAACQAAAOAHAKQAIAJAKAAQAKAAAFgCQAGgDAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgOgaQgHAHgCAMIAwAAIAAgBQAAgMgHgHQgHgHgKAAQgIAAgHAIg");
	this.shape_413.setTransform(70.7,518.8);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AggA6IAAhyIAHAAIACANQAEgHAGgEQAHgDAHAAQAPAAAJAMQAIAMAAAUIAAABQAAARgIAMQgJALgPAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgHAFgCAHIAAAmQADAHAGAEQAGAEAIAAQALAAAHgJQAGgJAAgOIAAgBQAAgRgHgJQgFgKgMAAQgIAAgGAEg");
	this.shape_414.setTransform(62.4,520.3);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AgGA0IAGgWIAAgOIAHAAIAAAOIgHAWgAgCgmIAAgNIAJAAIAAANg");
	this.shape_415.setTransform(957,500.8);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AgaA0QgGgGAAgLQAAgMAKgHQAJgHAQAAIASAAIAAgJQAAgIgFgFQgGgGgKAAQgHAAgIAFQgGAGAAAGIgJAAIAAAAQgBgKAKgHQAJgHAMAAQAOAAAIAHQAJAHAAAMIABAxIABAIIgKAAIgBgHIgBgHQgEAHgIAEQgIAFgIAAQgMAAgHgHgAgQAWQgHAFAAAIQAAAHAFAEQAEAEAJAAQAIAAAIgEQAHgFADgHIAAgSIgSAAQgLAAgIAGgAgCglIgTgVIANAAIANAVg");
	this.shape_416.setTransform(951.1,498.2);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AgCAwQgFgHAAgLIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADADQADAEAFAAIAJgBIABAHIgFACIgHAAQgIAAgEgFg");
	this.shape_417.setTransform(944.2,498.8);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AgNA5QgGgDgEgIIgBANIgIAAIAAh3IAJAAIAAAyQAFgHAGgEQAFgDAIAAQAQAAAIAMQAIAMAAASIAAABQAAATgIALQgJAMgPAAQgHAAgHgEgAgOgMQgGAGgDAGIAAAlQADAHAGAEQAGAFAIAAQAMAAAGgJQAGgJAAgQIAAgBQAAgQgGgIQgGgLgMAAQgIAAgGAFg");
	this.shape_418.setTransform(926.6,498);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgHAGgFQAFgEAIAAIAEAAIACAAIgBAJIgHAAQgJAAgDAFQgGAFgCAIIAAA4g");
	this.shape_419.setTransform(916.2,499.7);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000000").s().p("AgWAgQgLgMAAgSIAAgCQAAgSAKgMQALgMANAAQAPAAAJAKQAJAKAAAPIAAAHIg6AAIAAACQAAAOAIAKQAHAJALAAQAHAAAIgDQAGgCAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgLgAgPgbQgHAKgBAKIAvAAIAAgBQAAgMgGgHQgGgHgLAAQgJAAgHAHg");
	this.shape_420.setTransform(908.9,499.8);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAFgHAGgEQAFgDAIAAQAQAAAIAMQAIALAAAVIAAABQAAASgIAKQgJAMgPAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgGAEgDAIIAAAmQADAHAGAEQAHAEAHAAQAMAAAGgJQAGgLAAgMIAAgBQAAgQgGgKQgHgLgLAAQgIAAgGAFg");
	this.shape_421.setTransform(900.5,501.3);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AgWAfQgLgMAAgRIAAgCQAAgTALgLQAKgMANAAQAPAAAJAJQAJAKAAARIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgDQAFgCAFgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgOgbQgHAIgCANIAwAAIAAgCQAAgMgHgHQgGgHgLgBQgIABgHAHg");
	this.shape_422.setTransform(891.9,499.8);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQAEgIAFgEQAFgEAIAAIAEAAIACAAIAAAJIgHAAQgKAAgDAFQgGAFgCAIIAAA4g");
	this.shape_423.setTransform(885.7,499.7);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAJgEAQAAIATAAIAAgLQAAgIgGgGQgHgGgJABQgHgBgHAFQgHAGAAAHIgJAAIAAgBQgBgJAKgIQAJgHAMAAQAPAAAIAHQAIAHAAANIAAAwIACAJIgKAAIgBgIIAAgGQgFAGgIAEQgIAFgHAAQgNAAgGgHgAgPAGQgIAFAAAJQAAAGAFAEQAEAFAJAAQAIgBAHgEQAIgFAEgHIAAgSIgTAAQgKABgIAFg");
	this.shape_424.setTransform(874.3,499.8);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AgXAfQgKgMAAgSIAAgCQAAgRAKgMQAKgMAPAAQAOAAAIAIQAJAJAAAMIAAABIgIAAQAAgKgHgGQgIgGgIAAQgMgBgHALQgGAJAAAOIAAACQAAAPAGAKQAGAJANAAQAJAAAHgFQAHgFAAgKIAIAAIAAABQAAAMgJAHQgKAIgMAAQgPAAgKgMg");
	this.shape_425.setTransform(866,499.8);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AgaAfQgKgLAAgTIAAgBQAAgTAKgLQALgMAPAAQAQAAALAMQAKAMAAASIAAABQAAARgKANQgLAMgQAAQgPAAgLgMgAgTgZQgHALAAAOIAAABQAAAPAHAJQAHAKAMAAQAMAAAIgKQAHgJAAgPIAAgBQAAgOgHgLQgIgJgMAAQgMAAgHAJg");
	this.shape_426.setTransform(857.5,499.8);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AgTAqIAAhSIAIAAIACAOIAAABQADgIAGgEQAFgEAIAAIADAAIADAAIgBAJIgHAAQgJAAgDAFQgGAEgCAJIAAA4g");
	this.shape_427.setTransform(851,499.7);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAFgHAGgEQAGgDAHAAQAQAAAIAMQAIALAAAVIAAABQAAASgIAKQgJAMgPAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgGAFgDAHIAAAmQADAHAGAEQAHAEAHAAQAMAAAGgJQAGgKAAgNIAAgBQAAgRgGgJQgGgLgMAAQgIAAgGAFg");
	this.shape_428.setTransform(843.5,501.3);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgMQAJgLAQAAQANAAAKAIQAJAJgBAMIAAABIgIAAQAAgKgHgGQgHgGgJgBQgMAAgGALQgHAJAAAPIAAABQAAAPAHAJQAGAKAMAAQAJAAAHgFQAHgFAAgKIAIAAIAAABQABALgKAIQgJAIgNAAQgQAAgJgMg");
	this.shape_429.setTransform(831.2,499.8);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgRALgMQAKgMANAAQAPAAAJAKQAJAJAAAQIAAAHIg6AAIAAACQAAAOAIAJQAHAKALAAQAHAAAIgDQAFgCAFgFIAEAHQgEAEgIAEQgHADgKAAQgOAAgKgMgAgPgaQgHAJgBAKIAvAAIAAgBQAAgLgGgIQgGgIgLAAQgJABgHAIg");
	this.shape_430.setTransform(823.1,499.8);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#000000").s().p("AgSAqIAAhSIAHAAIACAOIAAABQADgHAGgFQAFgEAIAAIADAAIADAAIgBAJIgHAAQgJAAgDAFQgGAEgCAJIAAA4g");
	this.shape_431.setTransform(816.9,499.7);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgLAKgIQAKgEAPgBIATAAIAAgKQAAgIgGgGQgGgFgKgBQgIAAgGAFQgHAGAAAHIgIAAIAAgBQgBgJAJgIQAKgHALAAQAPAAAHAHQAJAGAAAOIAAAwIACAJIgKAAIgBgOQgEAFgJAFQgHAFgIAAQgNAAgGgGgAgPAGQgIAGAAAHQAAAHAFAEQAEAFAJgBQAIABAIgFQAHgEAEgIIAAgSIgTAAQgKAAgIAGg");
	this.shape_432.setTransform(805.4,499.8);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQAJgFAQAAIATAAIAAgKQAAgJgGgFQgGgFgKAAQgIgBgGAGQgHAFAAAGIgIAAIAAAAQgBgKAJgHQAKgHALAAQAPAAAHAHQAJAHAAANIAAAwIACAIIgKAAIgBgNQgEAFgJAFQgHAFgIAAQgNAAgGgHgAgPAGQgIAFAAAJQAAAGAFAFQAEADAJAAQAIAAAIgEQAHgEAEgIIAAgSIgTAAQgKAAgIAGg");
	this.shape_433.setTransform(789.7,499.8);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgNQAKgLANAAQAQAAAIAKQAJAJAAARIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgDQAFgCAFgEIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgbQgHAKgBALIAwAAIAAgDQAAgKgHgIQgGgHgLAAQgJgBgHAIg");
	this.shape_434.setTransform(777.6,499.8);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#000000").s().p("AgaAfQgKgMAAgTIAAAAQAAgTAKgLQALgMAPAAQAQAAAKAMQALAMAAASIAAAAQAAATgLAMQgKAMgQAAQgPAAgLgMgAgTgZQgHALAAAOIAAAAQAAAQAHAJQAHAKAMAAQANAAAHgKQAHgJAAgQIAAAAQAAgOgHgLQgHgKgNABQgMgBgHAKg");
	this.shape_435.setTransform(765.2,499.8);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAFgHAGgEQAGgDAHAAQAQAAAIAMQAIALAAAVIAAABQAAASgIAKQgJAMgPAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgGAFgDAHIAAAmQADAHAGAEQAHAEAHAAQAMAAAGgJQAGgKAAgNIAAgBQAAgRgGgJQgGgLgMAAQgIAAgGAFg");
	this.shape_436.setTransform(756.5,501.3);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgFgHQgHgHgJAAQgLAAgGAHQgGAHgBALIAAAzIgHAAIAAgvQAAgPgGgHQgGgHgJAAQgJAAgGAGQgGAEgCAJIAAA5IgKAAIAAhSIAIAAIABAOQAFgIAGgDQAGgEAKAAQAJAAAHAEQAFAFACAJQAEgJAHgEQAGgFALAAQANAAAIAJQAHAIAAATIAAAvg");
	this.shape_437.setTransform(744.9,499.7);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000000").s().p("AgWAfQgLgMAAgRIAAgDQAAgRALgMQAKgMANAAQAQAAAIAJQAJALAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgDQAFgCAFgEIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgaQgGAHgCANIAwAAIAAgDQAAgKgHgIQgGgIgLAAQgIAAgIAJg");
	this.shape_438.setTransform(733.8,499.8);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADAEQADADAFAAIAJgBIABAHIgFACIgHAAQgIAAgEgGg");
	this.shape_439.setTransform(727,498.8);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#000000").s().p("AgYAxQgIgLAAgTIAAgBQAAgSAIgMQAJgMAPAAQAIAAAFADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgHAEgGAAQgPAAgJgMgAgRgGQgGAIAAAQIAAABQAAAQAGAJQAGAJALAAQAIAAAHgEQAFgEAEgIIAAglQgEgHgFgFQgGgFgJAAQgKAAgHALg");
	this.shape_440.setTransform(712.3,498);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#000000").s().p("AgZA0QgHgHAAgKQAAgMAKgHQAKgHAPAAIASAAIAAgJQAAgIgFgFQgGgGgKAAQgHAAgHAFQgGAGgBAGIgIAAIAAAAQAAgKAIgHQAJgHAMAAQAPAAAIAHQAIAHAAAMIABAxIABAIIgJAAIgCgHIgBgHQgDAHgJAEQgIAFgHAAQgNAAgGgHgAgPAWQgHAFAAAIQgBAHAFAEQAEAEAJAAQAIAAAHgEQAIgFADgHIAAgSIgSAAQgKAAgIAGgAgCglIgSgVIAMAAIAOAVg");
	this.shape_441.setTransform(699.9,498.2);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAHAAIAAAWIATAAIAAAHIgTAAIAAA1QAAAIADADQAEAEAEAAIAKgBIABAHIgGABIgGABQgJAAgDgGg");
	this.shape_442.setTransform(693,498.8);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#000000").s().p("AgNA5QgHgEgDgHIgBANIgIAAIAAh3IAJAAIAAAyQAEgHAHgEQAGgDAHAAQAQAAAIAMQAIALAAATIAAABQAAAUgIAKQgJAMgPAAQgHAAgHgEgAgOgMQgHAGgCAGIAAAlQADAIAGADQAGAFAIAAQAMAAAGgJQAGgKAAgPIAAgBQAAgQgGgIQgGgLgMAAQgIAAgGAFg");
	this.shape_443.setTransform(675.4,498);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgHQgFgGgLAAQgHAAgGAGQgHAFgCAIIAAA5IgJAAIAAhSIAIAAIAAAPQAFgIAGgEQAGgEAJAAQAOAAAGAIQAIAHAAATIAAAxg");
	this.shape_444.setTransform(662.8,499.7);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgSALgNQAKgLAPAAQAQAAALALQAKAMgBATIAAABQABASgKAMQgKAMgRAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAIAKALAAQAMAAAIgKQAIgKAAgOIAAgBQAAgOgIgKQgIgLgMAAQgLAAgIALg");
	this.shape_445.setTransform(653.9,499.8);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#000000").s().p("AghA6IAAhyIAIAAIABANQAFgHAGgEQAHgDAHAAQAPAAAJAMQAIAMAAAUIAAABQAAARgIALQgJAMgPAAQgHAAgGgEQgGgCgFgHIAAArgAgOgtQgGAEgDAIIAAAmQADAHAGAEQAGAEAIAAQALAAAGgJQAHgKAAgNIAAgBQAAgRgHgJQgGgLgLAAQgIAAgGAFg");
	this.shape_446.setTransform(645.3,501.3);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#000000").s().p("AgWAkQgIgHAAgKIAAgBIAJAAQAAAIAHAFQAHAEAHAAQAKAAAGgEQAGgFAAgGQAAgGgFgEQgEgFgNgCQgNgDgIgEQgHgFAAgLQAAgJAIgHQAIgGAMAAQAPAAAHAHQAIAGAAAMIAAAAIgJAAQAAgGgFgGQgHgGgJAAQgJABgEAEQgGAEAAAGQAAAGAFAEQAEAEALACQAPAEAIAEQAHAGAAAKQAAAJgIAHQgJAHgOAAQgNAAgJgHg");
	this.shape_447.setTransform(636.6,499.8);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#000000").s().p("AgYAxQgIgKAAgUIAAgBQAAgTAIgLQAJgMAPAAQAIAAAFADQAGAEAFAHIAAgyIAJAAIAAB3IgIAAIgBgMQgDAHgIADQgIAEgFAAQgPAAgJgMgAgRgGQgGAHAAARIAAABQAAAQAGAJQAHAJAKAAQAIAAAGgEQAGgEAEgIIAAglQgDgHgGgFQgHgFgIAAQgLAAgGALg");
	this.shape_448.setTransform(624.4,498);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgMAKgHQAJgFAQAAIATAAIAAgKQAAgIgGgGQgGgGgKAAQgIABgGAFQgHAEAAAHIgIAAIAAAAQgBgJAJgIQAKgHALAAQAPAAAHAHQAJAGAAAOIAAAwIACAJIgKAAIgBgOQgEAGgJAFQgHAEgIAAQgNAAgGgGgAgPAGQgIAFAAAJQAAAGAFAFQAEAEAJAAQAIAAAIgFQAHgFAEgHIAAgSIgTAAQgKABgIAFg");
	this.shape_449.setTransform(611.9,499.8);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#000000").s().p("AgZAkQgHgHAAgKQAAgLAKgIQAJgEAQAAIATAAIAAgLQAAgJgGgFQgGgGgKABQgIAAgGAEQgHAFAAAIIgIAAIAAgBQgBgKAJgHQAKgHALAAQAPAAAHAHQAJAHAAANIAAAwIACAIIgKAAIgBgOQgEAGgJAGQgHAEgIAAQgNAAgGgHgAgPAGQgIAGAAAHQAAAHAFAFQAEADAJABQAIAAAIgFQAHgEAEgIIAAgSIgTAAQgKAAgIAGg");
	this.shape_450.setTransform(596.1,499.8);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#000000").s().p("AgGARIAFgUIAAgNIAIAAIAAANIgHAUg");
	this.shape_451.setTransform(586.5,504.2);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgMAKgGQAJgGAQABIATAAIAAgLQAAgJgGgFQgGgFgKAAQgHAAgHAFQgHAEAAAIIgJAAIAAgBQgBgKAKgHQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAwIACAIIgKAAIgBgNQgFAGgIAEQgIAFgHAAQgNAAgHgHgAgQAGQgHAGAAAIQAAAGAFAEQAEAEAJAAQAIABAIgFQAHgFAEgHIAAgRIgTAAQgLAAgIAFg");
	this.shape_452.setTransform(580.7,499.8);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgCQAAgSAJgLQAJgMAQAAQANAAAKAIQAJAIgBAOIAAAAIgIAAQAAgKgHgGQgHgHgJAAQgMAAgGAKQgHAKAAAOIAAACQAAAPAHAJQAGAKAMAAQAJAAAHgFQAHgFAAgKIAIAAIAAABQABALgKAIQgJAIgNAAQgQAAgJgMg");
	this.shape_453.setTransform(572.4,499.8);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#000000").s().p("AgWAjQgIgGAAgKIAAgBIAJAAQAAAIAHAFQAHAEAHAAQAKAAAGgEQAGgFAAgGQAAgGgFgFQgEgDgNgDQgNgDgIgEQgHgGAAgKQAAgJAIgHQAIgGAMAAQAPAAAHAHQAIAGAAALIAAABIgJAAQAAgHgFgFQgHgFgJAAQgIAAgGAEQgFAFAAAFQAAAGAFAEQAEAEALACQAPAEAIADQAHAGAAAKQAAALgIAGQgJAHgOAAQgNAAgJgIg");
	this.shape_454.setTransform(560.6,499.8);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#000000").s().p("AAYA9IAAhSIAKAAIAABSgAgTA9IAAhKIgOAAIAAgIIAOAAIAAgLQAAgNAIgIQAHgHALAAIALACIALADIgCAIIgJgEIgKAAQgIAAgFAEQgEAGAAAJIAAALIARAAIAAAIIgRAAIAABKg");
	this.shape_455.setTransform(551.9,497.8);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgMAKgHQAJgEAQAAIASAAIAAgLQABgIgGgGQgGgFgKgBQgHABgIAEQgGAGAAAHIgJAAIAAgBQAAgJAJgIQAJgHAMAAQAOAAAJAHQAIAHAAANIAAAwIACAJIgKAAIgCgOQgEAGgIAFQgIAEgHAAQgNAAgGgGgAgQAGQgHAGAAAIQAAAGAFAFQAEADAJAAQAIAAAHgEQAIgFADgHIAAgSIgSAAQgLABgIAFg");
	this.shape_456.setTransform(539.9,499.8);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#000000").s().p("AggAqIAAgIIAxhDIgvAAIAAgIIA7AAIAAAHIgxBEIA1AAIAAAIg");
	this.shape_457.setTransform(531.9,499.8);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#000000").s().p("AAXAqIAAgxQAAgOgGgHQgFgGgKAAQgIAAgGAGQgHAFgCAIIAAA5IgKAAIAAhSIAIAAIABAPQAFgIAGgEQAGgEAIAAQAPAAAGAIQAIAHgBATIAAAxg");
	this.shape_458.setTransform(523.5,499.7);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgGQAJgGAQAAIATAAIAAgKQgBgJgFgFQgGgGgKAAQgHAAgIAFQgGAGAAAGIgJAAIAAAAQAAgKAJgHQAJgHAMAAQAOAAAIAHQAJAHAAANIABAwIABAJIgKAAIgBgIIAAgGQgFAGgIAFQgIAEgHAAQgNAAgHgGgAgQAGQgHAGAAAIQAAAGAFAFQAEAEAJAAQAIAAAIgFQAHgFAEgHIAAgRIgTAAQgLAAgIAFg");
	this.shape_459.setTransform(514.7,499.8);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#000000").s().p("AgCAvQgFgGAAgLIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIADADQADAEAFAAIAJgBIABAHIgFACIgHAAQgIAAgEgGg");
	this.shape_460.setTransform(507.8,498.8);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#000000").s().p("AgWAjQgIgHAAgJIAAgBIAJAAQAAAJAHAEQAHAEAHAAQAKAAAGgFQAGgEAAgGQAAgGgFgEQgEgEgNgEQgNgCgIgEQgHgFAAgLQAAgIAIgHQAIgHAMAAQAPAAAHAHQAJAHgBALIAAAAIgJAAQAAgHgFgFQgHgGgJABQgIgBgFAFQgFAFAAAFQAAAGAEAEQAEAEALACQAPAEAIADQAHAGAAALQAAAJgIAHQgIAHgPAAQgNAAgJgIg");
	this.shape_461.setTransform(501.2,499.8);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#000000").s().p("AgYAxQgIgLAAgTIAAgBQAAgSAIgMQAJgMAPAAQAHAAAGADQAGAEAFAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgHAEgGAAQgPAAgJgMgAgRgGQgGAIAAAQIAAABQAAAPAGAKQAHAJAKAAQAIAAAGgEQAHgEADgIIAAglQgDgHgGgFQgGgFgJAAQgKAAgHALg");
	this.shape_462.setTransform(489,498);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgMAKgHQAJgFAQAAIATAAIAAgKQAAgIgHgGQgFgGgKAAQgIAAgGAFQgHAGAAAGIgIAAIAAAAQgCgKAKgHQAJgHAMAAQAOAAAJAHQAHAHAAANIABAwIACAIIgKAAIgBgOQgFAHgIAFQgIAEgIAAQgMAAgHgHgAgQAGQgHAGAAAHQAAAHAEAFQAFADAJAAQAIAAAHgEQAHgFAFgHIAAgSIgTAAQgLAAgIAGg");
	this.shape_463.setTransform(476.5,499.8);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgMAKgHQAJgFAQAAIASAAIAAgKQAAgIgGgGQgFgFgKgBQgIABgGAEQgHAFAAAHIgJAAIAAAAQgBgJAKgIQAJgHAMAAQAOAAAIAHQAIAGABAOIAAAwIACAIIgKAAIgCgNQgEAGgIAFQgIAEgIAAQgMAAgHgHgAgPAGQgIAFAAAJQAAAGAEAEQAFAEAJAAQAIAAAHgEQAIgFADgHIAAgSIgSAAQgKABgIAFg");
	this.shape_464.setTransform(460.8,499.8);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIADAEQACADAFAAIAKgBIABAHIgGACIgGAAQgJAAgDgGg");
	this.shape_465.setTransform(446.4,498.8);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgHQAKgGAPABIASAAIAAgLQABgJgGgFQgGgFgKAAQgHAAgIAFQgGAFAAAHIgIAAIgBgBQAAgKAJgHQAJgHAMAAQAPAAAHAHQAJAHAAANIAAAoIACARIgKAAIgBgIIgBgHQgEAHgHAEQgIAFgIAAQgNAAgGgGgAgPAGQgIAGAAAHQAAAHAFAFQAEAEAJAAQAIAAAHgFQAJgEACgIIAAgRIgSAAQgKAAgIAFg");
	this.shape_466.setTransform(439.5,499.8);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#000000").s().p("AgLA5IgMgDIACgIQAEACAHACIAKABQAMAAAGgHQAGgHAAgNIAAgKQgEAFgHAFQgFADgIAAQgPAAgIgMQgJgKAAgSIAAgBQAAgUAJgMQAIgMAPAAQAIAAAGAEQAGAEAFAHIABgNIAHAAIAABQQAAAQgIAKQgJAJgQAAIgLgCgAgQgoQgHAJAAARIAAABQAAAOAGAJQAHAJAKAAQAIAAAHgEQAHgFACgGIAAglQgDgIgGgFQgGgEgJgBQgKAAgGALg");
	this.shape_467.setTransform(430.7,501.4);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgDQAAgRALgNQAKgLANAAQAPAAAJAJQAJAKAAARIAAAGIg6AAIAAACQAAAOAIAJQAIAKAKAAQAHAAAIgDQAFgCAFgFIAEAHQgEAFgIADQgHADgKAAQgOAAgKgLgAgPgaQgHAIgBAMIAvAAIAAgCQAAgMgGgHQgGgIgLAAQgJAAgHAJg");
	this.shape_468.setTransform(422.4,499.8);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_469.setTransform(409,497.9);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("AgCAwQgFgGAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAHAAIAAAVIATAAIAAAIIgTAAIAAA0QAAAJADADQAEAEAEAAIAKgBIABAHIgGABIgGABQgJAAgDgFg");
	this.shape_470.setTransform(404.5,498.8);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#000000").s().p("AgSAqIAAhSIAHAAIACAOIAAABQADgIAGgEQAFgEAIAAIADAAIAEAAIgCAJIgHAAQgJAAgDAFQgFAEgDAJIAAA4g");
	this.shape_471.setTransform(399.5,499.7);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#000000").s().p("AgaAfQgJgMAAgTIAAAAQAAgSAJgMQALgMAPAAQAQAAALAMQAJALABATIAAAAQgBATgJAMQgKAMgRAAQgPAAgLgMgAgTgZQgHALgBAOIAAAAQABAPAHAKQAIAKALAAQANAAAHgKQAIgKAAgPIAAAAQAAgOgIgLQgHgJgNgBQgLABgIAJg");
	this.shape_472.setTransform(391.9,499.8);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgFgHQgHgHgJAAQgLAAgGAHQgGAHgBALIAAAzIgHAAIAAgvQAAgPgGgHQgGgHgJAAQgJAAgHAGQgFAEgDAJIAAA5IgJAAIAAhSIAIAAIABAOQAFgIAGgDQAGgEAKAAQAKAAAGAEQAFAFACAJQAEgJAHgEQAGgFALAAQAOAAAHAJQAHAIAAATIAAAvg");
	this.shape_473.setTransform(380.4,499.7);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_474.setTransform(367.7,497.9);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#000000").s().p("AghA6IAAhyIAJAAIAAANQAFgHAGgEQAHgDAHAAQAPAAAJAMQAJAMAAAUIAAABQAAARgJALQgJAMgPAAQgHAAgGgEQgGgCgFgHIAAArgAgOgtQgGAEgDAIIAAAmQADAHAGAEQAHAEAHAAQALAAAGgJQAHgKAAgNIAAgBQAAgRgHgJQgGgLgLAAQgIAAgGAFg");
	this.shape_475.setTransform(361.7,501.3);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgFgHgKAAQgLAAgGAHQgGAHgBALIAAAzIgHAAIAAgvQAAgPgGgHQgFgHgKAAQgJAAgHAGQgFAEgDAJIAAA5IgJAAIAAhSIAIAAIABAOQAEgIAHgDQAGgEAKAAQAKAAAGAEQAFAEACAKQAFgJAGgEQAHgFAKAAQANAAAIAJQAHAIAAATIAAAvg");
	this.shape_476.setTransform(350,499.7);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgTALgMQAKgLANAAQAPAAAJAKQAJAJAAAQIAAAHIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgDQAFgCAFgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgOgaQgHAHgCAMIAwAAIAAgBQAAgMgHgHQgGgIgLAAQgIAAgHAJg");
	this.shape_477.setTransform(338.9,499.8);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#000000").s().p("AgCAwQgFgHAAgMIAAg0IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA0QAAAJACADQAEAEAFAAIAJgBIACAHIgHABIgGABQgIAAgEgFg");
	this.shape_478.setTransform(332.1,498.8);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_479.setTransform(323.9,497.9);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#000000").s().p("AgYAxQgIgKAAgUIAAgBQAAgTAIgLQAJgMAPAAQAHAAAGADQAGAEAFAHIAAgyIAJAAIAAB3IgIAAIgBgMQgDAGgIAEQgIAEgFAAQgPAAgJgMgAgRgGQgGAHAAARIAAABQAAAQAGAJQAHAJAKAAQAIAAAGgEQAGgEAEgIIAAglQgDgHgGgFQgHgFgIAAQgLAAgGALg");
	this.shape_480.setTransform(317.5,498);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_481.setTransform(307.6,497.9);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#000000").s().p("AgWAjQgIgGAAgLIAAAAIAJAAQAAAJAHAEQAHAEAHAAQAKAAAGgFQAGgEAAgGQAAgGgFgEQgEgEgNgDQgNgDgIgEQgHgFAAgLQAAgJAIgGQAIgHAMAAQAPAAAHAHQAIAGAAALIAAABIgJAAQAAgHgFgFQgHgFgJgBQgIAAgGAFQgFAFAAAFQAAAHAFADQAEAEALADQAPADAIADQAHAHAAAKQAAAKgIAGQgJAHgOAAQgNAAgJgIg");
	this.shape_482.setTransform(301.7,499.8);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgHAGgFQAFgEAIAAIAEAAIACAAIgBAJIgHAAQgJAAgDAFQgFAEgDAJIAAA4g");
	this.shape_483.setTransform(295.5,499.7);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgMAKgHQAJgEAQgBIATAAIAAgKQAAgIgGgGQgGgGgKAAQgIAAgGAFQgHAGAAAHIgIAAIAAgBQgBgJAJgIQAKgHALAAQAPAAAHAHQAJAGAAAOIAAAwIACAIIgKAAIgBgOQgEAHgJAEQgHAFgIAAQgNAAgGgGgAgPAGQgIAGAAAHQAAAHAFAEQAEAFAJAAQAIAAAIgFQAHgEAEgIIAAgSIgTAAQgKAAgIAGg");
	this.shape_484.setTransform(287.9,499.8);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#000000").s().p("AgTAqIAAhSIAIAAIABAOIAAABQAEgHAGgFQAFgEAIAAIADAAIAEAAIgCAJIgHAAQgJAAgDAFQgFAEgEAJIAAA4g");
	this.shape_485.setTransform(281.6,499.7);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#000000").s().p("AgWAfQgLgMAAgRIAAgDQAAgRALgMQAKgMANAAQAQAAAIAKQAJAKAAAPIAAAHIg5AAIAAACQAAAOAHAJQAIAKAKAAQAIAAAHgDQAFgBAFgGIAEAHQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgbQgGAJgCALIAwAAIAAgCQAAgKgHgIQgGgIgLAAQgIABgIAHg");
	this.shape_486.setTransform(274.3,499.8);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#000000").s().p("AgNA5QgGgDgFgIIAAANIgJAAIAAh3IAKAAIAAAyQAEgHAGgEQAHgDAHAAQAPAAAJAMQAIAMABASIAAABQgBATgIALQgJAMgPAAQgHAAgHgEgAgOgMQgGAGgDAGIAAAlQADAIAGADQAHAFAHAAQAMAAAGgJQAGgJAAgQIAAgBQAAgQgGgIQgHgLgLAAQgIAAgGAFg");
	this.shape_487.setTransform(265.9,498);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_488.setTransform(259.5,497.9);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_489.setTransform(248.4,497.9);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#000000").s().p("AgYAxQgIgKAAgUIAAgBQAAgTAIgLQAJgMAPAAQAHAAAGADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgIAEgFAAQgPAAgJgMgAgRgGQgGAHAAARIAAABQAAAQAGAJQAGAJALAAQAIAAAGgEQAGgEAEgIIAAglQgDgHgGgFQgHgFgIAAQgLAAgGALg");
	this.shape_490.setTransform(242,498);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_491.setTransform(232.1,497.9);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgCQAAgSAJgMQAKgLAOAAQAPAAAIAIQAJAJAAAMIAAABIgIAAQAAgKgHgGQgIgGgJgBQgLAAgHAKQgGALAAANIAAACQAAAOAGALQAHAJALAAQAKAAAHgFQAHgGAAgJIAIAAIAAAAQAAANgJAHQgKAIgNAAQgOAAgKgMg");
	this.shape_492.setTransform(226.2,499.8);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_493.setTransform(220.3,497.9);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#000000").s().p("AgYAxQgIgLAAgTIAAgBQAAgSAIgMQAJgMAPAAQAHAAAGADQAGAEAFAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgIAEgFAAQgPAAgJgMgAgRgGQgGAIAAAQIAAABQAAAQAGAJQAGAJALAAQAIAAAGgEQAHgEADgIIAAglQgDgHgGgFQgHgFgIAAQgLAAgGALg");
	this.shape_494.setTransform(213.9,498);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#000000").s().p("AgWAgQgLgMAAgSIAAgCQAAgTALgMQAKgLANAAQAPAAAJAJQAJAJAAASIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgDAFgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgLgAgOgbQgHAIgCANIAwAAIAAgCQAAgMgHgHQgGgHgLgBQgIABgHAHg");
	this.shape_495.setTransform(205.6,499.8);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgFgHgKAAQgLAAgGAHQgGAHgBALIAAAzIgHAAIAAgvQAAgPgGgHQgFgHgKAAQgJAAgHAGQgFAEgDAJIAAA5IgJAAIAAhSIAIAAIABAOQAEgIAHgDQAGgEAKAAQAKAAAGAEQAFAEACAKQAFgJAGgEQAHgFAKAAQANAAAIAJQAHAIAAATIAAAvg");
	this.shape_496.setTransform(194.4,499.7);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_497.setTransform(181.7,497.9);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgMAKgGQAJgFAQAAIASAAIAAgLQAAgJgGgFQgFgFgKgBQgIABgHAEQgGAGAAAHIgIAAIAAgBQgCgKAKgHQAJgHAMAAQAPAAAHAHQAJAHAAANIAAAwIACAIIgKAAIgCgOQgDAHgJAEQgIAFgIAAQgMAAgHgHgAgQAGQgHAGAAAHQAAAHAFAEQAEAEAIAAQAIAAAJgEQAGgEAEgIIAAgRIgTAAQgJAAgJAFg");
	this.shape_498.setTransform(175.6,499.8);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#000000").s().p("AgWAfQgLgMAAgRIAAgDQAAgRALgNQAKgLANAAQAQAAAIAKQAJAJAAARIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgDAFgEIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgaQgGAHgCANIAwAAIAAgDQAAgKgHgIQgGgIgLAAQgIAAgIAJg");
	this.shape_499.setTransform(163.5,499.8);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIADAEQADADAFAAIAJgBIABAHIgFACIgHAAQgIAAgEgGg");
	this.shape_500.setTransform(156.6,498.8);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg1IgOAAIAAgIIAOAAIAAgVIAHAAIAAAVIATAAIAAAIIgTAAIAAA1QAAAIADAEQAEADAEAAIAKgBIABAHIgGABIgGABQgJAAgDgGg");
	this.shape_501.setTransform(151.4,498.8);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#000000").s().p("AgXAgQgKgMAAgSIAAgDQAAgRAKgMQALgMAMAAQAQAAAJAKQAJAJAAARIAAAGIg6AAIAAACQAAAOAIAKQAHAJALAAQAIAAAGgCQAGgDAFgEIAEAGQgEAFgIADQgHADgKAAQgOAAgLgLgAgPgbQgGAIgCANIAvAAIAAgCQABgMgHgHQgGgHgMgBQgIABgHAHg");
	this.shape_502.setTransform(144.8,499.8);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgFgHgKAAQgLAAgGAHQgGAHgBALIAAAzIgHAAIAAgvQAAgPgGgHQgFgHgKAAQgJAAgHAGQgGAFgCAIIAAA5IgJAAIAAhSIAIAAIABAOQAEgIAHgDQAGgEAKAAQAKAAAGAEQAFAEACAKQAFgJAGgEQAHgFAKAAQANAAAIAJQAHAIAAATIAAAvg");
	this.shape_503.setTransform(133.6,499.7);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#000000").s().p("AgTAqIAAhSIAIAAIACAOIAAABQAEgIAFgEQAFgEAIAAIADAAIADAAIgBAJIgHAAQgJAAgDAFQgGAEgCAJIAAA4g");
	this.shape_504.setTransform(124.4,499.7);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgNQAKgLANAAQAPAAAJAKQAJAKAAAPIAAAHIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgDAFgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgOgbQgHAIgCAMIAwAAIAAgBQAAgMgHgHQgGgHgLAAQgIAAgHAHg");
	this.shape_505.setTransform(117.1,499.8);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#000000").s().p("AggA6IAAhyIAHAAIABANQAFgHAGgEQAHgDAHAAQAPAAAJAMQAIAMAAAUIAAABQAAARgIALQgJAMgPAAQgHAAgGgEQgGgCgFgHIAAArgAgOgtQgGAEgDAIIAAAmQADAHAGAEQAHAEAHAAQALAAAGgJQAHgKAAgNIAAgBQAAgRgHgJQgGgLgLAAQgIAAgGAFg");
	this.shape_506.setTransform(108.7,501.3);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#000000").s().p("AgeAsQgNgNAAgUIAAgVQAAgUAMgNQANgNASgBQAVAAALALQANAKgBAUIgWAAQAAgLgGgGQgFgGgLAAQgIgBgGAJQgGAIAAANIAAAVQAAANAGAIQAHAIAIAAQAKAAAGgFQAFgHAAgLIAWAAIAAABQAAASgLAKQgMALgUABQgSAAgNgOg");
	this.shape_507.setTransform(95.2,498.3);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#000000").s().p("AgeAsQgNgNAAgVIAAgUQAAgUAMgOQANgNASAAQAVAAALALQANALgBASIgWAAQAAgKgGgGQgFgHgLABQgIgBgGAJQgGAIAAANIAAAUQAAANAGAIQAHAJAIAAQAKAAAGgFQAFgHAAgLIAWAAIAAABQAAASgLALQgMAKgUAAQgSAAgNgNg");
	this.shape_508.setTransform(85,498.3);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#000000").s().p("AghAsQgNgNAAgWIAAgSQAAgUANgOQAOgNATAAQAVAAAMANQAOAOAAAUIAAASQAAAWgNANQgOANgUAAQgTAAgOgNgAgRgfQgGAKAAAMIAAASQAAAOAGAJQAHAIAKAAQALAAAGgIQAHgJAAgOIAAgSQAAgNgHgJQgGgIgLAAQgKAAgHAIg");
	this.shape_509.setTransform(74.4,498.3);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#000000").s().p("AAXA4IgshLIAAAAIAABLIgXAAIAAhvIAXAAIArBLIABAAIAAhLIAWAAIAABvg");
	this.shape_510.setTransform(63.4,498.3);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_511.setTransform(744.9,459.8);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_512.setTransform(741.3,459.8);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgMAKgHQAKgFAPAAIASAAIAAgKQABgJgGgFQgHgFgJAAQgIAAgHAFQgGAFAAAHIgIAAIAAgBQgBgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAwQABAFABADIgKAAIgBgHIgBgGQgEAGgIAFQgHAEgJAAQgLAAgHgGgAgQAGQgHAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAHgFQAJgFACgHIAAgRIgSAAQgMAAgHAFg");
	this.shape_513.setTransform(735.2,461.6);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgFgGgKAAQgIAAgGAFQgGAEgDAKIAAA4IgKAAIAAhSIAJAAIABAPQAEgIAGgEQAIgEAHAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_514.setTransform(726.6,461.5);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgSALgMQAKgMAPAAQARAAAJAMQALAMAAASIAAABQAAASgLAMQgJAMgRAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAHAKAMAAQANAAAHgKQAHgJAAgPIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_515.setTransform(717.7,461.6);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_516.setTransform(711.5,459.8);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#000000").s().p("AgfApIAAgGIAwhEIgvAAIAAgHIA6AAIAAAGIgwBEIA0AAIAAAHg");
	this.shape_517.setTransform(706,461.6);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgLAKgIQAKgFAPAAIASAAIAAgKQAAgJgFgFQgHgFgJAAQgIAAgHAFQgGAFAAAHIgJAAIAAgBQAAgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAwIACAIIgKAAIgBgHIgBgGQgEAGgIAFQgIAEgHAAQgLAAgJgGgAgQAGQgHAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAHgFQAJgFACgHIAAgRIgSAAQgLAAgIAFg");
	this.shape_518.setTransform(697.6,461.6);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgGgGgJAAQgIAAgGAFQgGAEgEAKIAAA4IgIAAIAAhSIAHAAIABAPQAEgIAIgEQAGgEAIAAQANAAAHAIQAHAJAAARIAAAxg");
	this.shape_519.setTransform(689,461.5);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgIQALgFAOAAIASAAIAAgKQAAgJgFgFQgHgFgJAAQgIAAgHAFQgGAFAAAHIgIAAIgBgBQABgKAIgHQAJgHAMAAQAOAAAJAHQAIAHAAANIAAAwIACAIIgKAAIgBgHIgBgGQgEAGgHAFQgJAEgHAAQgMAAgHgGgAgPAGQgIAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAHgFQAJgFACgHIAAgRIgSAAQgLAAgHAFg");
	this.shape_520.setTransform(676.3,461.6);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#000000").s().p("AgXAxQgJgKAAgUIAAgBQAAgSAJgMQAHgNAQAAQAGAAAHAEQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgGADQgIAEgGAAQgPAAgIgMgAgRgGQgGAHAAARIAAABQAAAQAGAJQAGAJALAAQAIAAAGgEQAGgEAEgIIAAglQgDgIgGgEQgGgEgJgBQgLABgGAKg");
	this.shape_521.setTransform(667.6,459.9);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_522.setTransform(661.5,459.8);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#000000").s().p("AgXAiQgIgJAAgUIAAgvIAKAAIAAAvQAAAQAFAGQAFAHAKABQAIAAAHgGQAGgEACgJIAAg6IAKAAIAABSIgJAAIAAgNQgDAGgIAFQgHAFgHAAQgOgBgHgIg");
	this.shape_523.setTransform(655.3,461.7);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#000000").s().p("AgMA6QgFgBgHgDIADgIIAKAEIALABQALAAAHgHQAGgHAAgNIAAgKQgDAFgIAFQgIADgFAAQgPAAgJgLQgIgLAAgRIAAgCQAAgUAIgMQAIgMAQAAQAHAAAGAEQAGADAFAIIABgOIAIAAIAABRQAAARgJAJQgJAJgPAAIgMgBgAgRgoQgGALAAAPIAAACQAAANAGAJQAGAJALAAQAJAAAGgEQAFgEAEgHIAAglQgDgIgGgEQgFgFgKAAQgLAAgGAKg");
	this.shape_524.setTransform(646.3,463.2);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgGAGgGACQgHADgKAAQgOAAgKgMgAgPgaQgHAIgBALIAAABIAwAAIAAgDQAAgKgHgIQgGgHgLAAQgIAAgIAIg");
	this.shape_525.setTransform(634.1,461.6);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAJAAARIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgFAGgHACQgHADgKAAQgOAAgKgMgAgOgaQgHAHgCAMIABABIAvAAIAAgDQAAgLgHgHQgGgHgLAAQgJAAgGAIg");
	this.shape_526.setTransform(625.9,461.6);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgGgGgJAAQgIAAgHAFQgFAEgEAKIAAA4IgIAAIAAhSIAHAAIABAPQAEgIAHgEQAHgEAIAAQANAAAIAIQAGAJABARIAAAxg");
	this.shape_527.setTransform(617.4,461.5);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_528.setTransform(611.2,459.8);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_529.setTransform(607.6,459.8);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#000000").s().p("AgXAfQgKgLAAgSIAAgCQAAgSAKgMQALgMAMAAQAQAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAJAKAAQAIAAAGgCQAGgCAFgFIAEAGQgGAGgGACQgGADgLAAQgOAAgLgMgAgPgaQgGAHgCAMIAAABIAvAAIAAgDQABgLgHgHQgGgHgMAAQgIAAgHAIg");
	this.shape_530.setTransform(597.9,461.6);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_531.setTransform(591.9,459.8);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_532.setTransform(588.3,459.8);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#000000").s().p("AgXAhQgIgIAAgUIAAgvIAKAAIAAAvQAAAQAFAGQAFAIAKgBQAJABAFgGQAHgEACgJIAAg6IAKAAIAABSIgJAAIAAgNQgEAHgHAEQgHAEgHAAQgOAAgHgJg");
	this.shape_533.setTransform(582.1,461.7);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#000000").s().p("AgGARIAGgUIAAgNIAHAAIAAAOIgHATg");
	this.shape_534.setTransform(564,466.1);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgHQAKgFAPAAIASAAIAAgKQAAgJgGgFQgGgFgJAAQgJAAgGAFQgGAFAAAHIgJAAIAAgBQAAgJAJgIQAJgHAMAAQANAAAJAHQAIAHAAANIABAwIACAIIgKAAIgCgNQgEAGgIAFQgIAEgHAAQgMAAgIgGgAgPAGQgIAGAAAHQAAAHAFAFQAFAEAHAAQAJAAAHgFQAHgFAEgHIAAgRIgSAAQgMAAgGAFg");
	this.shape_535.setTransform(558.3,461.6);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgLQAJgMAQAAQANAAAKAIQAJAJgBAMIAAABIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAJQgHAKAAAPIAAABQAAAPAHAKQAGAJAMAAQAJAAAHgFQAHgFAAgKIAIAAIAAABQABALgKAIQgKAIgMAAQgQAAgJgMg");
	this.shape_536.setTransform(550,461.6);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_537.setTransform(544.1,459.8);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQAEgIAFgEQAFgEAJAAIAFABIgBAIIgHAAQgIAAgEAFQgGAGgCAHIAAA4g");
	this.shape_538.setTransform(540.1,461.5);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgIQALgFAOAAIATAAIAAgKQgBgJgFgFQgHgFgJAAQgIAAgHAFQgGAFABAHIgJAAIgBgBQAAgKAJgHQAJgHAMAAQAOAAAJAHQAIAHAAANIAAAwIACAIIgKAAIgBgHIAAgGQgFAGgIAFQgIAEgHAAQgMAAgHgGgAgPAGQgIAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAIgFQAHgFAEgHIAAgRIgTAAQgLAAgHAFg");
	this.shape_539.setTransform(532.5,461.6);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#000000").s().p("AgXAfQgJgMAAgSIAAgBQAAgSAJgMQAKgMAOAAQAOAAAJAIQAJAJAAAMIAAABIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAJQgGALAAAOIAAABQAAAOAGALQAHAJALAAQAJAAAIgFQAHgGAAgJIAIAAIAAABQAAALgJAIQgLAIgMAAQgOAAgKgMg");
	this.shape_540.setTransform(524.3,461.6);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgIAAgHAFQgGAFgCAJIAAA4IgKAAIAAhSIAJAAIABAPQAEgIAGgEQAHgEAIAAQANAAAHAIQAHAIAAASIAAAxg");
	this.shape_541.setTransform(511.9,461.5);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_542.setTransform(505.6,459.8);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#000000").s().p("AgaAfQgKgLAAgTIAAgBQAAgTAKgLQALgMAPAAQAQAAAKAMQALAMAAASIAAABQAAASgLAMQgKAMgQAAQgPAAgLgMgAgTgYQgIAKAAAOIAAABQAAAPAIAJQAIAKALAAQAMAAAIgKQAHgJAAgPIAAgBQAAgOgHgKQgIgKgMAAQgLAAgIAKg");
	this.shape_543.setTransform(495.6,461.6);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAJAAARIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgFAGgHACQgHADgKAAQgOAAgKgMgAgOgaQgHAHgCAMIABABIAvAAIAAgDQAAgLgHgHQgGgHgLAAQgJAAgGAIg");
	this.shape_544.setTransform(479,461.6);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQAEgIAFgEQAFgEAIAAIAHABIgCAIIgHAAQgIAAgEAFQgGAGgCAHIAAA4g");
	this.shape_545.setTransform(472.8,461.5);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#000000").s().p("AggA6IAAhyIAHAAIABANQAFgHAGgDQAIgEAGAAQAPAAAJAMQAIANAAATIAAACQAAAQgIAMQgJALgPAAQgFAAgIgDQgHgEgEgGIAAArgAgOgtQgGAEgDAIIAAAmQADAIAGADQAGAEAIAAQALAAAHgJQAGgJAAgNIAAgCQAAgRgGgKQgGgKgMABQgIAAgGAEg");
	this.shape_546.setTransform(465.4,463.2);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgGgGgKAAQgHAAgHAFQgFAEgEAKIAAA4IgIAAIAAhSIAHAAIABAPQAEgIAHgEQAHgEAIAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_547.setTransform(443.7,461.5);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgLAAQgHAAgGAFQgGAFgDAJIAAA4IgKAAIAAhSIAIAAIABAPQAFgIAGgEQAHgEAHAAQAOAAAHAIQAIAJAAARIAAAxg");
	this.shape_548.setTransform(434.8,461.5);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgHQAKgFAPAAIATAAIAAgKQgBgJgFgFQgGgFgKAAQgIAAgGAFQgHAFAAAHIgIAAIAAgBQgBgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIABAwQgBAFACADIgKAAIgBgNQgFAGgIAFQgHAEgJAAQgLAAgIgGgAgQAGQgHAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAIgFQAHgFAEgHIAAgRIgTAAQgLAAgIAFg");
	this.shape_549.setTransform(426,461.6);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#000000").s().p("AAWA8IAAg0QAAgMgFgGQgFgGgKAAQgHABgHAFQgGAFgDAGIAAA7IgKAAIAAh3IAKAAIAAAzQAFgIAGgDQAHgFAHABQANgBAIAJQAHAIAAAQIAAAzg");
	this.shape_550.setTransform(417.4,459.8);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#000000").s().p("AgaAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQARAAAJAMQALALgBATIAAABQABATgLALQgJAMgRAAQgPAAgLgMgAgTgYQgHALAAANIAAABQAAAOAHAKQAHAKAMAAQAMAAAIgKQAHgJAAgPIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_551.setTransform(404.7,461.6);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_552.setTransform(398.5,459.8);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgFAGgHACQgHADgKAAQgOAAgKgMgAgOgaQgHAHgCAMIABABIAvAAIAAgDQAAgLgHgHQgGgHgLAAQgJAAgGAIg");
	this.shape_553.setTransform(388.8,461.6);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#000000").s().p("AAWA8IAAg0QAAgMgFgFQgGgHgJAAQgHAAgHAGQgHAFgDAGIAAA7IgJAAIAAh3IAJAAIAAAzQAGgHAGgEQAHgEAHgBQANAAAHAJQAIAIAAAPIAAA0g");
	this.shape_554.setTransform(380.3,459.8);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#000000").s().p("AgXAfQgJgMAAgSIAAgBQAAgSAJgMQAKgMAOAAQAOAAAJAIQAJAJAAAMIAAABIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAJQgGALAAAOIAAABQAAAOAGALQAHAJALAAQAJAAAIgFQAHgGAAgJIAIAAIAAABQAAALgJAIQgLAIgMAAQgOAAgKgMg");
	this.shape_555.setTransform(371.7,461.6);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_556.setTransform(361.9,459.8);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#000000").s().p("AgXAfQgJgMAAgSIAAgBQAAgSAJgMQAKgMAOAAQAOAAAJAIQAJAJAAAMIAAABIgIAAQAAgLgHgFQgHgGgKAAQgLAAgHAJQgGALAAAOIAAABQAAAOAGALQAHAJALAAQAKAAAHgFQAHgGAAgJIAIAAIAAABQAAALgJAIQgLAIgMAAQgOAAgKgMg");
	this.shape_557.setTransform(356,461.6);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_558.setTransform(350.1,459.8);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAIgMAQgBQAGAAAHAEQAGAEAFAHIAAgyIAJAAIAAB3IgIAAIgBgMQgFAIgGACQgHAEgGAAQgPAAgJgLgAgRgHQgGAJAAAQIAAACQAAAPAGAJQAGAJALAAQAIAAAGgEQAHgFADgHIAAglQgDgIgGgEQgGgFgJAAQgLAAgGAKg");
	this.shape_559.setTransform(343.7,459.9);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#000000").s().p("AgXAfQgKgLAAgSIAAgCQAAgSAKgMQALgMAMAAQAQAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAGgCQAGgCAFgFIAEAGQgGAGgGACQgHADgKAAQgOAAgLgMgAgPgaQgHAHgBAMIAAABIAwAAIAAgDQgBgLgGgHQgGgHgMAAQgIAAgHAIg");
	this.shape_560.setTransform(335.4,461.6);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgFgGgKAAQgLAAgGAHQgGAHgBAKIAAAzIgHAAIAAgvQAAgPgGgHQgFgGgKAAQgJAAgHAFQgGAGgCAHIAAA5IgJAAIAAhSIAIAAIABAOQAEgGAHgFQAHgEAJAAQAKAAAGAFQAFAEACAKQAEgJAHgFQAIgFAJAAQANAAAIAJQAHAJAAASIAAAvg");
	this.shape_561.setTransform(324.2,461.5);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_562.setTransform(311.5,459.8);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#000000").s().p("AgXAiQgIgJAAgUIAAguIAKAAIAAAuQAAAPAFAIQAFAGAKAAQAIABAHgGQAGgEACgJIAAg5IAKAAIAABRIgIAAIgBgNQgDAHgIAEQgHAEgHABQgOAAgHgJg");
	this.shape_563.setTransform(305.3,461.7);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#000000").s().p("AgWAkQgIgIAAgKIAAAAIAJAAQABAJAGAEQAHAEAHAAQAKAAAGgEQAGgFAAgGQAAgGgFgEQgEgFgNgCQgPgDgFgEQgIgFAAgKQAAgKAJgGQAIgHALAAQAOAAAIAHQAJAIgBAKIgIAAQAAgHgGgFQgHgFgJAAQgIAAgFAEQgFAFAAAFQAAAGAEAEQAEAEAMADQAOADAIAEQAHAGAAAKQAAAKgIAHQgJAGgOAAQgNAAgJgHg");
	this.shape_564.setTransform(296.8,461.6);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#000000").s().p("AgGARIAFgUIAAgNIAIAAIAAAOIgHATg");
	this.shape_565.setTransform(287.3,466.1);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#000000").s().p("AgaAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQARAAAJAMQALALAAATIAAABQAAATgLALQgJAMgRAAQgPAAgLgMgAgTgYQgHALAAANIAAABQAAAOAHAKQAIAKALAAQAMAAAIgKQAHgJAAgPIAAgBQAAgOgHgKQgIgKgMAAQgLAAgIAKg");
	this.shape_566.setTransform(281.5,461.6);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#000000").s().p("AgCAvQgFgGAAgMIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADADQADAEAFgBIAJAAIABAGQgCACgDAAIgHABQgIAAgEgGg");
	this.shape_567.setTransform(274.5,460.7);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMAMAAQAQAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAJAKAAQAIAAAGgCQAGgCAFgFIAEAGQgGAGgGACQgIADgJAAQgOAAgKgMgAgPgaQgHAHgBAMIABABIAvAAIAAgDQAAgLgHgHQgGgHgMAAQgIAAgHAIg");
	this.shape_568.setTransform(259.1,461.6);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgFgGgKAAQgLAAgGAHQgFAGgCALIAAAzIgHAAIAAgvQAAgPgGgHQgFgGgKAAQgJAAgHAFQgGAGgCAHIAAA5IgJAAIAAhSIAIAAIABAOQAEgGAHgFQAHgEAJAAQAKAAAGAFQAFAEACAKQAEgJAHgFQAIgFAJAAQANAAAIAJQAHAJAAASIAAAvg");
	this.shape_569.setTransform(247.9,461.5);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgLAKgIQAKgFAPAAIATAAIAAgKQAAgJgGgFQgGgFgKAAQgIAAgHAFQgGAFAAAHIgIAAIAAgBQgBgJAJgIQAJgHAMAAQAPAAAHAHQAJAHAAANIABAwQgBAFACADIgKAAIgBgHIAAgGQgFAGgIAFQgIAEgHAAQgLAAgJgGgAgQAGQgHAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAHgFQAIgFAEgHIAAgRIgTAAQgLAAgIAFg");
	this.shape_570.setTransform(236.5,461.6);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#000000").s().p("AgCAvQgFgGAAgMIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADADQADADAFABIAJgBIABAHQgCABgDAAIgHABQgIAAgEgGg");
	this.shape_571.setTransform(229.6,460.7);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIADADQADADAFAAIAJAAIABAHQgCABgDAAIgHABQgJAAgDgGg");
	this.shape_572.setTransform(224.3,460.7);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgIQALgFAOAAIATAAIAAgKQAAgJgGgFQgGgFgKAAQgIAAgGAFQgHAFABAHIgJAAIgBgBQAAgKAJgHQAKgHALAAQAOAAAJAHQAIAHAAANIAAAwIACAIIgKAAIgBgHIAAgGQgFAGgIAFQgIAEgHAAQgMAAgHgGgAgPAGQgIAGAAAHQAAAHAFAFQAFAEAIAAQAIAAAIgFQAHgEAEgIIAAgRIgTAAQgLAAgHAFg");
	this.shape_573.setTransform(217.4,461.6);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgHAGgFQAFgEAIAAIAGABIgBAIIgHAAQgIAAgEAFQgGAGgCAHIAAA4g");
	this.shape_574.setTransform(211,461.5);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg1IgOAAIAAgIIAOAAIAAgVIAHAAIAAAVIATAAIAAAIIgTAAIAAA1QAAAIADADQADADAFAAIAKAAIABAHQgCABgEAAIgGABQgJAAgDgGg");
	this.shape_575.setTransform(205.1,460.7);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_576.setTransform(196.9,459.8);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_577.setTransform(193.3,459.8);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgSALgMQAKgMAPAAQARAAAJAMQALAMAAASIAAABQAAASgLAMQgJAMgRAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAHAKAMAAQANAAAHgKQAHgJAAgPIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_578.setTransform(183.2,461.6);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgLAAQgHAAgHAFQgFAFgDAJIAAA4IgKAAIAAhSIAIAAIABAPQAEgIAHgEQAHgEAHAAQAOAAAHAIQAHAJABARIAAAxg");
	this.shape_579.setTransform(174.4,461.5);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgHQAKgFAPAAIASAAIAAgKQAAgJgGgFQgFgFgKAAQgJAAgGAFQgGAFAAAHIgJAAIAAgBQAAgJAJgIQAJgHAMAAQANAAAJAHQAJAHgBANIABAwIACAIIgKAAIgCgNQgEAGgIAFQgIAEgIAAQgLAAgIgGgAgQAGQgHAGAAAHQAAAHAEAFQAGAEAHAAQAJAAAIgFQAGgFAEgHIAAgRIgSAAQgMAAgHAFg");
	this.shape_580.setTransform(165.6,461.6);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#000000").s().p("AgMA6IgLgEIACgIIAKAEIALABQAMAAAGgHQAGgHAAgNIAAgKQgEAGgHAEQgIADgFAAQgPAAgJgLQgIgMAAgQIAAgCQAAgTAIgNQAIgMAQAAQAHAAAHAEQAFADAFAIIABgOIAIAAIAABRQAAARgJAJQgJAJgPAAIgMgBgAgRgoQgGAKAAAQIAAACQAAANAGAJQAGAJALAAQAJAAAGgEQAFgEAEgHIAAglQgDgHgGgFQgFgFgKAAQgLAAgGAKg");
	this.shape_581.setTransform(156.8,463.2);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#000000").s().p("AgZAfQgKgMAAgSIAAgBQAAgSAKgMQAKgMAPAAQARAAAJAMQAKALABATIAAABQgBATgKALQgJAMgRAAQgPAAgKgMgAgTgYQgHALAAANIAAABQAAAOAHAKQAHAKAMAAQAMAAAIgKQAHgJAAgPIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_582.setTransform(148.1,461.6);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQAEgIAFgEQAFgEAJAAIAGABIgCAIIgHAAQgIAAgEAFQgGAGgCAHIAAA4g");
	this.shape_583.setTransform(141.7,461.5);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#000000").s().p("AgXAfQgKgLAAgSIAAgCQAAgTAKgLQALgMAMAAQAQAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAJAKAAQAIAAAGgCQAHgCAEgFIAEAGQgGAGgGACQgHADgKAAQgOAAgLgMgAgPgaQgHAIgBALIAAABIAvAAIAAgDQAAgLgGgHQgGgHgMAAQgIAAgHAIg");
	this.shape_584.setTransform(134.4,461.6);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSAKgMQALgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAJAKAAQAHAAAIgCQAGgDAEgEIAEAGQgGAGgGACQgHADgKAAQgOAAgKgMgAgPgaQgHAIgBALIAAABIAvAAIAAgDQAAgLgGgHQgGgHgLAAQgJAAgHAIg");
	this.shape_585.setTransform(122.4,461.6);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#000000").s().p("AAWA8IAAg0QAAgLgFgHQgFgFgKgBQgHAAgHAGQgGAFgDAGIAAA7IgKAAIAAh3IAKAAIAAA0QADgIAIgEQAHgFAHAAQANAAAHAJQAIAIAAAPIAAA0g");
	this.shape_586.setTransform(113.8,459.8);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgLQAJgMAQAAQANAAAKAIQAJAJgBAMIAAABIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAJQgHAKAAAPIAAABQAAAPAHAKQAGAJAMAAQAJAAAHgFQAHgFAAgKIAIAAIAAABQABALgKAIQgKAIgMAAQgQAAgJgMg");
	this.shape_587.setTransform(105.3,461.6);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_588.setTransform(95.5,459.8);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQAEgIAFgEQAEgEAJAAIAGABIgBAIIgHAAQgIAAgEAFQgGAFgCAIIAAA4g");
	this.shape_589.setTransform(91.5,461.5);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADADQADAEAFgBIAJAAIABAGQgCACgDAAIgHABQgJAAgDgGg");
	this.shape_590.setTransform(85.6,460.7);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#000000").s().p("AAWAqIAAgxQABgOgGgGQgFgGgLAAQgHAAgHAFQgFAFgDAJIAAA4IgKAAIAAhSIAJAAIABAPQADgIAHgEQAHgEAHAAQAOAAAHAIQAIAJAAARIAAAxg");
	this.shape_591.setTransform(78.6,461.5);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgGAGgGACQgHADgKAAQgOAAgKgMgAgPgaQgGAHgCAMIAAABIAwAAIAAgDQAAgKgHgIQgGgHgLAAQgIAAgIAIg");
	this.shape_592.setTransform(70.1,461.6);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgSAJgMQAKgMAPAAQANAAAKAIQAJAJgBAMIAAABIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAJQgHAKAAAPIAAABQAAAPAHAKQAGAJAMAAQAJAAAHgFQAHgFAAgKIAIAAIAAABQABALgKAIQgKAIgMAAQgQAAgJgMg");
	this.shape_593.setTransform(61.9,461.6);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_594.setTransform(956.8,440.7);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#000000").s().p("AgXAhQgIgJABgSIAAgvIAJAAIAAAvQgBAPAGAHQAFAHAKAAQAIAAAHgFQAFgFAEgIIAAg6IAIAAIAABSIgIAAIAAgOQgEAIgIADQgFAEgJAAQgNAAgHgJg");
	this.shape_595.setTransform(950.6,442.6);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#000000").s().p("AgVAkQgJgHAAgKIAAgBIAJAAQABAKAGADQAHAFAIAAQAKAAAFgFQAGgEAAgHQAAgFgFgFQgEgFgNgDQgNgCgHgEQgHgFAAgKQAAgKAIgGQAIgHALAAQAOAAAJAHQAIAIgBAKIAAAAIgIAAQAAgGgGgGQgGgFgKAAQgIAAgFAFQgFAEAAAGQAAAGAEADQAFAEALADQAPADAHAEQAHAGAAAKQAAALgIAGQgIAGgOAAQgPAAgHgHg");
	this.shape_596.setTransform(942.1,442.6);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#000000").s().p("AgZAgQgLgMAAgTIAAgBQAAgSALgMQAKgMAPAAQARAAAJAMQALAMAAASIAAABQAAATgLAMQgJALgRAAQgQAAgJgLgAgTgYQgHAKAAAOIAAABQAAAPAHAKQAHAJAMAAQANAAAHgJQAHgKAAgPIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_597.setTransform(926.8,442.6);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#000000").s().p("AgWAkQgIgHAAgLIAAAAIAJAAQABAJAGAEQAHAFAHgBQAKABAGgFQAGgEAAgHQAAgFgFgFQgFgFgMgCQgNgDgIgEQgHgFAAgKQAAgKAIgGQAJgHALAAQAOAAAIAHQAIAHAAAKIAAABIgJAAQAAgGgFgGQgGgFgKAAQgJAAgEAFQgGAEAAAGQAAAGAFADQAFAEAKADQAPADAIAEQAHAGAAAJQAAAMgIAFQgIAHgPAAQgNAAgJgHg");
	this.shape_598.setTransform(918.3,442.6);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgLAKgHQAKgFAPAAIASAAIAAgKQAAgKgFgFQgGgFgKAAQgJAAgFAFQgHAEAAAIIgIAAIAAAAQgBgKAJgHQAJgIAMAAQANAAAJAHQAJAHAAAOIAAAwIACAHIgKAAIgCgNQgEAGgIAFQgHAEgJAAQgMAAgHgHgAgQAGQgHAGAAAHQAAAIAEAEQAGAEAHAAQAJAAAIgEQAGgGAEgGIAAgSIgSAAQgMAAgHAFg");
	this.shape_599.setTransform(909.9,442.6);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#000000").s().p("AgXAgQgJgMAAgSIAAgCQAAgTAJgLQAJgMAQAAQANAAAKAJQAJAHgBANIAAABIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAJQgHAKAAAPIAAABQAAAQAHAJQAGAJAMABQAJAAAHgGQAHgFAAgJIAIAAIAAAAQABALgKAJQgJAHgNAAQgQAAgJgLg");
	this.shape_600.setTransform(901.6,442.6);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgSALgMQAKgMAPAAQARAAAJAMQALAMAAASIAAABQAAASgLAMQgJAMgRAAQgQAAgJgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAHALAMgBQAMABAIgLQAHgJAAgPIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_601.setTransform(889.2,442.6);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_602.setTransform(883,440.7);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQAEgIAFgEQAFgEAJAAIAGABIgCAIIgHAAQgHAAgFAFQgGAGgCAHIAAA4g");
	this.shape_603.setTransform(879,442.5);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#000000").s().p("AggA7IAAhzIAHAAIABANQAFgHAGgEQAHgDAHAAQAPAAAJALQAIANABAUIAAABQgBARgIAMQgJAKgPABQgGAAgHgDQgGgEgFgGIAAAsgAgOgtQgGAFgDAGIAAAnQADAGAGAFQAHAEAHAAQALAAAGgKQAHgIAAgOIAAgBQAAgRgHgJQgGgKgLAAQgJgBgFAFg");
	this.shape_604.setTransform(871.6,444.1);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgSALgMQAKgMAPAAQARAAAJAMQALAMAAASIAAABQAAASgKAMQgKAMgRAAQgQAAgJgMgAgTgYQgHAKAAAOIAAABQAAAPAHAKQAIAKALgBQANABAHgKQAHgKAAgPIAAgBQAAgOgHgKQgHgKgNAAQgLAAgIAKg");
	this.shape_605.setTransform(862.5,442.6);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQADgHAGgFQAEgEAJAAIAGABIgBAIIgHAAQgIAAgEAFQgGAFgCAIIAAA4g");
	this.shape_606.setTransform(856.1,442.5);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQADgGAHgEQAHgFAHABQAQAAAIALQAIANAAAUIAAACQAAAQgIALQgIALgQAAQgGAAgHgCQgHgEgEgGIAAArgAgOgtQgGAFgDAHIAAAmQADAHAGAEQAHAEAHAAQALAAAHgJQAGgKAAgMIAAgDQAAgPgGgKQgHgLgLAAQgIAAgGAFg");
	this.shape_607.setTransform(848.6,444.1);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_608.setTransform(838.4,440.7);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#000000").s().p("AgXAhQgIgJAAgSIAAgvIAKAAIAAAvQAAAPAFAHQAFAHAKAAQAHAAAIgFQAGgFACgIIAAg6IAKAAIAABSIgJAAIAAgOQgFAIgGADQgGAEgIAAQgOAAgHgJg");
	this.shape_609.setTransform(832.1,442.6);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#000000").s().p("AgWAkQgIgIAAgKIAAAAIAJAAQABAKAGADQAHAEAHAAQAKAAAGgEQAGgEAAgHQAAgFgFgFQgFgFgMgDQgNgCgHgEQgIgFAAgKQAAgKAIgGQAJgHALAAQAOAAAIAHQAJAIgBAKIAAAAIgIAAQAAgGgGgGQgGgFgKAAQgIAAgFAEQgFAFAAAGQAAAFAEAEQAFAEAKADQAPADAIAEQAHAGAAAKQAAALgIAFQgIAHgPAAQgNAAgJgHg");
	this.shape_610.setTransform(823.6,442.6);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_611.setTransform(814,440.7);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgLAAQgGAAgIAFQgGAFgCAJIAAA4IgJAAIAAhSIAHAAIABAPQAFgIAGgEQAIgEAHAAQANAAAHAIQAHAJAAARIAAAxg");
	this.shape_612.setTransform(807.8,442.5);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#000000").s().p("AgZAfQgLgMABgSIAAgBQgBgSALgMQAKgMAPAAQAQAAALAMQAJAMAAASIAAABQAAASgJAMQgKAMgRAAQgPAAgKgMgAgTgYQgHAKgBAOIAAABQABAPAHAKQAHAJAMABQANgBAHgJQAIgKAAgPIAAgBQAAgOgIgKQgHgKgNAAQgMAAgHAKg");
	this.shape_613.setTransform(798.9,442.6);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_614.setTransform(792.7,440.7);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#000000").s().p("AgfAqIAAgIIAwhCIgvAAIAAgJIA7AAIAAAIIgxBCIA0AAIAAAJg");
	this.shape_615.setTransform(787.1,442.6);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#000000").s().p("AgZAkQgHgFAAgMQAAgLAKgIQAKgFAPAAIATAAIAAgKQAAgJgGgFQgFgFgLAAQgJAAgFAFQgHAEAAAIIgIAAIAAAAQgBgKAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAxIACAHIgKAAIgBgNQgEAGgJAFQgGAEgJAAQgNAAgGgHgAgPAGQgIAGAAAHQAAAIAFADQAFAFAIAAQAIAAAIgFQAHgFAEgHIAAgRIgTAAQgLAAgHAFg");
	this.shape_616.setTransform(778.7,442.6);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#000000").s().p("AAwAqIAAgvQABgQgGgGQgFgGgKAAQgLAAgGAHQgGAHgBAKIAAAzIgIAAIAAgvQAAgQgFgGQgFgGgKAAQgKAAgGAFQgGAFgCAIIAAA5IgJAAIAAhSIAIAAIABAOQADgGAIgFQAGgEAJAAQAKAAAHAFQAFAEACAKQADgJAIgFQAHgFAKAAQAOAAAGAJQAIAJAAASIAAAvg");
	this.shape_617.setTransform(767.6,442.5);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQAEgIAFgEQAFgEAIAAIAHABIgCAIIgHAAQgIAAgEAFQgGAGgCAHIAAA4g");
	this.shape_618.setTransform(758.3,442.5);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#000000").s().p("AgZAfQgLgMAAgSIAAgBQAAgSALgMQAKgMAPAAQARAAAJAMQALAMAAASIAAABQAAASgLAMQgJAMgRAAQgQAAgJgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAHALAMAAQAMAAAIgLQAHgJAAgPIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_619.setTransform(750.7,442.6);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#000000").s().p("AgJA9IAAhKIgOAAIAAgIIAOAAIAAgMQAAgNAGgHQAFgHALAAIALACIgBAHIgJgBQgHAAgFAFQgCAFAAAJIAAAMIASAAIAAAIIgSAAIAABKg");
	this.shape_620.setTransform(744,440.6);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgIAAgGAFQgGAFgDAJIAAA4IgKAAIAAhSIAJAAIABAPQAEgIAGgEQAIgEAHAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_621.setTransform(736.6,442.5);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_622.setTransform(730.4,440.7);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#000000").s().p("AgWAgQgLgLAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAPAHAJQAIAKAKAAQAIAAAHgDQAFgCAFgFIAEAHQgFAFgHACQgIADgJAAQgOAAgKgLgAgOgaQgHAHgCANIABAAIAvAAIAAgCQAAgLgHgIQgGgHgLAAQgJAAgGAIg");
	this.shape_623.setTransform(720.7,442.6);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_624.setTransform(714.8,440.7);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAPAHAJQAIAKAKAAQAIgBAHgCQAFgCAFgFIAEAGQgFAGgHADQgIACgJAAQgOAAgKgMgAgOgaQgHAHgCAMIABABIAvAAIAAgCQAAgMgHgHQgGgHgLAAQgJAAgGAIg");
	this.shape_625.setTransform(705,442.6);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg0IgOAAIAAgJIAOAAIAAgVIAIAAIAAAVIASAAIAAAJIgSAAIAAA0QAAAJADACQADAEAFAAIAEAAIAFgBIABAHQgCABgDABIgHAAQgJAAgDgGg");
	this.shape_626.setTransform(698.2,441.6);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#000000").s().p("AgCAwQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgWIAIAAIAAAWIASAAIAAAIIgSAAIAAA0QAAAJADACQADAEAFAAIAEAAIAFgBIABAHQgCACgDAAIgHAAQgKAAgCgFg");
	this.shape_627.setTransform(692.9,441.6);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#000000").s().p("AgXAhQgIgJAAgSIAAgvIAKAAIAAAvQAAAPAFAHQAFAHAKAAQAHAAAIgFQAGgFACgIIAAg6IAKAAIAABSIgJAAIAAgOQgFAIgGADQgGAEgIAAQgOAAgHgJg");
	this.shape_628.setTransform(685.9,442.6);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#000000").s().p("AgCAwQgFgFAAgNIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIACAEQADADAFAAIAFAAIAFgBIABAHQgCACgEgBIgGABQgKAAgCgFg");
	this.shape_629.setTransform(678.8,441.6);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#000000").s().p("AgaAkQgGgFAAgMQAAgLAKgIQAKgEAPgBIATAAIAAgJQgBgKgFgFQgGgFgKAAQgIAAgHAFQgGAFAAAHIgJAAIAAAAQAAgKAJgIQAJgHAMAAQANAAAKAHQAIAIAAANIAAAvQAAAFACADIgKAAIgBgHIAAgGQgFAHgIAEQgHAEgIAAQgNAAgHgHgAgPAGQgIAGAAAHQAAAIAFADQAFAFAIAAQAIAAAHgFQAIgFAEgHIAAgRIgTAAQgLAAgHAFg");
	this.shape_630.setTransform(668,442.6);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#000000").s().p("AgGARIAFgUIAAgNIAIAAIAAANIgHAUg");
	this.shape_631.setTransform(658.3,447);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#000000").s().p("AgZAfQgLgLAAgTIAAgBQAAgSALgMQAKgMAPAAQARAAAJAMQALAMAAASIAAABQAAATgLALQgJAMgRAAQgQAAgJgMgAgTgYQgHAKAAAOIAAABQAAAPAHAKQAHAJAMAAQAMAAAIgJQAHgKAAgPIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_632.setTransform(652.5,442.6);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgHAGgFQAFgEAIAAIAGABIgBAIIgHAAQgIAAgEAFQgGAGgCAHIAAA4g");
	this.shape_633.setTransform(646.1,442.5);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#000000").s().p("AgXAhQgIgJAAgSIAAgvIAKAAIAAAvQAAAPAFAHQAFAHAKAAQAHAAAIgFQAGgFACgIIAAg6IAKAAIAABSIgJAAIAAgOQgFAIgGADQgGAEgIAAQgOAAgHgJg");
	this.shape_634.setTransform(638.4,442.6);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#000000").s().p("AgXAgQgJgNAAgSIAAgBQAAgTAJgLQAJgMAPAAQAOAAAJAJQAJAHAAAOIAAAAIgIAAQAAgKgHgGQgGgGgLAAQgLAAgHAJQgGALAAAOIAAABQAAAPAGAJQAHALALAAQAKAAAHgGQAHgFAAgKIAIAAIAAABQAAALgJAJQgKAHgNAAQgPAAgJgLg");
	this.shape_635.setTransform(629.9,442.6);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_636.setTransform(624,440.7);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#000000").s().p("AgWAkQgIgIAAgJIAAgBIAJAAQABAKAGADQAHAEAHAAQAKAAAGgEQAGgEAAgHQAAgGgFgEQgEgFgNgDQgNgCgHgEQgIgFAAgKQAAgKAJgGQAIgHALAAQANAAAKAHQAIAIgBAJIAAABIgIAAQAAgHgGgFQgGgFgKAAQgIAAgFAFQgFAEAAAFQAAAGAEAEQAEAEAMADQAPADAHAEQAHAGAAAJQAAAMgIAGQgIAGgPAAQgNAAgJgHg");
	this.shape_637.setTransform(618.1,442.6);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#000000").s().p("AgWAgQgLgLAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAJAAARIAAAGIg5AAIAAACQAAAPAHAJQAIAJAKAAQAIAAAHgCQAFgCAFgFIAEAGQgFAGgHACQgIADgJAAQgOAAgKgLgAgOgaQgHAHgCANIABAAIAvAAIAAgDQAAgKgHgHQgGgIgLAAQgJAAgGAIg");
	this.shape_638.setTransform(606.2,442.6);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#000000").s().p("AgaAgQgKgNAAgSIAAgBQAAgRAKgNQALgMAPAAQARAAAJAMQALAMAAASIAAABQAAASgLANQgJALgRAAQgQAAgKgLgAgTgYQgHAKAAAOIAAABQAAAPAHAKQAHAKAMAAQAMAAAIgKQAHgKAAgPIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_639.setTransform(593.8,442.6);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#000000").s().p("AgCAwQgFgFAAgNIAAg0IgOAAIAAgJIAOAAIAAgVIAHAAIAAAVIATAAIAAAJIgTAAIAAA0QAAAIADADQADAEAFAAIAFAAIAFgBIABAHQgCABgEAAIgGABQgJAAgDgFg");
	this.shape_640.setTransform(586.8,441.6);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#000000").s().p("AgZAkQgHgFAAgMQAAgLAKgIQAKgFAPAAIATAAIAAgKQgBgIgFgGQgFgFgLAAQgIAAgHAFQgGAFAAAHIgIAAIAAgBQgBgJAJgHQAJgIAMAAQAOAAAJAHQAIAIAAAMIABAwIABAIIgJAAIgCgHIAAgGQgFAHgIAEQgHAEgIAAQgNAAgGgHgAgQAGQgHAGAAAIQAAAHAFADQAEAFAJAAQAIAAAIgFQAHgFAEgGIAAgSIgTAAQgKAAgJAFg");
	this.shape_641.setTransform(579.9,442.6);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#000000").s().p("AgCAqIgghTIAJAAIAZBHIAahHIAJAAIggBTg");
	this.shape_642.setTransform(572,442.6);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQAEgIAFgEQAFgEAIAAIAGABIgBAIIgGAAQgJAAgEAFQgGAGgCAHIAAA4g");
	this.shape_643.setTransform(565.7,442.5);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgRAKgNQALgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAKAKgBQAIAAAGgCQAHgCAEgFIAEAGQgGAGgGACQgIADgJAAQgPAAgJgMgAgPgaQgHAIgBAMIAAAAIAvAAIAAgCQAAgLgGgHQgGgIgLAAQgJAAgHAIg");
	this.shape_644.setTransform(558.5,442.6);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#000000").s().p("AgWAkQgIgIAAgKIAAAAIAJAAQABAKAGADQAHAFAHAAQAKAAAGgFQAGgEAAgHQAAgFgFgFQgFgFgMgCQgNgDgHgEQgIgFAAgKQAAgJAIgHQAJgHALAAQAOAAAIAHQAJAIgBAJIAAABIgIAAQAAgGgGgGQgGgFgKAAQgIAAgFAFQgFAEAAAFQAAAGAEAEQAFAEAKADQAPADAIAEQAHAGAAAJQAAAMgIAFQgIAHgPAAQgNAAgJgHg");
	this.shape_645.setTransform(550.2,442.6);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_646.setTransform(544.4,440.7);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#000000").s().p("AgTAqIAAhSIAIAAIACAOIAAABQADgHAGgFQAFgEAIAAIAHABIgCAIIgHAAQgIAAgEAFQgGAFgCAIIAAA4g");
	this.shape_647.setTransform(540.5,442.5);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#000000").s().p("AgZAgQgLgMAAgTIAAgBQAAgSALgMQAKgMAPAAQAQAAALAMQAKANAAARIAAABQAAASgKANQgKALgRAAQgQAAgJgLgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAIALALAAQANAAAHgLQAHgJAAgPIAAgBQAAgOgHgKQgHgKgNAAQgLAAgIAKg");
	this.shape_648.setTransform(528.9,442.6);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#000000").s().p("AgWAkQgIgIAAgJIAAgBIAJAAQABAJAGAEQAHAFAHgBQAKABAGgFQAGgFAAgGQAAgFgFgFQgFgEgMgEQgNgCgHgEQgIgFAAgKQAAgJAIgHQAJgHALAAQAOAAAIAHQAJAIgBAJIAAABIgIAAQAAgHgGgFQgGgFgKAAQgIAAgFAEQgFAFAAAFQAAAGAEAEQAFAEAKADQAPADAIAEQAHAGAAAKQAAALgIAFQgIAHgPAAQgNAAgJgHg");
	this.shape_649.setTransform(520.4,442.6);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#000000").s().p("AgWAkQgIgIAAgJIAAgBIAJAAQABAKAGADQAHAEAHAAQAKAAAGgEQAGgEAAgHQAAgGgFgEQgEgFgNgCQgNgDgHgEQgIgFAAgKQAAgKAJgGQAIgHALAAQAOAAAIAHQAJAHgBAKIAAABIgIAAQAAgGgGgGQgGgFgKAAQgIAAgFAFQgFAEAAAGQAAAFAEAEQAEAEAMADQAPADAHAEQAHAGAAAKQAAALgIAFQgIAHgPAAQgNAAgJgHg");
	this.shape_650.setTransform(512.3,442.6);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#000000").s().p("AgXAgQgKgLAAgTIAAgCQAAgSAKgMQALgMAMAAQAQAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAPAIAJQAIAKAKAAQAIgBAGgCQAGgBAFgGIAEAGQgGAGgGACQgIADgJAAQgPAAgKgLgAgPgaQgHAIgBAMIAAAAIAvAAIAAgDQAAgLgGgHQgGgHgMAAQgIAAgHAIg");
	this.shape_651.setTransform(504.3,442.6);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#000000").s().p("AgXAgQgJgMAAgTIAAgBQAAgSAJgMQAJgMAPAAQAOAAAJAJQAJAHAAAOIAAAAIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAJQgGALAAAOIAAABQAAAPAGAJQAHAKALAAQAKABAHgGQAHgGAAgJIAIAAIAAABQAAAMgJAHQgKAIgNAAQgPAAgJgLg");
	this.shape_652.setTransform(496.1,442.6);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#000000").s().p("AgXAfQgJgLAAgSIAAgCQAAgTAJgLQAJgMAQAAQANAAAKAIQAJAIgBANIAAABIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAJQgHAKAAAPIAAABQAAAQAHAJQAGAJAMABQAJAAAHgGQAHgFAAgKIAIAAIAAABQABALgKAJQgJAHgNAAQgQAAgJgMg");
	this.shape_653.setTransform(487.8,442.6);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#000000").s().p("AgZAkQgHgFAAgMQAAgLAKgIQALgEAOAAIATAAIAAgLQAAgJgGgFQgGgFgKAAQgJAAgFAFQgHAFAAAHIgIAAIgBAAQAAgKAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAwIACAJIgKAAIgBgOQgEAGgJAFQgGAEgJAAQgNAAgGgHgAgPAGQgIAGAAAIQAAAHAFAEQAEAEAJAAQAIAAAIgEQAHgFAEgIIAAgRIgTAAQgLAAgHAFg");
	this.shape_654.setTransform(479.3,442.6);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#000000").s().p("AAXAqIAAgxQAAgOgGgGQgFgGgLAAQgHAAgHAFQgGAFgDAJIAAA4IgJAAIAAhSIAIAAIABAPQAEgIAIgEQAGgEAIAAQANAAAHAIQAHAJAAARIAAAxg");
	this.shape_655.setTransform(466.9,442.5);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#000000").s().p("AgXAhQgIgIAAgTIAAgvIAKAAIAAAvQAAAPAFAHQAGAHAJAAQAIAAAHgFQAGgFACgIIAAg6IAKAAIAABSIgIAAIgBgOQgEAHgHAEQgGAEgIAAQgNAAgIgJg");
	this.shape_656.setTransform(458,442.6);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#000000").s().p("AgWAgQgLgMAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAPAHAJQAIAKAKAAQAIAAAHgDQAFgCAFgFIAEAHQgGAFgGACQgIADgJAAQgOAAgKgLgAgPgaQgGAHgCANIAAAAIAwAAIAAgCQAAgLgHgHQgGgIgLAAQgIAAgIAIg");
	this.shape_657.setTransform(445.7,442.6);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#000000").s().p("AgCAwQgFgFAAgNIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIADAEQADADAFAAIAEAAIAFgBIABAHQgCABgDABIgHAAQgJAAgDgFg");
	this.shape_658.setTransform(438.9,441.6);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#000000").s().p("AAWAqIAAgxQABgOgGgGQgFgGgLAAQgGAAgIAFQgGAFgCAJIAAA4IgKAAIAAhSIAIAAIABAPQAEgIAIgEQAGgEAIAAQANAAAIAIQAHAJAAARIAAAxg");
	this.shape_659.setTransform(431.9,442.5);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgMAKgGQAKgGAPABIASAAIAAgKQAAgKgGgFQgEgFgLAAQgIAAgHAFQgGAEAAAIIgJAAIAAgBQAAgJAJgIQAJgHAMAAQANAAAKAHQAHAHABAOIAAAwIACAHIgKAAIgCgNQgEAGgIAFQgGAEgKAAQgMAAgHgHgAgPAGQgIAGAAAIQAAAHAFAEQAEAEAJAAQAIAAAHgEQAHgFAEgIIAAgRIgSAAQgMAAgGAFg");
	this.shape_660.setTransform(423.1,442.6);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_661.setTransform(417.1,440.7);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#000000").s().p("AgWAgQgLgLAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAPAIAJQAIAKAKAAQAIAAAHgDQAFgCAFgFIAEAGQgGAGgGACQgIADgJAAQgPAAgJgLgAgPgaQgHAHgBANIABAAIAvAAIAAgDQAAgLgHgGQgGgIgLAAQgJAAgHAIg");
	this.shape_662.setTransform(402.5,442.6);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#000000").s().p("AgGARIAFgUIAAgNIAIAAIAAANIgHAUg");
	this.shape_663.setTransform(378.7,447);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAJAAARIAAAGIg5AAIAAACQAAAOAHAKQAIAKAKAAQAIAAAHgDQAFgCAFgFIAEAGQgFAGgHACQgIADgJAAQgOAAgKgMgAgOgaQgHAHgCAMIABABIAvAAIAAgCQAAgMgHgGQgGgIgLAAQgJAAgGAIg");
	this.shape_664.setTransform(373.3,442.6);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQAEgIAFgEQAFgEAIAAIAHABIgCAIIgGAAQgIAAgFAFQgGAGgCAHIAAA4g");
	this.shape_665.setTransform(367.1,442.5);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#000000").s().p("AgXAgQgKgMAAgSIAAgCQAAgTAKgLQALgMAMAAQAQAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAPAIAJQAIAKAKgBQAIAAAGgCQAHgCAEgFIAEAHQgGAFgGACQgIADgJAAQgPAAgKgLgAgPgaQgHAIgBALIAAABIAvAAIAAgDQAAgKgGgIQgGgHgMAAQgIAAgHAIg");
	this.shape_666.setTransform(359.9,442.6);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#000000").s().p("AgYAyQgIgLAAgTIAAgCQAAgTAIgLQAJgMAPAAQAHAAAGAEQAGADAFAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgGAEgHAAQgPAAgJgLgAgQgGQgHAIAAAQIAAACQAAAPAGAJQAHAJAKAAQAIAAAGgEQAGgEAEgHIAAgmQgDgHgGgFQgGgEgJAAQgLAAgFAKg");
	this.shape_667.setTransform(351.1,440.8);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKABQAIAAAHgDQAFgCAFgFIAEAHQgFAFgHACQgIADgJAAQgOAAgKgMgAgPgaQgGAHgCAMIAAABIAwAAIAAgCQAAgLgHgIQgGgHgLAAQgIAAgIAIg");
	this.shape_668.setTransform(342.8,442.6);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#000000").s().p("AgXAfQgJgMgBgRIAAgCQABgRAJgNQAKgMAOAAQAOAAAJAIQAJAIAAANIAAABIgIAAQAAgKgHgGQgGgGgLAAQgLAAgGAKQgHAJAAAPIAAABQAAAQAHAIQAFALAMAAQAJgBAIgFQAHgFAAgJIAIAAIAAAAQABALgKAJQgJAHgOAAQgOAAgKgMg");
	this.shape_669.setTransform(334.6,442.6);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#000000").s().p("AgXAgQgJgMAAgSIAAgCQAAgSAJgMQAJgMAPAAQAOAAAJAIQAJAHAAAOIAAABIgIAAQAAgKgHgGQgGgGgLAAQgLAAgHAJQgGALAAAOIAAABQAAAPAGAKQAHAKALgBQAKAAAHgFQAHgFAAgJIAIAAIAAAAQAAAMgJAHQgKAIgNAAQgPAAgJgLg");
	this.shape_670.setTransform(326.4,442.6);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#000000").s().p("AgZAkQgHgFAAgMQAAgLAKgHQAKgGAPABIATAAIAAgKQAAgKgGgFQgFgFgLAAQgIAAgHAFQgGAFAAAHIgIAAIAAgBQAAgJAIgIQAJgHAMAAQAOAAAJAHQAIAHAAAOIABAwIABAIIgJAAIgCgIIAAgGQgFAGgIAFQgHAEgIAAQgNAAgGgHgAgPAGQgIAHAAAGQAAAHAFAFQAEAEAJAAQAIAAAHgEQAIgGAEgHIAAgRIgTAAQgLAAgHAFg");
	this.shape_671.setTransform(317.9,442.6);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#000000").s().p("AgZA0QgHgGAAgLQAAgLAKgIQAKgHAPAAIASAAIAAgJQAAgIgFgFQgGgFgKAAQgIAAgHAFQgGAEAAAIIgJAAIAAgBQAAgKAJgHQAJgHAMAAQAOAAAIAHQAJAHAAAMIABAxIABAIIgKAAIgBgHIgBgGQgEAGgIAFQgHAEgIAAQgNAAgGgHgAgPAWQgIAGAAAHQAAAHAFAEQAEAFAJAAQAIAAAIgFQAHgFADgHIAAgRIgSAAQgLAAgHAFgAgBglIgTgUIAAgBIAMAAIAOAVg");
	this.shape_672.setTransform(305.5,441);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg0IgOAAIAAgJIAOAAIAAgVIAIAAIAAAVIASAAIAAAJIgSAAIAAA0QAAAIADAEQADADAFAAIAEAAIAFgBIABAHQgCACgDAAIgHAAQgJAAgDgFg");
	this.shape_673.setTransform(293.2,441.6);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#000000").s().p("AgaAgQgJgNgBgSIAAgBQABgSAJgMQALgMAPAAQAQAAAKAMQALAMAAASIAAABQAAASgLANQgKALgQAAQgQAAgKgLgAgTgYQgHAKgBAOIAAABQABAPAHAKQAHAJAMAAQAMAAAIgJQAHgKAAgPIAAgBQAAgOgHgKQgIgKgMAAQgMAAgHAKg");
	this.shape_674.setTransform(286.2,442.6);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAEgHAHgEQAHgDAGAAQAQgBAIANQAIALAAAVIAAACQAAARgIALQgIALgQgBQgHABgGgEQgHgEgEgFIAAArgAgOgtQgGAEgDAHIAAAnQADAGAGAFQAHAEAHAAQALAAAHgJQAGgJAAgNIAAgDQAAgPgGgLQgGgKgMAAQgIAAgGAFg");
	this.shape_675.setTransform(277.5,444.1);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAJAAARIAAAGIg5AAIAAACQAAAPAHAJQAIAJAKAAQAIABAHgDQAFgCAFgFIAEAGQgFAGgHACQgIADgJAAQgOAAgKgMgAgOgaQgHAHgCANIABAAIAvAAIAAgCQAAgMgHgGQgGgIgLAAQgJAAgGAIg");
	this.shape_676.setTransform(265,442.6);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg1IgPAAIAAgHIAPAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIACAEQADADAFAAIAFAAIAFgBIABAHIgFABIgHABQgJAAgDgGg");
	this.shape_677.setTransform(258.2,441.6);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#000000").s().p("AgXAgQgKgLAAgTIAAgCQAAgSAKgMQALgMAMAAQAQAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAPAIAJQAIAKAKgBQAIABAGgDQAGgCAFgFIAEAGQgGAGgGACQgJADgIAAQgPAAgKgLgAgPgaQgHAHgBAMIAAABIAvAAIAAgCQABgLgHgHQgGgIgMAAQgIAAgHAIg");
	this.shape_678.setTransform(242.8,442.6);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_679.setTransform(236.8,440.7);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#000000").s().p("AggApIAAgHIAxhCIgvAAIAAgJIA6AAIAAAHIgwBEIA1AAIAAAHg");
	this.shape_680.setTransform(231.3,442.6);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgHQAKgFAPAAIASAAIAAgLQAAgJgFgFQgFgFgLAAQgIAAgHAFQgGAFAAAHIgJAAIAAgBQAAgJAJgHQAJgIAMAAQAOAAAIAHQAJAHAAANIAAAxQAAAEACAEIgKAAIgBgIIgBgGQgEAHgIAEQgHAEgIAAQgNAAgGgGgAgPAGQgIAGAAAIQAAAHAFAEQAEAEAJAAQAIAAAHgEQAJgGACgGIAAgSIgSAAQgLAAgHAFg");
	this.shape_681.setTransform(222.9,442.6);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#000000").s().p("AghA7IAAhzIAIAAIABANQAFgHAHgEQAHgDAGAAQAPAAAJALQAJANAAAUIAAACQAAAQgJAMQgJALgOAAQgHAAgHgDQgHgEgEgGIAAAsgAgOgtQgGAEgDAIIAAAmQADAGAGAFQAHAEAHAAQALAAAHgJQAGgJAAgNIAAgDQAAgPgGgLQgHgJgLAAQgIAAgGAEg");
	this.shape_682.setTransform(214.5,444.1);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_683.setTransform(204.2,440.7);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_684.setTransform(200.6,440.7);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_685.setTransform(193.1,440.7);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#000000").s().p("AgWAkQgIgHAAgKIAAgBIAJAAQABAJAGAEQAHAFAHAAQAKAAAGgFQAGgEAAgHQAAgFgFgFQgFgFgMgDQgNgCgIgEQgHgFAAgKQAAgKAIgGQAJgHALAAQAOAAAIAHQAIAIAAAKIAAAAIgJAAQAAgHgFgFQgGgFgKAAQgJAAgEAFQgFAEAAAGQAAAFAEAEQAFAEAKADQAPADAIAEQAHAGAAAJQAAALgIAGQgIAHgPAAQgNAAgJgHg");
	this.shape_686.setTransform(187.2,442.6);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgMAKgGQAKgGAPAAIASAAIAAgKQAAgIgFgGQgFgFgLAAQgIAAgGAFQgHAFAAAHIgJAAIAAAAQAAgKAJgHQAJgIAMAAQANAAAKAHQAIAHAAANIAAAxQAAAEACAEIgKAAIgBgIIgBgGQgEAHgIAEQgHAEgIAAQgNAAgHgHgAgQAGQgHAGAAAHQAAAIAFAEQAFAEAIAAQAIAAAIgEQAHgGADgGIAAgSIgSAAQgMAAgHAFg");
	this.shape_687.setTransform(178.9,442.6);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#000000").s().p("AgJA9IAAhKIgOAAIAAgIIAOAAIAAgMQAAgMAGgIQAEgHAMAAIALACIgCAHIgIgBQgIAAgEAFQgCAFAAAJIAAAMIASAAIAAAIIgSAAIAABKg");
	this.shape_688.setTransform(172.4,440.6);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAPAIAJQAIAJAKABQAHAAAIgDQAFgCAFgFIAEAGQgFAGgHADQgIACgJAAQgOAAgKgMgAgPgaQgHAIgBAMIAAAAIAvAAIAAgDQAAgKgGgHQgGgIgLAAQgJAAgHAIg");
	this.shape_689.setTransform(161.6,442.6);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_690.setTransform(155.6,440.7);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#000000").s().p("AgWAfQgLgKAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAJAKABQAIgBAHgCQAFgCAFgFIAEAGQgGAGgGADQgIACgJAAQgOAAgKgMgAgPgaQgHAIgBALIAAABIAwAAIAAgDQAAgKgHgIQgGgHgLAAQgJAAgHAIg");
	this.shape_691.setTransform(145.9,442.6);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#000000").s().p("AgCAvQgFgEAAgNIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAJADACQADAEAFAAIAEAAIAFgBIABAHQgCABgDAAIgHABQgKAAgCgGg");
	this.shape_692.setTransform(139.1,441.6);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#000000").s().p("AgCAwQgFgFAAgNIAAg0IgOAAIAAgJIAOAAIAAgVIAHAAIAAAVIATAAIAAAJIgTAAIAAA0QAAAIADAEQADADAFAAIAFAAIAFgBIABAHQgCABgEAAIgGABQgJAAgDgFg");
	this.shape_693.setTransform(133.8,441.6);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#000000").s().p("AgXAhQgHgJgBgSIAAgvIAKAAIAAAvQAAAPAFAHQAGAHAJAAQAIAAAGgFQAGgEADgJIAAg6IAJAAIAABSIgIAAIgBgOQgDAHgHAEQgGAEgIAAQgOAAgHgJg");
	this.shape_694.setTransform(126.8,442.6);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAJADADQADADAFAAIAEAAIAFgBIABAHQgCACgDgBIgHABQgJAAgDgGg");
	this.shape_695.setTransform(119.7,441.6);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#000000").s().p("AgWAgQgLgLAAgTIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAIAJAKABQAHgBAIgCQAFgCAFgFIAEAHQgFAFgHACQgIADgJAAQgOAAgKgLgAgPgaQgHAIgBAMIAAAAIAvAAIAAgDQAAgKgGgIQgGgHgLAAQgJAAgHAIg");
	this.shape_696.setTransform(109.2,442.6);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg0IgOAAIAAgIIAOAAIAAgWIAIAAIAAAWIASAAIAAAIIgSAAIAAA0QAAAIADADQADAEAFAAIAEAAIAFgBIABAHQgCACgDAAIgHAAQgKAAgCgGg");
	this.shape_697.setTransform(102.4,441.6);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgGgGgKAAQgHAAgHAFQgFAFgEAJIAAA4IgJAAIAAhSIAIAAIABAPQAEgIAIgEQAGgEAHAAQAOAAAIAIQAGAJAAARIAAAxg");
	this.shape_698.setTransform(95.4,442.5);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#000000").s().p("AgZAkQgHgFAAgMQAAgLAKgIQAKgEAPAAIATAAIAAgLQgBgJgFgFQgFgFgLAAQgJAAgGAFQgGAFAAAHIgJAAIAAAAQAAgKAJgIQAJgHAMAAQANAAAJAHQAJAHAAANIAAAxIACAHIgKAAIgBgNQgEAGgJAFQgHAEgJAAQgMAAgGgHgAgQAGQgHAGAAAHQAAAIAEAEQAGAEAIAAQAHAAAIgEQAHgGAFgGIAAgSIgTAAQgMAAgHAFg");
	this.shape_699.setTransform(86.6,442.6);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgHAGgFQAEgEAJAAIAHABIgCAIIgHAAQgIAAgEAFQgGAFgCAIIAAA4g");
	this.shape_700.setTransform(80.3,442.5);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#000000").s().p("AgXAhQgIgJAAgSIAAgvIAKAAIAAAvQgBAPAGAHQAFAHAKAAQAIAAAGgFQAHgFACgIIAAg6IAJAAIAABSIgIAAIgBgOQgDAHgHAEQgHAEgIAAQgNAAgHgJg");
	this.shape_701.setTransform(72.6,442.6);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#000000").s().p("AgnA4IAAhvIAhAAQASAAAOAOQAOANAAAXIAAAMQAAAWgOANQgNAOgTAAgAgeAwIAYAAQAPAAALgLQAKgNAAgRIAAgNQAAgSgLgLQgKgMgPAAIgYAAg");
	this.shape_702.setTransform(63.3,441.1);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_703.setTransform(862.9,408);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQALgEAOAAIATAAIAAgLQAAgJgGgFQgFgFgLAAQgIAAgGAFQgHAFAAAGIgIAAIgBAAQAAgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAoIACARIgKAAIgBgIIAAgGQgHAHgFADQgJAFgHAAQgMAAgHgHgAgPAGQgIAFABAIQAAAHAEAFQAFAEAIAAQAIAAAHgFQAIgEAEgIIAAgSIgTAAQgKAAgIAGg");
	this.shape_704.setTransform(856.7,404.5);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#000000").s().p("AgCApIgghRIAJAAIAZBHIAAAAIAZhHIAKAAIggBRg");
	this.shape_705.setTransform(848.8,404.5);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_706.setTransform(843.1,402.6);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAPAAQAIAAAFADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgDAGgHAEQgHAEgHAAQgPAAgJgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAJAAAGgEQAFgDAEgIIAAgmQgDgHgGgFQgGgEgJAAQgKAAgHAKg");
	this.shape_707.setTransform(836.6,402.7);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_708.setTransform(830.6,402.6);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgSAJgMQAKgMAOAAQAPAAAIAIQAJAJAAAMIAAABIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAKQgGAKAAAOIAAABQAAAOAGALQAHAJALAAQAKAAAHgFQAHgGAAgIIAIAAIAAAAQAAALgJAIQgKAIgNAAQgOAAgKgMg");
	this.shape_709.setTransform(824.7,404.5);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAQAAAIAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAJQAIAKAKAAQAJAAAGgCQAHgDADgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgOgbQgHAIgCAMIABABIAvAAIAAgCQAAgMgHgHQgHgHgKAAQgIAAgHAHg");
	this.shape_710.setTransform(816.5,404.5);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQAEgJAFgDQAGgEAHAAIAHABIgCAIIgGAAQgKAAgDAFQgGAFgCAIIAAA4g");
	this.shape_711.setTransform(810.4,404.4);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQADgIAGgEQAEgEAJAAIAGABIgBAIIgHAAQgJAAgDAFQgFAFgDAIIAAA4g");
	this.shape_712.setTransform(801.1,404.4);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#000000").s().p("AgWAgQgLgMAAgSIAAgDQAAgRALgMQAKgMANAAQAQAAAIAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAJAAAGgCQAHgEADgDIAEAGQgEAFgIADQgHADgKAAQgOAAgKgLgAgPgbQgGAJgCALIABABIAvAAIAAgDQAAgLgHgHQgHgHgKAAQgIAAgIAHg");
	this.shape_713.setTransform(793.8,404.5);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#000000").s().p("AggA6IAAhyIAHAAIABANQAFgHAGgDQAIgEAGAAQAPAAAJAMQAJAMAAAUIAAACQAAAQgJAMQgJALgPAAQgGAAgHgEQgGgDgFgGIAAArgAgOgtQgGAFgDAHIAAAmQADAHAGAEQAGAEAIAAQALAAAGgJQAHgJAAgOIAAgBQAAgRgHgJQgGgKgLAAQgIAAgGAEg");
	this.shape_714.setTransform(785.5,406);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#000000").s().p("AgZAfQgLgLAAgTIAAgBQAAgSALgMQAKgMAPAAQARAAAJAMQALAMAAASIAAABQAAATgLALQgJAMgRAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAHAKAMAAQANAAAHgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_715.setTransform(772.6,404.5);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#000000").s().p("AgXAgQgJgNAAgSIAAgBQAAgTAJgLQAKgMAOAAQAPAAAIAIQAJAJAAAMIAAABIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAJQgGALAAAOIAAABQAAAPAGAJQAHAKALAAQAKAAAHgFQAHgGAAgIIAIAAIAAAAQAAALgJAIQgKAIgNAAQgOAAgKgLg");
	this.shape_716.setTransform(764.1,404.5);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_717.setTransform(758.1,402.6);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#000000").s().p("AAXAqIAAgxQgBgOgFgGQgFgGgLAAQgIAAgFAFQgHAFgCAJIAAA4IgJAAIAAhSIAIAAIAAAPQAFgIAHgEQAGgEAIAAQANAAAIAIQAGAIAAASIAAAxg");
	this.shape_718.setTransform(751.9,404.4);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_719.setTransform(745.7,402.6);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_720.setTransform(742.1,402.6);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#000000").s().p("AgXAgQgJgMAAgTIAAgBQAAgTAJgLQAJgMAPAAQAPAAAIAIQAKAIgBAOIAAAAIgIAAQAAgKgHgGQgGgGgLAAQgLAAgHAKQgGAKAAAOIAAABQAAAPAGAJQAHAKAMAAQAJAAAHgFQAHgFAAgJIAIAAIAAAAQABALgKAIQgKAIgMAAQgQAAgJgLg");
	this.shape_721.setTransform(736.2,404.5);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#000000").s().p("AgaAfQgJgMAAgSIAAgBQAAgRAJgNQALgMAPAAQARAAAJAMQALAMgBASIAAABQABATgLALQgJAMgRAAQgPAAgLgMgAgTgYQgHAJAAAPIAAABQAAAPAHAJQAHAKAMAAQANAAAHgKQAHgJAAgPIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_722.setTransform(723.8,404.5);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#000000").s().p("AgWAkQgIgHAAgLIAAAAIAJAAQAAAJAHAEQAGAEAIAAQAKAAAGgEQAGgFAAgGQAAgGgFgEQgFgEgMgEQgNgCgIgEQgHgFAAgKQAAgKAIgHQAIgGAMAAQAOAAAIAHQAIAHAAAKIAAABIgJAAQAAgHgGgFQgFgFgKAAQgIAAgGAFQgFADAAAGQAAAGAFAEQAFAEAKACQAQAEAHAEQAHAFAAAKQAAALgIAGQgJAHgOAAQgNAAgJgHg");
	this.shape_723.setTransform(715.3,404.5);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgLAKgIQALgEAOgBIATAAIAAgKQAAgIgGgGQgGgFgKAAQgIAAgGAFQgHAEAAAHIgIAAIAAAAQAAgJAIgIQAKgHALAAQAOAAAIAHQAJAHAAAOIABAvIABAJIgKAAIgBgIIAAgGQgHAIgGACQgHAFgIAAQgMAAgHgGgAgPAGQgHAGAAAIQAAAGAEAFQAEAEAJAAQAIAAAHgFQAIgEAEgIIAAgSIgTAAQgKAAgIAGg");
	this.shape_724.setTransform(706.9,404.5);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#000000").s().p("AgXAgQgJgMAAgTIAAgBQAAgTAJgLQAJgMAPAAQAPAAAIAIQAJAIAAANIAAABIgIAAQAAgKgHgGQgGgGgLAAQgLAAgHAKQgGAKAAAOIAAABQAAAOAGAKQAHAKALAAQAKAAAHgFQAHgFAAgKIAIAAIAAABQAAAMgJAHQgKAIgNAAQgPAAgJgLg");
	this.shape_725.setTransform(698.6,404.5);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#000000").s().p("AgZAfQgKgMgBgSIAAgBQABgSAKgMQAKgMAPAAQAQAAALAMQAKAMAAASIAAABQAAATgKALQgKAMgRAAQgPAAgKgMgAgTgYQgIAKAAAOIAAABQAAAOAIAKQAHAKAMAAQANAAAHgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_726.setTransform(686.2,404.5);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#000000").s().p("AgDApIgfhSIAJAAIAYA9IABALIAAAAIAahIIAJAAIggBSg");
	this.shape_727.setTransform(678.1,404.5);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#000000").s().p("AgZAfQgLgLAAgTIAAgBQAAgSALgMQAKgMAPAAQARAAAJAMQALAMAAASIAAABQAAASgKAMQgLAMgQAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAHAKAMAAQANAAAHgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_728.setTransform(669.8,404.5);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAvQAAAPAFAHQAFAGAKAAQAIAAAHgEQAGgFACgIIAAg6IAKAAIAABSIgJAAIAAgOQgEAHgHAEQgHAEgHAAQgOAAgHgJg");
	this.shape_729.setTransform(661,404.5);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#000000").s().p("AAXAqIAAgxQAAgOgGgGQgFgGgLAAQgIAAgFAFQgHAFgCAJIAAA4IgKAAIAAhSIAJAAIAAAPQAFgIAGgEQAIgEAHAAQANAAAHAIQAHAIABASIAAAxg");
	this.shape_730.setTransform(652.2,404.4);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgLAAQgHAAgGAFQgHAFgCAJIAAA4IgKAAIAAhSIAJAAIABAPQAEgIAGgEQAHgEAIAAQANAAAHAIQAIAIAAASIAAAxg");
	this.shape_731.setTransform(639.5,404.4);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#000000").s().p("AgXAhQgHgJgBgTIAAguIAKAAIAAAvQgBAPAGAHQAFAGAJAAQAJAAAHgEQAFgEADgJIAAg6IAKAAIAABSIgJAAIgBgOQgDAIgHADQgIAEgGAAQgNAAgIgJg");
	this.shape_732.setTransform(630.6,404.5);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgDQAAgRALgMQAKgMANAAQAQAAAIAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAJAAAGgCQAHgEADgDIAEAGQgEAFgIADQgHADgKAAQgOAAgKgLgAgOgaQgHAHgCANIABAAIAvAAIAAgCQAAgMgHgHQgHgHgKAAQgIAAgHAIg");
	this.shape_733.setTransform(618.3,404.5);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQAEgJAFgDQAFgEAIAAIAHABIgCAIIgHAAQgJAAgDAFQgGAFgCAIIAAA4g");
	this.shape_734.setTransform(612.1,404.4);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgLAKgIQALgEAOAAIASAAIAAgLQAAgJgFgFQgGgFgKAAQgIAAgHAFQgFAFgBAGIgIAAIAAAAQAAgKAIgHQAJgHAMAAQAOAAAJAHQAIAHAAANIAAAnIACARIgJAAIgCgHIgBgGQgFAHgHADQgIAFgHAAQgMAAgHgGgAgPAGQgHAGgBAIQAAAGAFAFQAEAEAJAAQAIAAAHgFQAIgFADgHIAAgSIgSAAQgKAAgIAGg");
	this.shape_735.setTransform(604.5,404.5);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_736.setTransform(598.6,402.6);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#000000").s().p("AgCAqIgghSIAKAAIAXA9IABAKIAAAAIAahHIAJAAIggBSg");
	this.shape_737.setTransform(592.9,404.5);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#000000").s().p("AgCAqIgghTIAJAAIAZBIIAAAAIAZhIIAKAAIggBTg");
	this.shape_738.setTransform(585.1,404.5);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgMAKgHQAKgEAPAAIASAAIAAgLQAAgJgFgFQgFgFgLAAQgIAAgHAFQgGAFAAAGIgJAAIAAAAQAAgJAJgHQAJgIAMAAQANAAAJAHQAJAHAAANIABAwIABAJIgKAAIgBgIIgBgGQgFAHgHAEQgHAEgJAAQgMAAgHgHgAgPAGQgIAGAAAHQAAAHAFAEQAEAFAJAAQAIAAAHgFQAIgFADgHIAAgSIgSAAQgLABgHAFg");
	this.shape_739.setTransform(577,404.5);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#000000").s().p("AgWAfQgLgMAAgRIAAgDQAAgRALgMQAKgMANAAQAQAAAIAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAJAAAGgCQAHgDADgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgOgaQgHAHgCANIABAAIAvAAIAAgDQAAgLgHgHQgHgHgKAAQgIAAgHAIg");
	this.shape_740.setTransform(564.9,404.5);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQAEgJAFgDQAFgEAJAAIAGABIgCAIIgHAAQgJAAgDAFQgGAFgCAIIAAA4g");
	this.shape_741.setTransform(558.7,404.4);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAvQAAAPAFAHQAFAGAKAAQAJAAAFgEQAHgFACgIIAAg6IAJAAIAABSIgIAAIgBgOQgDAIgHADQgHAEgHAAQgNAAgIgJg");
	this.shape_742.setTransform(551.1,404.5);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#000000").s().p("AggA6IAAhyIAHAAIACANQAEgGAGgEQAHgEAHAAQAPAAAJAMQAIAMAAAUIAAACQAAAQgIAMQgJALgPAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgHAFgCAHIAAAmQADAHAGAEQAGAEAIAAQALAAAHgJQAGgJAAgOIAAgBQAAgRgHgJQgGgKgLAAQgIAAgGAEg");
	this.shape_743.setTransform(542.4,406);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#000000").s().p("AggA6IAAhyIAHAAIACANQADgGAHgEQAHgEAHAAQAQAAAIAMQAIAMAAAUIAAACQAAAQgIAMQgIALgQAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgHAFgCAHIAAAmQAEAHAFAEQAGAEAIAAQALAAAHgJQAGgJAAgOIAAgBQAAgQgGgKQgHgKgLAAQgIAAgGAEg");
	this.shape_744.setTransform(533.6,406);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#000000").s().p("AgZAfQgLgLAAgTIAAgBQAAgRALgNQAKgMAPAAQAQAAAKAMQAKANAAARIAAABQAAATgKALQgKAMgQAAQgPAAgKgMgAgTgYQgIAKAAAOIAAABQAAAPAIAJQAHAKAMAAQANAAAHgKQAHgJAAgPIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_745.setTransform(524.6,404.5);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#000000").s().p("AgaAfQgKgKABgUIAAgBQgBgTAKgLQALgMAPAAQAQAAAKAMQAKAMAAASIAAABQAAATgKALQgKAMgQAAQgPAAgLgMgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAHAKAMAAQANAAAHgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_746.setTransform(511.9,404.5);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#000000").s().p("AgWAkQgIgIAAgKIAAAAIAJAAQABAJAGAEQAGAEAIAAQAKAAAGgEQAGgFAAgGQAAgHgFgDQgEgFgNgCQgNgDgHgEQgIgFAAgKQAAgKAJgHQAHgGAMAAQAOAAAIAHQAJAGgBAMIAAAAIgIAAQAAgHgGgFQgGgFgKAAQgIAAgFAEQgFAEAAAGQAAAHAEADQAFAEALACQAOAEAIAEQAHAFAAALQAAAKgIAHQgIAGgPAAQgMAAgKgHg");
	this.shape_747.setTransform(503.3,404.5);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgLAKgHQALgGAOAAIASAAIAAgKQAAgJgFgFQgFgFgLAAQgIAAgHAFQgGAFAAAGIgJAAIAAAAQABgJAIgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAoIACAQIgJAAIgCgHIgBgGQgFAHgHADQgHAFgIAAQgNAAgGgGgAgPAGQgIAGAAAHQAAAHAFAFQAEAEAJAAQAIAAAIgFQAHgFADgHIAAgRIgSAAQgKAAgIAFg");
	this.shape_748.setTransform(495,404.5);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#000000").s().p("AgXAgQgJgNAAgSIAAgBQAAgTAJgLQAKgMAOAAQAPAAAIAIQAJAIAAANIAAABIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAKQgGAJAAAPIAAABQAAAPAGAJQAHAKALAAQAKAAAHgFQAHgFAAgKIAIAAIAAABQAAAMgJAHQgKAIgNAAQgOAAgKgLg");
	this.shape_749.setTransform(486.7,404.5);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_750.setTransform(476.9,402.6);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_751.setTransform(473.3,402.6);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#000000").s().p("AgWAgQgLgMAAgSIAAgDQAAgRALgMQAKgMAMAAQAQAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAJQAIAKAKAAQAJAAAFgCQAHgEAEgDIAEAGQgEAFgIADQgHADgKAAQgOAAgKgLgAgPgaQgHAHgBAMIABABIAuAAIAAgCQAAgMgGgHQgGgHgMAAQgHAAgIAIg");
	this.shape_752.setTransform(463.6,404.5);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg1IgOAAIAAgIIAOAAIAAgVIAHAAIAAAVIATAAIAAAIIgTAAIAAA1QAAAIADADQADAEAFAAIAKgBIABAHIgGABIgGABQgJAAgDgFg");
	this.shape_753.setTransform(456.8,403.5);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgFgGgKAAQgJAAgFAFQgGAFgDAJIAAA4IgKAAIAAhSIAJAAIABAPQAEgIAGgEQAIgEAHAAQANAAAHAIQAIAJAAARIAAAxg");
	this.shape_754.setTransform(449.8,404.4);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#000000").s().p("AgXAfQgKgMAAgRIAAgCQAAgSAKgMQALgMAMAAQAQAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAPAIAIQAHAKALAAQAJAAAFgCQAIgDADgEIAEAGQgEAFgIADQgHADgKAAQgOAAgLgMgAgPgaQgHAIgBAMIAAAAIAvAAIAAgDQAAgLgGgHQgGgHgMAAQgIAAgHAIg");
	this.shape_755.setTransform(441.3,404.5);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#000000").s().p("AAxAqIAAgvQAAgQgGgGQgFgGgKAAQgLAAgGAGQgFAHgCALIAAAzIgHAAIAAgvQAAgQgGgGQgFgGgKAAQgKAAgGAFQgGAGgCAHIAAA5IgJAAIAAhSIAIAAIABAOQAEgIAHgDQAHgEAJAAQAKAAAGAEQAFAEACALQAEgJAHgFQAHgFAKAAQANAAAIAJQAHAJAAASIAAAvg");
	this.shape_756.setTransform(430.1,404.4);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgHQALgFAOgBIATAAIAAgKQAAgJgGgFQgFgFgLAAQgIAAgHAFQgFAEgBAIIgIAAIgBgBQAAgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAoIACAQIgKAAIgBgHIAAgGQgGAHgHAEQgHAEgIAAQgNAAgGgGgAgPAGQgIAFABAIQAAAHAEAFQAEAEAJAAQAIAAAHgFQAIgFAEgHIAAgRIgTAAQgKgBgIAGg");
	this.shape_757.setTransform(418.7,404.5);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#000000").s().p("AgCAqIgghSIAJAAIAZBHIAAAAIAZhHIAKAAIgfBSg");
	this.shape_758.setTransform(410.8,404.5);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_759.setTransform(405.1,402.6);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADADQADAEAFAAIAJgBIABAHIgFACIgHAAQgIAAgEgFg");
	this.shape_760.setTransform(400.6,403.5);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_761.setTransform(396.2,402.6);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgLAAQgHAAgHAFQgGAFgCAJIAAA4IgJAAIAAhSIAHAAIABAPQAFgIAHgEQAGgEAHAAQAOAAAHAIQAHAIAAASIAAAxg");
	this.shape_762.setTransform(390,404.4);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#000000").s().p("AAYA9IAAhSIAKAAIAABSgAgTA9IAAhLIgOAAIAAgHIAOAAIAAgLQAAgNAIgIQAIgHAKAAIALABIALAEIgCAIIgJgDIgKgBQgIAAgEAFQgFAEAAAKIAAALIARAAIAAAHIgRAAIAABLg");
	this.shape_763.setTransform(380.8,402.5);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#000000").s().p("AgXAfQgKgMAAgRIAAgCQAAgRAKgNQALgMAMAAQAQAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAJQAHAKALAAQAJAAAFgCQAIgDADgEIAEAGQgEAFgIADQgHADgKAAQgOAAgLgMgAgPgaQgHAIgBALIAAABIAvAAIAAgCQAAgMgGgHQgGgHgMAAQgIAAgHAIg");
	this.shape_764.setTransform(373,404.5);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#000000").s().p("AgYAyQgIgLAAgTIAAgCQAAgTAIgLQAJgMAPAAQAIAAAFADQAGAEAFAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgGADQgHAEgHAAQgQAAgIgLgAgQgGQgHAHAAARIAAACQAAAPAHAJQAFAJALAAQAJAAAFgEQAFgDAFgIIAAgmQgDgHgGgFQgGgEgJAAQgLAAgFAKg");
	this.shape_765.setTransform(364.3,402.7);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgSALgMQAKgMANAAQAQAAAIAKQAJAKAAAQIAAAGIg5AAIAAACQAAAPAHAIQAIAKAKAAQAJAAAGgCQAHgDADgEIAEAGQgFAFgHADQgHADgKAAQgOAAgKgLgAgPgaQgHAIgBALIAAABIAwAAIAAgDQAAgKgHgIQgHgHgKAAQgIAAgIAIg");
	this.shape_766.setTransform(352.1,404.5);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#000000").s().p("AgTAqIAAhSIAIAAIACAOIAAABQADgIAGgEQAFgEAIAAIAHABIgCAIIgHAAQgJAAgDAFQgGAFgCAIIAAA4g");
	this.shape_767.setTransform(346,404.4);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgSALgMQAKgMANAAQAQAAAIAKQAJAKAAAQIAAAGIg5AAIAAACQAAAOAHAKQAIAJAKAAQAJAAAGgCQAHgDADgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgLgAgPgbQgGAIgCAMIAAABIAwAAIAAgCQAAgMgHgHQgHgHgKAAQgIAAgIAHg");
	this.shape_768.setTransform(338.7,404.5);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAPAAQAIAAAFADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgFAHgGADQgFAEgIAAQgPAAgJgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAJAAAGgEQAFgEAEgHIAAgmQgDgHgGgFQgFgEgKAAQgLAAgGAKg");
	this.shape_769.setTransform(329.9,402.7);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAvQAAAPAFAHQAFAGAKAAQAIAAAHgEQAGgFACgIIAAg6IAKAAIAABSIgJAAIAAgOQgFAIgGADQgHAEgHAAQgOAAgHgJg");
	this.shape_770.setTransform(321.3,404.5);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_771.setTransform(315.1,402.6);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#000000").s().p("AAWA8IAAg0QAAgLgFgHQgFgGgKAAQgHAAgHAGQgHAFgCAFIAAA8IgJAAIAAh3IAJAAIAAA0QADgIAIgFQAHgDAHgBQAOAAAGAIQAIAIAAAQIAAA0g");
	this.shape_772.setTransform(308.9,402.6);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#000000").s().p("AgXAgQgJgMAAgTIAAgBQAAgTAJgLQAJgMAPAAQAPAAAIAIQAKAIgBANIAAABIgIAAQAAgKgHgGQgGgGgLAAQgLAAgHAJQgGAKAAAPIAAABQAAAPAGAJQAHAKAMAAQAJAAAHgFQAHgFAAgJIAIAAIAAAAQAAALgJAIQgKAIgMAAQgQAAgJgLg");
	this.shape_773.setTransform(300.3,404.5);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#000000").s().p("AgaA0QgGgGAAgLQAAgMAKgHQAKgHAPAAIATAAIAAgJQgBgIgFgFQgGgFgKAAQgIAAgHAFQgGAFAAAGIgJAAIAAAAQAAgJAJgIQAJgHAMAAQANAAAJAHQAJAHAAAMIABAxIABAIIgKAAIgBgHIAAgGQgGAHgHADQgIAFgHAAQgNAAgHgHgAgQAWQgHAFAAAIQAAAHAFAEQAFAFAIAAQAIAAAIgFQAHgFAEgHIAAgSIgTAAQgLAAgIAGgAgCglIgTgUIABgBIAMAAIAOAVg");
	this.shape_774.setTransform(288,402.9);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQAEgJAFgDQAFgEAIAAIAGABIgBAIIgGAAQgKAAgDAFQgGAFgCAIIAAA4g");
	this.shape_775.setTransform(281.6,404.4);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADAEQADADAFAAIAJgBIABAHIgFABIgHABQgIAAgEgFg");
	this.shape_776.setTransform(275.7,403.5);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#000000").s().p("AgaAfQgKgKAAgUIAAgBQAAgTAKgLQAKgMAQAAQAQAAAKAMQALANAAARIAAABQAAATgLALQgKAMgQAAQgQAAgKgMgAgTgYQgIAKABAOIAAABQgBAPAIAJQAHAKAMAAQANAAAHgKQAHgJAAgPIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_777.setTransform(268.7,404.5);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAEgHAHgDQAHgEAGAAQAQAAAIAMQAIALAAAVIAAACQAAARgIALQgIALgQAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgGAEgDAIIAAAmQADAHAGAEQAGAEAIAAQAMAAAGgJQAGgKAAgNIAAgBQAAgQgGgKQgGgKgMAAQgIAAgGAEg");
	this.shape_778.setTransform(260,406);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_779.setTransform(249.8,402.6);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#000000").s().p("AgbAxQgMgIAAgRIAAAAIAJAAQgBAMALAHQAKAHALgBQANAAAJgFQAIgGAAgKQAAgKgHgFQgHgGgRgEQgRgEgJgGQgKgIAAgNQAAgMALgIQALgJAOABQASAAALAJQALAKgBAOIgJAAQAAgLgIgIQgIgGgOAAQgLgBgIAHQgHAFAAAJQAAAKAHAFQAHAGAPADQASAEAKAHQAJAIAAANQAAAOgLAHQgLAJgRgBQgPAAgNgIg");
	this.shape_780.setTransform(243.2,403);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape_781.setTransform(232.6,408);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgGQAKgGAPAAIASAAIAAgKQABgIgHgGQgFgFgKAAQgJAAgFAFQgHAFAAAGIgIAAIAAAAQgBgJAJgIQAJgHAMAAQANAAAJAHQAIAHAAANIABAwIACAIIgKAAIgCgNQgFAHgHADQgIAFgIAAQgMAAgHgGgAgQAGQgHAGAAAHQAAAHAEAFQAGAEAHAAQAJAAAIgFQAGgEAEgIIAAgRIgSAAQgKgBgJAGg");
	this.shape_782.setTransform(226.4,404.5);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_783.setTransform(220.4,402.6);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#000000").s().p("AggA6IAAhyIAIAAIABANQAEgHAHgDQAHgEAGAAQAQAAAIAMQAIALAAAVIAAACQAAARgIALQgIALgQAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgGAEgDAIIAAAmQADAHAGAEQAGAEAIAAQAMAAAGgJQAGgKAAgNIAAgBQAAgQgGgKQgHgKgLAAQgIAAgGAEg");
	this.shape_784.setTransform(214.4,406);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgLAKgIQAKgEAPgBIASAAIAAgKQABgJgGgFQgFgFgLAAQgIAAgGAFQgHAFAAAHIgJAAIAAgBQAAgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAAOIAAAvIACAIIgJAAIgCgHIgBgGQgFAHgHADQgIAFgHAAQgMAAgIgHgAgPAGQgIAFAAAJQAAAFAFAFQAEAFAJAAQAJAAAGgFQAJgFACgHIAAgSIgSAAQgKABgIAFg");
	this.shape_785.setTransform(205.4,404.5);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#000000").s().p("AgTAqIAAhSIAJAAIABAOIAAABQAEgJAFgDQAFgEAIAAIAHABIgCAIIgHAAQgJAAgDAFQgGAGgCAHIAAA4g");
	this.shape_786.setTransform(199.1,404.4);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#000000").s().p("AgXAgQgKgMAAgSIAAgCQAAgSAKgMQALgMAMAAQAQAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAJQAHAKALAAQAJAAAFgCQAHgDAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgLgLgAgPgbQgHAIgBAMIAAABIAvAAIAAgCQAAgMgGgHQgGgHgMAAQgIAAgHAHg");
	this.shape_787.setTransform(191.8,404.5);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAHAAIAAAWIATAAIAAAHIgTAAIAAA1QAAAIADADQADAEAFAAIAKgBIABAHIgGACIgGAAQgJAAgDgFg");
	this.shape_788.setTransform(185,403.5);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgMAKgGQAKgFAPAAIASAAIAAgLQAAgIgFgGQgGgFgKAAQgIAAgGAFQgHAFAAAGIgJAAIAAAAQAAgJAJgHQAJgIAMAAQANAAAJAHQAJAHAAANIAAAwIACAIIgJAAIgCgHIgBgGQgFAHgHAEQgHAEgJAAQgMAAgHgHgAgQAGQgHAGAAAIQAAAGAFAFQAEAEAJAAQAIAAAHgFQAJgFACgHIAAgRIgSAAQgLAAgIAFg");
	this.shape_789.setTransform(174.2,404.5);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_790.setTransform(168.2,402.6);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_791.setTransform(164.6,402.6);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAQAAAIAKQAJAKAAAQIAAAGIg5AAIAAACQAAAPAHAIQAIAKAKAAQAJAAAGgCQAHgDADgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgOgaQgHAHgCANIABAAIAvAAIAAgDQAAgLgHgHQgHgHgKAAQgIAAgHAIg");
	this.shape_792.setTransform(158.7,404.5);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#000000").s().p("AgYAyQgIgMAAgSIAAgCQAAgSAIgMQAJgMAPAAQAIAAAFADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgFAHgGADQgFAEgIAAQgPAAgJgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAJAAAGgEQAFgDAEgIIAAgmQgDgHgGgFQgGgEgJAAQgKAAgHAKg");
	this.shape_793.setTransform(150,402.7);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#000000").s().p("AgXAgQgKgNAAgRIAAgDQAAgRAKgMQALgMAMAAQAQAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAJQAHAKALAAQAJAAAFgCQAIgEADgDIAEAGQgEAFgIADQgHADgKAAQgOAAgLgLgAgPgaQgHAIgBALIAAABIAvAAIAAgCQAAgMgGgHQgGgHgMAAQgIAAgHAIg");
	this.shape_794.setTransform(137.9,404.5);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgIAAgGAFQgHAFgCAJIAAA4IgKAAIAAhSIAIAAIABAPQAFgIAGgEQAHgEAHAAQAOAAAHAIQAHAIAAASIAAAxg");
	this.shape_795.setTransform(129.3,404.4);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#000000").s().p("AgaAfQgKgMAAgSIAAgBQAAgRAKgNQALgMAPAAQAQAAAKAMQAKANAAARIAAABQAAASgKAMQgJAMgRAAQgPAAgLgMgAgTgYQgIAKABAOIAAABQgBAPAIAJQAHAKAMAAQANAAAHgKQAHgJAAgPIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_796.setTransform(120.5,404.5);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_797.setTransform(114.2,402.6);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#000000").s().p("AgWAkQgIgIAAgJIAAgBIAJAAQABAKAGADQAGAEAIAAQAKAAAGgEQAGgFAAgGQAAgHgFgDQgEgFgNgDQgNgCgHgEQgIgFAAgKQAAgJAJgIQAHgGAMAAQAOAAAIAHQAJAGgBAMIAAAAIgIAAQAAgGgGgGQgGgFgKAAQgIAAgFAFQgFADAAAGQAAAGAEAEQAFAEALACQAOAEAIAEQAHAGAAAKQAAAKgIAGQgJAHgOAAQgMAAgKgHg");
	this.shape_798.setTransform(108.3,404.5);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAvQAAAPAFAHQAFAGAKAAQAJAAAFgEQAHgFACgIIAAg6IAJAAIAABSIgIAAIgBgOQgEAIgGADQgHAEgHAAQgOAAgHgJg");
	this.shape_799.setTransform(99.9,404.5);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_800.setTransform(93.7,402.6);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#000000").s().p("AgXAfQgKgMABgSIAAgBQgBgSAKgMQAKgMAOAAQAPAAAIAIQAJAJAAAMIAAABIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAKQgGAJAAAPIAAABQAAAPAGAKQAGAJAMAAQAKAAAHgFQAHgGAAgIIAIAAIAAAAQAAAMgJAHQgKAIgNAAQgOAAgKgMg");
	this.shape_801.setTransform(87.8,404.5);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#000000").s().p("AAWAqIAAgxQABgOgGgGQgFgGgLAAQgHAAgHAFQgGAFgCAJIAAA4IgKAAIAAhSIAJAAIAAAPQAFgIAHgEQAGgEAIAAQAOAAAGAIQAHAIAAASIAAAxg");
	this.shape_802.setTransform(79.3,404.4);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#000000").s().p("AgaAfQgKgMAAgSIAAgBQAAgRAKgNQALgMAPAAQAQAAAKAMQALAMAAASIAAABQAAATgLALQgJAMgRAAQgPAAgLgMgAgTgYQgIAKAAAOIAAABQAAAPAIAJQAHAKAMAAQANAAAHgKQAHgJABgPIAAgBQgBgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_803.setTransform(70.4,404.5);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#000000").s().p("AgXAgQgJgMAAgTIAAgBQAAgSAJgMQAKgMAPAAQANAAAKAIQAJAJgBANIAAAAIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAKQgHAJAAAPIAAABQAAAPAHAJQAGAKAMAAQAJAAAHgFQAHgFAAgKIAIAAIAAABQABALgKAIQgJAIgNAAQgQAAgJgLg");
	this.shape_804.setTransform(61.9,404.5);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#000000").s().p("AgZAkQgHgHAAgKQAAgMAKgHQALgFAOAAIATAAIAAgKQAAgJgGgFQgGgFgKAAQgIAAgGAEQgHAFAAAHIgIAAIAAAAQgBgJAJgIQAJgHAMAAQAOAAAIAHQAJAGAAAOIAAAwIACAIIgKAAIgBgOQgFAHgIAEQgHAFgIAAQgNAAgGgHgAgPAGQgIAFAAAIQAAAHAFAEQAEAFAJAAQAHAAAJgFQAHgFAEgHIAAgSIgTAAQgKAAgIAGg");
	this.shape_805.setTransform(940.2,385.4);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_806.setTransform(934.2,383.6);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#000000").s().p("AgZAkQgHgHAAgKQAAgLAKgHQALgFAOgBIATAAIAAgKQAAgIgGgGQgGgFgKAAQgIAAgGAFQgHAFABAGIgJAAIAAAAQgBgJAKgHQAJgIALAAQAOAAAIAHQAJAHAAANIAAAoIACAQIgJAAIgCgHIAAgHQgGAJgGADQgIAEgIAAQgMAAgHgHgAgPAGQgIAGAAAIQAAAGAFAEQAFAFAIAAQAHAAAJgFQAHgEAEgIIAAgRIgTAAQgKAAgIAFg");
	this.shape_807.setTransform(924.2,385.4);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIADAEQADADAEAAIAKgBIABAHIgGACIgGAAQgJAAgDgGg");
	this.shape_808.setTransform(917.3,384.4);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#000000").s().p("AgXAgQgKgMAAgSIAAgCQAAgTAKgLQALgMAMAAQAQAAAJAJQAJALAAAPIAAAHIg6AAIAAACQAAAOAIAKQAHAJALAAQAJAAAFgDQAHgCAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgLgLgAgPgaQgHAJgBAKIAvAAIAAgBQAAgMgGgHQgGgHgMAAQgIAAgHAIg");
	this.shape_809.setTransform(910.7,385.4);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgIAGgEQAFgEAIAAIAEAAIACABIgBAIIgHAAQgJAAgDAFQgGAFgCAIIAAA4g");
	this.shape_810.setTransform(904.5,385.3);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgLQAKgMAOAAQAPAAAIAIQAJAIAAANIAAABIgIAAQAAgKgHgGQgHgGgKAAQgLAAgHAJQgGALAAAOIAAABQAAAOAGALQAHAJALAAQAKAAAHgFQAHgGAAgJIAIAAIAAAAQAAANgJAHQgKAIgNAAQgOAAgKgMg");
	this.shape_811.setTransform(897.2,385.4);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgDQAAgSALgLQAKgMANAAQAPAAAJAKQAJAJAAAQIAAAHIg5AAIAAACQAAAOAHAJQAIAKAKAAQAKAAAFgCQAGgDAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgOgaQgHAHgCAMIAwAAIAAgBQAAgMgHgHQgHgHgKAAQgIAAgHAIg");
	this.shape_812.setTransform(889,385.4);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#000000").s().p("AgYAyQgIgMAAgTIAAgBQAAgSAIgMQAJgMAPAAQAIAAAFADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgHADQgFAEgIAAQgPAAgJgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAIAAAHgEQAFgDAEgIIAAgmQgDgHgGgFQgGgEgJAAQgKAAgHAKg");
	this.shape_813.setTransform(880.3,383.6);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#000000").s().p("AgGARIAGgUIAAgNIAHAAIAAANIgHAUg");
	this.shape_814.setTransform(870.5,389.9);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#000000").s().p("AgZAfQgLgLAAgUIAAAAQAAgSALgMQAKgMAPAAQAQAAALAMQAKAMAAASIAAAAQAAATgKAMQgLAMgQAAQgPAAgKgMgAgTgYQgHAKAAAOIAAAAQAAAQAHAJQAHAKAMAAQANAAAHgKQAHgKAAgPIAAAAQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_815.setTransform(864.7,385.4);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_816.setTransform(858.5,383.6);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_817.setTransform(854.9,383.6);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#000000").s().p("AgZAfQgLgLAAgUIAAAAQAAgTALgLQAKgMAPAAQAQAAALAMQAKALAAATIAAAAQAAAUgKALQgLAMgQAAQgPAAgKgMgAgTgYQgHAKAAAOIAAAAQAAAQAHAJQAHAKAMAAQANAAAHgKQAHgKAAgPIAAAAQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_818.setTransform(848.7,385.4);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#000000").s().p("AgTAqIAAhSIAIAAIACAOIAAABQADgIAGgEQAEgEAJAAIAEAAIACABIgBAIIgHAAQgJAAgDAFQgGAEgCAJIAAA4g");
	this.shape_819.setTransform(842.3,385.3);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA0QAAAJADAEQADADAEAAIAKgBIABAHIgFABIgHABQgJAAgDgGg");
	this.shape_820.setTransform(836.3,384.4);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgGgFQgFgGgKAAQgIAAgGAFQgFAFgEAIIAAA5IgIAAIAAhSIAIAAIAAAPQAEgIAHgEQAHgEAHAAQAOAAAHAIQAHAJAAARIAAAxg");
	this.shape_821.setTransform(829.4,385.3);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#000000").s().p("AgZAfQgLgLAAgTIAAgBQAAgTALgLQAKgMAPAAQAQAAALAMQAKALAAATIAAABQAAATgKALQgLAMgQAAQgPAAgKgMgAgTgYQgHAKAAAOIAAABQAAAPAHAJQAHAKAMAAQANAAAHgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_822.setTransform(820.5,385.4);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#000000").s().p("AgXAgQgJgMAAgTIAAgBQAAgTAJgMQAJgLAPAAQAPAAAIAIQAJAIAAAOIAAAAIgIAAQAAgKgHgGQgGgGgLAAQgLAAgHAJQgGALAAAOIAAABQAAAOAGAKQAHAKALAAQAKAAAHgFQAHgFAAgKIAIAAIAAAAQAAAMgJAIQgKAIgNAAQgOAAgKgLg");
	this.shape_823.setTransform(812,385.4);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_824.setTransform(802.2,383.6);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#000000").s().p("AgYAyQgIgMAAgTIAAgBQAAgSAIgMQAJgMAPAAQAHAAAGADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgDAHgIADQgGAEgHAAQgPAAgJgLgAgRgGQgGAIAAAQIAAACQAAAOAGAKQAGAJALAAQAIAAAGgEQAHgEADgHIAAgmQgDgHgGgFQgGgEgJAAQgLAAgGAKg");
	this.shape_825.setTransform(795.8,383.6);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgGQAKgGAPAAIASAAIAAgKQAAgJgFgFQgGgFgKAAQgIAAgHAEQgGAGAAAHIgJAAIAAgBQAAgJAJgHQAJgIAMAAQANAAAJAHQAIAGAAAOIABAwIACAIIgKAAIgCgNQgFAHgHAEQgIAEgIAAQgMAAgHgGgAgQAGQgHAGAAAIQAAAGAFAEQAFAFAHAAQAIAAAIgFQAIgFADgHIAAgRIgSAAQgLAAgIAFg");
	this.shape_826.setTransform(783.3,385.4);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#000000").s().p("AgCAwQgFgGAAgMIAAg1IgOAAIAAgHIAOAAIAAgWIAIAAIAAAWIASAAIAAAHIgSAAIAAA1QAAAIADAEQADADAFAAIAJgBIABAHIgFACIgHAAQgIAAgEgFg");
	this.shape_827.setTransform(776.4,384.4);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_828.setTransform(772.1,383.6);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#000000").s().p("AgWAkQgIgHAAgLIAAAAIAJAAQABAKAGADQAHAEAHAAQAKAAAGgFQAGgEAAgGQAAgGgFgFQgGgEgLgCQgNgDgIgEQgHgGAAgJQAAgKAIgGQAIgHAMAAQAOAAAIAHQAIAHAAAKIAAABIgJAAQAAgGgFgGQgGgFgKAAQgIAAgFAEQgGAFAAAFQAAAHAFADQAEADALAEQAQADAHAEQAHAGAAAJQAAAKgIAHQgIAHgPAAQgNAAgJgHg");
	this.shape_829.setTransform(766.2,385.4);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_830.setTransform(760.4,383.6);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#000000").s().p("AgCApIgghRIAJAAIAZBGIAahGIAJAAIggBRg");
	this.shape_831.setTransform(754.7,385.4);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgLAKgHQAKgGAPAAIASAAIAAgKQABgJgGgFQgGgFgKAAQgIAAgHAEQgGAGAAAGIgJAAIAAAAQAAgJAJgHQAJgIAMAAQANAAAJAHQAJAHAAANIAAAwIACAIIgKAAIgBgHIgBgGQgEAHgIADQgHAFgIAAQgNAAgHgGgAgPAGQgIAFAAAIQAAAHAFAFQAFAEAIAAQAHAAAJgFQAIgFACgHIAAgRIgSAAQgKAAgIAFg");
	this.shape_832.setTransform(742.6,385.4);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_833.setTransform(736.6,383.6);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_834.setTransform(733,383.6);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgDQAAgRALgMQAKgMANAAQAPAAAJAJQAJAJAAARIAAAHIg5AAIAAACQAAAOAHAJQAIAKAKAAQAKAAAFgDQAGgCAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgLgAgOgbQgHAIgCAMIAwAAIAAgCQAAgLgHgHQgHgHgKAAQgIAAgHAHg");
	this.shape_835.setTransform(727.1,385.4);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#000000").s().p("AgYAyQgIgMAAgTIAAgBQAAgSAIgMQAJgMAPAAQAIAAAFADQAHAEAEAHIAAgyIAJAAIAAB3IgIAAIgBgMQgDAGgHAEQgHAEgHAAQgPAAgJgLgAgRgGQgGAIAAAQIAAACQAAAPAGAJQAGAJALAAQAIAAAHgEQAFgDAEgIIAAgmQgDgHgGgFQgGgEgJAAQgKAAgHAKg");
	this.shape_836.setTransform(718.4,383.6);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_837.setTransform(708.5,383.6);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#000000").s().p("AgCAwQgFgHAAgMIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADADQADAEAFAAIAJgBIABAHIgFACIgHAAQgIAAgEgFg");
	this.shape_838.setTransform(704,384.4);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgHQAKgEAPgBIASAAIAAgKQAAgJgFgFQgFgFgLAAQgIAAgHAEQgGAGAAAGIgJAAIAAAAQAAgJAJgHQAJgIAMAAQANAAAJAHQAJAHAAANIAAAwIACAIIgKAAIgCgNQgFAHgHADQgIAFgHAAQgNAAgHgGgAgQAGQgHAGAAAHQAAAHAFAFQAEAEAJAAQAHAAAJgFQAGgEAEgIIAAgSIgSAAQgLAAgIAGg");
	this.shape_839.setTransform(697.1,385.4);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIADAEQADADAFAAIAJgBIABAHIgFABIgHABQgIAAgEgGg");
	this.shape_840.setTransform(690.2,384.4);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_841.setTransform(685.8,383.6);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#000000").s().p("AgXAhQgIgJAAgTIAAguIAKAAIAAAvQAAAPAFAHQAFAGAKAAQAIAAAHgEQAGgGACgHIAAg6IAKAAIAABSIgJAAIAAgOQgFAIgGADQgHAEgHAAQgOAAgHgJg");
	this.shape_842.setTransform(679.6,385.5);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#000000").s().p("AgWAjQgIgGAAgLIAAAAIAJAAQABAJAGAEQAHAEAHAAQAKAAAGgEQAGgFAAgGQAAgFgFgGQgGgEgLgDQgNgCgHgEQgIgFAAgKQAAgKAIgGQAIgHAMAAQAOAAAIAHQAJAHgBAKIAAABIgIAAQAAgHgGgFQgGgFgKAAQgIAAgFAEQgFAEAAAHQAAAFAEAEQAEAEALADQAQADAHAEQAHAFAAAKQAAALgIAHQgIAGgPAAQgNAAgJgIg");
	this.shape_843.setTransform(671.1,385.4);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_844.setTransform(665.3,383.6);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#000000").s().p("AgSAqIAAhSIAHAAIACAOIAAABQADgIAGgEQAEgEAJAAIADAAIAEABIgCAIIgHAAQgJAAgDAFQgFAEgDAJIAAA4g");
	this.shape_845.setTransform(661.3,385.3);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_846.setTransform(652.4,383.6);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgMAKgHQALgFAOABIATAAIAAgLQAAgIgGgGQgFgFgLAAQgIAAgGAFQgHAFAAAGIgIAAIgBAAQAAgJAJgHQAJgIAMAAQAOAAAIAHQAJAHAAANIABAwIABAIIgKAAIgBgHIAAgHQgGAJgGADQgIAEgIAAQgNAAgGgGgAgPAGQgIAFAAAIQAAAHAFAFQAFAEAIAAQAHAAAJgFQAHgEAEgIIAAgSIgTAAQgKAAgIAGg");
	this.shape_847.setTransform(646.2,385.4);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#000000").s().p("AgWAgQgLgMAAgSIAAgDQAAgSAKgLQALgMANAAQAPAAAJAJQAJALAAAPIAAAHIg6AAIAAACQAAAOAIAKQAHAJALAAQAJAAAGgDQAGgCAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgLgAgPgaQgHAIgBALIAvAAIAAgBQAAgLgGgIQgHgHgKAAQgJAAgHAIg");
	this.shape_848.setTransform(634.2,385.4);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#000000").s().p("AgWAjQgIgGAAgLIAAAAIAJAAQABAKAGADQAHAEAHAAQAKAAAGgFQAGgEAAgGQAAgFgFgGQgFgEgMgCQgNgDgHgEQgIgFAAgKQAAgKAIgHQAIgGAMAAQAOAAAIAHQAJAHgBAKIAAABIgIAAQAAgGgGgGQgGgFgKAAQgIAAgFAEQgFAEAAAHQAAAGAEADQAEADALADQAQAEAHAEQAHAGAAAKQAAAKgIAGQgIAHgPAAQgNAAgJgIg");
	this.shape_849.setTransform(625.9,385.4);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgLAKgIQAKgFAPAAIASAAIAAgKQAAgIgFgGQgGgFgKAAQgIAAgGAEQgHAGAAAHIgIAAIAAgBQgBgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIABAwIABAIIgKAAIgBgHIgBgGQgEAHgHAEQgJAEgHAAQgNAAgGgGgAgPAGQgIAFAAAIQAAAGAFAFQAEAFAJAAQAHAAAIgFQAIgFADgHIAAgSIgSAAQgKAAgIAGg");
	this.shape_850.setTransform(617.6,385.4);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#000000").s().p("AgNA5QgHgEgDgHIgBANIgIAAIAAh3IAJAAIAAAyQAEgHAHgDQAFgEAIAAQAQAAAIAMQAIAMAAASIAAABQAAATgIAMQgIALgQAAQgHAAgHgEgAgOgMQgGAGgDAGIAAAlQADAHAGAFQAHAEAHAAQAMAAAGgJQAGgJAAgPIAAgCQAAgQgGgIQgHgKgLAAQgIAAgGAEg");
	this.shape_851.setTransform(609.2,383.6);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#000000").s().p("AAWAqIAAgxQAAgPgFgFQgGgGgKAAQgIAAgGAFQgFAFgEAIIAAA5IgJAAIAAhSIAIAAIABAPQAEgIAHgEQAHgEAHAAQAOAAAHAIQAIAJAAARIAAAxg");
	this.shape_852.setTransform(596.3,385.3);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_853.setTransform(590.1,383.6);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#000000").s().p("AgGARIAGgUIAAgNIAHAAIAAANIgHAUg");
	this.shape_854.setTransform(582.7,389.9);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#000000").s().p("AgZAfQgLgLAAgUIAAAAQAAgTALgLQAKgMAPAAQARAAAJAMQALALAAATIAAAAQAAATgKAMQgLAMgQAAQgPAAgKgMgAgTgYQgHAKAAAOIAAAAQAAAQAHAJQAHAKAMAAQANAAAHgKQAHgJAAgQIAAAAQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_855.setTransform(576.9,385.4);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#000000").s().p("AgXAgQgJgNAAgSIAAgBQAAgTAJgLQAKgMAOAAQAPAAAIAIQAJAIAAANIAAABIgIAAQAAgLgHgFQgHgGgKAAQgLAAgHAKQgGAKAAAOIAAABQAAAOAGALQAHAJALAAQAKAAAHgFQAHgGAAgJIAIAAIAAABQAAALgJAIQgKAIgNAAQgOAAgKgLg");
	this.shape_856.setTransform(568.4,385.4);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_857.setTransform(562.5,383.6);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgJAAgFAFQgGAEgDAJIAAA5IgKAAIAAhSIAJAAIAAAPQAFgIAGgEQAHgEAIAAQAOAAAGAIQAIAJAAARIAAAxg");
	this.shape_858.setTransform(556.3,385.3);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_859.setTransform(550.1,383.6);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_860.setTransform(546.4,383.6);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#000000").s().p("AgXAgQgJgMAAgTIAAgBQAAgTAJgLQAJgMAQAAQANAAAKAIQAJAIgBAOIAAAAIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAJQgHAKAAAPIAAABQAAAPAHAJQAGAKAMAAQAJAAAHgFQAHgFAAgKIAIAAIAAABQABALgKAIQgJAIgNAAQgQAAgJgLg");
	this.shape_861.setTransform(540.5,385.4);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#000000").s().p("AgaAfQgKgMAAgSIAAgBQAAgSAKgMQALgMAPAAQARAAAJAMQALAMAAASIAAABQAAATgLALQgJAMgRAAQgPAAgLgMgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAHAKAMAAQANAAAHgKQAHgJAAgPIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_862.setTransform(528.1,385.4);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#000000").s().p("AgWAjQgIgGAAgLIAAAAIAJAAQAAAJAHAEQAIAEAGAAQAKAAAGgEQAGgFAAgGQAAgGgFgFQgFgEgMgCQgMgDgJgEQgHgGAAgJQAAgKAIgHQAIgGAMAAQAOAAAIAHQAIAHAAAKIAAABIgJAAQAAgHgGgFQgFgFgKAAQgIAAgGAEQgFAFAAAFQAAAHAFADQAEADALADQAQAEAHAEQAHAGAAAJQAAAKgIAHQgJAHgOAAQgNAAgJgIg");
	this.shape_863.setTransform(519.6,385.4);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgLAKgHQAKgFAPAAIATAAIAAgLQAAgJgGgFQgFgFgLAAQgIAAgGAEQgHAGAAAHIgIAAIAAgBQgBgJAJgHQAJgIAMAAQAOAAAIAHQAJAHAAANIAAAwIACAIIgKAAIgBgOQgFAIgIADQgHAFgIAAQgNAAgGgGgAgPAGQgIAFAAAJQAAAGAFAFQAFAEAIAAQAHAAAJgFQAHgFAEgHIAAgRIgTAAQgKAAgIAFg");
	this.shape_864.setTransform(511.2,385.4);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#000000").s().p("AgXAfQgJgLAAgTIAAgBQAAgTAJgLQAJgMAPAAQAPAAAIAIQAKAIgBANIAAABIgIAAQAAgKgHgGQgGgGgLAAQgLAAgGAKQgHAJAAAPIAAABQAAAPAGAJQAHAKAMAAQAJAAAHgFQAHgFAAgKIAIAAIAAAAQABAMgKAIQgKAIgMAAQgQAAgJgMg");
	this.shape_865.setTransform(503,385.4);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_866.setTransform(493.2,383.6);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_867.setTransform(489.6,383.6);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#000000").s().p("AgaAfQgJgKAAgVIAAAAQgBgTAKgLQALgMAPAAQAQAAAKAMQAKALAAATIAAAAQAAAUgKALQgKAMgQAAQgPAAgLgMgAgTgYQgIAKAAAOIAAAAQAAAPAIAKQAHAKAMAAQANAAAHgKQAHgJAAgQIAAAAQAAgPgHgJQgHgKgNAAQgMAAgHAKg");
	this.shape_868.setTransform(479.5,385.4);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADADQADAEAFAAIAJgBIABAHIgFACIgHAAQgJAAgDgGg");
	this.shape_869.setTransform(472.5,384.4);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#000000").s().p("AgZAlQgHgIAAgKQAAgLAKgIQALgEAOgBIATAAIAAgKQAAgJgGgFQgFgFgLAAQgIAAgGAEQgHAGAAAGIgIAAIAAAAQAAgJAIgIQAKgHAMAAQANAAAIAHQAJAHAAANIAAAoIACARIgKAAIgBgIIAAgHQgGAJgGACQgIAFgIAAQgNAAgGgGgAgPAGQgIAFAAAJQAAAGAFAEQAFAFAIAAQAHAAAJgFQAHgEAEgIIAAgSIgTAAQgKAAgIAGg");
	this.shape_870.setTransform(465.6,385.4);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_871.setTransform(459.6,383.6);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#000000").s().p("AgCApIgghRIAJAAIAYA9IABAJIAAAAIAahGIAJAAIggBRg");
	this.shape_872.setTransform(454,385.4);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#000000").s().p("AgCApIgghSIAJAAIAYA+IABAJIAAAAIAZhHIAKAAIggBSg");
	this.shape_873.setTransform(446.2,385.4);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgMAKgGQAKgGAPAAIATAAIAAgKQAAgIgGgGQgGgFgKAAQgIAAgGAFQgHAFAAAHIgIAAIAAgBQgBgJAJgHQAJgIAMAAQAOAAAJAHQAIAHAAANIABAwIABAJIgKAAIgBgIIAAgGQgGAHgHADQgHAFgIAAQgMAAgHgGgAgPAGQgIAFAAAIQAAAHAFAEQAEAFAJAAQAHAAAJgFQAHgFAEgHIAAgRIgTAAQgKAAgIAFg");
	this.shape_874.setTransform(438,385.4);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgLAKgIQAKgEAPAAIATAAIAAgLQgBgIgFgGQgGgFgKAAQgIAAgHAFQgGAFAAAHIgJAAIAAgBQAAgJAJgHQAJgIAMAAQAOAAAIAHQAJAHAAANIABAwIABAIIgKAAIgBgHIAAgGQgGAHgHAEQgIAEgHAAQgNAAgGgHgAgPAGQgIAFAAAJQAAAFAFAGQAEAEAJAAQAHAAAIgFQAIgFAEgHIAAgSIgTAAQgKABgIAFg");
	this.shape_875.setTransform(425.6,385.4);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#000000").s().p("AAWA8IAAg0QAAgNgFgFQgFgFgKAAQgIgBgGAGQgHAFgDAFIAAA8IgJAAIAAh3IAJAAIAAAzQAFgHAHgEQAHgEAHAAQANAAAHAIQAIAIgBAPIAAA0g");
	this.shape_876.setTransform(417.1,383.6);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#000000").s().p("AgXAfQgKgMAAgRIAAgDQAAgTAKgKQALgMAMAAQAQAAAJAJQAJALAAAQIAAAGIg6AAIAAACQAAAOAIAJQAHAKALAAQAJAAAFgDQAHgCAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgLgMgAgPgbQgHAKgBALIAvAAIAAgDQAAgLgGgHQgGgHgMAAQgIAAgHAHg");
	this.shape_877.setTransform(404.7,385.4);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#000000").s().p("AAXA8IAAg0QAAgMgGgGQgFgFgKAAQgIAAgGAEQgGAFgDAGIAAA8IgJAAIAAh3IAJAAIAAA0QADgIAIgEQAHgEAIgBQANAAAHAJQAGAHAAAQIAAA0g");
	this.shape_878.setTransform(396.2,383.6);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#000000").s().p("AgXAgQgJgMAAgTIAAgBQAAgTAJgMQAJgLAQAAQAOAAAIAIQAKAJgBAMIAAABIgIAAQAAgKgHgGQgGgGgKAAQgMAAgGAJQgHAKAAAPIAAABQAAAPAHAKQAGAJAMAAQAJAAAHgFQAHgFAAgKIAIAAIAAABQABALgKAIQgJAIgNAAQgQAAgJgLg");
	this.shape_879.setTransform(387.6,385.4);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#000000").s().p("AgaAfQgJgMAAgSIAAgBQAAgTAJgLQALgMAPAAQARAAAKAMQAJALABATIAAABQgBAUgJAKQgKAMgRAAQgPAAgLgMgAgTgYQgHAKAAAOIAAABQAAAOAHAKQAHAKAMAAQANAAAHgKQAHgKAAgOIAAgBQAAgOgHgKQgHgKgNAAQgMAAgHAKg");
	this.shape_880.setTransform(375.2,385.4);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#000000").s().p("AgXAgQgKgNAAgSIAAgBQAAgSAKgMQAKgMAOAAQAPAAAJAIQAIAIAAAOIAAAAIgIAAQAAgKgHgGQgHgGgKAAQgLAAgGAKQgHAJAAAPIAAABQAAAPAHAKQAGAJALAAQAKAAAHgFQAHgFAAgKIAIAAIAAAAQAAAMgJAIQgKAIgNAAQgOAAgKgLg");
	this.shape_881.setTransform(366.7,385.4);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_882.setTransform(360.8,383.6);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#000000").s().p("AgYAyQgIgLAAgUIAAgBQAAgTAIgLQAJgMAPAAQAHAAAGADQAGAEAFAHIAAgyIAJAAIAAB3IgIAAIgBgMQgDAHgIADQgGAEgHAAQgPAAgJgLgAgRgGQgGAHAAARIAAACQAAAPAGAJQAHAJAKAAQAIAAAGgEQAFgDAFgIIAAgmQgDgHgGgFQgGgEgJAAQgLAAgGAKg");
	this.shape_883.setTransform(354.4,383.6);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAKQAJAJAAARIAAAGIg5AAIAAACQAAAOAHAJQAIAKAKAAQAKAAAFgDQAGgCAEgEIAEAGQgDAFgJADQgHADgKAAQgOAAgKgMgAgPgaQgGAIgCAMIAwAAIAAgCQAAgLgHgIQgHgHgKAAQgIAAgIAIg");
	this.shape_884.setTransform(346.1,385.4);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#000000").s().p("AAxAqIAAgvQAAgPgGgHQgGgGgJAAQgLAAgGAGQgGAHgBALIAAABIABACIAAAwIgIAAIAAgvQAAgPgFgHQgGgGgKAAQgKAAgFAFQgGAEgDAJIAAA5IgJAAIAAhSIAJAAIAAAOQAFgIAGgDQAHgEAJAAQAJAAAHAEQAFAFACAKQAEgJAHgFQAGgFALAAQANAAAIAJQAHAJAAASIAAAvg");
	this.shape_885.setTransform(334.9,385.3);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_886.setTransform(322.2,383.6);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_887.setTransform(318.6,383.6);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#000000").s().p("AgaAlQgGgHAAgLQAAgMAKgGQAKgGAPABIASAAIAAgLQAAgIgFgGQgFgFgLAAQgIAAgHAFQgGAFAAAGIgJAAIAAAAQAAgJAJgIQAJgHAMAAQAOAAAIAHQAJAHAAANIAAAwIACAIIgKAAIgBgHIgBgHQgEAIgIADQgIAFgHAAQgNAAgHgGgAgPAGQgIAGAAAHQAAAHAFAEQAEAFAJAAQAHAAAJgFQAHgFADgHIAAgRIgSAAQgKAAgIAFg");
	this.shape_888.setTransform(308.6,385.4);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_889.setTransform(302.6,383.6);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#000000").s().p("AggA6IAAhyIAHAAIABANQAFgHAGgEQAHgDAHAAQAPAAAJAMQAJAMgBAUIAAABQABARgJAMQgJALgPAAQgHAAgGgEQgHgDgEgGIAAArgAgOgtQgGAFgDAHIAAAmQADAHAGAEQAFAEAJAAQALAAAHgJQAGgJAAgOIAAgBQAAgRgGgJQgGgKgMAAQgJAAgFAEg");
	this.shape_890.setTransform(296.6,386.9);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#000000").s().p("AgZAlQgHgHAAgLQAAgMAKgHQALgEAOAAIATAAIAAgLQAAgIgGgGQgGgFgKAAQgIAAgGAFQgGAEgBAHIgIAAIgBAAQABgJAIgHQAKgIALAAQAOAAAIAHQAJAHAAANIAAAnIACASIgKAAIgBgIIAAgHQgGAIgHADQgIAFgHAAQgNAAgGgGgAgPAGQgHAGAAAHQgBAHAFAFQAFAEAIAAQAHAAAIgFQAIgEAEgIIAAgSIgTAAQgKABgIAFg");
	this.shape_891.setTransform(287.6,385.4);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgIAGgEQAFgEAIAAIAEAAIACABIgBAIIgHAAQgJAAgDAFQgGAFgCAIIAAA4g");
	this.shape_892.setTransform(281.2,385.3);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#000000").s().p("AgWAfQgLgMAAgRIAAgCQAAgSALgMQAKgMANAAQAPAAAJAJQAJALAAAQIAAAGIg6AAIAAACQAAAOAIAKQAHAJALAAQAJAAAGgCQAGgDAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgMgAgPgaQgHAIgBAMIAvAAIAAgDQAAgKgGgIQgHgHgKAAQgJAAgHAIg");
	this.shape_893.setTransform(274,385.4);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#000000").s().p("AgCAvQgFgFAAgMIAAg1IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA1QAAAIADAEQADADAFAAIAJgBIABAHIgFABIgHABQgJAAgDgGg");
	this.shape_894.setTransform(267.1,384.4);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#000000").s().p("AgZAkQgHgGAAgLQAAgMAKgHQALgFAOAAIASAAIAAgKQAAgJgFgFQgGgFgKAAQgIAAgGAEQgHAGABAGIgKAAIAAAAQAAgJAJgHQAJgIAMAAQAOAAAIAHQAJAHAAANIAAAnIACASIgKAAIgBgIIgBgGQgEAHgHADQgJAFgHAAQgNAAgGgHgAgPAGQgIAGAAAHQAAAHAFAEQAEAFAJAAQAHAAAJgFQAHgFADgHIAAgSIgSAAQgKAAgIAGg");
	this.shape_895.setTransform(256.3,385.4);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_896.setTransform(250.4,383.6);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_897.setTransform(246.8,383.6);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#000000").s().p("AgXAgQgKgMAAgSIAAgDQAAgSAKgLQALgMAMAAQAQAAAJAJQAJALAAAQIAAAGIg6AAIAAACQAAAOAIAJQAHAKALAAQAJAAAFgDQAHgCAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgLgLgAgPgaQgHAIgBAMIAvAAIAAgDQAAgLgGgHQgGgHgMAAQgIAAgHAIg");
	this.shape_898.setTransform(240.9,385.4);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#000000").s().p("AgXAyQgJgLAAgUIAAgBQAAgTAJgLQAIgMAPAAQAHAAAGADQAGAEAFAHIAAgyIAJAAIAAB3IgIAAIgBgMQgEAHgGADQgHAEgHAAQgPAAgIgLgAgRgGQgGAHAAARIAAACQAAAPAGAJQAHAJAKAAQAIAAAGgEQAFgDAFgIIAAgmQgDgHgGgFQgGgEgJAAQgLAAgGAKg");
	this.shape_899.setTransform(232.2,383.6);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#000000").s().p("AgWAfQgLgLAAgSIAAgCQAAgSALgMQAKgMANAAQAPAAAJAJQAJAKAAAQIAAAHIg6AAIAAACQAAAOAIAKQAIAJAKAAQAKAAAFgDQAGgCAEgEIAEAGQgFAFgHADQgHADgKAAQgOAAgKgMgAgPgaQgHAIgBALIAvAAIAAgBQAAgLgGgIQgHgHgKAAQgJAAgHAIg");
	this.shape_900.setTransform(220,385.4);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#000000").s().p("AAWAqIAAgxQAAgOgFgGQgFgGgKAAQgJAAgFAFQgGAEgDAJIAAA5IgKAAIAAhSIAJAAIAAAPQAFgIAGgEQAHgEAIAAQAOAAAGAIQAIAJAAARIAAAxg");
	this.shape_901.setTransform(211.5,385.3);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#000000").s().p("AgDA8IAAhSIAHAAIAABSgAgDguIAAgNIAHAAIAAANg");
	this.shape_902.setTransform(205.2,383.6);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#000000").s().p("AAxAqIAAgvQgBgQgFgGQgFgGgKAAQgLAAgGAGQgGAHgBALIAAAzIgHAAIAAgvQAAgPgGgHQgFgGgKAAQgLAAgFAFQgFAEgDAJIAAA5IgJAAIAAhSIAIAAIABAOQADgHAIgEQAGgEAKAAQAKAAAGAEQAFAFACAKQADgIAIgGQAHgFAKAAQANAAAIAJQAHAJAAASIAAAvg");
	this.shape_903.setTransform(196.4,385.3);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#000000").s().p("AgSAqIAAhSIAIAAIABAOIAAABQADgIAGgEQAFgEAIAAIAEAAIACABIgBAIIgHAAQgJAAgDAFQgGAFgCAIIAAA4g");
	this.shape_904.setTransform(187.2,385.3);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#000000").s().p("AgWAgQgLgNAAgRIAAgCQAAgTAKgLQALgMANAAQAPAAAJAKQAJAKAAAQIAAAGIg6AAIAAACQAAAOAIAKQAHAJALAAQAJAAAGgDQAGgCAEgEIAEAGQgEAFgIADQgHADgKAAQgOAAgKgLgAgPgaQgHAIgBAMIAvAAIAAgDQAAgLgGgHQgHgHgKAAQgJAAgHAIg");
	this.shape_905.setTransform(179.9,385.4);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#000000").s().p("AgCAvQgFgFAAgNIAAg0IgOAAIAAgIIAOAAIAAgVIAIAAIAAAVIASAAIAAAIIgSAAIAAA0QAAAJADADQADAEAFAAIAJgBIABAHIgFABIgHABQgJAAgDgGg");
	this.shape_906.setTransform(173.1,384.4);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#000000").s().p("AgDA8IAAh3IAHAAIAAB3g");
	this.shape_907.setTransform(164.8,383.6);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#000000").s().p("AgaAkQgGgGAAgLQAAgMAKgGQAKgFAPAAIASAAIAAgLQAAgJgFgFQgFgFgLAAQgHAAgIAFQgGAFAAAHIgIAAIAAgBQgBgJAJgHQAJgIAMAAQAOAAAIAHQAJAHAAANIAAAwIACAJIgKAAIgBgIIgBgGQgEAHgIAEQgIAEgHAAQgNAAgHgHgAgPAGQgIAFAAAJQAAAGAFAEQAEAFAJAAQAHAAAIgFQAJgFACgHIAAgRIgSAAQgKAAgIAFg");
	this.shape_908.setTransform(158.7,385.4);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#000000").s().p("AgKAsIAAgVIAVAAIAAAVgAgKgWIAAgVIAVAAIAAAVg");
	this.shape_909.setTransform(148.3,385.2);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#000000").s().p("AgZAgQgLgNAAgRIAAgCQAAgSALgMQALgMAOAAQARAAAKAKQAJALAAARIAAAKIgwAAIAAAAQAAAJAFAFQAFAGAHAAQAHAAAGgCIALgFIAFAOQgGAFgHACQgIADgKAAQgQAAgMgLgAgIgUQgDAGgBAHIAaAAIAAgCQAAgIgEgEQgCgDgIAAQgDgBgFAFg");
	this.shape_910.setTransform(141.9,385.4);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#000000").s().p("AANAqIAAgyQAAgIgDgEQgEgEgGAAIgHACQgDACgDADIAAA7IgWAAIAAhSIAVAAIABAMQAEgGAHgEQADgDAIAAQAMAAAIAIQAHAIAAARIAAAyg");
	this.shape_911.setTransform(133.2,385.3);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#000000").s().p("AgcAfQgKgMAAgSIAAgBQAAgSAKgMQALgMARAAQASAAALAMQAKAMAAASIAAABQAAASgKAMQgLAMgSAAQgRAAgLgMgAgLgRQgFAGAAALIAAAAQAAAMAEAHQAFAHAHAAQAIAAAEgHQAEgGAAgNIAAAAQAAgMgEgFQgDgIgJAAQgIAAgDAIg");
	this.shape_912.setTransform(124.2,385.4);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#000000").s().p("AgYAjQgKgIAAgMIAAAAIAVAAQAAAGAFAEQADACAFABQAGgBAEgCQADgCAAgEQAAgFgEgCQgDgCgIgDQgPgDgHgEQgIgGAAgKQAAgLAJgHQAKgIANAAQAQAAAJAIQAJAHAAAMIAAAAIgWAAQAAgFgDgEQgDgDgGAAQgEAAgDADQgDADAAAEQAAAEADACQAEADAIABQAOADAJAFQAHAGAAALQAAAKgKAIQgJAHgQAAQgPAAgJgIg");
	this.shape_913.setTransform(111.3,385.4);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#000000").s().p("AgcAiQgHgIAAgTIAAgwIAWAAIAAAxQAAAJAEAEQADAEAGAAQADAAAEgCQAEgCACgDIAAg7IAXAAIAABSIgTAAIgCgMQgEAGgGAEQgFADgHAAQgNAAgIgIg");
	this.shape_914.setTransform(102.8,385.5);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#000000").s().p("AgZAfQgKgMAAgSIAAgBQAAgSAKgMQAKgMARAAQAQAAAJAJQAJAIAAAPIAAABIgVAAQAAgHgDgEQgEgEgGAAQgHAAgEAGQgDAHAAALIAAABQAAALADAHQAEAGAHAAQAGAAAEgDQADgDAAgHIAVAAIAAABQAAAMgJAKQgLAIgOAAQgRAAgKgMg");
	this.shape_915.setTransform(90,385.4);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#000000").s().p("AANAqIAAgyQAAgJgDgDQgDgEgHAAIgHACIgFAFIAAA7IgXAAIAAhSIAVAAIABAMQAEgGAGgEQAEgDAIAAQANAAAHAIQAHAHAAASIAAAyg");
	this.shape_916.setTransform(81.4,385.3);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#000000").s().p("AgcAfQgKgMAAgSIAAgBQAAgSAKgMQALgMARAAQASAAAKAMQALAMAAASIAAABQAAASgLAMQgKAMgSAAQgRAAgLgMgAgMgRQgEAFAAAMIAAAAQAAAMAEAGQAFAIAHgBQAIABAFgIQADgHAAgLIAAAAQAAgLgEgGQgEgIgIAAQgIAAgEAIg");
	this.shape_917.setTransform(72.4,385.4);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#000000").s().p("AgeAtQgNgOAAgVIAAgUQAAgUAMgOQANgMASgBQAVABALAKQANAKgBATIAAABIgWAAQAAgLgGgGQgFgGgLAAQgIAAgGAIQgGAIAAANIAAAUQAAAOAGAIQAGAIAJAAQAKAAAGgGQAFgGAAgKIAWAAIAAAAQAAASgLALQgLAKgVABQgSgBgNgMg");
	this.shape_918.setTransform(62.9,384);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#D22040").s().p("AgpA9QgLgLADgTIAAAAIAcgBQgCAKAEAEQAEAGAHAAQAIAAAEgIQAGgHABgLQADgMgEgIQgDgFgHAAQgHAAgEABQgEADgDAFIgZgCIAVhNIBIAAIgDAXIgyAAIgJAhIAKgFQACgCAHAAQATAAAJANQAIAKgDAXQgEAVgNANQgOAOgUAAQgRAAgNgLg");
	this.shape_919.setTransform(108.8,344.5);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#D22040").s().p("AgkAoQgKgPADgXIABgCQAEgYAOgPQAPgOASAAQATAAAKAMQAJAPgEAUIgCAOIg4AAQgBAMAEAGQAFAGAHABQAHgBAIgBIAOgGIAEARQgGAGgLADQgLADgJABQgUAAgMgPgAgEgaQgFAHgDAJIABABIAcAAIAAgDQABgJgCgFQgDgGgIAAQgFAAgEAGg");
	this.shape_920.setTransform(93.4,346.2);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#D22040").s().p("AgkArQgKgLACgNIABAAIAZAAQAAAJADADQAEAEAIAAQAFgBADgDQAFgCABgGQABgFgEgDQgDgDgJgDQgRgEgIgGQgHgGABgNQADgPAMgJQAMgJAQgBQASABALAJQAKAJgDAPIAAABIgbAAQABgIgDgDQgDgEgHAAQgFAAgCAEQgFADAAAFQgBAFADADQAEADAIADQARADAJAGQAHAHgCAOQgDAOgMAJQgNAJgRABQgSAAgLgMg");
	this.shape_921.setTransform(83.3,346.2);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#D22040").s().p("AgoAtQgIgIADgPQADgPANgHQAMgIAUAAIANAAIACgIQABgJgCgEQgDgDgHgBQgGABgCADQgDADgCAGIgbAAIAAgBQADgOANgJQANgJARAAQARAAAKAJQAKAKgEASIgJApIgCAPIABAMIgcAAIgBgMQgFAFgGAGQgHADgJAAQgNAAgHgJgAgKALQgFAEgCAHQgBAFADADQACADAFAAQAGAAADgCIAIgHIAEgSIgNAAQgFAAgFAFg");
	this.shape_922.setTransform(73.3,346.2);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#D22040").s().p("Ag7BGIAdiLIBaAAIgFAWIg9AAIgIAmIA0AAIgEAUIg1AAIgLA7g");
	this.shape_923.setTransform(64.2,344.4);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f().s("#0C5EA5").ss(6.2).p("EBGZAbLMiMxAAAQiDAAhdhdQhdhdAAiDMAAAgsbQAAiDBdhcQBdhdCDAAMCMxAAAQCEAABdBdQBcBcAACDMAAAAsbQAACDhcBdQhdBdiEAAg");
	this.shape_924.setTransform(512,416);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#FFFFFF").s().p("EhGYAbLQiDAAhdheQhdhcAAiDMAAAgsaQAAiEBdhdQBdhcCDAAMCMxAAAQCEAABdBcQBcBdAACEMAAAAsaQAACDhcBcQhdBeiEAAg");
	this.shape_925.setTransform(512,416);

	this.popC = new lib.popC();
	this.popC.setTransform(512,409.5);
	this.popC.alpha = 0;
	this.popC._off = true;

	this.instance = new lib.popD();
	this.instance.setTransform(512,443);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.popA}]},104).to({state:[{t:this.popA}]},5).to({state:[]},1).to({state:[{t:this.popB1}]},9).to({state:[{t:this.popB1}]},5).to({state:[]},1).to({state:[{t:this.popB2}]},4).to({state:[]},1).to({state:[{t:this.popB3}]},4).to({state:[]},1).to({state:[{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261,p:{x:165.3,y:417}},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254,p:{x:219,y:417}},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249,p:{x:259,y:418.7}},{t:this.shape_248},{t:this.shape_247,p:{x:274.2,y:418.7}},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244,p:{x:297.7,y:417}},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237,p:{x:356.4,y:417}},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230,p:{x:411.3,y:417}},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224,p:{x:461.7,y:417}},{t:this.shape_223,p:{x:465.3,y:417}},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216,p:{x:517.5,y:417}},{t:this.shape_215},{t:this.shape_214,p:{x:533.5,y:417}},{t:this.shape_213,p:{x:546.2,y:418.7}},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210,p:{x:572.1,y:417}},{t:this.shape_209},{t:this.shape_208,p:{x:583.9,y:417}},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197,p:{x:675.7,y:417}},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189,p:{x:738.9,y:417}},{t:this.shape_188,p:{x:742.5,y:417}},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185,p:{x:765.9,y:417}},{t:this.shape_184},{t:this.shape_183,p:{x:777.6,y:417}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180,p:{x:800.9,y:417}},{t:this.shape_179,p:{x:807.3,y:417}},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176,p:{x:832.6,y:417}},{t:this.shape_175,p:{x:836.3,y:417}},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169,p:{x:888.6,y:417}},{t:this.shape_168},{t:this.shape_167,p:{x:904.9,y:417}},{t:this.shape_166},{t:this.shape_165,p:{x:913.8,y:417}},{t:this.shape_164,p:{x:920,y:418.7}},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160,p:{x:947.4,y:423.3}},{t:this.shape_159,p:{x:954.8,y:417}},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155,p:{x:76.6,y:436}},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146,p:{x:145.7,y:436}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136,p:{x:232.6,y:437.9}},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128,p:{x:290.2,y:437.9}},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124,p:{x:324.3,y:436}},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116,p:{x:393.1,y:436}},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109,p:{x:455.4,y:436}},{t:this.shape_108,p:{x:459,y:436}},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105,p:{x:483.5,y:436}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100,p:{x:521.7,y:436}},{t:this.shape_99},{t:this.shape_98,p:{x:534.2,y:436}},{t:this.shape_97,p:{x:537.8,y:436}},{t:this.shape_96,p:{x:541.4,y:436}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88,p:{x:596.8,y:436}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82,p:{x:644,y:437.9}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77,p:{x:686,y:441.4}},{t:this.shape_76},{t:this.shape_75,p:{x:703.5,y:436}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70,p:{x:743.9,y:436}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48,p:{x:940.8,y:436}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42,p:{x:68.4,y:455.1}},{t:this.shape_41},{t:this.shape_40,p:{x:81.3,y:455.1}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{x:101.1,y:455.1}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32,p:{x:135.1,y:455.1}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:190,y:455.1}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{x:242.7,y:455.1}},{t:this.shape_18,p:{x:246.3,y:455.1}},{t:this.shape_17},{t:this.shape_16,p:{x:258.8,y:460.5}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{y:319.4}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[]},1).to({state:[{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_261,p:{x:96.2,y:383.6}},{t:this.shape_914},{t:this.shape_913},{t:this.shape_254,p:{x:117.6,y:383.6}},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_247,p:{x:251.2,y:442.5}},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_249,p:{x:299.1,y:442.5}},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_213,p:{x:391.3,y:442.5}},{t:this.shape_662},{t:this.shape_180,p:{x:410.7,y:440.8}},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_160,p:{x:932.6,y:447}},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_164,p:{x:267.5,y:461.5}},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_128,p:{x:452.5,y:461.6}},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_82,p:{x:487,y:461.6}},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_136,p:{x:573.6,y:461.6}},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_77,p:{x:748.6,y:465.2}},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_244,p:{x:255.9,y:497.9}},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_224,p:{x:416.5,y:497.9}},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_237,p:{x:450.9,y:497.9}},{t:this.shape_464},{t:this.shape_223,p:{x:466.9,y:497.9}},{t:this.shape_189,p:{x:470.5,y:497.9}},{t:this.shape_463},{t:this.shape_462},{t:this.shape_230,p:{x:495.4,y:497.9}},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_216,p:{x:566.5,y:497.9}},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_188,p:{x:602.3,y:497.9}},{t:this.shape_176,p:{x:605.9,y:497.9}},{t:this.shape_449},{t:this.shape_448},{t:this.shape_214,p:{x:630.8,y:497.9}},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_210,p:{x:669,y:497.9}},{t:this.shape_443},{t:this.shape_208,p:{x:681.4,y:497.9}},{t:this.shape_175,p:{x:685,y:497.9}},{t:this.shape_197,p:{x:688.6,y:497.9}},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_185,p:{x:718.8,y:497.9}},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_159,p:{x:795.9,y:497.9}},{t:this.shape_109,p:{x:799.5,y:497.9}},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_183,p:{x:837.2,y:497.9}},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_179,p:{x:920.2,y:497.9}},{t:this.shape_418},{t:this.shape_169,p:{x:932.6,y:497.9}},{t:this.shape_108,p:{x:936.2,y:497.9}},{t:this.shape_167,p:{x:939.8,y:497.9}},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_165,p:{x:135.4,y:517}},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_155,p:{x:168,y:517}},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_146,p:{x:193.9,y:517}},{t:this.shape_399},{t:this.shape_124,p:{x:210.2,y:517}},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_97,p:{x:352.4,y:517}},{t:this.shape_382},{t:this.shape_116,p:{x:368.1,y:517}},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_105,p:{x:430.4,y:517}},{t:this.shape_374},{t:this.shape_373},{t:this.shape_100,p:{x:451.7,y:517}},{t:this.shape_372},{t:this.shape_371},{t:this.shape_75,p:{x:476,y:517}},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_98,p:{x:520.7,y:517}},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_96,p:{x:574.6,y:517}},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_37,p:{x:661.9,y:517}},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_88,p:{x:686.4,y:517}},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_19,p:{x:727.9,y:517}},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_70,p:{x:792.3,y:517}},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_48,p:{x:834.5,y:517}},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_42,p:{x:900.5,y:517}},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_40,p:{x:956.6,y:517}},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_32,p:{x:77.3,y:536}},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_26,p:{x:186,y:536}},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_18,p:{x:247.1,y:536}},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_16,p:{x:275.1,y:541.4}},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_7,p:{y:286}},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282}]},4).to({state:[]},1).to({state:[{t:this.popC}]},4).to({state:[{t:this.popC}]},5).to({state:[]},1).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},5).to({state:[]},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.popA).wait(104).to({_off:false},0).to({alpha:1},5).to({_off:true},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.popB1).wait(119).to({_off:false},0).to({alpha:1},5).to({_off:true},1).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.popC).wait(149).to({_off:false},0).to({alpha:1},5).to({_off:true},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(159).to({_off:false},0).to({alpha:1},5).to({_off:true},1).wait(15));

	// merck home page
	this.btn_merck_home = new lib.btnmerckhome();
	this.btn_merck_home.setTransform(819.5,73.3);
	this.btn_merck_home.alpha = 0.012;
	this.btn_merck_home._off = true;
	new cjs.ButtonHelper(this.btn_merck_home, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_merck_home).wait(95).to({_off:false},0).to({_off:true},1).wait(84));

	// btn E - entra
	this.btn_entra = new lib.btn_entra();
	this.btn_entra.setTransform(336.9,661);
	this.btn_entra.alpha = 0;
	this.btn_entra._off = true;
	new cjs.ButtonHelper(this.btn_entra, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_entra).wait(74).to({_off:false},0).to({alpha:1},21).to({_off:true},1).wait(84));

	// btn D
	this.btn_D = new lib.btn_D();
	this.btn_D.setTransform(200.3,499.5);
	this.btn_D.alpha = 0;
	this.btn_D._off = true;
	new cjs.ButtonHelper(this.btn_D, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_D).wait(59).to({_off:false},0).to({alpha:1},10).wait(26).to({_off:true},1).wait(84));

	// btn C
	this.btn_C = new lib.btn_C();
	this.btn_C.setTransform(319,436.2);
	this.btn_C.alpha = 0;
	this.btn_C._off = true;
	new cjs.ButtonHelper(this.btn_C, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_C).wait(49).to({_off:false},0).to({alpha:1},10).wait(36).to({_off:true},1).wait(84));

	// btn B
	this.btn_B = new lib.btn_B();
	this.btn_B.setTransform(303.6,366.6);
	this.btn_B.alpha = 0;
	this.btn_B._off = true;
	new cjs.ButtonHelper(this.btn_B, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_B).wait(39).to({_off:false},0).to({alpha:1},10).wait(46).to({_off:true},1).wait(84));

	// btn A
	this.btn_A = new lib.btn_A();
	this.btn_A.setTransform(234.2,300.5);
	this.btn_A.alpha = 0;
	this.btn_A._off = true;
	new cjs.ButtonHelper(this.btn_A, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_A).wait(28).to({_off:false},0).to({alpha:1},11).wait(56).to({_off:true},1).wait(84));

	// semaforo
	this.instance_1 = new lib.semaforo();
	this.instance_1.setTransform(811.5,483);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({alpha:1},50).wait(121));

	// head
	this.instance_2 = new lib.head();
	this.instance_2.setTransform(7,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(519,391,1010,186);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
