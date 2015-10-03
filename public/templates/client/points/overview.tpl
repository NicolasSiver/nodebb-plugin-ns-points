<div class="points-container">
    <!-- IMPORT partials/breadcrumbs.tpl -->

    <!-- BEGIN users -->
    <div class="row">
        <div class="col-md-12">
            <div class="media" component="points/top-user" data-points="{users.points}">
                <div class="avatar pull-left">
                    <a href="{relative_path}/user/{users.userslug}"><img src="{users.picture}" class="img-thumbnail"/></a>
                    <span class="rank"></span>
                </div>
                <div class="stats media-body">
                    <div class="user-info">
                        <a href="{relative_path}/user/{users.userslug}">{users.username}</a>
                        <br/>
                        <small class="numbers">Points: {users.points}</small>
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-success" role="progressbar"
                             aria-valuenow="0"
                             aria-valuemin="0"
                             aria-valuemax="100" style="width:0">
                        </div>
                    </div>
                    <div class="rank-progress"></div>
                </div>
            </div>
        </div>
    </div>
    <!-- END users -->
</div>