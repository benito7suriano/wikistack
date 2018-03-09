const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () =>
  layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

    <div>
      <label for="authorName" class="col-sm-2 control-label">Author</label>
      <div class="col-sm-10">
        <input id="authorName" name="authorName" type="text" class="form-control"/>
    </div>

    <div>
      <label for="authorEmail" class="col-sm-2 control-label">Author Email</label>
      <div class="col-sm-10">
        <input id="authorEmail" name="authorEmail" type="text" class="form-control"/>
    </div>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div>
      <label for="textArea" class="col-sm-2 control-label">Text</label>
      <div class="col-sm-10">
        <input id="textArea" name="textArea" type="text" class="form-control"/>
    </div>

    <div>
      <label for="pageStatus" class="col-sm-2 control-label">Page Status</label>
      <div class="col-sm-10">
        <input id="pageStatus" name="pageStatus" type="text" class="form-control"/></div>
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
