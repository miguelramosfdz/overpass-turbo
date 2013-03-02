{
  "nav.run": "Ausführen",
  "nav.run_tt": "Diese Query auf der Overpass API ausführen",
  "nav.share": "Teilen",
  "nav.share_tt": "Einen Permalink für diese Query erstellen.",
  "nav.export": "Export",
  "nav.export_tt": "Verschiedene Export Tools",
  "nav.save": "Speichern",
  "nav.save_tt": "Diese Query speichern",
  "nav.load": "Laden",
  "nav.load_tt": "Eine Query oder ein Beispiel laden",
  "nav.settings": "Einstellungen",
  "nav.settings_tt": "Verschiedene Einstellungen",
  "nav.help": "Hilfe",
  "nav.help_tt": "Hilfe, Infos und Lizenzen",

  "tabs.map": "Karte",
  "tabs.map_tt": "Kartenansicht",
  "tabs.data": "Daten",
  "tabs.data_tt": "Datenansicht",

  "map_controlls.zoom_to_data": "auf die Daten zoomen",
  "map_controlls.localize_user": "zum Benutzer-Standort gehen",
  "map_controlls.select_bbox": "bbox manuell selektieren",
  "map_controlls.toggle_wide_map": "Karte vergrößern/verkleinern",
  "map_controlls.clear_data": "Datenoverlay leeren",

  "settings.title": "Einstellungen",

  "settings.section.general": "Allgemeines",
  "settings.ui_lang": "UI Sprache",
  "settings.ui_lang_expl": "Neustart bei Änderung notwendig",
  "settings.server": "Server",
  "settings.force_simple_cors": "Einfache CORS-Anfragen erzwingen",
  "settings.force_simple_cors_expl": "wenn der Server komplexe CORS Anfragen nicht unterstützt.",
  "settings.start_at_user_location": "Am Benutzer-Standort starten",
  "settings.start_at_user_location_expl": "HTML5 Geolocation",
  "settings.disable_autorepair": "Warnung bei nicht-sichtbaren Daten (Auto-Reparatur) abschalten.",

  "settings.section.editor": "Editor",
  "settings.enable_rich_editor": "CodeMirror aktivieren.",
  "settings.enable_rich_editor_expl": "auf mobilen Geräten deaktivieren; Änderung wirkt erst nach App-Neustart",
  "settings.editor_with": "Breite des Editors",
  "settings.editor_width_expl": "z.B. \"400px\", leer lassen für Standardwerte",

  "settings.section.settings.map": "Karte",
  "settings.tile_server": "Tile Server",
  "settings.tile_opacity": "Deckkraft der Tiles",
  "settings.tile_opacity_expl": "Transparenz des Kartenhintergrunds: 0=transparent - 1=sichtbar",
  "settings.show_crosshairs": "Fadenkreuz in der Kartenmitte anzeigen",
  "settings.disable_poiomatic": "Kleine Features nicht wie POIs darstellen",
  "settings.show_data_stats": "Statistik über die geladenen und angezeigten Daten anzeigen",

  "settings.section.sharing": "Teilen",
  "settings.include_map_state": "Permalinks beinhalten Informationen zum Kartenausschnitt",
  "settings.compression": "Kompression der Permalinks",

  "settings.section.export": "Export",
  "settings.export_image_scale": "Maßstab in exportierten Bildern anzeigen",
  "settings.export_image_attr": "Quellenangabe in exportierten Bildern anzeigen",

  "save.title": "Speichern",
  "save.enter_name": "Name für diese Query:",

  "load.title": "Laden",
  "load.delete_query": "Diese Query löschen",
  "load.saved_queries": "Gespeicherte Queries",
  "load.examples": "Beispiele",
  "load.templates": "Vorlagen",
  "load.no_saved_query": "Noch wurde keine Query gespeichert.",

  "export.title": "Exportieren",

  "export.section.map": "Karte",
  "export.as_png": "Als <a id=\"export-image\" href=\"\" onclick=\"ide.onExportImageClick(); $(this).parents('.ui-dialog-content').dialog('close'); return false;\">png image</a>",
  "export.as_interactive_map": "Als <a id=\"export-interactive-map\" href=\"\">interaktive Karte</a>",
  "export.as_openlayers_map": "Als <a id=\"export-overpass-openlayers\" href=\"\">OpenLayers Karte<span class=\"ui-icon ui-icon-extlink\" style=\"display:inline-block;\"></a>",
  "export.openlayers_map_expl": "nur für Abfragen, die vollständiges OSM-XML zurückgeben",
  "export.current_map_view": "Aktuelle <a id=\"export-map-state\" href=\"\">Kartenansicht</a>",
  "export.map_view_expl": "bbox, zentrum, etc.",

  "export.section.data": "Daten",
  "export.raw_interpreter": "Direktlink zum <a id=\"export-overpass-api\" href=\"\">API Interpreter<span class=\"ui-icon ui-icon-extlink\" style=\"display:inline-block;\"></span></a> (Rohdaten)",
  "export.as_geoJSON": "Als <a id=\"export-geoJSON\" href=\"\">GeoJSON</a>",
  
  "export.section.query": "Query",
  "export.as_text": "Als <a id=\"export-text\" href=\"\" download=\"query.txt\">Text</a>",
  "export.to_xml": "Nach <a id=\"export-convert-xml\" href=\"\">XML<span class=\"ui-icon ui-icon-extlink\" style=\"display:inline-block;\"></span></a> konvertieren",
  "export.to_ql": "Nach <a id=\"export-convert-ql\" href=\"\">OverpassQL<span class=\"ui-icon ui-icon-extlink\" style=\"display:inline-block;\"></span></a> konvertieren (<a id=\"export-convert-compact\" href=\"\">kompakte Variante<span class=\"ui-icon ui-icon-extlink\" style=\"display:inline-block;\"></span></a>)",
  "export.remote_control": "In <a id=\"export-josm\" href=\"\">JOSM</a> laden",
  "export.remote_control_expl": "nur für Abfragen, die gültiges OSM-XML mit Metadaten liefern",

  "export.geoJSON.title": "Export - GeoJSON",
  "export.geoJSON.expl": "Die aktuell angezeigen Daten im GeoJSON Format:",
  "export.geoJSON.no_data": "Keine GeoJSON-Daten verfügbar. Bitte zuerst eine Query ausführen!",

  "export.map_view.title": "Aktueller Kartenausschnitt",
  "export.map_view.permalink_osm": "<h4>Permalink</h4> nach",
  "export.map_view.center": "Kartenmitte",
  "export.map_view.center_expl": "lat/lon",
  "export.map_view.bounds": "Kartengrenzen",
  "export.map_view.bounds_selection": "Kartengrenzen (manuell gewählte Box)",
  "export.map_view.bounds_expl": "Süd/West Nord/Ost",
  "export.map_view.zoom": "Zoom",

  "export.image.title": "Export - PNG",
  "export.image.alt": "die exportierte Karte",
  "export.image.download": "Download",
  "export.image.attribution_missing": "Bitte stellen Sie auf jeden Fall sicher, eine korrekte Quellenangabe zu verwenden, wenn Sie dieses Bild weitergeben!",

  "share.title": "Teilen",
  "share.header": "Permalink",
  "share.copy_this_link": "Kopiere diesen <a href=\"\" id=\"share_link_a\">Link</a>, um die aktuelle Query zu teilen:",
  "share.options": "Optionen",
  "share.incl_map_state": "Aktuelle Kartenansicht mitgeben",
  "share.run_immediately": "Die geteilte Abfrage sofort beim öffnen ausführen",

  "help.title": "Hilfe",

  "help.section.introduction": "Einstieg",
  "help.intro.1": "<a href=\"http://wiki.openstreetmap.org/wiki/Overpass_turbo\">overpass turbo</a> ist ein graphisches Userinterface für die <a href=\"http://overpass-api.de\">Overpass API</a>. Die resultierenden <a href=\"http://www.openstreetmap.org\">OpenStreetMap</a>-Daten werden interaktiv auf einer Karte dargestellt.",
  "help.intro.2": "Es ist möglich, sowohl XML als auch OverpassQL <a href=\"http://wiki.openstreetmap.org/wiki/Overpass_API/Language_Guide\">Abfragen</a> zu stellen. Das Ergebnis (XML oder JSON) wird geparst und (wenn möglich) auf der Karte dargestellt. Mehr Informationen über <i>overpass turbo</i> gibt es im <a href=\"http://wiki.openstreetmap.org/wiki/Overpass_turbo\">OSM-Wiki</a>.",
  "help.intro.shortcuts": "Die folgenden praktischen Kürzel (shortcuts) können direkt in den Abfragen verwendet werden:",
  "help.intro.shortcuts.bbox": "Die Bounding-Box-Koordinaten der aktuellen Kartenansicht",
  "help.intro.shortcuts.center": "Die Zentrums-Koordinaten der Karte",
  "help.intro.shortcuts.custom": "Eigene Abkürzungen können einfach selbst definiert werden: <i>{{shortcut=wert}}</i>.",

  "help.section.ide": "IDE",
  "help.ide.share.title": "Teilen",
  "help.ide.share.expl": "Es ist möglich, sich einen Permalink erstellen zu lassen, der die Query beinhaltet, an der gerade gearbeitet wird. Dieser Link kann dann z.B. an Freund verteilt werden. (Beachte, dass jede Person an seiner eigenen Kopie der Query arbeiten wird.)",
  "help.ide.save_load.title": "Speichern / Laden",
  "help.ide.save_load.expl": "Man kann seine Queries auch für später abspeichern. Zu Beginn sind bereits eine Auswahl an Beispielen geladen. Schau sie dir einfach mal an!",
  "help.ide.keyboard.title": "Tastaturkürzel",
  "help.ide.keyboard.run": "Die aktuelle Query ausführen",
  "help.ide.keyboard.load_save": "Laden (öffnen) bzw. Speichern einer Query",
  "help.ide.keyboard.help": "Diesen Hilfe-Dialog öffnen",

  "help.section.key": "Legende",
  "help.key.example": "einige Karten-Features",
  "help.key.description": "Wege werden als dicke blaue Linien angezeigt, Polygone als gelbe Flächen mit dünner blauer Umrandung, POIs als gelbe Kreise mit dünner blauer Umrandung. Kreise mit rötlicher Füllung stehen für Wege oder Polygone, die für die Anzeige zu klein wären. Pinke Linien bedeuten, dass das jeweilige Element in mindestens einer Relation Mitglied ist. Gestrichelt werden Wege oder Polygone angezeigt, deren Geometrie nicht vollständig geladen wurde.",

  "help.section.export": "Export",
  "help.export": "Das <i>Export</i>-Tool beinhaltet verschiedene Export-Möglichkeiten.<br />Optionen mit diesem Symbol:<span class=\"ui-icon ui-icon-extlink\" style=\"display:inline-block;\"></span> führen auf externe (online) Tools.",
  "help.export.map.title": "Karte",
  "help.export.map.expl": "Die aktuelle Kartenansicht (incl. Daten) als statisches PNG, oder als interaktive Karte, usw.",
  "help.export.query_data.title": "Query / Daten",
  "help.export.query_data.expl": "Hier kann mit der Query oder den Daten einiges angestellt werden. Z.B. das Konvertieren zwischen den beiden Query-Sprachen, der Daten-Export als GeoJSON oder (sehr praktisch!) das Senden der Query an JOSM.",

  "help.section.about": "Über",
  "help.about.maintained": "<i>overpass turbo</i> (aka overpass-ide) wird von Martin Raifer (tyr.asd at gmail.com) betrieben und programmiert.",
  "help.about.feedback.title": "Bugs, Kommentare, Anregungen",
  "help.about.feedback": "Über Feedback jeglicher Art bin ich immer froh :). Bug-Meldungen und Feature-Anfragen gehen am Besten an den <a href=\"https://github.com/tyrasd/overpass-ide/issues\">issue tracker</a> auf github. Allgemeine Kommentare z.B. auf die <a href=\"http://wiki.openstreetmap.org/wiki/Talk:Overpass_turbo\">Diskussionsseite</a> im OSM-Wiki.",
  "help.about.source.title": "Sourcecode",
  "help.about.source": "Der <a href=\"https://github.com/tyrasd/overpass-ide\">Sourcecode</a> dieser Applikation ist unter der MIT <a href=\"LICENSE\">Lizenz</a> freigegeben.",

  "help.section.attribution": "Quellen, Lizenzen",
  "help.attr.data_sources": "Datenquellen",
  "help.attr.data": "Daten &copy; <a href=\"http://openstreetmap.org/\">OpenStreetMap</a> Mitwirkende, <span style=\"font-size:smaller;\"><a href=\"http://opendatacommons.org/licenses/odbl/1-0/\">ODbL</a> (<a href=\"http://www.openstreetmap.org/copyright\">Bestimmungen</a>)</span>",
  "help.attr.mining": "Datenfilterung über",
  "help.attr.tiles": "Karten-Tiles &copy; <a href=\"http://openstreetmap.org/\">OpenStreetMap</a> Mitwirkende, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\" style=\"font-size:smaller;\">CC-BY-SA</a>",
  "help.attr.search": "Suche über",
  "help.attr.software": "Software & Bibliotheken",
  "help.attr.leaflet": "Karte powered by",
  "help.attr.codemirror": "Editor powered by",
  "help.attr.jquery": "Außerdem: ",
  "help.attr.other_libs": "Weitere Bibliotheken:",


  "dialog.dismiss": "OK, verstanden",
  "dialog.cancel": "Abbrechen",
  "dialog.save": "Speichern",
  "dialog.delete": "Löschen",
  "dialog.close": "Schließen",
  "dialog.done": "Erledigt",
  "dialog.abort": "Abbrechen",
  "dialog.repair_query": "Query reparieren",
  "dialog.continue_anyway": "Trotzdem weitermachen",
  "dialog.show_data": "Daten anzeigen",

  "dialog.delete_query.title": "Query löschen?",
  "dialog.delete_query.expl": "Soll die folgende Query wirklich gelöscht werden",

  "error.query.title": "Query Fehler",
  "error.query.expl": "Ein Fehler ist während der Ausführung der Query aufgetreten. Folgendes hat die API als Fehlermeldung zurückgegeben:",
  "error.ajax.title": "Ajax Fehler",
  "error.ajax.expl": "Ein Fehler ist beim Ausführen der Query aufgetreten!",
  "error.remote.title": "Remote Control Fehler",
  "error.remote.incompat": "Fehler: unkompatible JOSM \"remote control\" Version",
  "error.remote.not_found": "\"remote control\" nicht gefunden. :( Wurde JOSM bereits gestartet?",

  "warning.browser.title": "Dein Browser unterstützt diese Anwendung nicht :(",
  "warning.browser.expl.1": "<p>Der aktuell verwendete Browser ist (höchtwahrscheinlich) nicht in der Lage die Anwendung (oder signifikante Teile davon) auszuführen. <small>Folgende Standards müssen unterstützt werden: <a href=\"http://en.wikipedia.org/wiki/Web_storage#localStorage\">Web Storage API</a> und <a href=\"http://en.wikipedia.org/wiki/Cross-origin_resource_sharing\">cross origin resource sharing (CORS)</a>.</small></p>",
  "warning.browser.expl.2": "<p>Möglicherweise müssen zusätzlich Cookiers und/oder \"lokale Daten\" für diese Webseite aktiviert werden (z.B. unter Firefox und Chrome).</p>",
  "warning.browser.expl.3": "<p>Bitte wechsle auf einen aktuellere Version deines Browsers oder gar einen anderen Browser! Aktuelle Versionen von <a href=\"http://www.opera.com\">Opera</a>, <a href=\"http://www.google.com/intl/de/chrome/browser/\">Chrome</a> und <a href=\"http://www.mozilla.org/de/firefox/\">Firefox</a> wurden getesten und funktionieren. Alternativ kannst du aber auch die <a href=\"http://overpass-api.de/query_form.html\">Overpass_API query form</a> benützen.</p>",

  "warning.incomplete.title": "Unvollständige Daten",
  "warning.incomplete.expl": "<p>Diese Query hat keine Nodes zurückgeliefert. In OSM werden Koordinaten nur den den Nodes gespeichert. Das heißt, dass ein Weg nicht ohne Nodes auf einer Karte angezeigt werden kann.</p><p>Wenn aber gewünscht ist, dass diese Daten auch angezeigt werden, kann <i>overpass tubo</i> dabei helfen, die Query automatisch zu vervollständigen (zu \"reparieren\"). Anderenfalls wird zur Datenansicht gewechselt.</p>",
  "warning.incomplete.not_again": "Diese Meldung nicht wieder anzeigen.",
  "warning.incomplete.remote": "<p>Diese Query wird wahrscheinlich keine gültigen XML Daten mit Metadaten liefern. Editoren wie JOSM benötigen dieses Format aber, um Bearbeitungen vornehmen zu können.</p><p><i>overpass turbo</i> kann helfen, die Query entsprechend zu korrigieren.</p>",

  "warning.share.long": "Warnung: Dieser Permalink ist recht lang. Es kann sein, dass er unter bestimmten Umständen nicht wie gewünscht funktioniert.",
  "warning.share.very_long": "Warnung: Dieser Permalink ist sehr lang. Es ist wahrscheinlich, dass er unter normalen Umständen (Browser, Webserver) nicht funktioniert. Nur unter vorbehalt verwenden!",

  "warning.huge_data.title": "Große Datenmengen",
  "warning.huge_data.expl": "<p>Diese Query liefert recht viele Daten zurück (ca. {{amount_txt}}).</p><p>Die Weiterverarbeitung dieser Daten kann möglicherweise etwas länger dauern. Soll wirklich fortgefahren werden?</p>",

  "waiter.processing_query": "Query wird bearbeitet...",
  "waiter.export_as_image": "Exportiere als Bild...",

  "data_stats.loaded": "geladen",
  "data_stats.displayed": "angezeigt",
  "data_stats.nodes": "Nodes",
  "data_stats.ways": "Ways",
  "data_stats.relations": "Relations",
  "data_stats.areas": "Areas",
  "data_stats.pois": "POIs",
  "data_stats.lines": "Linien",
  "data_stats.polygons": "Polygone",

  "map.intentianally_blank": "Diese Karte ist leer.",

  "the end": ""
}
