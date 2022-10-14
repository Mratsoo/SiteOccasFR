import "./loginPage.css";

function LoginPage(){
    return(<>
    <div >
    <div class="wrapper"> 
			<div class="inner">
				<form action="">
					<h3>Registration Form</h3>
					<div class="form-group">
						<div class="form-wrapper">
							<label for="">First Name</label>
							<input type="text" class="form-control"/>
						</div>
						<div class="form-wrapper">
							<label for="">Last Name</label>
							<input type="text" class="form-control"/>
						</div>
					</div>
					<div class="form-wrapper">
						<label for="">Email</label>
						<input type="text" class="form-control"/>
					</div>
					<div class="form-wrapper">
						<label for="">Password</label>
						<input type="password" class="form-control"/>
					</div>
					<div class="form-wrapper">
						<label for="">Confirm Password</label>
						<input type="password" class="form-control"/>
					</div>
					<div class="checkbox">
						<label>
							<input type="checkbox"/> I caccept the Terms of Use &amp; Privacy Policy.
							<span class="checkmark"></span>
						</label>
					</div>
					<button type="submit" class="btn btn-dark mt-3">
                    Register
                  </button>
				</form>
			</div>
		</div>
    </div>
    </>)
}

export default LoginPage;