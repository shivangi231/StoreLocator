google.maps.__gjsload__('overlay', '\'use strict\';function AT(a){this.j=a}N(AT,S);$a(AT[I],function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&ue(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.j:null))});function jaa(){}function kaa(){var a=this.gm_props_;if(this[Xn]()){if(this[Pc]()){if(!a.Sf&&this.onAdd)this.onAdd();a.Sf=!0;this.draw()}}else{if(a.Sf)if(this[$c])this[$c]();else this[Gb]();a.Sf=!1}}function BT(a){a.gm_props_=a.gm_props_||new jaa;return a.gm_props_}function CT(a){Pj[K](this);this.ma=Q(a,kaa)}N(CT,Pj);function DT(){}\nDT[I].j=function(a){var b=a[Un](),c=BT(a),d=c.Hd;c.Hd=b;d&&(c=BT(a),(d=c.Fa)&&d[An](),(d=c.Ti)&&d[An](),a[An](),a.set("panes",null),a.set("projection",null),O(c.$,R[Ab]),c.$=null,c.pb&&(c.pb.ma(),c.pb=null),Es("Ox","-p",a));if(b){c=BT(a);d=c.pb;d||(d=c.pb=new CT(a));O(c.$,R[Ab]);var e=c.Fa=c.Fa||new Gr,f=b[D];e[q]("zoom",f);e[q]("offset",f);e[q]("center",f,"projectionCenterQ");e[q]("projection",b);e[q]("projectionTopLeft",f);e=c.Ti=c.Ti||new AT(e);e[q]("zoom",f);e[q]("offset",f);e[q]("projection",b);\ne[q]("projectionTopLeft",f);a[q]("projection",e,"outProjection");a[q]("panes",f);e=Q(d,d.Y);c.$=[R[A](a,"panes_changed",e),R[A](f,"zoom_changed",e),R[A](f,"offset_changed",e),R[A](b,"projection_changed",e),R[A](f,"projectioncenterq_changed",e),R[v](b,"forceredraw",d)];d.Y();b instanceof jh&&(Bs(b,"Ox"),Ds("Ox","-p",a,!!b.ca))}};var laa=new DT;Eh.overlay=function(a){eval(a)};bg("overlay",laa);\n')