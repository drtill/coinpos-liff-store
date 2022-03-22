-- =======================================================
-- Create Stored Procedure Template for Azure SQL Database
-- =======================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:      <Author, , Name>
-- Create Date: <Create Date, , >
-- Description: <Description, , >
-- =============================================
CREATE PROCEDURE [Production].[sp_GetImageProductCategoryByCategoryIdList]
	@CompanyId  int,
	@AllCategoryId VARCHAR(MAX)
AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON
	DECLARE @IdTable TABLE
	(
		categoryId VARCHAR(5)
	)
	INSERT INTO @IdTable
				SELECT * FROM [dbo].[fn_cst_StringToTable](@AllCategoryId,',')
    -- Insert statements for procedure here
    SELECT prodC.CategoryId, prodC.[Image]
	FROM [Production].[ProductCategory] prodC
	INNER JOIN @IdTable idt on idt.categoryId = prodC.CategoryId
	WHERE prodC.Image IS NOT NULL
END
GO
